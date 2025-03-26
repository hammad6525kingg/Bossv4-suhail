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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_37_03_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJqRXdTOEJqL1V0d1NBOHJSY0lMM2ZjSll0Nnh6TWg1NStkdFU5TzhqZGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwODA2MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzODdDMEJGMTBBMkJGRTM3QUI3MkU4NjlDODlCNjk1OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDMwMDM0NDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicWtKQ0xrN2tUQmU1QzZjUWNjTUYwd1wiLFxuICBcInBob25lSWRcIjogXCIzNDRkYzJkMy0yY2VhLTQyYjAtOTIyNy05OWNiNDIzZGNlZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgNTUsXG4gICAgICAxMDQsXG4gICAgICAyNDEsXG4gICAgICAxODMsXG4gICAgICAxNixcbiAgICAgIDMsXG4gICAgICAxMCxcbiAgICAgIDIwMixcbiAgICAgIDYsXG4gICAgICAxOTgsXG4gICAgICAyMjMsXG4gICAgICAzNixcbiAgICAgIDMwLFxuICAgICAgMjEzLFxuICAgICAgMjQsXG4gICAgICA2LFxuICAgICAgMjE3LFxuICAgICAgMTIzLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAyMCxcbiAgICAgIDIwMCxcbiAgICAgIDE4OSxcbiAgICAgIDIxOCxcbiAgICAgIDEzNixcbiAgICAgIDE3NixcbiAgICAgIDIxOSxcbiAgICAgIDExMCxcbiAgICAgIDE5MSxcbiAgICAgIDExOCxcbiAgICAgIDEzMixcbiAgICAgIDM3LFxuICAgICAgMjEyLFxuICAgICAgMyxcbiAgICAgIDEzOCxcbiAgICAgIDEzMixcbiAgICAgIDE4NSxcbiAgICAgIDQ5LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3OEtUQkdWV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2lsZW50IGtpbGxlclwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05la3Yvb0RFTEcra0w4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGhqWmVQTlZHSXhIQnY4WE9wZCt4bFBMeHdESmRweUZPMThNV3k0bEJSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKOWFDT2o0YXNHeWZodTMxekJZU1RidmVFV1BoQWoxTXpod1hXT3oxbjY4OWVLMTVRY0hHQStMQUZrUFltcGx2THRTeE9kTnIwMWFqcUV0YmRIcC9Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiNjd2SjUxS2F5d0haMEZhdWRyYXFCMUN2TlgrRmJJMktmK2QwTFNMUVoxOFhwenROMi93YnJVQmVtcXZPTEltQVJKeS9sa2s4aFc4YUZZVWQwK29Ddz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDMwMDM0NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCRExcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJETC5qc29uIjogIntcImtleURhdGFcIjpcIm5OQm5lb1lXQ1BMWHV6KzlwdDBySk85eXJNTGZnWVdGWkxuNGUyb3VyVFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2MjE5NTc5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQzMDAzNDQ1ODE4XCJ9Igp9"  // PUT your SESSION_ID 


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
