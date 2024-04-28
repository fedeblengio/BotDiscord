module.exports = {
    description: 'Repite los argumentos dados',
    run: async (message) => {
        if (message.author.bot) return;
        const hello = `Hola <@${message.author.id}>! Estos son los comandos que tengo:\n!chiste\n!say`;
        message.channel.send(hello);
    }
}