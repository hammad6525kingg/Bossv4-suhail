const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_43_02_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm41K3BTUHcyVkxpVU5vMElMS3FRMHloeko2VnNpdzFqNU1pdUo0YURoZGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwODA2MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5ODExNDQ1MEE2QjA0MzU3MDgwMEFEMkMzODZBOTQ5NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDA1ODQ2MDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUFVpRjBXbzdSc3VyMGVzdEZOVGt2QVwiLFxuICBcInBob25lSWRcIjogXCIyYjM1NmY2Yi00NTE3LTRhNGYtODc1ZS04Y2MzZDQ0YTkzM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMjUxLFxuICAgICAgOTgsXG4gICAgICAxMDUsXG4gICAgICAxODcsXG4gICAgICAyMzUsXG4gICAgICA2NSxcbiAgICAgIDIzMSxcbiAgICAgIDQ2LFxuICAgICAgMTg4LFxuICAgICAgMTc2LFxuICAgICAgMTIwLFxuICAgICAgMTAxLFxuICAgICAgMTQ2LFxuICAgICAgNjIsXG4gICAgICA1OCxcbiAgICAgIDk2LFxuICAgICAgMjM5LFxuICAgICAgMTg0LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTkyLFxuICAgICAgMjM2LFxuICAgICAgMTA4LFxuICAgICAgMTA3LFxuICAgICAgMzMsXG4gICAgICAxMDksXG4gICAgICA5OSxcbiAgICAgIDEwNyxcbiAgICAgIDE4NSxcbiAgICAgIDI0MCxcbiAgICAgIDIyMyxcbiAgICAgIDEwMCxcbiAgICAgIDIwMSxcbiAgICAgIDIwNCxcbiAgICAgIDk2LFxuICAgICAgNzcsXG4gICAgICAxMTYsXG4gICAgICA4MyxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhQMlMxSFI5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzaWxlbnQga2lsbGVyXCIsXG4gICAgXCJsaWRcIjogXCIxOTcyNDI1MTQzMzc5OTE6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlNrdi9vREVKWHQvTDBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUaGpaZVBOVkdJeEhCdjhYT3BkK3hsUEx4d0RKZHB5Rk8xOE1XeTRsQlJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJ4MDM2ck5kcW9lRzI5TnhORG9Hak1OYlVRRnkrSG9hSEVOSll0SGhXcDN5QUcwaUczc2laVHI4ZGFwZ1Y3TVNUYTFwditJYzJUQlErQ0xBWWlkNEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRLYXZoVTIyUUhvWWdma21kQmZTblE1WDZoZHBkbXB0S1NGN0VkY2pIaWhUK2ZOREU0cTl0eDhMREJYRnh5aG11MHladHBVSVNUUkZRYUhKQ3JrWWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDU4NDYwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsrZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSytnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmt5LzdQNTFmM2twWXBtbGZidTJueFZiWk9yN0lDT3pTeHlIYVZsUzVTST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDYyMTk1Nzk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDA1ODQ2MDI0ODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
