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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_42_02_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidnQ5M1ZDdVRoZE1HTmx4UGpRd0czWUxDTGFxc2l3ZENENlZxMS9XTlV4ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGVydVQ4bjBTa0MxU1VRYi1FRlBzd1wiLFxuICBcInBob25lSWRcIjogXCI5NjgzYTI4OS05YzI4LTQ2MTAtYmQ4Yi01ZWE5YjI3MjUxZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTU5LFxuICAgICAgMjAsXG4gICAgICAxMTMsXG4gICAgICAxMTAsXG4gICAgICAxOTgsXG4gICAgICAxNzUsXG4gICAgICA1MixcbiAgICAgIDE4MSxcbiAgICAgIDc5LFxuICAgICAgMTYsXG4gICAgICAyMzYsXG4gICAgICA1NixcbiAgICAgIDEzNyxcbiAgICAgIDE2MSxcbiAgICAgIDIwMixcbiAgICAgIDI0MyxcbiAgICAgIDI1NSxcbiAgICAgIDcxLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA5LFxuICAgICAgNzIsXG4gICAgICAxMTEsXG4gICAgICA5NSxcbiAgICAgIDIxLFxuICAgICAgMTIyLFxuICAgICAgNzUsXG4gICAgICAzLFxuICAgICAgMTk1LFxuICAgICAgMTU5LFxuICAgICAgNzcsXG4gICAgICAxMjIsXG4gICAgICAxMTQsXG4gICAgICAyMzYsXG4gICAgICAyNDAsXG4gICAgICAxMTYsXG4gICAgICAyMjQsXG4gICAgICA5NyxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0RUhEOEY2MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MjI2NDE5MjAyMDcyNDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXZ2hiNEZFT09hM2IwR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmt1aWE3UE1yS1c1b014bU8wekwwMnFrUnRYQm9OeGhvZVdiOTM0d0xBWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhN2lsRDZpUzlOcmxZc0RiRkY4N3NrTkR3YmJROTliek52dVVtZ3h4N3dXWG1QbERBa3BtZWpJUnlaNk9WY0ZHM1FGV29UN1FseVRabFhSeWhWYVJDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuWlhzYkN3WHI0bTVpbFYwVldiWXVHUUU1NXpqM1BuL1BEMkY3dmpWT3lvRDhVSlFXWFBRazlMRzJSL0xtRE5rZC9CUEMzSmJnSzNXVFRyOW9Fc1pBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MDA2NjE1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ1bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnVsLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
