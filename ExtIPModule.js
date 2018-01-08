const axios = require('axios');
const querystring = require('querystring');

var data = {
IP:'',
status:false
}

let headers = querystring.stringify({
  "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "Accept-Encoding":"gzip, deflate, br",
  "Accept-Language":"en-GB,en-US;q=0.9,en;q=0.8",
  "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36"
});


const getExtIPAddress = async() => {
      await axios.get('http://bot.whatismyipaddress.com/',headers).
        then(function (response) {
          data.IP = response.data;
          data.status = true;
        }).catch(function(error){
        data.status = false;
        });
  }
export default {
  getExtIPAddress
}
