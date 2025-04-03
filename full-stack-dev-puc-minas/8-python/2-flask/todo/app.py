import os
from datetime import datetime, timezone

# Imports do ORM e Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

#Imports do Flask e Bootstrap
from flask import Flask, render_template, request, redirect
from flask_bootstrap import Bootstrap

# instancia um objeto Flask
app = Flask(__name__)

# instancia um objeto Bootstrap
bootstrap = Bootstrap(app)

## ---------------

# Banco de dados
# Config
basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'todo.sqlite')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app,db)

# Classe de Modelo
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    def __repr__(self):
        return f"Task: #{self.id}, description: {self.description}"

## ---------------

# Rotas e funções tratadoras
@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        task = Task(request.form['description'])
        try:
            db.session.add(task)
            db.session.commit()
            return redirect('/')
        except:
            return "Houve um erro ao inserir a tarefa"
    else:
        tasks = Task.query.ordey_by(Task.date_created).all()
        return render_template('index.html', tasks=tasks)
    
# Rota para remoção de uma tarefa
@app.route('/delete/<int:id>')
def delete(id):
    task = Task.query.get_or_404(id)
    try:
        db.session.delete(task)
        db.session.commit()
        return redirect('/')
    except:
        return "Houve um problema na remoção da tarefa"
    
# Rota para atualização de uma tarefa
@app.route('/update/<int:id>', methods=['POST', 'GET'])
def update(id):
    task = Task.query.get_or_404(id)
    if request.method == 'POST':
        task.description = request.form['description']
        try:
            db.session.commit()
            return redirect('/')
        except:
            return "Houve um erro ao atualizar a tarefa"
    else:
        return render_template('update.html', task=task)