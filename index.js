import { Client, GatewayIntentBits, ActivityType } from 'discord.js';

if (!process.env.DISCORD_TOKEN) {
    console.error("[Erro] A variável de ambiente DISCORD_TOKEN não foi configurada!");
    process.exit(1);
}

const statusBot = new Client({ 
    intents: [GatewayIntentBits.Guilds] 
});

// Mudamos de 'ready' para 'clientReady' para funcionar perfeitamente na versão atual
statusBot.once('clientReady', () => {
    console.log(`[Status Bot] Online e conectado como ${statusBot.user.tag}`);
    
    statusBot.user.setPresence({
        status: 'online',
        activities: [{
            name: 'Nome da sua Atividade', // Coloque o nome do seu jogo/atividade aqui
            type: ActivityType.Playing   
        }]
    });
});

statusBot.login(process.env.DISCORD_TOKEN);
