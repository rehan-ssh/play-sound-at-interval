Steps: 
1) Add the beep script in some folder.    
2) Run `crontab -e` in terminal. 
3) It will by default open in vi. <br/>
press i and add the below line. <br/>
`*/10 * * * * /Users/rehan.shaikh/.nvm/versions/node/v16.13.2/bin/node ~/Documents/your-folder/beep` \
modify the above line according to your needs<br/>
`*/10 * * * *` => means every 10 minutes \
`/Users/rehan.shaikh/.nvm/versions/node/v16.13.2/bin/node` => this is node path on my machine add your node path<br/>
`~/Documents/your-folder/beep` => this is location of script
4) press Esc then :wq

🎉  Done you will here beep sounds at your configured intervals

You can remove that line by running opening `crontab -e` and it will stop its execution. <br/>
\# can be used to comment in cron file
