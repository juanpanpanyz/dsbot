const {
    SlashCommandBuilder
} = require("@discordjs/builders");

const {
    Permissions,
    Client,
    Intents,
    ClientUser
} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("bolivia")
        .setDescription("Boliviano")
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Gets info of member mentioned')
                .addUserOption(option => option.setName("target").setRequired(true).setDescription("User mentioned"))),

    async execute(interaction, client) {
      const user = interaction.options.getUser("target")

      await interaction.reply({ content: 'Comando no disponible', ephemeral: true});
      return
    }
}