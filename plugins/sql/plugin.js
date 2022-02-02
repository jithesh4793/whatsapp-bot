const hyper = require("../Utilis/events");
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys')
const { getBuffer } = require('../Utilis/download');
//Owner vcard by favas
hyper.addCommand( //by favas...
  { pattern: "blackser ?(.*)", fromMe: true, desc: "send owner vcard" },
async (message, match) => {
const vcard = 'https://i.imgur.com/TFVIDhj.jpeg'
const favas = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:𝙰ﾌ𝙰͢Ϥ Տ𝙰𝖣\n'//dont copy without credits ⚠️
            + 'ORG:𝙰ﾌ𝙰͢Ϥ Տ𝙰𝖣\n' 
            + 'TEL;type=CELL;type=VOICE;waid=917012588744:917012588744\n'
            + 'END:VCARD'
const buff = await getBuffer(vcard)
await message.client.sendMessage(message.jid, {displayname: "𝙰ﾌ𝙰͢Ϥ Տ𝙰𝖣", vcard: favas}, MessageType.contact,{quoted : {
  key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      }, //Vcard sender by favas
      message: {
        "imageMessage": {
          "jpegThumbnail": buff.buffer,
          "caption": "️️🌸⃝⟶𝙰ﾌ𝙰͢Ϥ Տ𝙰𝖣༨ ₀ͯ₇ͨ ͟ ⋆ 🍃"
        }
      }
   }})
});
