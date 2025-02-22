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


global.devs = "923270736032" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923270736032";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_05_02_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRjNEdFanBqcE0xK3UrUUJHWHoyYW12bnRReTd4TWV5ZGFtaEhSY21ydkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjcwNzM2MDMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NEM1RUMzMTgxMEQ1QjQ0ODAyQkYzOUMxODhEMUFGMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDAyMjk1MDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzA3MzYwMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg1Njc5OUZGQkFGQ0RERkEwQkQ4RUVCMUVFODg0RTAxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MDIyOTUwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKRE9FQnVrT1NYT2dJLThTWFo1aEZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1Y2RmYTZiLTc4NmUtNGMxNS04YTMxLTQ1ZjY0NWNhNWQ0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDIzNyxcbiAgICAgIDY4LFxuICAgICAgNTEsXG4gICAgICAyMjQsXG4gICAgICAxNDMsXG4gICAgICAxOTgsXG4gICAgICAxMzksXG4gICAgICAyMjAsXG4gICAgICAxNTUsXG4gICAgICAxNzYsXG4gICAgICAyMTAsXG4gICAgICAyMTMsXG4gICAgICAzLFxuICAgICAgNDYsXG4gICAgICAxNjIsXG4gICAgICAyNixcbiAgICAgIDE5MixcbiAgICAgIDEwMyxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICA4NCxcbiAgICAgIDEwNSxcbiAgICAgIDE2NixcbiAgICAgIDEyOSxcbiAgICAgIDIyMCxcbiAgICAgIDUzLFxuICAgICAgMTU5LFxuICAgICAgMTY4LFxuICAgICAgMTM3LFxuICAgICAgMjMsXG4gICAgICAxODEsXG4gICAgICA2OCxcbiAgICAgIDExMyxcbiAgICAgIDE2OSxcbiAgICAgIDIxLFxuICAgICAgMjUyLFxuICAgICAgMTc1LFxuICAgICAgMzAsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNTUdLNUdIWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjcwNzM2MDMyOjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUWFtYXJcIixcbiAgICBcImxpZFwiOiBcIjEzNzI1MDM3NzU3NjQ2MDo5M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdlEwRklRLzVibnZRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhHSFVPQlNtQ29wUzJROGVRcG1MOUw1ZEVWL2NncklodFpwL05RTnBkd009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidWd2YnZxREIyS3JiZWl6S2MrelNoUUJxdDVyajVyVGJWQWJlNFdXZDhoOTZiVkxEWmdINzRvejczYTZabldiejVPUWdrU2QvS1RRRHFkM1VIbFRQQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVE5MZTJwRFdDWXdoYjRBZUxCR0VkdndnZzNybk0razZxQjVwbFNTYWhsU3ZuN2ZHU3dVOW1XRE85SmpzaW5aQk9QaXJSNk55R0J2OXBmdUN4MFAraGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjcwNzM2MDMyOjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDIyOTUwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhyUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHJRLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
