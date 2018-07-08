# AWS Lambda Application - Data Fetcher
The API to the application responds with data required for data visualization application. 
## Why make this?
The purpose of this API is to get data from ThingSpeak channels and format it in a good structure before sending it to the user application that will use graphs and other data visualization tools to show information to the user.

## Schematics of the response
The API responds with the following data

```
data = [{
        soil_temp: <Number>,
        soil_moist: <Number>,
        temp: <Number>,
        humidity: <Number>,
        input_current: <Number>,
        input_voltage: <Number>,
        rssi: <Number>,
        switch: <Number>
    },
...
...
...
]
```
