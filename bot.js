const Discord = require("discord.js");
const client1 = new Discord.Client();



client1.on('message', msg => {

    if (msg.content == '69join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client1.login(process.env.token1)

const client2 = new Discord.Client();



client2.on('message', msg => {

    if (msg.content == '69join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client2.login(process.env.token2)
const client3 = new Discord.Client();



client3.on('message', msg => {

    if (msg.content == '69join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client3.login(process.env.token3)
