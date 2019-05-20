const Discord = require('discord.js');
const MooDY = new Discord.Client();

client.on('ready', () => {
  client.user.setGame(`By | Mo oDY`,'https://www.twitch.tv/iiMooDY9');
  console.log("["+MooDY.user.username+"] Online now !!");
});
MooDY.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
ألسـلآم عليـكم 

ياقـلبي خش السيـرفر ذا 

وبكـون شـآكر لكك
                               [ https://discord.gg/4ntmNUB ] 
ألـدعوةة ذي خآصةة لك ${member} !
**`) 
}).catch(console.error)
})
MooDY.login(" "); // <= SharingBot token here !!