require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'b.allen') {
    msg.channel.send('@everyone Allen is a big doo doo head');

  } 

  if (msg.content === 'l.list') {

    const filter = (m) => m.author.id === '688202466315206661';

    msg.channel.awaitMessages(filter, {
      max: 1,
      time: 70000,
      errors:['time']
    })
    .then((collected) => {

      const collectedMsg = collected.first();


      if(collectedMsg.embeds[0].description === "Lootcode has spawned! Enter the code using the `claim` command to win goodies!"){
        msg.channel.send("OOPS! LOOTCRATE SPAWNED. TRY L.LIST AGAIN!");
      }

      bot.on('messageUpdate', (oldMessage, newMessage) => {

        let loggedWaifuList = oldMessage;


        if(newMessage.author.id === '688202466315206661') {
          console.log("1");

          console.log(`
        

        `);
        console.log("----PREVIOUS PAGE----");
        console.log(oldMessage.embeds[0].description);
        console.log("------------------------------");
        console.log(`
      
        `);

        console.log("----NEXT PAGE----");
        console.log(newMessage.embeds[0].description);
        console.log("------------------------------");
        console.log(`
        
        
        


        
        `);

        console.log("2");
        }
      });
      

      //THIS SENDS OUT THE LIST FROM MESSAGE  msg.channel.send(collectedMsg.embeds[0].description); 
      
    })
    .catch(err => {
      msg.channel.send("Something went wrong...");
      console.log(err);
    });

  } 
});
