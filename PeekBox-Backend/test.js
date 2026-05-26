// Importiamo il modulo che abbiamo appena creato
const PeekBoxAlerts = require('./telegramAlert');

// Il TUO Chat ID personale
const MIO_CHAT_ID = '697330997';

console.log('Avvio test invio notifiche Telegram...');

// 1. Inviamo un messaggio di test immediato
PeekBoxAlerts.testConnessione(MIO_CHAT_ID);

// 2. Simuliamo un allarme Geofence con 2 secondi di ritardo
setTimeout(() => {
    console.log('Simulazione allarme geofence in corso...');
    PeekBoxAlerts.geofenceBreach(MIO_CHAT_ID, 'Elettronica', 'uscito', 'Armadio Principale');
}, 2000);

// 3. Simuliamo un aggiornamento di transito con 4 secondi di ritardo
setTimeout(() => {
    console.log('Simulazione transito in corso...');
    PeekBoxAlerts.transitUpdate(MIO_CHAT_ID, '1024', 'Transit Zone');
}, 4000);