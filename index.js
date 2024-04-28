const { Client, Events, GatewayIntentBits } = require('discord.js')
const config = require('./config.json')
const client = new Client({
    intents: 3276799
})


client.on(Events.ClientReady, async () => {
    console.log('BOT iniciado correctamente.')
});


client.on(Events.MessageCreate, async (message) => {
    const curseWords = require(`./command/curseWords`)
    if (message.author.bot) return;
    if (!curseWords.run(message)) return;
    if (!message.content.startsWith('-')) return;
    const args = message.content.slice(1).split(' ')[0].toLowerCase();
    try {
        const command = require(`./command/${args}`);
        command.run(message)
    } catch (error) {
        console.log(`No se encontro el comando dado -${args}`, error.message)
    }
});

client.login(config.token);