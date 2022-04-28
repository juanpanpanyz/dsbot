const {
    SlashCommandBuilder
} = require("@discordjs/builders");

const {
    Permissions
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mute")
        .setDescription("Mutea al usuario mencionado")
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Mutea al usuario mencionado')
                .addUserOption(option => option.setName("target").setDescription("User mentioned"))),
    async execute(interaction) {
        const user = interaction.options.getMember('target');
        if (user) {
        if (interaction.member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
            const rolMUTE = interaction.guild.roles.cache.get('902702640612409395')
            await user.roles.add(rolMUTE)
            interaction.reply(`<@${user.id}> fue muteado`)
        } else {
            interaction.reply('No mencionaste a ningun usuario.')
        }
    }
    },
};