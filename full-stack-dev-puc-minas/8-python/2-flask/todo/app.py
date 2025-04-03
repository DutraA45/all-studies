import os
from datetime import datetime, timezone

# Imports do ORM e Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

#Imports do Flask e Bootstrap
from flask import Flask, render_template
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

# Rota index
@app.route('/')
def index():
    return render_template('index.html')