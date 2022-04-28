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
        .setName("nick")
        .setDescription("Cambiar nick del usuario mencionado o el propio")
        .addStringOption(option => option.setName('nick').setRequired(true).setDescription('Nuevo nick'))
        .addUserOption(option => option.setName("user").setDescription("Usuario mencionado")),

    async execute(interaction, client) {
        const user = interaction.options.getMember('user');
        const nick = interaction.options.getString('nick');

        if (interaction.member.permissions.has(Permissions.FLAGS.CHANGE_NICKNAME)) {
            if (user) {
                if (nick === 'rs'){
                    await user.setNickname(user.user.username)
                    await interaction.reply(`El nick de <@${user.id}> fue reseteado correctamente`)
                    return
                }
                await user.setNickname(nick)
                await interaction.reply(`El nick de <@${user.id}> fue cambiado correctamente`)
            } else {
                if (nick === 'rs'){
                    await interaction.member.setNickname(interaction.user.username)
                    await interaction.reply(`El nick de <@${user.id}> fue reseteado correctamente`)
                    return
                }
                await interaction.member.setNickname(nick)
                await interaction.reply(`El nick de <@${interaction.member.id}> fue cambiado correctamente`)
            }
        }
    }
}