const fs = require("fs");
const login = require("facebook-chat-api");
const fetch = require('node-fetch');
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();

const animeHolder = {};


login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);
    
    api.setOptions({
        selfListen: true,
        logLevel: "silent",
        updatePresence: false,
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36", // get cái này xem trong file login.js
    });

    api.listenMqtt((err, event) => {
        if(err) return console.error(err);



        switch(event.type) {
            case "message":
                const args = event.body.slice(1).trim().split(/ +/g).slice(1);
                const arg = args.join(' ');  
            
                if (event.body.includes('!anime')) {
                    console.log('Debug');
                    
                    if(isNaN(arg)) {
                        const url = `https://vuighe.net/api/v2/search?q=${arg}`;
                    
                        const headers = {
                            Referer: "https://vuighe.net/lodoss-tou-senki/tap-1-khoi-dau-huyen-thoai",
                            "X-Requested-With": "XMLHttpRequest",
                        };
    
                        const options = {
                            method: 'GET',
                            headers: headers,
                        };
    
                        fetch(url, options)
                            .then(response => {
                                return response.json();
                            })
                            .then(data => {
                                const results = data.data;
                                
                                animeHolder[event.senderID] = results;

                                let response = '';
                                let number = 1;
                                
                                for (let anime of results) {                                
                                    response += `[${number}] ${anime.name}\n`;
                                    number++;
                                }

                                api.sendMessage(response, event.threadID);
                            })
                    } else {
                        const {name, description, time} = animeHolder[event.senderID][parseInt(arg) - 1];

                        api.sendMessage(`Tên: ${name}\n\nNội dung: ${entities.decode(description)}\n\nThời lượng: ${time}`, event.threadID);
                    }
                    
                }




                break;
            case "event":
                console.log(event);
                break;
        }
    });


});