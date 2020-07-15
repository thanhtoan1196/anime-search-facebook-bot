const fs = require("fs");
const login = require("facebook-chat-api");
const readline = require("readline");
const { EMAIL, PASSWORD } = require('./config.json');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Thay tai khoan mat khau vao FB_EMAIL va FB_PASSWORD
const obj = {email: EMAIL, password: PASSWORD};
login(obj, (err, api) => {
    if(err) {
        switch (err.error) {
            case 'login-approval':
                console.log('Enter code > ');
                rl.on('line', (line) => {
                    err.continue(line);
                    rl.close();
                });
                break;
            default:
                console.error(err);
        }
        return;
    }
    fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));

    // Logged in!
});