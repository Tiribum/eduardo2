import { Client, GatewayIntentBits, ActivityType } from 'discord.js';

if (!process.env.DISCORD_TOKEN) {
    console.error("[Erro] A variável de ambiente DISCORD_TOKEN não foi configurada!");
    process.exit(1);
}

const statusBot = new Client({ 
    intents: [GatewayIntentBits.Guilds] 
});

statusBot.once('ready', () => {
    console.log(`[Status Bot] Online e conectado como ${statusBot.user.tag}`);
    
    // Altere 'Nome da sua Atividade' para o que deseja exibir no perfil
    statusBot.user.setActivity('Status: Funcionando.', { 
        type: ActivityType.Playing 
    });
});

statusBot.login(process.env.DISCORD_TOKEN);
