const TelegramBot = require('node-telegram-bot-api');

// Il Token del tuo bot
const token = '8777627825:AAG7J-I1usjdltCLraDYy3krIAT1mnCWAc8';

// Inizializziamo il bot in modalità "passiva" (polling: false)
// Il backend ha solo bisogno di INVIARE messaggi, non di leggerli in loop
const bot = new TelegramBot(token, { polling: false });

/**
 * Funzione interna per l'invio materiale del messaggio
 */
function inviaNotifica(chatId, messaggio) {
  if (!chatId) {
    console.warn('⚠️ Impossibile inviare: chatId mancante.');
    return;
  }
  
  bot.sendMessage(chatId, messaggio, { parse_mode: 'Markdown' })
    .then(() => console.log(`✅ Notifica Telegram inviata alla chat: ${chatId}`))
    .catch((error) => console.error('❌ Errore invio Telegram:', error.message));
}

/**
 * Modulo esportato con gli allarmi predefiniti per PeekBox
 */
const PeekBoxAlerts = {
  
  // 1. Allarme Geofence (Ingresso/Uscita)
  geofenceBreach: (chatId, nomeBox, tipoEvento, spazioNome) => {
    const icona = tipoEvento === 'uscito' ? '🚨' : '📥';
    const azione = tipoEvento === 'uscito' ? 'appena uscito dall\'area consentita' : 'entrato nello spazio sicuro';
    const messaggio = `${icona} *Attenzione:* Il Box \`${nomeBox}\` è ${azione} (\`${spazioNome}\`).`;
    
    inviaNotifica(chatId, messaggio);
  },

  // 2. Aggiornamento di Transito
  transitUpdate: (chatId, boxId, stato) => {
    const messaggio = `📦 Il Box *#${boxId}* è entrato nella zona: *${stato}*.`;
    inviaNotifica(chatId, messaggio);
  },

  // 3. Condivisione e Ricezione Box
  boxShared: (chatId, nomeMittente, nomeBox) => {
    const messaggio = `📥 *${nomeMittente}* ti ha appena assegnato il Box \`${nomeBox}\`.`;
    inviaNotifica(chatId, messaggio);
  },

  // Funzione di test per verificare il collegamento
  testConnessione: (chatId) => {
    inviaNotifica(chatId, '🤖 *Test di sistema:* Collegamento con PeekBox-Backend stabilito con successo!');
  }
};

module.exports = PeekBoxAlerts;