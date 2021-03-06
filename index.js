let CONFIG = require('./config.json');
let axios = require('axios');
let parse = require('./functions/parseData');

exports.handler = async (event, context, callback) => {
    
    context.callbackWaitsForEmptyEventLoop = false

    let qs = event.queryStringParameters;
    let res_body = null;

    if(qs && qs.type=="data"){
        const response = await axios.get(CONFIG.TS_API_GET_URL, {
            params:{
                api_key: CONFIG.TS_R_API_KEY
            }
        });
        
        let data = [];
        data.push(parse.json(response.data.feeds));

        for(let i = 0; i<6; i++){
            const res = await axios.get(CONFIG.API_URL[i], {
                params:{
                    api_key: CONFIG.DEVICE_KEY[i]
                }
            });
            data.push(parse.json(res.data.feeds));
        }

        res_body = {
            "data": data
        };
        
        callback(null, {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin" : "*"
            },
            "body" : JSON.stringify(res_body)
        });
    }

    else{
        res_body = {
            "message": "There was no query parameter passed to the application",
            "event": event
        };
        callback(null, {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin" : "*"
            },
            "body" : JSON.stringify(res_body)
            }
        );
    }
};
