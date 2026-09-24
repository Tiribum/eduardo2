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
    
    // Configuração fácil do Status e da Atividade:
    statusBot.user.setPresence({
        status: 'online', // Opções: 'online', 'idle', 'dnd' (Não Perturbe), 'invisible'
        activities: [{
            name: 'SKLK Clan App', // Coloque o texto que quiser aqui
            type: ActivityType.Playing   // Opções: Playing, Streaming, Listening, Watching, Competing
        }]
    });
});

statusBot.login(process.env.DISCORD_TOKEN);
