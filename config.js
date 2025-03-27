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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_43_03_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICA4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFFYXBEYjZKWDlBb3d6VytRWFc2dXRFdno2NGE1ZGNpbTdHOCs0WVB4VUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTA0MjI1ODc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOUJGOTY0NEU0Mzc3MDYyNUFFNUVBMUQ0OUQyNzRCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDMwNDM0MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMDQyMjU4NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVBNDE3Mjg0MzZBQTRDNEY5ODBFRkEzMUQxQ0VGQ0QxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzA0MzQyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuSEUxbURVclNVaUdjcDlRTnRQQzBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzMGZkM2VhLTFkNGQtNDFlOS1hZTcwLTI5OTU2YTlhNDQzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDI0MSxcbiAgICAgIDI2LFxuICAgICAgODcsXG4gICAgICAxNzUsXG4gICAgICAxNDksXG4gICAgICA5MCxcbiAgICAgIDQ2LFxuICAgICAgMTg1LFxuICAgICAgMTQ3LFxuICAgICAgNzQsXG4gICAgICAzOCxcbiAgICAgIDEyMixcbiAgICAgIDIwMCxcbiAgICAgIDY4LFxuICAgICAgNjgsXG4gICAgICAxODIsXG4gICAgICAyMTksXG4gICAgICAxNjEsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMjUxLFxuICAgICAgMzEsXG4gICAgICAxNzMsXG4gICAgICAxNTgsXG4gICAgICAxMCxcbiAgICAgIDE4NyxcbiAgICAgIDUxLFxuICAgICAgMTg0LFxuICAgICAgMTM4LFxuICAgICAgMzMsXG4gICAgICAxMjIsXG4gICAgICAxMjksXG4gICAgICAxNjgsXG4gICAgICAyMSxcbiAgICAgIDQ4LFxuICAgICAgMjE4LFxuICAgICAgMTM1LFxuICAgICAgMzYsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0NMS1oxNlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNDIyNTg3Njo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2hha2VlbFwiLFxuICAgIFwibGlkXCI6IFwiMTk2ODY0NzI0OTY3NTU4OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERZOVBZREVOMzJrcjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvY2QyWnBoNzVvSmxjdkhHdG5kK2dLRnI0SXA5bmwvdTdsRUZrNHlSMkNNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFqMG5EaXVTbnREZW9DL1Bncm5SZUc0b1hBZ3NUeFVqMW9aZTVvUmpDNzcrOXBsRGlqSE9zMTlEalpab3VmNVArbVM1cDRmWVUzU0VGcTlXMGs4akRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhKVFlJNEtaUEx1ZTArL1Jxc3MvRlZiNU85aVNtZW9SRXdNcWh2MDBRdnpvd2JpaEVnd2xRcC9wOGJZdm1zMllTOHdQWFNLd0lOWFhVUS85M3h0RmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwNDIyNTg3Njo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzA0MzQyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdRZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1FkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNXRZaTlVb2FxVVB3bXJFNGd6WExqS3g5TW9JUkJSSjVYSUVJaUtoRUVRWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDU0NjgyMjI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDMwNDM0MzAwOTFcIn0iCn0="  // PUT your SESSION_ID 


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
