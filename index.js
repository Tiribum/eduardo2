import { Client, GatewayIntentBits, ActivityType } from 'discord.js';

if (!process.env.DISCORD_TOKEN) {
    console.error("[Erro] A variável de ambiente DISCORD_TOKEN não foi configurada!");
    process.exit(1);
}

const statusBot = new Client({ 
    intents: [GatewayIntentBits.Guilds] 
});

statusBot.once('clientReady', () => {
    console.log(`[Status Bot] Online e conectado como ${statusBot.user.tag}`);
    
    statusBot.user.setPresence({
        status: 'idle', // 'online' (verde) | 'idle' (amarelo) | 'dnd' (vermelho) | 'invisible' (invisível)
        activities: [{
            name: 'Nome da sua Atividade', // Escreva o que quiser aqui
            type: ActivityType.Playing // Playing (Jogando) | Streaming (Transmitindo) | Listening (Ouvindo) | Watching (Assistindo) | Competing (Competindo)
        }]
    });
});

statusBot.login(process.env.DISCORD_TOKEN);
