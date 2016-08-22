module.exports = {
    "oid": {
        "dIn": 3200,
        "dOut": 3201,
        "aIn": 3202,
        "aOut": 3203,
        "generic": 3300,
        "illuminance": 3301,
        "presence": 3302,
        "temperature": 3303,
        "humidity": 3304,
        "pwrMea": 3305,
        "actuation": 3306,
        "setPoint": 3308,
        "loadCtrl": 3310,
        "lightCtrl": 3311,
        "pwrCtrl": 3312,
        "accelerometer": 3313,
        "magnetometer": 3314,
        "barometer": 3315,
        "voltage": 3316,
        "current": 3317,
        "frequency": 3318,
        "depth": 3319,
        "percentage": 3320,
        "altitude": 3321,
        "load": 3322,
        "pressure": 3323,
        "loudness": 3324,
        "concentration": 3325,
        "acidity": 3326,
        "conductivity": 3327,
        "power": 3328,
        "powerFactor": 3329,
        "distance": 3330,
        "energy": 3331,
        "direction": 3332,
        "time": 3333,
        "gyrometer": 3334,
        "color": 3335,
        "gpsLocation": 3336,
        "positioner": 3337,
        "buzzer": 3338,
        "audioClip": 3339,
        "timer": 3340,
        "addressableTextDisplay": 3341,
        "onOffSwitch": 3342,
        "levelControl": 3343,
        "upDownControl": 3344,
        "multipleAxisJoystick": 3345,
        "rate": 3346,
        "pushButton": 3347,
        "multistateSelector": 3348
    },
    "ipsoCharUuid": {
        "dIn": 52224,
        "dOut": 52225,
        "aIn": 52226,
        "aOut": 52227,
        "generic": 52228,
        "illuminance": 52229,
        "presence": 52230,
        "temperature": 52231,
        "humidity": 52232,
        "pwrMea": 52233,
        "actuation": 52234,
        "setPoint": 52235,
        "loadCtrl": 52236,
        "lightCtrl": 52237,
        "pwrCtrl": 52238,
        "accelerometer": 52239,
        "magnetometer": 52240,
        "barometer": 52241,
        "voltage": 52242,
        "current": 52243,
        "frequency": 52244,
        "depth": 52245,
        "percentage": 52246,
        "altitude": 52247,
        "load": 52248,
        "pressure": 52249,
        "loudness": 52250,
        "concentration": 52251,
        "acidity": 52252,
        "conductivity": 52253,
        "power": 52254,
        "powerFactor": 52255,
        "distance": 52256,
        "energy": 52257,
        "direction": 52258,
        "time": 52259,
        "gyrometer": 52260,
        "color": 52261,
        "gpsLocation": 52262,
        "positioner": 52263,
        "buzzer": 52264,
        "audioClip": 52265,
        "timer": 52266,
        "addressableTextDisplay": 52267,
        "onOffSwitch": 52268,
        "levelControl": 52269,
        "upDownControl": 52270,
        "multipleAxisJoystick": 52271,
        "rate": 52272,
        "pushButton": 52273,
        "multistateSelector": 52274
    },
    "0xcc00": {  
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"dInState": "boolean"}
            ],
            "optional": [
                {"counter": "uint8"},
                {"dInPolarity": "boolean"},
                {"debouncePeriod": "uint16"},
                {"edgeSelection": "uint8"},
                {"counterReset": "buffer"},
                {"appType": "string"},
                {"sensorType": "string"}
            ]
        }
    },
    "0xcc01": { 
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"dOutState": "boolean"}
            ],
            "optional": [
                {"dOutPolarity": "boolean"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc02": {  
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"aInCurrValue": "float"}
            ],
            "optional": [
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"appType": "string"},
                {"sensorType": "string"}
            ]
        }
    },
    "0xcc03": {  
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"aOutCurrValue": "float"} 
            ],
            "optional": [
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"appType": "string"}
            ]
        }
    },    
    "0xcc04": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"appType": "string"},
                {"sensorType": "string"}
            ]
        }
    },
    "0xcc05": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"}
            ]
        }
    },
    "0xcc06": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"dInState": "boolean"}
            ],
            "optional": [
                {"counter": "uint8"},
                {"counterReset": "buffer"},
                {"sensorType": "string"},
                {"busyToClearDelay": "uint16"},
                {"clearToBusyDelay": "uint16"}
            ]
        }
    },
    "0xcc07": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"}
            ]
        }
    },
    "0xcc08": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"}
            ]
        }
    },
    "0xcc09": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint32"},
                {"instActivePwr": "float"}
            ],
            "optional": [
                {"minMeaActivePwr": "float"},
                {"maxMeaActivePwr": "float"},
                {"minRangeActivePwr": "float"},
                {"maxRangeActivePwr": "float"},
                {"cumulActivePwr": "float"},
                {"activePwrCal": "float"},
                {"instReactivePwr": "float"},
                {"minMeaReactivePwr": "float"},
                {"maxMeaReactivePwr": "float"},
                {"minRangeReactivePwr": "float"},
                {"maxRangeReactivePwr": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"cumulReactivePwr": "float"},
                {"reactivePwrCal": "float"},
                {"pwrFactor": "float"},
                {"currCal": "float"},
                {"resetCumulEnergy": "buffer"}
            ]
        }
    },
    "0xcc0a": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"onOff": "boolean"}
            ],
            "optional": [
                {"dimmer": "uint8"},
                {"onTime": "uint16"},
                {"mStateOut": "string"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc0b": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"setPointValue": "float"}
            ],
            "optional": [
                {"colour": "string"},
                {"units": "string"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc0c": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"eventId": "string"}, 
                {"startTime": "uint32"}, 
                {"durationInMin": "uint16"}
            ],
            "optional": [
                {"criticalLevel": "uint8"},
                {"avgLoadAdjPct": "uint8"},
                {"dutyCycle": "uint8"}
            ]
        }
    },
    "0xcc0d": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"onOff": "boolean"}
            ],
            "optional": [
                {"dimmer": "uint8"},
                {"colour": "string"},
                {"units": "string"},
                {"onTime": "uint16"},
                {"cumulActivePwr": "float"},
                {"pwrFactor": "float"}
            ]
        }
    },
    "0xcc0e": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"onOff": "boolean"}
            ],
            "optional": [
                {"dimmer": "uint8"},
                {"onTime": "uint16"},
                {"cumulActivePwr": "float"},
                {"pwrFactor": "float"}
            ]
        }
    },
    "0xcc0f": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"xValue": "float"}
            ],
            "optional": [
                {"yValue": "float"},
                {"zValue": "float"},
                {"units": "string"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"}
            ]
        }
    },
    "0xcc10": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"xValue": "float"}
            ],
            "optional": [
                {"yValue": "float"},
                {"zValue": "float"},
                {"units": "string"},
                {"compassDir": "float"}
            ]
        }
    },
    "0xcc11": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"}
            ]
        }
    },
    "0xcc12": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc13": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc14": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc15": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc16": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc17": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc18": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc19": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc1a": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc1b": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc1c": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc1d": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc1e": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc1f": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc20": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc21": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"resetCumulEnergy": "buffer"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc22": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"compassDir": "float"}
            ],
            "optional": [
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc23": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"currentTime": "uint32"}
            ],
            "optional": [
                {"fracTime": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc24": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"xValue": "float"}
            ],
            "optional": [
                {"yValue": "float"},
                {"zValue": "float"},
                {"units": "string"},
                {"minXValue": "float"},
                {"maxXValue": "float"},
                {"minYValue": "float"},
                {"maxYValue": "float"},
                {"minZValue": "float"},
                {"maxZValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc25": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"colour": "string"}
            ],
            "optional": [
                {"units": "string"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc26": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"latitude": "string"},
                {"longitude": "string"}
            ],
            "optional": [
                {"altitude": "string"},
                {"uncertainty": "string"},
                {"compassDir": "float"},
                {"velocity": "buffer"},
                {"timestamp": "uint32"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc27": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"currentPos": "float"}
            ],
            "optional": [
                {"transTime": "float"},
                {"remainTime": "float"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"minLimit": "float"},
                {"maxLimit": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc28": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"onOff": "boolean"},
                {"minOffTime": "float"}
            ],
            "optional": [
                {"level": "float"},
                {"timeDuration": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc29": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"clip": "buffer"}
            ],
            "optional": [
                {"trigger": "buffer"},
                {"level": "float"},
                {"soundDuration": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc2a": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"timeDuration": "float"}
            ],
            "optional": [
                {"remainTime": "float"},
                {"minOffTime": "float"},
                {"trigger": "buffer"},
                {"onOff": "boolean"},
                {"counter": "uint8"},
                {"cumulTime": "float"},
                {"digitalState": "boolean"},
                {"eventCounter": "uint8"},
                {"mode": "uint8"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc2b": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"text": "string"}
            ],
            "optional": [
                {"xCoord": "uint16"},
                {"yCoord": "uint16"},
                {"maxXCoord": "uint16"},
                {"maxYCoord": "uint16"},
                {"clearDisplay": "buffer"},
                {"level": "float"},
                {"contrast": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc2c": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"dInState": "boolean"}
            ],
            "optional": [
                {"counter": "uint8"},
                {"onTime": "uint16"},
                {"offTime": "uint16"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc2d": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"}
            ],
            "optional": [
                {"level": "float"},
                {"onTime": "uint16"},
                {"offTime": "uint16"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc2e": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"incInputState": "boolean"},
                {"decInputState": "boolean"}
            ],
            "optional": [
                {"upCounter": "uint8"},
                {"downCounter": "uint8"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc2f": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"}
            ],
            "optional": [
                {"dInState": "boolean"},
                {"counter": "uint8"},
                {"xValue": "float"},
                {"yValue": "float"},
                {"zValue": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc30": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"sensorValue": "float"}
            ],
            "optional": [
                {"units": "string"},
                {"minMeaValue": "float"},
                {"maxMeaValue": "float"},
                {"minRangeValue": "float"},
                {"maxRangeValue": "float"},
                {"resetMinMaxMeaValues": "buffer"},
                {"calOffset": "float"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc31": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"dInState": "boolean"}
            ],
            "optional": [
                {"counter": "uint8"},
                {"appType": "string"}
            ]
        }
    },
    "0xcc32": {
        "params": {
            "mandatory": [
                {"id": "uint8"},
                {"flags": "uint8"},
                {"mStateIn": "uint8"}
            ],
            "optional": [
                {"appType": "string"}
            ]
        }
    }
};