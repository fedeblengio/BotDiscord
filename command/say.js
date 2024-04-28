module.exports = {
    description: 'Repite los argumentos dados',
    run: async (message) => {
        const args = message.content.split(' ').slice(1).join(' ');
        const config = require('./config.json')
        if (args.length < 1) return message.channel.send(config.argumentError)
        message.channel.send(args)
    }
}