const EventEmitter = require('events')
const fs = require('fs') // MÓDULO QUE TRABALHA COM OS ARQUIVOS DO SISTEMA
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    // console.log(message)
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if(err) throw err
    })
})

// emitter.emit('log', "mensagem que eu quero")

function log(message){
    emitter.emit('log', message)
}
// EXPORTANDO UMA FUNÇÃO
module.exports = log