exports.json = function(d){
    let readings = [];
    let payload = [];
    if(d){
        d.forEach(element => {
            let e = {
                timestamp: new Date(element.created_at).toUTCString(),
                soil_temp: element.field4,
                soil_moist: element.field3,
                temp: element.field1,
                humidity: element.field2,
                input_current: element.field5,
                input_voltage: element.field6,
                rssi: null,
                sw: null
            };
            readings.push(e);
        });

        let dateNow = new Date(new Date().toLocaleString('en-US' , { timeZone : 'Asia/Rangoon' })).getDate();
        let monthNow = new Date(new Date().toLocaleString('en-US' , { timeZone : 'Asia/Rangoon' })).getMonth();
        let yearnow = new Date(new Date().toLocaleString('en-US' , { timeZone : 'Asia/Rangoon' })).getFullYear();

        for(let i = readings.length - 1; i>=0; i--){
            let day = new Date(new Date(readings[i].timestamp).toLocaleString('en-US' , { timeZone : 'Asia/Rangoon' })).getDate();
            let month = new Date(new Date(readings[i].timestamp).toLocaleString('en-US' , { timeZone : 'Asia/Rangoon' })).getMonth();
            let year = new Date(new Date(readings[i].timestamp).toLocaleString('en-US' , { timeZone : 'Asia/Rangoon' })).getFullYear();
            if(day === dateNow && month === monthNow && year === yearnow){
                payload.push(readings[i]);
            }
        }
    }
    return payload;
}