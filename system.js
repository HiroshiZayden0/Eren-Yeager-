
require('../settings/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const fetch = require('node-fetch');
const yts = require('yt-search');
const { getVideoInfo, downloadVideo, downloadAudio } =require("hybrid-ytdl");
const crypto = require('crypto');
const { SnackVideo } = require('../start/lib/function/snackvideo')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');
   const getFileSizeFromUrl = async (url) => {
    try {
        let response = await fetch(url, { method: 'HEAD' });
        return response.headers.get('content-length') || 0;
    } catch (err) {
        console.error('Error fetching file size:', err);
        return 0;
    }
};


const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

module.exports = hiroshi = async (hiroshi, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        const sender = m.key.fromMe ? hiroshi.user.id.split(":")[0] + "@s.whatsapp.net" || hiroshi.user.id
: m.key.participant || m.key.remoteJid;

        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];
        
        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const premium = JSON.parse(fs.readFileSync("./start/lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const owners = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'))
        const antilink = JSON.parse(fs.readFileSync('./command/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./command/antilink2.json'))
        const botNumber = await hiroshi.decodeJid(hiroshi.user.id);
        const KyamiPenCewe = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const Creator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        
        const groupMetadata = isGroup ? await kyami.groupMetadata(m.chat).catch((e) => {}) : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
        
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namafile}`}}}
        const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namafile}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=639095099846:+63 909 509 9846\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const Reply = (teks) => {
kyami.sendMessage(m.chat, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363366790950043@newsletter',
               newsletterName: "Kyami Silence",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        showAdAttribution: true,
        title: `𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`,
        body: `mau script ini? pencet gambar ini bre`,
        thumbnailUrl: `https://files.catbox.moe/51dx8h.jpg`,
        sourceUrl: "https://youtube.com/@hiroshihosting",
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }}, { quoted: qkontak })}
        const reply = (teks) => {
kyami.sendMessage(m.chat, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363366790950043@newsletter',
               newsletterName: "Kyami Silence",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        showAdAttribution: true,
        title: `𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`,
        body: `Mau Script? Klik Gambar Ini :3`,
        thumbnailUrl: `https://files.catbox.moe/51dx8h.jpg`,
        sourceUrl: "https://youtube.com/@slnckyami",
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }}, { quoted: qkontak })}
        const kyamiwet = () => {
        let KyamiStikRep = fs.readFileSync('./start/lib/sticker_reply/wait.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamiadmn = () => {
        let KyamiStikRep = fs.readFileSync('./start/lib/sticker_reply/admin.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamibotadmin = () => {
        let KyamiStikRep = fs.readFileSync('./start/lib/sticker_reply/botadmin.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamiowner = () => {
        let KyamiStikRep = fs.readFileSync('./start/lib/sticker_reply/owner.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamiongb = () => {
        let KyamiStikRep = fs.readFileSync('./start/lib/sticker_reply/group.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const kyamipriv = () => {
        let KyamiStikRep = fs.readFileSync('./start/lib/sticker_reply/prem.webp')
        kyami.sendMessage(from, { sticker: KyamiStikRep }, { quoted: m })
        }
        const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
kyami.newsletterFollow('120363366790950043@newsletter')
async function sendkyamiMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await kyami.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
if (antilink.includes(m.chat)) {
if (!isBotAdmins) return
if (!isAdmins && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await kyami.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await kyami.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./kyami.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await kyami.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await kyami.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmins) return
if (!isAdmins && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await kyami.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await kyami.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./kyami.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await kyami.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}
        async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
            })
            resolve(hasil)
        })
    })
}	
  const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
            } = require('./lib/myfunction');
    
        let cihuy = fs.readFileSync('./start/lib/media/kyami.jpg')
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#ff00ff").black(
                   `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${sender}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#ff00ff").black(
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        const reaction = async (jidss, emoji) => {
            kyami.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
        
        async function loading() {
    return reply("Sedang memuat Wak...");
}
        switch (command) {
        case "menu": {
        let menu = `
┏━━━❖ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 ❖━━━
┃  𝘚𝘌𝘕𝘋𝘌𝘙 𝘕𝘈𝘔𝘌 : *${pushname}*
┃  𝘉𝘖𝘛 𝘕𝘈𝘔𝘌 : *${global.namaBot}*
┃  𝘉𝘖𝘛 𝘔𝘖𝘋𝘌 : *${kyami.public ? 'Public' : 'Self'}*
┃  𝘕𝘜𝘔𝘉𝘌𝘙 𝘚𝘜𝘕𝘋𝘌𝘙 : *@${m.sender.split('@')[0]}*
┗━━━━━━━⭑`
kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘖𝘸𝘯𝘦𝘳' },
      type: 1
    },
    {
    buttonId: `.tqto`,
      buttonText: { displayText: '𝘛𝘩𝘢𝘯𝘬𝘴 𝘛𝘰' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.menu-furina'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
       image: { url: 'https://files.catbox.moe/51dx8h.jpg'},
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://files.catbox.moe/a242xj.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
   })
                    await sleep(2500)
     kyami.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu1.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: qkontak
                    })
                    }
break

    case "menu-furina": {
    let mbut = `
┏━━━❖ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 ❖━━━
┃  𝙃𝙄 : ${pushname}  
┃  𝘽𝙊𝙏 : ${global.namaBot}  
┃  𝙈𝙊𝘿𝙀 : ${kyami.public ? 'Public' : 'Self'}  
┃  𝙐𝙎𝙀𝙍 : @${m.sender.split('@')[0]}  
┗━━━━━━━⭑
┏━━━❖ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ❖━━━
┃⁠➫ ${prefix}mode  
┃⁠➫ ${prefix}addprem
┃⁠➫ ${prefix}delprem
┃⁠➫ ${prefix}upch
┃⁠➫ ${prefix}hackwa
┃⁠➫ ${prefix}upsw
┗━━━━━━━⭑
┏━━━❖ 𝙋𝘼𝙉𝙀𝙇 𝙈𝙀𝙉𝙐 𝙑1 ❖━━━
┃➫ ${prefix}1gb nama,nomor
┃➫ ${prefix}2gb nama,nomor
┃➫ ${prefix}3gb nama,nomor
┃➫ ${prefix}4gb nama,nomor
┃➫ ${prefix}5gb nama,nomor
┃➫ ${prefix}6gb nama,nomor
┃➫ ${prefix}7gb nama,nomor
┃➫ ${prefix}8gb nama,nomor
┃➫ ${prefix}9gb nama,nomor
┃➫ ${prefix}10gb nama,nomor
┃➫ ${prefix}unli nama,nomor
┃➫ ${prefix}cadmin
┃➫ ${prefix}delsrv
┃➫ ${prefix}deladmin
┃➫ ${prefix}listsrv
┃➫ ${prefix}listadmin
┗━━━━━━━⭑
┏━━━❖ 𝙋𝘼𝙉𝙀𝙇 𝙈𝙀𝙉𝙐 𝙑2 ❖━━━
┃➫ ${prefix}1gb-V2 nama,nomor
┃➫ ${prefix}2gb-V2 nama,nomor
┃➫ ${prefix}3gb-V2 nama,nomor
┃➫ ${prefix}4gb-V2 nama,nomor
┃➫ ${prefix}5gb-V2 nama,nomor
┃➫ ${prefix}6gb-V2 nama,nomor
┃➫ ${prefix}7gb-V2 nama,nomor
┃➫ ${prefix}8gb-V2 nama,nomor
┃➫ ${prefix}9gb-V2 nama,nomor
┃➫ ${prefix}10gb-V2 nama,nomor
┃➫ ${prefix}unli-V2 nama,nomor
┃➫ ${prefix}cadmin-V2
┃➫ ${prefix}delsrv-V2
┃➫ ${prefix}deladmin-V2
┃➫ ${prefix}listsrv-V2
┃➫ ${prefix}listadmin-V2
┗━━━━━━━⭑
┏━━━❖ 𝙋𝘼𝙉𝙀𝙇 𝙈𝙀𝙉𝙐 𝙑3 ❖━━━
┃➫ ${prefix}1gb-V3 nama,nomor
┃➫ ${prefix}2gb-V3 nama,nomor
┃➫ ${prefix}3gb-V3 nama,nomor
┃➫ ${prefix}4gb-V3 nama,nomor
┃➫ ${prefix}5gb-V3 nama,nomor
┃➫ ${prefix}6gb-V3 nama,nomor
┃➫ ${prefix}7gb-V3 nama,nomor
┃➫ ${prefix}8gb-V3 nama,nomor
┃➫ ${prefix}9gb-V3 nama,nomor
┃➫ ${prefix}10gb-V3 nama,nomor
┃➫ ${prefix}unli-V3 nama,nomor
┃➫ ${prefix}cadmin-V3
┃➫ ${prefix}delsrv-V3
┃➫ ${prefix}deladmin-V3
┃➫ ${prefix}listsrv-V3
┃➫ ${prefix}listadmin-V3
┗━━━━━━━⭑
┏━━━❖ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 ❖━━━
┃⁠➫ ${prefix}download  
┃⁠➫ ${prefix}tiktok  
┃⁠➫ ${prefix}igdl  
┃⁠➫ ${prefix}play
┃⁠➫ ${prefix}play2
┃⁠➫ ${prefix}facebook  
┃⁠➫ ${prefix}videy  
┃⁠➫ ${prefix}snackvideo  
┗━━━━━━━⭑
┏━━━❖ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 ❖━━━
┃⁠➫ ${prefix}welcome  
┃⁠➫ ${prefix}tagall  
┃⁠➫ ${prefix}hidetag  
┃⁠➫ ${prefix}antilink
┃⁠➫ ${prefix}antilink2  
┗━━━━━━━⭑
┏━━━❖ 𝙑𝙊𝙄𝘾𝙀 𝙈𝙀𝙉𝙐 ❖━━━
┃⁠➫ ${prefix}fast  
┃⁠➫ ${prefix}tupai  
┃⁠➫ ${prefix}blown  
┃⁠➫ ${prefix}bass  
┃⁠➫ ${prefix}smooth  
┃⁠➫ ${prefix}deep  
┃⁠➫ ${prefix}earrape  
┃⁠➫ ${prefix}nightcore  
┃⁠➫ ${prefix}fat  
┃⁠➫ ${prefix}robot  
┃⁠➫ ${prefix}slow  
┃⁠➫ ${prefix}reverse  
┗━━━━━━━⭑
┏━━━❖ 𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐 ❖━━━
┃⁠➫ ${prefix}aiclaude  
┃⁠➫ ${prefix}kenon
┃⁠➫ ${prefix}hd
┃⁠➫ ${prefix}superhd
┃⁠➫ ${prefix}remini
┃⁠➫ ${prefix}buysc
┃⁠➫ ${prefix}payment
┃⁠➫ ${prefix}listpanel
┃⁠➫ ${prefix}listvps
┗━━━━━━━⭑
┏━━━❖ 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 ❖━━━
┃⁠➫ ${prefix}anime
┃⁠➫ ${prefix}quotes
┃⁠➫ ${prefix}nsfw 
┃⁠➫ ${prefix}tourl
┃⁠➫ ${prefix}artinama
┃⁠➫ ${prefix}artimimpi
┃⁠➫ ${prefix}sifat
┃⁠➫ ${prefix}qc
┃⁠➫ ${prefix}sticker
┃⁠➫ ${prefix}brat
┃⁠➫ ${prefix}hackwa
┃⁠➫ ${prefix}aksarasunda  
┃⁠➫ ${prefix}waifu  
┃⁠➫ ${prefix}cosplay  
┃⁠➫ ${prefix}glitchtext
┃⁠➫ ${prefix}findsong  
┃⁠➫ ${prefix}sspotify  
┃⁠➫ ${prefix}randomsfw  
┃⁠➫ ${prefix}meme  
┃⁠➫ ${prefix}ramalan
┃⁠➫ ${prefix}luckynumber
┃⁠➫ ${prefix}time  
┃⁠➫ ${prefix}upch
┃⁠➫ ${prefix}upsw
┃⁠➫ ${prefix}robloxstalk
┗━━━━━━━⭑
┏━━━❖ 𝙋𝙐𝙎𝙃 𝙈𝙀𝙉𝙐 ❖━━━
┃⁠➫ ${prefix}cekidch
┃⁠➫ ${prefix}cekidgc
┃⁠➫ ${prefix}pushkontak
┃⁠➫ ${prefix}pushkontakid
┃⁠➫ ${prefix}done
┃⁠➫ ${prefix}csesi  
┃⁠➫ ${prefix}addcase
┃⁠➫ ${prefix}upsw  
┃⁠➫ ${prefix}public  
┃⁠➫ ${prefix}self  
┗━━━━━━━⭑  
`
kyami.sendMessage(m.chat, {
      image: { url: 'https://files.catbox.moe/zz5ys6.jpg' },
      gifPlayback: true,
      caption: mbut,
      contextInfo: {
      externalAdReply: {
      title: '𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦',
      body: namaowner,
      thumbnailUrl: 'https://files.catbox.moe/a242xj.jpg',
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     kyami.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu2.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: qkontak
                    })
                    }
break
case 'payment': {
let pay = `𝙃𝙞 @${pushname} 𝘽𝙚𝙧𝙞𝙠𝙪𝙩 𝘽𝙚𝙗𝙚𝙧𝙖𝙥𝙖 𝙋𝙖𝙮𝙢𝙚𝙣𝙩 𝙆𝙖𝙢𝙞`
await kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Payment',
          sections: [
            {
              title: 'List Payment',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'QRIS',
                  id: '.qris'
                },
                {
                  title: 'DANA',
                  id: '.dana'
                },                
                {
                  title: 'OVO',
                  id: '.ovo'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: namafile,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: pay,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: namach,
   },   
    externalAdReply: {
      title: namaBot,
      body: namafile,
      thumbnailUrl: thumbnail,
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
                      case 'tqto': {
    let apip = `
┏━━⬣ ⌜ 𝘛𝘩𝘢𝘯𝘬𝘴 𝘛𝘰 𝘍𝘰𝘳 ⌟
┃ ☘︎ ᴋʏᴀᴍɪ sɪʟᴇɴᴄᴇ (ᴏᴡɴ)
┃ ☘︎ ᴋʏᴏᴜᴋᴏ (ғʀɪᴇɴᴅ..ᴍᴀʏʙᴇ)
┃ ☘︎ ᴢᴜʀᴏᴋᴜ (ғʀɪᴇɴᴅ)
┃ ☘︎ ᴀʟʟ ᴅᴇᴠ
┃ ☘︎ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ
┗━━⬣
> 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦
`
await kyami.sendMessage(m.chat, {
      video: { url: 'https://files.catbox.moe/hxx9ni.mp4' },
      gifPlayback: true,
      caption: apip,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
      title: namaBot,
      body: namaowner,
      thumbnailUrl: 'https://files.catbox.moe/a242xj.jpg',
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
                          await sleep(2500)
     kyami.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu1.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: qkontak
                    })
kyami.sendMessage(m.chat, { react: { text: "🤍",key: m.key,}})
kyami.sendMessage(m.chat, { react: { text: "🩶",key: m.key,}})
kyami.sendMessage(m.chat, { react: { text: "🩵",key: m.key,}})
kyami.sendMessage(m.chat, { react: { text: "🩷",key: m.key,}})
kyami.sendMessage(m.chat, { react: { text: "💛",key: m.key,}})
kyami.sendMessage(m.chat, { react: { text: "❤️",key: m.key,}})
kyami.sendMessage(m.chat, { react: { text: "💔",key: m.key,}})  
}
          break
case 'listpanel': {
    let lspnl = `
*List Panel Run Bot Public By Kyami Silence*

* Ram 1GB : Rp1000/1K

* Ram 2 GB : Rp2000/2K

* Ram 3 GB : Rp3000/3K

* Ram 4 GB : Rp4000/4K

* Ram 5 GB : Rp5000/5K

* Ram 6 GB : Rp6000/6K

* Ram 7 GB : Rp7000/7K

* Ram 8 GB : Rp8000/8K

* Ram 9 GB : Rp9000/9K

* Ram Unlimited : Rp10.000/10K

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_
𝗖𝗼𝗻𝘁𝗮𝗰𝘁 :
🪀𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 : https://wa.me/6285167249152
☎️𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢 : t.me/nabilaajah
📡𝙎𝙖𝙡𝙪𝙧𝙖𝙣 𝙒𝙖 : https://whatsapp.com/channel/0029Vb1KZGfD38COhcA6MQ3u
🌐𝙂𝙧𝙪𝙥 𝙄𝙣𝙛𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 : https://chat.whatsapp.com/Fg7lZNth6WPCkTmxfNzvdh `
await kyami.sendMessage(m.key.remoteJid, {
        image: { url: global.thumbnail },
        caption: lspnl,
        footer: namafile,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: {
                    displayText: 'CLICK HERE TO CHAT OWNER'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: qkontak });
}
break
case 'listpanelpriv': {
    let lspnl = `
*List Panel Run Bot Private By Kyami Silence*

* Ram 1GB : Rp1000/1K

* Ram 2 GB : Rp2000/2K

* Ram 3 GB : Rp3000/3K

* Ram 4 GB : Rp4000/4K

* Ram 5 GB : Rp5000/5K

* Ram 6 GB : Rp6000/6K

* Ram 7 GB : Rp7000/7K

* Ram 8 GB : Rp8000/8K

* Ram 9 GB : Rp9000/9K

* Ram Unlimited : Rp10.000/10K

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_
𝗖𝗼𝗻𝘁𝗮𝗰𝘁 :
🪀𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 : https://wa.me/6285167249152
☎️𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢 : t.me/nabilaajah
📡𝙎𝙖𝙡𝙪𝙧𝙖𝙣 𝙒𝙖 : https://whatsapp.com/channel/0029Vb1KZGfD38COhcA6MQ3u
🌐𝙂𝙧𝙪𝙥 𝙄𝙣𝙛𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 : https://chat.whatsapp.com/Fg7lZNth6WPCkTmxfNzvdh `
await kyami.sendMessage(m.key.remoteJid, {
        image: { url: global.thumbnail },
        caption: lspnl,
        footer: namafile,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: {
                    displayText: 'CLICK HERE TO CHAT OWNER'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: qkontak });
}
break
case 'listvps': {
    let vps = `
𝙇𝙞𝙨𝙩 𝙑𝙥𝙨 𝘿𝙞𝙜𝙞𝙩𝙖𝙡 𝙊𝙘𝙚𝙖𝙣 𝘽𝙮 𝙆𝙮𝙖𝙢𝙞 𝙎𝙞𝙡𝙚𝙣𝙘𝙚
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝐕𝐩𝐬 𝐇𝐢𝐠𝐡 𝐐𝐮𝐚𝐥𝐢𝐭𝐲
☘︎ 𝘙𝘢𝘮 𝟮 𝘊𝘰𝘳𝘦 𝟭 : 𝗥𝗽𝟭𝟱.𝟬𝟬𝟬 
☘︎ 𝘙𝘢𝘮 𝟮 𝘊𝘰𝘳𝘦 𝟮 : 𝗥𝗽𝟮𝟬.𝟬𝟬𝟬 
☘︎ 𝘙𝘢𝘮 𝟰 𝘊𝘰𝘳𝘦 𝟮 : 𝗥𝗽𝟯𝟬.𝟬𝟬𝟬
☘︎ 𝘙𝘢𝘮 𝟴 𝘊𝘰𝘳𝘦 𝟰 : 𝗥𝗽𝟰𝟬.𝟬𝟬𝟬 
☘︎ 𝘙𝘢𝘮 𝟭𝟲 𝘊𝘰𝘳𝘦 𝟰 : 𝗥𝗽𝟱𝟬.𝟬𝟬𝟬 
☘︎ 𝘙𝘢𝘮 𝟭𝟲 𝘊𝘰𝘳𝘦 𝟴 : 𝗥𝗽𝟲𝟬.𝟬𝟬𝟬 

𝐁𝐨𝐧𝐮𝐬 𝐁𝐮𝐲 𝐕𝐩𝐬
› ғʀᴇᴇ ɪɴsᴛᴀʟʟ ᴘᴀɴᴇʟ (1x)
› ғʀᴇᴇ ʀᴇǫ ɴᴀᴍᴀ ᴅᴏᴍᴀɪɴ
› ғʀᴇᴇ ᴘᴀsᴀɴɢ ᴇɢɢ ʙᴏᴛ sᴀ
› ғʀᴇᴇ ɪɴsᴛᴀʟʟ ᴛʜᴇᴍᴀ
› ғʀᴇᴇ ɪɴsᴛᴀʟʟ ᴡɪɴɢs & ɴᴏᴅᴇ
*𝖦𝖠𝖱𝖠𝖭𝖲𝖨 20 𝖣𝖠𝖸 ( 𝟣𝖷 𝖢𝖫𝖠𝖬 )*
━━━━━━━━━━━━━━━━━━
𝗖𝗼𝗻𝘁𝗮𝗰𝘁 :
🪀𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 : https://wa.me/6285167249152
☎️𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢 : t.me/nabilaajah
📡𝙎𝙖𝙡𝙪𝙧𝙖𝙣 𝙒𝙖 : https://whatsapp.com/channel/0029Vb1KZGfD38COhcA6MQ3u
🌐𝙂𝙧𝙪𝙥 𝙄𝙣𝙛𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 : https://chat.whatsapp.com/Fg7lZNth6WPCkTmxfNzvdh `
await kyami.sendMessage(m.key.remoteJid, {
        image: { url: global.thumbnail },
        caption: vps,
        footer: namafile,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: {
                    displayText: 'CLICK HERE TO CHAT OWNER'
                },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: qkontak });
}
break
case 'mode': {
let mode = `𝘽𝙤𝙩 𝙉𝙮𝙖 𝙈𝙖𝙪 𝘿𝙞 𝙈𝙤𝙙𝙚 𝘼𝙥𝙖 𝙉𝙞𝙝 𝙆𝙞𝙣𝙜`
await kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'MODE SAD (MODE SELF)',
                  id: '.self'
                },                
                {
                  title: 'MODE HAPPY (MODE PUBLIC)',
                  id: '.public'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: namafile,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: mode,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: namach,
   },   
    externalAdReply: {
      title: namaBot,
      body: namafile,
      thumbnailUrl: thumbnail,
      sourceUrl: ch,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case 'qris': {
    let qris = `
    *_BERIKUT ADALAH PAYMENT QRIS KAMI_*
    
    *[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\``
await kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'All Menu',
                  id: '.allmenu-v2'
                },
                {
                  title: 'Panel Menu V1',
                  id: '.panelmenu'
                },
                {
                  title: 'Panel Menu V2',
                  id: '.panelmenu-v2'
                },                
                {
                  title: 'Panel Menu V3',
                  id: '.panelmenu-v3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `You know apip? Yes Its Kyami Silence`,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: qris,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: '120363366790950043@newsletter',
   newsletterName: `Kyami Silence`,
   },    
    externalAdReply: {
      title: `© 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`,
      body: `Kyami Silence`,
      thumbnailUrl: "https://files.catbox.moe/zwln3u.jpg",
      sourceUrl: `https://youtube.com/@slnckyami`,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'dana': {
let dana = `
*NOMOR PAYMENT DANA KAMI ADA DI BAWAH INI}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'All Menu',
                  id: '.allmenu-v2'
                },
                {
                  title: 'Panel Menu V1',
                  id: '.panelmenu'
                },
                {
                  title: 'Panel Menu V2',
                  id: '.panelmenu-v2'
                },                
                {
                  title: 'Panel Menu V3',
                  id: '.panelmenu-v3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `You know apip? Yes Its Kyami Silence`,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: dana,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: '120363366790950043@newsletter',
   newsletterName: `Kyami Silence`,
   },    
    externalAdReply: {
      title: `© 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`,
      body: `Kyami Silence`,
      thumbnailUrl: "https://files.catbox.moe/zwln3u.jpg",
      sourceUrl: `https://youtube.com/@slnckyami`,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ovo': {
let ovo = `
*NOMOR PAYMENT OVO KAMI ADA DI BAWAH INI*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'All Menu',
                  id: '.allmenu-v2'
                },
                {
                  title: 'Panel Menu V1',
                  id: '.panelmenu'
                },
                {
                  title: 'Panel Menu V2',
                  id: '.panelmenu-v2'
                },                
                {
                  title: 'Panel Menu V3',
                  id: '.panelmenu-v3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `You know apip? Yes Its Kyami Silence`,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: ovo,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: '120363366790950043@newsletter',
   newsletterName: `Kyami Silence`,
   },    
    externalAdReply: {
      title: `© 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`,
      body: `Kyami Silence`,
      thumbnailUrl: "https://files.catbox.moe/zwln3u.jpg",
      sourceUrl: `https://youtube.com/@slnckyami`,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case 'download': {
if (!text) return reply(`Penggunaan .${command} <link>`)
kyami.sendMessage(m.chat, {  text: `Silahkah Pilih Metode Download Yang Tersedia Di Bawah Ini  `, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST METODE DOWNLOAD',
          sections: [
            {
              title: 'LIST METODE DOWNLOAD',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'TIKTOK VIDEO',
                  id: `.tiktok ${text}`
                },
                {
                  title: 'TIKTOK IMAGE',
                  id: `.tt ${text}`
                },                
                {
                title: 'TIKTOK AUDIO',
                  id: `.ttmp3 ${text}`
                },                
                {
                title: 'INSTAGRAM',
                  id: `.igdl ${text}`
                },                
                {
                  title: 'MEDIA FIRE',
                  id: `.mediafire ${text}`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'quotes': {
kyami.sendMessage(m.chat, {  text: `Silahkah Pilih Quotes Yang Tersedia Di Bawah Ini  `, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST QUOTES',
          sections: [
            {
              title: 'LIST QUOTES',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'QUOTES BUCIN',
                  id: `.quotesbucin`
                },
                {
                  title: 'QUOTES MOTIVASI',
                  id: `.quotesmotivasi`
                },                
                {
                title: 'QUOTES BACOT',
                  id: `.quotesbacot`
                },                
                {
                title: 'QUOTES GALAU',
                  id: `.quotesgalau`
                },                
                {
                title: 'QUOTES GOMBAL',
                  id: `.quotesgombal`
                },                
                {
                  title: 'QUOTES HENGKER WIBU EPEP TZY',
                  id: `.quoteshacker`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'nsfw': {
kyami.sendMessage(m.chat, {  text: `Silahkah Pilih *NSFW* Yang Tersedia Di Bawah Ini`, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST NSFW',
          sections: [
            {
              title: 'NSFW',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'HENTAI',
                  id: `.hentaivid`
                },
                {
                  title: 'COSPLAYER',
                  id: `.cosplay`
                },                
                {
                title: 'WAIFU',
                  id: `.waifu`
                },                
                {
                  title: 'ANIME',
                  id: `.anime1`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'anime': {
kyami.sendMessage(m.chat, {  text: `Silahkah Pilih *ANIME* Yang Tersedia Di Bawah Ini`, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST ANIME',
          sections: [
            {
              title: 'ANIMW',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'AKIRA',
                  id: `.akira`
                },
                {
                title: 'ANA',
                  id: `.ana`
                },
                {
                  title: 'ART',
                  id: `.art`
                },                
                {
                title: 'ASUNA',
                  id: `.asuna`
                },
                {
                  title: 'AYUZAWA',
                  id: `.ayuzawa`
                },                
                {
                title: 'BORUTO',
                  id: `.boruto`
                },
                {
                  title: 'BTS',
                  id: `.bts`
                },                
                {
                  title: 'CHINO',
                  id: `.chiho`
                },                
                {
                title: 'COSPLAY LOLI',
                  id: `.cosplayloli`
                },
                {
                title: 'COSPLAY SAGIRI',
                  id: `.cosplaysagiri`
                },
                {
                  title: 'ELAINA',
                  id: `.elaina`
                },                
                {
                title: 'KANEKI',
                  id: `.keneki`
                },
                {
                  title: 'SHINA',
                  id: `.shina`
                },                
                {
                title: 'MIKASA',
                  id: `.mikasa`
                },
                {
                  title: 'SHIZUKA',
                  id: `.shizuka`
                },                
                {
                  title: 'YUKI',
                  id: `.yuki`
                },                
                {
                title: 'KURUMI',
                  id: `.kurumi`
                },                
                {
                title: 'KOTORI',
                  id: `.kotori`
                },
                {
                  title: 'MIKU',
                  id: `.miku`
                },                
                {
                title: 'MEGUMIN',
                  id: `.megumin`
                },
                {
                  title: 'TOUKACHAN',
                  id: `.toukachan`
                },                
                {
                  title: 'YOTSUBA',
                  id: `.yotsuba`
                },                
                {
                title: 'EMILIA',
                  id: `.emilia`
                },                
                {
                  title: 'NEZUKO',
                  id: `.nezuko`
                },                
                {
                title: 'SHINOMIYA',
                  id: `.shinomiya`
                },                
                {
                title: 'RIZE',
                  id: `.rize`
                },
                {
                  title: 'SAKURA',
                  id: `.sakura`
                },                
                {
                title: 'YULI BOCIL',
                  id: `.yulibocil`
                },
                {
                  title: 'ISUZU',
                  id: `.isuzu`
                },                
                {
                  title: 'GREMORY',
                  id: `.gremory`
                },                
                {
                title: 'ERZA',
                  id: `.erza`
                },
                {
                  title: 'KAORI',
                  id: `.kaori`
                },                
                {
                  title: 'ROSE',
                  id: `.rose`
                },                
                {
                  title: 'CHITOGE',
                  id: `.chitoge`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'welcome': {
let wlc = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘍𝘰𝘳 𝘋𝘪𝘴𝘢𝘣𝘭𝘦/𝘌𝘯𝘢𝘣𝘭𝘦 𝘞𝘦𝘭𝘤𝘰𝘮𝘦`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: wlc
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namaBot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./kyami.jpg')}, { upload: kyami.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: namafile,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
             {
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "WELCOME MODE",
  "sections": [
    {
      "title": "${namaBot}",
      "rows": [
        {
          "header": "WELCOME OFF",
          "title": "click to display",
          "description": "This For Disable Welcome",
          "id": ".welcome2 off"
        },
        {
          "header": "WELCOME ON",
          "title": "click to display",
          "description": "This For Enable Welcome",
          "id": ".welcome2 on"
        }
      ]
    }
  ]
}`

              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Owner","id":".owner"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"YouTube▶️","id":".yt"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363366790950043@newsletter',
                  newsletterName: namafile,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await kyami.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
           }
break
case "welcome2": {
if (!KyamiPenCewe) return kyamipriv()
if (!text) return Reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return Reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = true
Reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return Reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = false
Reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return Reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
reply('Wait....')
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
kyami.sendMessage(m.chat, { image: { url: yeha }, caption : 'Nih Bang' }, { quoted: m })
}
break
case 's':
case 'stiker':
case 'sticker': {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kyami.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await kyami.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'tagsw1': {
    
    let [id, ...teksArray] = text.split(' ');
    let teks = teksArray.join(' ');
    
    if (!id || !teks) {
        return reply(`Example: ${prefix + command} (Id Gc) Hello`);
    }

    let mediaContent = null;
    let msgOptions = {};
    const BackgroundColor = ['#f68ac9', '#6cace4', '#f44336', '#4caf50', '#ffeb3b', '#9c27b0', '#0d47a1', '#03a9f4', '#9e9e9e', '#ff9800', '#000000', '#ffffff', '#008080', '#FFC0CB', '#A52A2A', '#FFA07A', '#FF00FF', '#D2B48C', '#F5DEB3', '#FF1493', '#B22222', '#00BFFF', '#1E90FF', '#FF69B4', '#87CEEB', '#20B2AA', '#8B0000', '#FF4500', '#48D1CC', '#BA55D3', '#00FF7F', '#008000', '#191970', '#FF8C00', '#9400D3', '#FF00FF', '#8B008B', '#2F4F4F', '#FFDAB9', '#BDB76B', '#DC143C', '#DAA520', '#696969', '#483D8B', '#FFD700', '#C0C0C0'];
    const pickedColor = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
    const jids = [m.sender, id];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime.includes('image')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                image: mediaContent,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                video: mediaContent,
                caption: text || m.quoted.text || '',
            };
        } else {
            msgOptions = {
                text: teks || m.quoted.text || '',
            };
        }
    } else {
        msgOptions = {
            text: teks,
        };
    }

    await kyami.sendMessage("status@broadcast", msgOptions, {
        backgroundColor: pickedColor,
        textArgb: 0xffffffff,
        font: 0,
        statusJidList: await (await kyami.groupMetadata(id)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: id },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    reply("done ✓\ncek status");
}
break
case "delowner": case "delown": {
if (!KyamiPenCewe) return kyamipriv()
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break
case "addowner": case "addown": {
if (!KyamiPenCewe) return kyamipriv()
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./start/lib/database/owner.json", JSON.stringify(owners, null, 2))
reply(`Berhasil menambah owner ✅`)
}
break
case 'tagsw': {
if (!isPremium) return kyamipriv()
    if (!text) return reply(`Masukkan teks untuk status atau reply gambar/video dengan caption`);
    let media = null;
    let options = {};
    const jids = [m.sender, m.chat];
    if (m.quoted) {
        const mime = m.quoted.mtype || m.quoted.mediaType;
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: text || m.quoted.text || '',
            };
        } else {
            options = {
                text: text || m.quoted.text || '',
            };
        }
    } else {
        options = {
            text: text,
        };
    }
    return kyami.sendMessage("status@broadcast", options, {
        backgroundColor: "#7ACAA7",
        textArgb: 0xffffffff,
        font: 1,
        statusJidList: await (await kyami.groupMetadata(m.chat)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: m.chat },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    m.reply("Done Up Tag Sw, Silahkan Cek Sw Sekarang");
}
break
case 'tiktokmp3': case 'ttmp3': {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await kyami.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await kyami.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await kyami.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break
case 'mediafire': {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await kyami.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break
case 'instagram': case 'igdl': case 'ig': {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await kyami.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await kyami.sendMessage(m.chat, {video: {url: res.result.url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await kyami.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break
case 'pin': case 'pinterest': {
if (!text) return Reply("anime dark")
await kyami.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: kyami.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: qkontak})
await kyami.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await kyami.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'tt': case 'tiktok': {
if (!text) return m.reply("url")
if (!text.startsWith("https://")) return m.reply("url")
await tiktokDl(q).then(async (result) => {
await kyami.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: kyami.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: qkontak})
await kyami.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await kyami.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: qkontak})
}
}).catch(e => console.log(e))
await kyami.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'owner': {
let name = m.pushName || kyami.getName(m.sender);
let panduan = `𝘏𝘢𝘪 𝘊𝘢𝘯𝘵𝘪𝘬/𝘎𝘢𝘯𝘵𝘦𝘯𝘨 𝘑𝘢𝘯 𝘓𝘶𝘱𝘢 𝘉𝘢𝘤𝘢 𝘙𝘶𝘭𝘦𝘴 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪 𝘠𝘢 𝘚𝘦𝘣𝘦𝘭𝘶𝘮 𝘊𝘩𝘢𝘵 𝘖𝘸𝘯𝘦𝘳`

const url = 'https://files.catbox.moe/xfjwq5.jpg'
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: kyami.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://img12.pixhost.to/images/593/571679303_skyzopedia.jpg' } }, { upload: kyami.waUploadToServer })),
          title: `> 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`,
          gifPlayback: true,
          subtitle: '𝘒𝘺𝘢𝘮𝘪 𝘚𝘪𝘭𝘦𝘯𝘤𝘦',
          hasMediaAttachment: false
        }),
                body: {
                  text: `𝘛𝘩𝘪𝘴 𝘐𝘴 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳, 𝘋𝘰𝘯'𝘵 𝘚𝘱𝘢𝘮 𝘊𝘩𝘢𝘵 𝘖𝘳 𝘊𝘢𝘭𝘭 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳 𝘉𝘵𝘸 ᐛ`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"𝘛𝘩𝘦 𝘊𝘳𝘦𝘢𝘵𝘰𝘳","url":"https://wa.me/6285167249152","merchant_url":"https://www.google.com"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await kyami.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break
case 'yt': {
let name = m.pushName || kyami.getName(m.sender);
let panduan = `𝘏𝘢𝘪 𝘊𝘢𝘯𝘵𝘪𝘬/𝘎𝘢𝘯𝘵𝘦𝘯𝘨 𝘑𝘢𝘯 𝘓𝘶𝘱𝘢 𝘚𝘶𝘣𝘴𝘤𝘳𝘪𝘣𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘖𝘸𝘯𝘦𝘳 𝘠𝘢`

const url = 'https://files.catbox.moe/xfjwq5.jpg'
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: kyami.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://img12.pixhost.to/images/593/571679303_skyzopedia.jpg' } }, { upload: kyami.waUploadToServer })),
          title: `> 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`,
          gifPlayback: true,
          subtitle: '𝘒𝘺𝘢𝘮𝘪 𝘚𝘪𝘭𝘦𝘯𝘤𝘦',
          hasMediaAttachment: false
        }),
                body: {
                  text: `𝘛𝘩𝘪𝘴 𝘐𝘴 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳, 𝘋𝘰𝘯'𝘵 𝘍𝘰𝘳 𝘎𝘦𝘵 𝘛𝘰 𝘚𝘶𝘣𝘴𝘤𝘳𝘪𝘣𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘔𝘺 𝘖𝘸𝘯𝘦𝘳 𝘉𝘵𝘸 ᐛ`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"𝘠𝘰𝘶𝘛𝘶𝘣𝘦","url":"https://youtube.com/@slnckyami","merchant_url":"https://www.google.com"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await kyami.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break
/// main
case 'hentaivid': case 'hentaivideo': {
if (!isPremium && !KyamiPenCewe) return kyamipriv()
const { hentai } = require('./lib/function/scraper.js')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
kyami.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji}` }, { quoted: qkontak })
            }
            break
case "anime1": {
  const anu = `https://archive-ui.tanakadomp.biz.id/asupan/anime`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    kyami.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Nih AnimeNya Kontol'
    }, { quoted: qkontak })
  } catch (err) {
    console.log(err);
    m.reply('undefined')
  }
}
break
case "cosplay": {
  const anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    kyami.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Nih CosplayNya Kontol'
    }, { quoted: qkontak })
  } catch (err) {
    console.log(err);
    m.reply('undefined')
  }
}
break
case 'cekidch': case 'idch': {
if (!text) return Reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await kyami.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return Reply(teks)
}
break
case 'superhd': case 'tohd': case 'hd': case 'remini': {
if (!/image/.test(mime)) return m.reply("dengan kirim/reply foto")
let foto = await kyami.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await kyami.sendMessage(m.chat, {image: result}, {quoted: qkontak})
await fs.unlinkSync(foto)
}
break
case 'upsw': {
    const baileys = require("@whiskeysockets/baileys");

    async function fetchParticipants(...jids) {
        let results = [];
        for (const jid of jids) {
            let { participants } = await kyami.groupMetadata(jid);
            participants = participants.map(({ id }) => id);
            results = results.concat(participants);
        }
        return results;
    }

    async function mentionStatus(jids, content) {
        const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
            upload: kyami.waUploadToServer
        });

        let statusJidList = [];
        for (const _jid of jids) {
            if (_jid.endsWith("@g.us")) {
                for (const jid of await fetchParticipants(_jid)) {
                    statusJidList.push(jid);
                }
            } else {
                statusJidList.push(_jid);
            }
        }
        statusJidList = [...new Set(statusJidList)];

        await kyami.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
            statusJidList,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined
                            }))
                        }
                    ]
                }
            ]
        });

        for (const jid of jids) {
            let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
            await kyami.relayMessage(jid, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            });
        }

        return msg;
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    let content = {};

    if (mime) {
        let media = await q.download();

        if (/image/.test(mime)) {
            content.image = media;
        } else if (/video/.test(mime)) {
            content.video = media;
        } else if (/audio/.test(mime)) {
            content.audio = media;
        } else {
            return m.reply("Jenis file tidak didukung!");
        }

        if (q.text) content.caption = q.text;
    } else if (args[0]) {
        let url = args[0];
        let type = args[1] || 'text';

        if (type === 'image') {
            content.image = { url };
        } else if (type === 'video') {
            content.video = { url };
        } else if (type === 'audio') {
            content.audio = { url };
        } else {
            content.text = args.slice(1).join(" ") || url;
        }
    } else {
        return m.reply("Reply media atau masukkan URL dengan format:\n.status <url> <image/video/audio/text>");
    }

    mentionStatus([m.chat], content).catch(console.error);
}
break;

case "luckynumber": {
 let luckyNumber = Math.floor(Math.random() * 100) + 1;
 m.reply(`🍀 *Angka Keberuntunganmu Hari Ini:* *${luckyNumber}* 🍀`);
};
break;
case 'qc': {
if (!text) return reply(`*Teks Nya Mana Dongo!*`)
kyami.sendMessage(m.chat, {  text: `Silahkah Pilih *WARNA QC* Yang Tersedia Di Bawah Ini`, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST WARNA QC',
          sections: [
            {
              title: 'LIST WARNA QC',
              highlight_label: 'Recommended',
              rows: [
                {
                title: 'pink',
                  id: `.qc2 pink ${text}`
                },
                {
                title: 'biru',
                  id: `.qc2 biru ${text}`
                },
                {
                  title: 'merah',
                  id: `.qc2 merah ${text}`
                },                
                {
                title: 'hijau',
                  id: `.qc2 hijau ${text}`
                },
                {
                  title: 'kuning',
                  id: `.qc2 kuning ${text}`
                },                
                {
                title: 'ungu',
                  id: `.qc2 ungu ${text}`
                },
                {
                  title: 'birutua',
                  id: `.qc2 birutua ${text}`
                },                
                {
                  title: 'birumuda',
                  id: `.qc2 birumuda ${text}`
                },                
                {
                title: 'abu',
                  id: `.qc2 abu ${text}`
                },
                {
                title: 'orangeI',
                  id: `.qc2 orangel ${text}`
                },
                {
                  title: 'hitam',
                  id: `.qc2 hitam ${text}`
                },                
                {
                title: 'putih',
                  id: `.qc2 putih ${text}`
                },
                {
                  title: 'teal',
                  id: `.qc2 teal ${text}`
                },                
                {
                title: 'merahmuda',
                  id: `.qc2 merahmuda ${text}`
                },
                {
                  title: 'cokelat',
                  id: `.qc2 cokelat ${text}`
                },                
                {
                  title: 'salmon',
                  id: `.qc2 salmon ${text}`
                },                
                {
                title: 'magenta',
                  id: `.qc2 magenta ${text}`
                },                
                {
                title: 'tan',
                  id: `.qc2 tan ${text}`
                },
                {
                  title: 'wheat',
                  id: `.qc2 wheat ${text}`
                },                
                {
                title: 'deeppink',
                  id: `.qc2 deepink ${text}`
                },
                {
                  title: 'api',
                  id: `.qc2 api ${text}`
                },                
                {
                  title: 'birulangit',
                  id: `.qc2 birulangit ${text}`
                },                
                {
                title: 'jingga',
                  id: `.qc2 jingga ${text}`
                },                
                {
                  title: 'birulangitcerah',
                  id: `.qc2 birulangitcerah ${text}`
                },                
                {
                title: 'hotpink',
                  id: `.qc2 hotpink ${text}`
                },                
                {
                title: 'birumudalangit',
                  id: `.qc2 birumudalangit ${text}`
                },
                {
                  title: 'hijaulaut',
                  id: `.qc2 hijaulaut ${text}`
                },                
                {
                title: 'merahtua',
                  id: `.qc2 merahtua ${text}`
                },
                {
                  title: 'oranyemerah',
                  id: `.qc2 oranyemerah ${text}`
                },                
                {
                  title: 'cyan',
                  id: `.qc2 cyan ${text}`
                },                
                {
                title: 'ungutua',
                  id: `.qc2 ungutua ${text}`
                },
                {
                  title: 'hijaulumut',
                  id: `.qc2 hijaulumut ${text}`
                },                
                {
                  title: 'hijaugelap',
                  id: `.qc2 hijaugelap ${text}`
                },                
                {
                  title: 'birulaut',
                  id: `.qc2 birulaut ${text}`
                }
              ]
            }
          ]
        })
      }
      }
  ],
    headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
                    await sleep(200)
     kyami.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu1.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: qkontak
                    })
                    }
break
case 'qccode': {
reply(`Contoh: ${prefix}qc pink hallo\n\n*List Warna*\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
			}
			break
						case 'qc2': {
				if (!text) return reply(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} pink hallo\n\n*List Warna*:\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
				let [color, ...message] = text.split(' ');
				message = message.join(' ');
				let backgroundColor;

				switch (color) {
					case 'pink':
						backgroundColor = '#f68ac9';
						break;
					case 'biru':
						backgroundColor = '#6cace4';
						break;
					case 'merah':
						backgroundColor = '#f44336';
						break;
					case 'hijau':
						backgroundColor = '#4caf50';
						break;
					case 'kuning':
						backgroundColor = '#ffeb3b';
						break;
					case 'ungu':
						backgroundColor = '#9c27b0';
						break;
					case 'birutua':
						backgroundColor = '#0d47a1';
						break;
					case 'birumuda':
						backgroundColor = '#03a9f4';
						break;
					case 'abu':
						backgroundColor = '#9e9e9e';
						break;
					case 'orange':
						backgroundColor = '#ff9800';
						break;
					case 'hitam':
						backgroundColor = '#000000';
						break;
					case 'putih':
						backgroundColor = '#ffffff';
						break;
					case 'teal':
						backgroundColor = '#008080';
						break;
					case 'merahmuda':
						backgroundColor = '#FFC0CB';
						break;
					case 'cokelat':
						backgroundColor = '#A52A2A';
						break; // Added break
					case 'salmon':
						backgroundColor = '#FFA07A';
						break;
					case 'magenta':
						backgroundColor = '#FF00FF';
						break;
					case 'tan':
						backgroundColor = '#D2B48C';
						break;
					case 'wheat':
						backgroundColor = '#F5DEB3';
						break;
					case 'deeppink':
						backgroundColor = '#FF1493';
						break;
					case 'api':
						backgroundColor = '#B22222';
						break;
					case 'birulangit':
						backgroundColor = '#00BFFF';
						break;
					case 'jingga':
						backgroundColor = '#FF7F50';
						break;
					case 'birulangitcerah':
						backgroundColor = '#1E90FF';
						break;
					case 'hotpink':
						backgroundColor = '#FF69B4';
						break;
					case 'birumudalangit':
						backgroundColor = '#87CEEB';
						break;
					case 'hijaulaut':
						backgroundColor = '#20B2AA';
						break;
					case 'merahtua':
						backgroundColor = '#8B0000';
						break;
					case 'oranyemerah':
						backgroundColor = '#FF4500';
						break;
					case 'cyan':
						backgroundColor = '#48D1CC';
						break;
					case 'ungutua':
						backgroundColor = '#BA55D3';
						break;
					case 'hijaulumut':
						backgroundColor = '#00FF7F';
						break;
					case 'hijaugelap':
						backgroundColor = '#008000';
						break;
					case 'birulaut':
						backgroundColor = '#191970';
						break;
					case 'oranyetua':
						backgroundColor = '#FF8C00';
						break;
					case 'ungukehitaman':
						backgroundColor = '#9400D3';
						break;
					case 'fuchsia':
						backgroundColor = '#FF00FF';
						break;
					case 'magentagelap':
						backgroundColor = '#8B008B';
						break;
					case 'abu-abutua':
						backgroundColor = '#696969';
						break;
					case 'peachpuff':
						backgroundColor = '#FFDAB9';
						break;
					case 'hijautua':
						backgroundColor = '#BDB76B';
						break;
					case 'merahgelap':
						backgroundColor = '#DC143C';
						break;
					case 'goldenrod':
						backgroundColor = '#DAA520';
						break;
					case 'emas':
						backgroundColor = '#FFD700';
						break;
					case 'perak':
						backgroundColor = '#C0C0C0';
						break;
					default:
						backgroundColor = '#ffffff'
						message = text
				}

				try {
					avatar = await kyami.profilePictureUrl(m.sender, "image");
				} catch {
					avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg';
				}

				const json = {
					type: "quote",
					format: "png",
					backgroundColor,
					width: 700,
					height: 580,
					scale: 2,
					messages: [{
						entities: [],
						avatar: true,
						from: {
							id: 1,
							name: m.pushName,
							photo: {
								url: avatar
							}
						},
						text: message,
						"m.replyMessage": {}
					}],
				};

				try {
					const res = await axios.post("https://quotly.netorare.codes/generate", json, {
						headers: {
							"Content-Type": "application/json"
						},
					});
					const qc = Buffer.from(res.data.result.image, "base64");
					await kyami.imgToSticker(m.chat, qc, m, {
						packname: `Sticker Maker\nNomor Bot :`,
						author: `${namaBot}\n${owner}`
					});
				} catch (error) {
					console.error("Error generating QC v1:", error);
					try {
						const data = await axios.post("https://bot.lyo.su/quote/generate", json, {
							headers: {
								"Content-Type": "application/json"
							},
						});
						const qc = Buffer.from(data.data.result.image, "base64");
						await kyami.imgToSticker(m.chat, qc, m, {
							packname: `Sticker Maker\nNomor Bot :`,
							author: `${namaBot}\n${owner}`
						});
					} catch (error) {
						await m.errorReport(util.format(error), command)
					}
				}
			}
			break
case 'qc1': {
    if (!q) return reply('Enter Text');
    const ppnyauser = await kyami.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": q,
                "replyMessage": {}
            }
        ]
    };

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "Kyami Silence",
        result: buffer
    };

    kyami.sendImageAsSticker(m.chat, rest.result, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    });
}
break;
case 'setpp-panjang': {
if (!KyamiPenCewe) return kyamipriv()
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await kyami.downloadAndSaveMediaMessage(quoted)
			let botNumber = await kyami.decodeJid(kyami.user.id)
			let { img } = await pepe(media)
			await kyami.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			Reply(`Successfully replaced PP Bot`)
		} catch (e) {
			console.log(e)
			Reply(`An error occurred, please try again later.`)
		}
	} else {
		Reply(`Send image with caption *${command}* or tag images that have been sent`)
	}
}
break
case "ramalan": {
 let fortunes = [
 "🔮 Hari ini keberuntungan ada di pihakmu!",
 "⚡ Waspada dengan keputusan besar hari ini.",
 "🌞 Kamu akan mendapatkan kejutan menyenangkan!",
 "💼 Kesempatan emas sedang mendekat, jangan lewatkan!"
 ];
 let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
 m.reply(`🔮 *Ramalan Hari Ini:* \n\n${randomFortune}`);
};
break;

case "glitchtext": {
 if (!args.length) return m.reply("Masukkan teks untuk diubah menjadi glitch!");
 
 let text = args.join(" ");
 let glitch = text.split("").map(char => char + "̖̫͟").join("");
 
 m.reply(`🌌 *Glitch Text:* \n\n${glitch}`);
};
break;
case 'addcase': {

 if (!KyamiPenCewe) return reply('lu sapa asu')

 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = './start/system.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case "tourl2": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let media = await kyami.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'kyami.png');
let teks = directLink.toString()
await kyami.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case "tourl3": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let media = await kyami.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'kyami.png');

let teks = directLink.toString()
await kyami.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
case 'tourl': {
if (!KyamiPenCewe) return kyamipriv();
    const FormData = require('form-data');
    const fetch = require('node-fetch');
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';

        // Memeriksa apakah ada media yang ditemukan
        if (!mime) {
            return m.reply('No media found');
        }

        const fileBuffer = await quoted.download();

        const formData = new FormData();
        formData.append('images', fileBuffer, 'image.jpg'); // Nama file bisa disesuaikan

        const response = await fetch('https://telegraph.zorner.men/upload', {
            method: 'POST',
            headers: {
                ...formData.getHeaders(),
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload gagal dengan status ' + response.status);
        }

        const result = await response.json();
        m.reply('Upload Success:\n> ' + result.links[0]);
    } catch (error) {
        m.reply('Error saat mengunggah file: ' + error.message);
    }
}
break
case 'sifat': case 'karakter': {
if (!text) return Reply(`Contoh : ${prefix + command} nama, tanggal lahir, bulan lahir, 
tahun lahir`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return Reply(anu.message)
Reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return Reply(`Contoh : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return Reply(anu.message)
Reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'artinama': {
if (!text) return Reply(`Contoh : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return Reply(anu.message)
Reply (`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'upch': {
if (!KyamiPenCewe) return kyamipriv()
        		try {
					ppuser = await kyami.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = 'https://files.catbox.moe/j9k007.jpg'
				}	
				let fotoProfil = await getBuffer(ppuser);
				let pelers = `Message from ${m.pushName}`
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, sis! You haven't sent any media or text yet. Please try again! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ This media is sent via an automated system✨"
					if (/image/.test(mime)) {
						kyami.sendMessage(channel, {
					contextInfo: {	
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							image: media,
							caption: text ? text : defaultCaption
						})
						reply(`📸 Image successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						kyami.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							video: media,
							caption: text ? text : defaultCaption
						})
						reply(`🎥 Video successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						kyami.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							audio: media,
							mimetype: mime,
							ptt: true
						})
						reply(`🎵 Audio successfully uploaded to the channel, sis!`)
					} else if (/text/.test(mime) || text) {
						kyami.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							text: text ? text : defaultCaption
						})
						reply(`💬 Text message successfully sent to channel: "${text ? text : defaultCaption}"`)
					} else {
						reply(`Hmm... I don't know what kind of media this is. Please check again, sis! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Oh, sis! 😣 There was a problem uploading to the channel. Try again later, OK!`)
				}
			}
			break
			case 'rules': {
  const cap = `┏━━━°❀ ❬ *Rules ${namaBot} MultiDevice* ❭ ❀°━━━┓

1. ✧ *Dilarang Melakukan Spam Kepada Bot*, Jika Ketahuan Akan Di Banned.

2. ✧ Jika Bot Tidak Menjawab 1x, Silahkan Dicoba Lagi. Tapi Jika Bot Tidak Menjawab 2x, Itu Artinya Delay, Jangan Dipakai Dulu.

3. ✧ *Jangan Spam Bot, Kalau Belum Donasi, Sadar Diri Aja Makenya* :)

4. ✧ Jika Limit Habis, Silahkan Bermain Game Untuk Mendapatkan Exp. Contoh Game: Tebak-Tebakan, RPG Game, dll.

5. ✧ *Dilarang Mengirim Virtex/Bug Ke Bot*, Walaupun Tidak Ada Efeknya :v

6. ✧ *Dilarang Keras Menelpon Bot*, Jika Menelpon Akan Otomatis Diblokir.

7. ✧ Jika Tidak Mengerti Cara Menggunakan Bot, Silahkan Bertanya Pada Member Lain. Atau Jika Belum Join Group Bot, Ketik #gcbot Dan Masuk Group Bot.

8. ✧ Jika Ada Fitur Error/Tidak Mengerti Cara Menggunakannya, Silahkan Laporkan/Tanyakan Kepada Owner.

9. ✧ Jika Bot Delay, Jangan Di Spam Terlebih Dahulu.

10. ✧ Untuk User *Premium*, *Dilarang Keras Mengirim Bug Asal Ke Orang Lain*.

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`
reply(cap)
}
break
case 'donasi': {
const url = "https://img5.pixhost.to/images/3089/569873556_asytzy.jpg";
  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: kyami.waUploadToServer
    });
    return imageMessage;
  }
  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `> halo kak ${pushname}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: './kyami.jpg'
              } }, { upload: kyami.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: ownername,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> Klik tombol  di bawah untuk\n> Melihat Chanel Kyami In Here ` },
                  nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Lihat Chanel( Kyami In Here  )","url":"https://youtube.com/@SlncKyami","merchant_url":"https://youtube.com/@SlncKyami"}`
                    },
                  ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: qkontak }
  );

  await kyami.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break
case 'randomsfw':
case 'kill':
case 'pat':
case 'lick':
case 'bite':
case 'yeet':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'highfive':
case 'handhold':
  reply('.(list), (listsfw) List sfw :kill, pat, lick, bite, yeet, bonk, wink, poke, nom, slap, smile, wave, blush, smug, glomp, happy, dance, cringe, highfive, handhold ')
  await loading();
  axios.get(`https://api.waifu.pics/sfw/${command}`)
    .then(({ data }) => {
      kyami.sendMessage(from, { 
        image: { url: data.url }, 
        caption: 'Success Coy' 
      }, { quoted: qkontak });
    })
    .catch((err) => {
      console.error(err);
      kyami.sendMessage(from, { text: 'Terjadi kesalahan, coba lagi nanti.' }, { quoted: qkontak });
    });
  break
  case 'robloxstalk': {
    const userId = "user_id_yang_diberikan"; // Ganti dengan userId yang sesuai

    async function ui(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function us(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}/social`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function uin(userId) {
        const url = `https://inventory.roblox.com/v1/users/${userId}/inventory`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function up(userId) {
        const url = "https://presence.roblox.com/v1/presence/users";
        const payload = {
            userIds: [userId]
        };
        try {
            const response = await cloudscraper.post(url, {
                json: payload
            });
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function ugp(userId) {
        const url = `https://groups.roblox.com/v1/users/${userId}/groups/roles`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function robloxStalk(userId) {
        const userInfo = await ui(userId);
        const userSocials = await us(userId);
        const userInventory = await uin(userId);
        const userPresence = await up(userId);
        const userGroups = await ugp(userId);

        return {
            userInfo,
            userSocials,
            userInventory,
            userPresence,
            userGroups,
        };
    }
    const result = await robloxStalk(userId);
    if (result) {
        m.reply(`User  Info: ${JSON.stringify(result.userInfo)}\nSocials: ${JSON.stringify(result.userSocials)}\nInventory: ${JSON.stringify(result.userInventory)}\nPresence: ${JSON.stringify(result.userPresence)}\nGroups: ${JSON.stringify(result.userGroups)}`);
    } else {
        m.reply("Gagal mendapatkan data pengguna.");
    }
}
break;
  case "cekgempa":
case "infogempa": {
    m.reply(mess.wait); // Mengirim pesan "sedang memuat"
    try {
        const anu = `https://api.agatz.xyz/api/gempa`;
        const res = await fetch(anu);
        const response = await res.json();
        if (!response || !response.data) {
            throw new Error("Tidak dapat mengambil data gempa.");
        }

        let iclik = `
Wilayah: ${response.data.wilayah || "Tidak diketahui"}
Tanggal: ${response.data.tanggal || "Tidak diketahui"}
Kedalaman: ${response.data.kedalaman || "Tidak diketahui"}
Waktu: ${response.data.waktu || "Tidak diketahui"}
Potensi: ${response.data.potensi || "Tidak diketahui"}
Dirasakan: ${response.data.dirasakan || "Tidak diketahui"}
Magnitudo: ${response.data.magnitune || "Tidak diketahui"}`;

        await kyami.sendMessage(m.chat, { text: iclik }, { quoted: qkontak });
    } catch (e) {
        console.error(e); // Log error ke console
        m.reply("Ups, terjadi kesalahan saat mengambil informasi gempa. Coba lagi nanti!");
    }
}
break;
case "hackwa": {
    let teks = `🔍 *Memulai proses hack WhatsApp...*\n\n⏳ Menghubungkan ke server...\n📡 Mengakses database...\n🔑 Mengambil kode OTP...\n🛑 *Wowkwk Gimik doang bg ya kali beneran 😭*`;

    setTimeout(() => { m.reply(teks); }, 2000);
};
break;
case 'quoteshacker': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
  reply(bacotan)
}
break
case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  reply(bacotan)

}
break
case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  reply(bacotan)
}
break
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    reply(`"${motivasii}"`)
}
break
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const kyamitruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${kyamitruth}`)
}
break
case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}
break
case 'aksarasunda': {
   if (!text) return m.reply("Example: .aksarasunda apip")

const latinToSundanese = {
  'a': 'ᮅ',
  'b': 'ᮘ',
  'c': 'ᮎ',
  'd': 'ᮓ',
  'e': 'ᮌ',
  'f': 'ᮕ',
  'g': 'ᮎ',
  'h': 'ᮠ',
  'i': 'ᮄ',
  'j': 'ᮏ',
  'k': 'ᮊ',
  'l': 'ᮜ',
  'm': 'ᮙ',
  'n': 'ᮔ',
  'o': 'ᮇ',
  'p': 'ᮕ',
  'q': 'ᮃ',
  'r': 'ᮛ',
  's': 'ᮞ',
  't': 'ᮒ',
  'u': 'ᮅ',
  'v': 'ᮗ',
  'w': 'ᮝ',
  'x': 'ᮞ',
  'y': 'ᮌ',
  'z': 'ᮚ',
  ' ': ' '
};

async function convertToSundanese(text) {
  return [...text.toLowerCase()]
    .map(char => latinToSundanese[char] || char) 
    .join('');
}

const kntlsundaa = await convertToSundanese(text)
await kyami.sendMessage(m.chat, {text: `${kntlsundaa}` }, {quoted: qkontak})
}
break
case "addprem": {
if (!KyamiPenCewe) return reply("Only Owner")
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break
case 'delprem': {
    if (!KyamiPenCewe) return kyamipriv()
    if (args.length < 1) return m.reply(`Use :\n*#delprem* @tag\n*#delprem* number`);

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(premium));
        }
        m.reply("Delete success");
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
        fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(premium));
        m.reply("Success");
    }
}
break
case 'findsong': {
    const fetch = require('node-fetch');
    if (!args[0]) return reply('Masukkan beberapa kata dari lirik lagu.');

    const query = args.join(' '); 
    const apiKey = 'P3QcawG2xePU7sIxOD-4KeVMU-2mti77t6RHbo93q84Xon8hvKniFYDpphcA1kjckDXBnhdnh5spgGzpB_EQgw'; 
    const url = `https://api.genius.com/search?q=${encodeURIComponent(query)}&access_token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.response.hits.length) return reply('Lagu tidak ditemukan berdasarkan lirik tersebut.');

        const song = data.response.hits[0].result; 
        const caption = `
🎵 *Lagu Ditemukan!*
▢ *Judul*: ${song.title}
▢ *Artis*: ${song.primary_artist.name}
▢ *URL*: ${song.url}
        `.trim();
        if (song.song_art_image_url) {
            await kyy.sendMessage(m.chat, { image: { url: song.song_art_image_url }, caption }, { quoted: qkontak });
        } else {
            reply(caption);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mencari lagu. Coba lagi nanti.');
    }
}
break;
case 'kenon': {
if (!KyamiPenCewe) return reply('Fitur ini hanya dapat digunakan oleh owner.')
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Saya perhatikan ada pengguna yang menggunakan whatsapp yang dimodifikasi, jadi saya meminta dukungan untuk memblokir akun ini karena melanggar persyaratan layanan, dan akun tersebut menggunakan bot WhatsApp yang dapat mengirim pesan jahat sehingga WhatsApp pengguna lain tidak dapat berfungsi.
Nomor : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan kyami🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'waifu' :
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
kyami.sendMessage(from, {image: {url:waifudd.data.url},caption:`Dasar Wibu`}, { quoted: qkontak }).catch(err => {
 return('Error!')
})
break
/// download
case 'sspotify': {
    if (!text) return m.reply(`Masukkan judul lagu yang ingin Anda cari, Contoh: ${prefix + command} gala bunga mataharia`);
    
    m.reply('tunggu sebentar..'); 
    
    try {
        let response = await axios.get(`https://fgsi-spotify.hf.space/query=${encodeURIComponent(text)}`);
        let data = response.data;

        if (!data.status) return m.reply(`Error: ${data.msg}`);

        let { title, artist, duration, popularity, preview, thumbnail: thumbnailUrl, url } = data.result;
        let audioUrl = data.audio.url;

        const thumbnails = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' });
        const thumbnail = Buffer.from(thumbnails.data, 'binary');

        await kyami.sendMessage(m.chat, {
            image: thumbnail,
            caption: `🎵 *${title}*\n👤 *Artist:* ${artist}\n⏳ *Duration:* ${duration}\n✨ *Rate Song:* ${popularity}\n📌 *Preview:* ${preview || "No preview available"}\n🔗 *Spotify Link:* ${url}`,
        }, { quoted: qkontak });

        await kyami.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
        }, { quoted: qkontak });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil lagu dari spotify.");
    }
}
break
case 'snackvideo':{
 const cheerio = require('cheerio');
if (!text) return m.reply(`Linknya mana??`)
async function downloadSnackVideo(url) {
 return new Promise(async (resolve, reject) => {
 try {
 const response = await axios.get(url);
 const $ = cheerio.load(response.data);
 let result = {
 metadata: {},
 download: null
 };
 const json = JSON.parse($("#VideoObject").text().trim());
 result.metadata.title = json.name;
 result.metadata.thumbnail = json.thumbnailUrl[0];
 result.metadata.uploaded = new Date(json.uploadDate).toLocaleString();
 result.metadata.comment = json.commentCount;
 result.metadata.watch = json.interactionStatistic[0].userInteractionCount;
 result.metadata.likes = json.interactionStatistic[1].userInteractionCount;
 result.metadata.share = json.interactionStatistic[2].userInteractionCount;
 result.metadata.author = json.creator.mainEntity.name;
 result.download = json.contentUrl;
 resolve(result);
 } catch (error) {
 reject({ msg: error.message });
 }
 });
}
try {
const result = await downloadSnackVideo(text);
let message = `🎥 Nihh hasil download darii SnackVideo kamuu !! 🎉

✨ Judul Video : ${result.metadata.title} ✨
👀 Jumlah Tonton : ${result.metadata.watch} 👀
👤 Darii : ${result.metadata.author} 👤`

kyami.sendMessage(m.chat,{
video : { url : result.download },
caption : message
 })
} catch (err) {
console.error(err);
Reply("Error :(")}
}
break
case 'play': 
case 'ytplay': {
if (!text) return reply(`Example: ${prefix + command} Lagu sad`);
try {		
let search = await yts(`${text}`);
if (!search || search.all.length === 0) return reply(`*Lagu tidak ditemukan!* ☹️`);
let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;
kyami.sendMessage(m.chat,{
image: { url: image },
caption: caption,
footer: `${global.namaOwner}`,
buttons: [
{
buttonId: `${prefix}play1 ${text}`,
buttonText: {
displayText: "YouTube Music"
}
},
{
buttonId: `${prefix}ytmp4 ${url}`,
buttonText: {
displayText: "YouTube Video"
}
}
],
viewOnce: true,
}, {
quoted: m
});
} catch (err) {
console.error(err);
reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
}
}
break
case 'bokep': {
kyami.sendMessage(m.chat, {  text: `Silahkah Pilih *BOKEP* Yang Tersedia Di Bawah Ini  `, 
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: 'SCRIPT' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'LIST BOKEP',
          sections: [
            {
              title: 'LIST BOKEP',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'BOKEP 1',
                  id: `.vdy https://videy.co/v?id=cFmHXLnR1`
                },
                {
                  title: 'BOKEP 2',
                  id: `.vdy https://videy.co/v?id=IZ2dEEPR1`
                },                
                {
                title: 'BOKEP 3',
                  id: `.vdy https://videy.co/v?id=taEdfX521`
                },                
                {
                title: 'BOKEP 4',
                  id: `.vdy https://videy.co/v?id=yUI9qHxy1`
                },                
                {
                title: 'BOKEP 5',
                  id: `.vdy https://videy.co/v?id=VkhX0rIY1`
                },                
                {
                  title: 'BOKEP 6',
                  id: `.vdy https://videy.co/v?id=HbciV3Ng1`
                },                
                {
                title: 'BOKEP 7',
                  id: `.vdy https://videy.co/v?id=Yep64SD61`
                },                
                {
                title: 'BOKEP 8',
                  id: `.vdy https://videy.co/v?id=bliIEHfL1`
                },                
                {
                title: 'BOKEP 9',
                  id: `.vdy https://videyvideo.short.gy/Cwdcj1`
                },                
                {
                  title: 'BOKEP 10',
                  id: `.vdy https://videy.co/v?id=a1Uim8Ey`
                },                
                {
                title: 'BOKEP 11',
                  id: `.vdy https://videy.co/v?id=LevNyK2x1`
                },                
                {
                title: 'BOKEP 12',
                  id: `.vdy https://videy.co/v?id=jRlBDROc1`
                },                
                {
                title: 'BOKEP 13',
                  id: `.vdy https://videy.co/v?id=kxx94sEr1`
                },                
                {
                  title: 'BOKEP 14',
                  id: `.vdy https://videy.co/v?id=ji0jr2f71`
                                  },                
                {
                title: 'BOKEP 15',
                  id: `.vdy https://videy.co/v?id=vApGwZAC1`
                },                
                {
                title: 'BOKEP 16',
                  id: `.vdy https://videy.co/v?id=UdqYuonc1`
                },                
                {
                title: 'BOKEP 17',
                  id: `.vdy https://videy.co/v?id=KTw1lWWa1`
                },                
                {
                  title: 'BOKEP 18',
                  id: `.vdy https://videy.co/v?id=5JeZNWaH1`
                                  },                
                {
                title: 'BOKEP 19',
                  id: `.vdy https://videy.co/v?id=99FZhvO21`
                },                
                {
                title: 'BOKEP 20',
                  id: `.vdy https://videy.co/v?id=iDZaNE341`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  }, { quoted: qkontak });
}
break
case 'vdy':{
if (!isPremium && !KyamiPenCewe) return kyamipriv()
    if (!text) return reply("Masukkan Link Videy")
    if (!text.includes('videy')) return reply("Itu Bukan Link Videy")
    reply("Wait For 1-3 Menit")
    try {
        let anu = await fetchJson(`https://api.agatz.xyz/api/videydl?url=${text}`);
        let anu1 = anu.data;
        kyami.sendMessage(m.chat, { video: { url: anu1 }, caption: "Nih Bang Bokepnya" }, { quoted: m });
    } catch (err) {
        reply("Terjadi Kesalahan Saat Mengambil Data")
    }
}
break
case 'ytmp4': 
case 'ytvideo': 
case 'ytv': {
 if (!text) return reply(`Gunakan: ${prefix + command} <url> [resolusi]`); 
 let url = args[0]; 
 let resolution = args[1] && !isNaN(args[1]) ? args[1] : "720"; 
 try { 
 await kyami.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
 let info = await getVideoInfo(url);
 if (!info || !info.status) return reply('❌ Gagal mendapatkan informasi video.');
 await kyami.sendMessage(m.chat, { react: { text: '📥', key: m.key } });
 let video = await downloadVideo(url, resolution);
 if (!video.status || !video.downloadUrl) return reply('❌ Gagal mendapatkan file video.');
 let captionInfo = `📹 *${info.title}*\n👤 *Creator:* ${info.creator}\n⏳ *Durasi:* ${info.duration} detik\n📡 *Sumber:* ${video.source}\n🎥 *Resolusi:* ${resolution}p\n🔗 *URL:* ${info.url}`;
 await kyami.sendMessage(m.chat, {
 image: { url: info.thumbnail },
 caption: captionInfo
 }, { quoted: m });
 await kyami.sendMessage(m.chat, { react: { text: '📤', key: m.key } });
 let fileSize = await getFileSizeFromUrl(video.downloadUrl);
 let captionMedia = `📹 *${info.title}*\n👤 *${info.creator}*\n📡 *Sumber:* ${video.source}`;
 if (fileSize > 15 * 1024 * 1024) {
 await kyami.sendMessage(m.chat, { 
 document: { url: video.downloadUrl },
 mimetype: 'video/mp4',
 fileName: `${info.title}.mp4`,
 caption: captionMedia
 }, { quoted: m });
 } else {
 await kyami.sendMessage(m.chat, { 
 video: { url: video.downloadUrl },
 caption: captionMedia,
 fileName: `${info.title}.mp4`
 }, { quoted: m });
 }
 await kyami.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) { 
 console.error(err); 
 reply('❌ Terjadi kesalahan.'); 
 } 
} 
break
case "playspotify": case "plays": case "playsp": {
if (!text) return Reply(example("intro ariana"))
await kyami.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})

var anu = await fetchJson("https://restapi.simplebot.my.id/api/download/playspotify?q="+text)

if (anu.result.download.link) {
let urlMp3 = anu.result.download.link
await kyami.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: anu.result.metadata.cover_url, title: anu.result.metadata.title, body: `Author ${anu.result.metadata.artists} || Duration ${anu.result.metadata.duration}`, sourceUrl: anu.result.metadata.link, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: qkontak})
} else {
return Reply("Error! vidio atau lagu tidak ditemukan")
}
}
break
case "yts": {
if (!text) return Reply(example('we dont talk'))
await kyami.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await Reply(teks)
}
break
case "ytmp3": {
if (!text) return Reply(example("linknya"))
if (!text.startsWith("https://")) return Reply("Link Tautan Tidak Valid")
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await kyami.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: qkontak})
} else {
return Reply("Error! vidio atau lagu tidak ditemukan")
}
}
break
            case "play1":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
                await reaction(m.chat, '⚡')
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                kyami.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: qkontak })
            }
            break
                //// BETA
            case "public":{
                if (!KyamiPenCewe) return kyamipriv() 
                kyami.public = true
                reply(`successfully changed to ${command}`)
            }
            break
            case 'done': {

    let t = text.split(',');

    if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,sistem`);
    
    let barang = t[0];
    let nominal = t[1];
    let sistem = t[2];
    
    reply(`╔════════════════════╗
     *TRANSAKSI BERHASIL*  
          BY *${global.nama}*
╚════════════════════╝

📦 *Barang:* ${barang}  
💵 *Nominal:* Rp${nominal}  
🔧 *Sistem:* ${sistem}  
🏢 *Nama Store:* ${global.owner}

━━━━━━━━━━━━

🙏 *TERIMA KASIH TELAH ORDER DI ${global.nama}*  
🔁 *JANGAN LUPA ORDER LAGI YA!*  


*🪷TESTIMONI SALURAN :* ${global.ch}

━━━━━━━━━━━━`);
}
break;
case "cekidgc": {

    // Cek jika pengguna adalah Creator

    if (!KyamiPenCewe) return reply("Fitur ini hanya bisa digunakan oleh Creator bot!");

    try {
        let getGroups = await kyami.groupFetchAllParticipating();
        let groups = Object.entries(getGroups).map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);

        let teks = `⬣ *LIST GROUP BY KYAMI SILENCE*\n\nTotal Group: ${anu.length} Group\n\n`;

        for (let x of anu) {
            try {
                let metadata2 = await kyami.groupMetadata(x);
                teks += `◉ Nama: ${metadata2.subject}\n◉ ID: ${metadata2.id}\n◉ Member: ${metadata2.participants.length}\n\n────────────────────────\n\n`;
            } catch (e) {
                teks += `◉ [Gagal mengambil data group ID: ${x}]\n\n`;
            }
        }

        reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`);
    } catch (error) {
        console.error(error);
        reply("Terjadi kesalahan saat mengambil data group. Silahkan coba lagi nanti.");
    }
}
break;
case 'brat': {
if (!text) return Reply(`\n*ex:* ${prefix + command} apanih cok\n`)
kyami.sendMessage(m.chat, {  text: `𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘗𝘪𝘭𝘪𝘩 𝘛𝘺𝘱𝘦 𝘉𝘳𝘢𝘵 𝘠𝘢𝘯𝘨 𝘛𝘦𝘳𝘴𝘦𝘥𝘪𝘢 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪`,
image: { url: 'https://files.catbox.moe/51dx8h.jpg' },
caption: text,
footer: `${global.foother}`,
buttons: [
{
buttonId: `${prefix}brt ${text}`,
buttonText: {
displayText: "𝘉𝘳𝘢𝘵 𝘐𝘮𝘢𝘨𝘦𖤓"
}
},
{
buttonId: `${prefix}brt1 ${text}`,
buttonText: {
displayText: "𝘉𝘳𝘢𝘵 𝘝𝘪𝘥𝘦𝘰𖤓"
}
}
],
viewOnce: true,
}, {
quoted: qkontak
});
                    await sleep(200)
     kyami.sendMessage(m.chat, {
                        audio: fs.readFileSync('./start/lib/media/menu1.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: qkontak
                    })
                    }
break
case "brt": {
if (!text) return Reply(`\n*ex:* ${prefix + command} apanih cok\n`)
  const media = `https://brat.caliphdev.com/api/brat?text=${text}`;
  await reaction(m.chat, "💔")

  kyami.sendImageAsSticker(m.chat, media, m, {
    packname: packname,
    author: author
  });
}
break
case 'brt1': {
 if (!text) return m.reply('teksnya')
 try {
     await kyami.sendMessage(m.chat, {react: {text: '💫', key: m.key}});
     const apiUrl = `https://brat.caliphdev.com/api/brat/animate?text=${encodeURIComponent(text)}`;
     const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
     const buffer = Buffer.from(response.data, 'binary');
     
     const tempInput = `./start/tmp/temp_input_${global.foother()}.bin`;
     const tempOutput = `./start/tmp/temp_output_${global.foother()}.webp`;
     fs.writeFileSync(tempInput, buffer);
     await new Promise((resolve, reject) => {
         ffmpeg(tempInput)
             .outputOptions([
                 '-vcodec', 'libwebp',
                 '-lossless', '1',
                 '-loop', '0',
                 '-preset', 'default',
                 '-an',
                 '-vsync', '0',
                 '-f', 'webp'
             ])
             .on('end', () => resolve())
             .on('error', (err) => reject(err))
             .save(tempOutput);
     });
    
     await kyami.sendAsSticker(m.chat, tempOutput, m, { packname: global.packname });
     fs.unlinkSync(tempInput);
     fs.unlinkSync(tempOutput);
     await kyami.sendMessage(m.chat, {react: {text: '⚡', key: m.key}});
 } catch (error) {
     console.error('Error making sticker:', error);
     m.reply('Terjadi kesalahan saat membuat stiker video.');
 }
}
break
case "brt5": {
if (!text) return reply('teksnya')
try {
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
await reaction(m.chat, "💔")
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await kyami.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break
                case "cadmin": {
if (!KyamiPenCewe) return kyamipriv()

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "0247"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {

        text: tks,

    }

	

    await kyami.sendMessage(m.chat, listMessage)

    await kyami.sendMessage(nomornya, {

        text: `*DETAIL AKUN ADMIN  PANEL ANDA*


╭─❏ *『 USER INFO 』*
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣

_*Rules :*_
*- Jangan Hapus Akun Admin Lain*
*- Jangan Colong SC Buyer panel*
*- Jangan membuat Panel Terlalu besar*
*- Jangan Share Akun Admin Panel Kalian*
*- Jangan Membuat Akun Admin Panel Lain*
*- Jangan Open Reseller Panel*
*- Jangan Otak Atik Server Panel*
*- Jangan Give Away Panel*
*Melanggar Salah Satu Rules Di Atas Langsung Di Hapus Admin Panel Nya*
_*mohon ikuti rules nya*_
`,

    })        
}
break
case "cadmin-v2": {
if (!KyamiPenCewe) return kyamipriv()

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "0247"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {

        text: tks,

    }

	

    await kyami.sendMessage(m.chat, listMessage)

    await kyami.sendMessage(nomornya, {

        text: `*DETAIL AKUN ADMIN  PANEL ANDA*


╭─❏ *『 USER INFO 』*
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password}
┣❏ ➤ *🌐LOGIN* : ${domain2}
┗⬣

_*Rules :*_
*- Jangan Hapus Akun Admin Lain*
*- Jangan Colong SC Buyer panel*
*- Jangan membuat Panel Terlalu besar*
*- Jangan Share Akun Admin Panel Kalian*
*- Jangan Membuat Akun Admin Panel Lain*
*- Jangan Open Reseller Panel*
*- Jangan Otak Atik Server Panel*
*- Jangan Give Away Panel*
*Melanggar Salah Satu Rules Di Atas Langsung Di Hapus Admin Panel Nya*
_*mohon ikuti rules nya*_
`,

    })        
}
break
case "cadmin-v3": {
if (!KyamiPenCewe) return kyamipriv()

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "0247"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {

        text: tks,

    }

	

    await kyami.sendMessage(m.chat, listMessage)

    await kyami.sendMessage(nomornya, {

        text: `*DETAIL AKUN ADMIN  PANEL ANDA*


╭─❏ *『 USER INFO 』*
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password}
┣❏ ➤ *🌐LOGIN* : ${domain3}
┗⬣

_*Rules :*_
*- Jangan Hapus Akun Admin Lain*
*- Jangan Colong SC Buyer panel*
*- Jangan membuat Panel Terlalu besar*
*- Jangan Share Akun Admin Panel Kalian*
*- Jangan Membuat Akun Admin Panel Lain*
*- Jangan Open Reseller Panel*
*- Jangan Otak Atik Server Panel*
*- Jangan Give Away Panel*
*Melanggar Salah Satu Rules Di Atas Langsung Di Hapus Admin Panel Nya*
_*mohon ikuti rules nya*_
`,

    })        
}
break
        case "listadmin": {
if (!KyamiPenCewe) return kyamipriv()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await kyami.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
        case "listadmin-v2": {
if (!KyamiPenCewe) return kyamipriv()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await kyami.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
        case "listadmin-v3": {
if (!KyamiPenCewe) return kyamipriv()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain3 + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey3
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await kyami.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
case "listsrv": {
  if (!KyamiPenCewe) return kyamipriv()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await kyami.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
case "listsrv-v2": {
  if (!KyamiPenCewe) return kyamipriv()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain2 + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await kyami.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
case "listsrv-v3": {
  if (!KyamiPenCewe) return kyamipriv()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain3 + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey3
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain3 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey3
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await kyami.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
case "delsrv": {
if (!KyamiPenCewe) return kyamipriv()

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delsrv-v2": {
if (!KyamiPenCewe) return kyamipriv()

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr-v2": {
  if (!KyamiPenCewe) return kyamipriv()
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
} 
break
case "delsrv-v3": {
if (!KyamiPenCewe) return kyamipriv()

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain3 + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr-v3": {
  if (!KyamiPenCewe) return kyamipriv()
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain3 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
} 
break
case "1gb": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY 𝘙𝘺𝘰𝘶 𝘠𝘢𝘮𝘢𝘥𝘢〽️

 *DONE CREATE USER + SERVER ID :* ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
DONE CUY, DATA SUDAH TERKIRIM KE NOMOR TERSEBUT ANJAY... 
© 𝘙𝘺𝘰𝘶 𝘠𝘢𝘮𝘢𝘥𝘢
`)        
} 
break
case "2gb": {
if (!isPremium && !isOwner) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "50"
let disk = "2048"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "3gb": {
if (!isPremium && !isOwner) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "70"
let disk = "3072"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}
break
case "5gb": {
if (!isPremium && !isOwner) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "110"
let disk = "5138"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "00111"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}        
break
case "4gb": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "90"
let disk = "4048"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "6gb": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "6148"
let cpu = "125"
let disk = "6148"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "7gb": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "7158"
let cpu = "150"
let disk = "7158"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "8gb": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "8180"
let cpu = "170"
let disk = "8180"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "9gb": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "9197"
let cpu = "190"
let disk = "9197"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "10gb": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "10200"
let cpu = "200"
let disk = "10200"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "unli": {
if (!isPremium && !KyamiPenCewe) return kyamipriv()
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}        
break
case "1gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "2gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "50"
let disk = "2048"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "3gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "70"
let disk = "3072"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "4gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "90"
let disk = "4048"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "5gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "110"
let disk = "5138"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "6gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "6148"
let cpu = "125"
let disk = "6148"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "7gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "7158"
let cpu = "150"
let disk = "7158"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "8gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "8180"
let cpu = "170"
let disk = "8180"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "9gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "9197"
let cpu = "190"
let disk = "9197"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "10gb-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "10200"
let cpu = "200"
let disk = "10200"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "unli-v2": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain2}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER V2*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "1gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "2gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "50"
let disk = "2048"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "3gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "70"
let disk = "3072"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "4gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "90"
let disk = "4048"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "5gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "110"
let disk = "5138"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "6gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "6148"
let cpu = "125"
let disk = "6148"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "7gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "7158"
let cpu = "150"
let disk = "7158"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "8gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "8180"
let cpu = "170"
let disk = "8180"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "9gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "9197"
let cpu = "190"
let disk = "9197"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "10gb-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "10200"
let cpu = "200"
let disk = "10200"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "unli-v3": {
    if (!isOwner && !isPremium) return reply('Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner')

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://files.catbox.moe/51dx8h.jpg" 
if (!u) return
let d = (await kyami.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain3 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain3 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*『 DATA AKUN PANEL ANDA 』*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain3}

NOTE:
[𝟭] 𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 
[𝟮] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔
[𝟯] 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 
===============================
`
kyami.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: kyami.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain3 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey3,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER v3*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)        
}  
break
case "antilink3": {
if (!m.isGroup) return reply('Fitur Khusus Group!!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!KyamiPenCewe) return kyamipriv()
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return reply("*Antilink* Di Grup Ini Sudah Aktif!")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./command/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./command/antilink.json", JSON.stringify(antilink))
reply("Berhasil Menyalakan *Antilink* Di Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return reply("*Antilink* Di Grup Ini Belum Aktif!")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./command/antilink.json", JSON.stringify(antilink))
reply("Berhasil Mematikan *Antilink* Di Grup Ini")
} else {
return reply("on/off")
}}
break
case "antilink4": {
if (!m.isGroup) return reply('Fitur Khusus Group!!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!KyamiPenCewe) return kyamipriv()
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return reply("*AntilinkV2* Di Grup Ini Sudah Aktif!")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./command/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./command/antilink2.json", JSON.stringify(antilink2))
reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return reply("*AntilinkV2* Di Grup Ini Belum Aktif!")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./command/antilink2.json", JSON.stringify(antilink2))
reply("Berhasil Mematikan *Antilink* Di Grup Ini")
} else {
return reply("on/off")
}}
break
case 'antilink2': {
if (!KyamiPenCewe) return kyamipriv()
let mde = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘛𝘰 𝘌𝘯𝘢𝘣𝘭𝘦 𝘖𝘳 𝘋𝘪𝘴𝘢𝘣𝘭𝘦 𝘈𝘯𝘵𝘪𝘭𝘪𝘯𝘬 𝘝2

> 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`
kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: '𝘚𝘊𝘙𝘐𝘗𝘛' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
          sections: [
            {
              title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '𝘌𝘕𝘈𝘉𝘓𝘌',
                  id: `.antilink3 on`
                },
                {
                  title: '𝘋𝘐𝘚𝘈𝘉𝘓𝘌',
                  id: `.antilink3 off`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
      image: { url: 'https://files.catbox.moe/51dx8h.jpg' },
      caption: mde,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: '© 𝙺𝚢𝚊𝚖𝚒 𝚂𝚒𝚕𝚎𝚗𝚌𝚎',
      thumbnailUrl: 'https://files.catbox.moe/zz5ys6.jpg',
      sourceUrl: chjid,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
                    }
break
case 'antilink': {
if (!KyamiPenCewe) return kyamipriv()
let mde = `𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵 𝘛𝘰 𝘌𝘯𝘢𝘣𝘭𝘦 𝘖𝘳 𝘋𝘪𝘴𝘢𝘣𝘭𝘦 𝘈𝘯𝘵𝘪𝘭𝘪𝘯𝘬

> 𝘍𝘶𝘳𝘪𝘯𝘢 𝘟 𝘏𝘶𝘛𝘢𝘰 𝘔𝘶𝘭𝘵𝘪 𝘋𝘦𝘷𝘪𝘤𝘦`
kyami.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.sc`,
      buttonText: { displayText: '𝘚𝘊𝘙𝘐𝘗𝘛' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
          sections: [
            {
              title: '𝘗𝘭𝘦𝘢𝘴𝘦 𝘚𝘦𝘭𝘦𝘤𝘵',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '𝘌𝘕𝘈𝘉𝘓𝘌',
                  id: `.antilink4 on`
                },
                {
                  title: '𝘋𝘐𝘚𝘈𝘉𝘓𝘌',
                  id: `.antilink4 off`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
      image: { url: 'https://files.catbox.moe/51dx8h.jpg' },
      caption: mde,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: '© 𝙺𝚢𝚊𝚖𝚒 𝚂𝚒𝚕𝚎𝚗𝚌𝚎',
      thumbnailUrl: 'https://files.catbox.moe/zz5ys6.jpg',
      sourceUrl: chjid,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: qkontak
                    })
                    }
break
            case 'pushkontak': {

    if (!isGroup) return reply('Fitur ini hanya dapat digunakan di grup.');

    if (!KyamiPenCewe) return reply('Hanya owner yang dapat menggunakan fitur ini.');

    const groupMetadata = await kyami.groupMetadata(from);
    const participants = groupMetadata.participants;

    if (!text) return reply('Silakan masukkan pesan yang ingin dikirim.');

    const pesan = text.trim(); 
    let success = 0;
    let failed = 0;

    for (let member of participants) {
        const memberId = member.id; 
        try {
            // Kirim pesan ke anggota grup
            await kyami.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke: ${memberId}`);
            success++;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
            failed++;
        }
        await sleep(global.delayPushkontak);
    }

    reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    break;
}
case 'pushkontakid': {

    if (!KyamiPenCewe) return reply('Fitur ini hanya dapat digunakan oleh owner.');


    const args = text.split('|');
    if (args.length < 2) return reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890123456789@g.us|Woi Jawir`);

    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
        const groupMetadata = await kyami.groupMetadata(groupId);
        const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await kyami.sendMessage(memberId, { text: pesan });
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(global.delayPushkontak);
        }

        reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
    break;
}
            case "self":{
                if (!KyamiPenCewe) return kyamipriv() 
                kyami.public = false
                reply(`successfully changed to ${command}`)
            }
            break
                
            case 'tagall':{
                if (!isAdmins) return reply(mess.admin);
                if (!m.isGroup) return reply(mess.group);
                
                const textMessage = args.join(" ") || "nothing";
                let teks = `tagall message :\n> *${textMessage}*\n\n`;

                const groupMetadata = await kyami.groupMetadata(m.chat);
                const participants = groupMetadata.participants;

                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                kyami.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: qkontak });
            }
            break         
            
            case "h":
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !KyamiPenCewe) return reply(mess.admin)
                if (m.quoted) {
                    kyami.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    kyami.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: qkontak })
                }
            }
            break
              
            default:
                if (budy.startsWith('$')) {
                    if (!KyamiPenCewe) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!KyamiPenCewe) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await m.reply(evaled);
                    } catch (err) {
                        m.reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!KyamiPenCewe) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
