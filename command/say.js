module.exports = {
    description: 'Repite los argumentos dados',
    run: async (message) => {
        const args = message.content.split(' ').slice(1).join(' ');
        if (args.length < 1) return message.channel.send('Provee un argumento valido.')
        message.channel.send(args)
    }
}