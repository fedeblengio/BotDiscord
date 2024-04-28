module.exports = {
    description: 'Repite los argumentos dados',
    run: async (message) => {
        const curseWords = ['kirchnerista', 'puto', 'gay','alberto'];
        const messageContent = message.content.toLowerCase();
        const contienePalabraProhibida = curseWords.some(palabra => messageContent.includes(palabra));
        if (contienePalabraProhibida) {
            message.delete()
            message.channel.send(`¡Cuidado con el lenguaje! <@${message.author.id}>!`);
            return true;
        } else {
            return false;
        }
    }
}