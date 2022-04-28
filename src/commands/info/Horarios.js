const {
    SlashCommandBuilder
} = require("@discordjs/builders");

const { MessageEmbed, MessageAttachment } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("horarios")
        .setDescription("Horarios de 1D")
        .addStringOption(option =>
            option
            .setRequired(true)
            .setName('dia')
            .setDescription('Dia seleccionado')
            .addChoice('lunes', 'lunes')
            .addChoice('martes', 'martes')
            .addChoice('miercoles', 'miercoles')
            .addChoice('jueves', 'jueves')
            .addChoice('viernes', 'viernes')),

    async execute(interaction) {
        const dia = interaction.options.getString('dia');
        const embed1 = new MessageEmbed()
            .setTitle('Horarios Lunes', '\u200b')
            .addField('Primer bloque (8:05-9:05): Ed Judia', 'Fabiana Mibashan')
            .addField('Segundo Bloque (9:20-10:40): Matematica', 'Betina Szuldman')
            .addField('Tercer Bloque (10:55-12:15): Ingles', 'Claudia Kaminsky')
            .addField('Novamoo', '\u200b')
            .setFooter('Bot by juanpanpanyz#3944');
        const embed2 = new MessageEmbed()
            .setTitle('Horarios Martes', '\u200b')
            .addField('Primer bloque (8:05-9:05): Ed Judia', 'Fabiana Mibashan')
            .addField('Segundo Bloque (9:20-10:40): Lengua', 'Patricia Benavidez')
            .addField('Tercer Bloque (10:55-12:15): Historia', 'Rocio Gomez')
            .addField('Almuerzo (12:15-13:10)', '\u200b')
            .addField('Cuarto Bloque (13:10-14:30): Matematica', 'Betina Szuldman')
            .addField('Quinto Bloque (14:40-16:00): Arte', 'Patricio Pascual')
            .addField('Novamoo', '\u200b')
            .setFooter('Bot by juanpanpanyz#3944');
        const embed3 = new MessageEmbed()
            .setTitle('Horarios Miercoles', '\u200b')
            .addField('Primer bloque (8:05-9:05): Educacaion Fisica', 'Ariel Sapir')
            .addField('Segundo Bloque (9:20-10:40): Ingles', 'Claudia Kaminsky')
            .addField('Tercer Bloque (10:55-12:15): Biologia', 'Amancay Ramirez')
            .addField('Almuerzo (12:15-13:10)', '\u200b')
            .addField('Cuarto Bloque (13:10-14:30): Matematica', 'Betina Szuldman')
            .addField('Quinto Bloque (14:40-16:00): Lengua', 'Patricia Benavidez')
            .addField('Novamoo', '\u200b')
            .setFooter('Bot by juanpanpanyz#3944');
        const embed4 = new MessageEmbed()
            .setTitle('Horarios Jueves', '\u200b')
            .addField('Primer bloque (8:05-9:05): Etica', 'Alberto Plosker')
            .addField('Segundo Bloque (9:20-10:40): Ingles', 'Claudia Kaminsky')
            .addField('Tercer Bloque (10:55-12:15): Biologia', 'Amancay Ramirez')
            .addField('Almuerzo (12:15-13:10)', '\u200b')
            .addField('Cuarto Bloque (13:10-14:30): Tecnologia', 'Sergio Coppa')
            .addField('Quinto Bloque (14:40-16:00): Tecnologia', 'Sergio Coppa')
            .addField('\u200b', '\u200b')
            .addField('Novamoo', '\u200b')
            .setFooter('Bot by juanpanpanyz#3944');
        const embed5 = new MessageEmbed()
            .setTitle('Horarios Viernes', '\u200b')
            .addField('Primer bloque (8:05-9:05): Educacaion Fisica', 'Ariel Sapir')
            .addField('Segundo Bloque (9:20-10:40): Historia', 'Rocio Gomez')
            .addField('Tercer Bloque (10:55-12:15): Hebero', 'Fabiana Mibashan')
            .addField('Cuarto Bloque (12:30-13:30): Geografia', 'Pablo Sharpe')
            .addField('\u200b', '\u200b')
            .addField('Novamoo', '\u200b')
            .setFooter('Bot by juanpanpanyz#3944');

        if (dia == 'lunes') {
            await interaction.reply({ embeds: [embed1] });
        }

        if (dia == 'martes') {
            await interaction.reply({ embeds: [embed2] });
        }

        if (dia == 'miercoles') {
            await interaction.reply({ embeds: [embed3] });
        }

        if (dia == 'jueves') {
            await interaction.reply({ embeds: [embed4] });
        }

        if (dia == 'viernes') {
            await interaction.reply({ embeds: [embed5] });
        }
    },
};
