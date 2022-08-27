# play-sound-at-interval
It is a mac os snippet to play a beep sounds at every 10 min. You can configure it. 
It can be useful to remind that time is passing or to do some pushups 💪 at every interval


Steps: 
1) Add the beep script in some folder 
2) Run `crontab -e` in terminal
3) It will by default open in vi
press i and add the below line to execute every 10 min
*/10 * * * * /Users/rehan.shaikh/.nvm/versions/node/v16.13.2/bin/node ~/Documents/your-folder/beep

modify the above line according to your needs
/Users/rehan.shaikh/.nvm/versions/node/v16.13.2/bin/node => this is node path on my machine add your node path
~/Documents/your-folder/beep => this is your folder of script

4) press Esc then :wq

Done you will here beep sounds at your configured intervals



You can remove that line by running opening `crontab -e` and it will stop its execution.
/# can be used to comment in cron file
