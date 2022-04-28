const {
    SlashCommandBuilder,
} = require("@discordjs/builders");

const { 
  MessageEmbed
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("joao")
        .setDescription("Replies with joao"),
    async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
          .setImage('https://cdn.discordapp.com/attachments/701974012128919595/914942595526971444/2021-06-23_4.png')
        interaction.reply({ embeds: [exampleEmbed] });
    },
};