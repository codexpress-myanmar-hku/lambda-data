exports.json = function(d){
    let readings = [];
    if(d){
        d.forEach(element => {
            let e = {
                soil_temp: null,
                soil_moist: null,
                temp: element.field1,
                humidity: element.field2,
                input_current: null,
                input_voltage: null,
                rssi: null,
                switch: null
            };
            readings.push(e);
        });
    }
    return readings;
}