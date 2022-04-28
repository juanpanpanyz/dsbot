module.exports = {
        name: 'interactionCreate',
        async execute(interaction, client) {
            if (!interaction.isCommand()) return;

            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                uwu = (`${error}`)
                console.error(error);
                if (uwu.indexOf('Cannot send messages to this user') > -1) {
                    await interaction.reply({
                        content: 'No puedo mandar mensajes a este usuario pero el comando fue ejecutado',
                        ephemeral: true
                    })};
                    if (uwu.indexOf('Missing Permissions') > -1) {
                        await interaction.reply({
                            content: 'No tengo permisos suficientes ',
                            ephemeral: true
                        })};
                        if (uwu.indexOf('No mention') > -1) {
                        await interaction.reply({
                            content: 'No mencionaste a nadie ',
                            ephemeral: true
                        });
                    } else {
                        await interaction.reply({
                            content: `Hubo un error ejecutando el comando \n${uwu}`,
                            ephemeral: true
                        });
                    }
                }
            },
        };