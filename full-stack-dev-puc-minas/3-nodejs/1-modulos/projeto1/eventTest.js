// Importa o módulo eventos
const events = require('events')

// Cria um gerenciado de eventos
const eventMgmt = new events.EventEmitter();
eventMgmt.on('bomdia', (data) => {
    console.log(`Recebi um bom dia de: ${data}`)
})

// Inclui um subscriber ao evento
eventMgmt.addListener('bomtarde', (data) => {
    console.log(`Aconteceu de ${data}`);
})

// Dispara o evento
eventMgmt.emit('bomdia', 'Rommel')