ipso-ble-char
==================

<br />

## Table of Contents  

1. [Overview](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)  
4. [APIs](#APIs)  
5. [Table of Characteristics](#Table)
6. [License](#License)

<br />

<a name="Overiew"></a>
## 1. Overview  

**ipso-ble-char** is a set of BLE characteristic definition following IPSO Smart Object Guideline(). Each IPSO Smart Object is defined as a BLE characteristic in this document, and characteristic value is an object contains resources of IPSO Smart Object.

<br />

<a name="Installation"></a>
## 2. Installation

> $ npm install ipso-ble-char --save

<br />

<a name="Usage"></a>
## 3. Usage

**ipso-ble-char** provides you two getters, i.e. `getUuid()` and `getParams()`, to get Characteristic UUID and Characteristic value format.

Here is a quick exemple:

```js
var ipsoChar = require('ipso-ble-char'),
    charUuid,
    charParam;

// get characteristic UUID
charUuid = ipsoChar.getUuid('dIn');

// get characteristic parameters
charParam = ipsoChar.getParams(charUuid);
```

<br />

<a name="APIs"></a>
## 4. APIs

* [.getUuid()](#getUuid)
* [.getParams()](#getParams)

**************************************

<a name="getUuid"></a>
### .getUuid(oid)

Get Characteristic UUID corresponding to IPSO Smart Object.

**Arguments:**

* `oid`(_String_ | _Number_): Smart Object ID. `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**

* (_String_): Characteristic UUID or `undefined`

**Example:**

```js
ipsoChar.getUuid('dIn');    // '0xcc00'
ipsoChar.getUuid('3200');    // '0xcc00'
ipsoChar.getUuid(3200);        // '0xcc00'

ipsoChar.getUuid('1234');      // undefined
ipsoChar.getUuid('xxxx');    // undefined
```

**************************************

<a name="getParams"></a>
### .getParams(uuid)

Get Characteristic parameters definition.

**Arguments:**

* `uuid`(_String_ | _Number_): Characteristic UUID defined in this document.

**Returns:**

* (_Array_): Characteristic parameters object.

**Example**

```js
var charParams = ipsoChar.getParams(0xcc00);
    // charParams equal to 
    // [
    //     {name: flags, type: uint8},
    //     {name: dInState, type: boolean},
    //     {name: counter, type: uint8},
    //     {name: dInPolarity, type: boolean},
    //     {name: debouncePeriod, type: uint16},
    //     {name: edgeSelection, type: uint8},
    //     {name: counterReset, type: buffer},
    //     {name: appType, type: string},
    //     {name: sensorType, type: string}
    // ]
```

<br />

<a name="Table"></a>
## 5. Table of Characteristics

Following table are cross-references between the IPSO Smart Object and Characteristic UUID defined by this document.Here is the description of each column in the table:

* IPSO Object
    * Object name and object ID defined by IPSO Alliance
* Characteristic UUID
    * Characteristic UUID corresponding to IPSO Object
* Fields
    * Characteristic value is an object formed from these fields
    * A Field of `fieldName(fieldType)` indicates that field name of characteristic value object and tells the data type.
    * Fields are divided into mandatory and optional, the mandatory field using bold typeface to represent, or it will be optional
        * **flags** is used to indicate which optional parameters to use

| IPSO Object                       | Characteristic UUID | Fields                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Input (3200)              | 0xcc00              | **flags(uint8)**, **dInState(boolean)**, counter(uint8), dInPolarity(boolean), debouncePeriod(uint16), edgeSelection(uint8), counterReset(buffer), appType(string), sensorType(string)                                                                                                                                                                                                                                                                                      |
| Digital Output (3201)             | 0xcc01              | **flags(uint8)**, **dOutState(boolean)**, dOutPolarity(boolean), appType(string)                                                                                                                                                                                                                                                                                                                                                                                            |
| Analogue Input (3202)             | 0xcc02              | **flags(uint8)**, **aInCurrValue(float)**, minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), appType(string), sensorType(string)                                                                                                                                                                                                                                                                            |
| Analogue Output (3203)            | 0xcc03              | **flags(uint8)**, **aOutCurrValue(float)**, minRangeValue(float), maxRangeValue(float), appType(string)                                                                                                                                                                                                                                                                                                                                                                     |
| Generic Sensor (3300)             | 0xcc04              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), appType(string), sensorType(string)                                                                                                                                                                                                                                                              |
| Illuminance Sensor (3301)         | 0xcc05              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer)                                                                                                                                                                                                                                                                                                   |
| Presence Sensor (3302)            | 0xcc06              | **flags(uint8)**, **dInState(boolean)**, counter(uint8), counterReset(buffer), sensorType(string), busyToClearDelay(uint16), clearToBusyDelay(uint16)                                                                                                                                                                                                                                                                                                                       |
| Temperature Sensor (3303)         | 0xcc07              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer)                                                                                                                                                                                                                                                                                                   |
| Humidity Sensor (3304)            | 0xcc08              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer)                                                                                                                                                                                                                                                                                                   |
| Power Measurement (3305)          | 0xcc09              | **flags(uint32)**, **instActivePwr(float)**, minMeaActivePwr(float), maxMeaActivePwr(float), minRangeActivePwr(float), maxRangeActivePwr(float), cumulActivePwr(float), activePwrCal(float), instReactivePwr(float), minMeaReactivePwr(float), maxMeaReactivePwr(float), minRangeReactivePwr(float), maxRangeReactivePwr(float), resetMinMaxMeaValues(buffer), cumulReactivePwr(float), reactivePwrCal(float), pwrFactor(float), currCal(float), resetCumulEnergy(buffer)   |
| Actuation (3306)                  | 0xcc0a              | **flags(uint8)**, **onOff(boolean)**, dimmer(uint8), onTime(uint16), mStateOut(string), appType(string)                                                                                                                                                                                                                                                                                                                                                                     |  
| Set Point (3308)                  | 0xcc0b              | **flags(uint8)**, **setPointValue(float)**, colour(string), units(string), appType(string)                                                                                                                                                                                                                                                                                                                                                                                  |
| Load Control (3310)               | 0xcc0c              | **flags(uint8)**, **eventId(string)**, **startTime(uint32)**, **durationInMin(uint16)**, criticalLevel(uint8), avgLoadAdjPct(uint8), dutyCycle(uint8)                                                                                                                                                                                                                                                                                                                       |
| Light Control (3311)              | 0xcc0d              | **flags(uint8)**, **onOff(boolean)**, dimmer(uint8), colour(string), units(string), onTime(uint16), cumulActivePwr(float), pwrFactor(float)                                                                                                                                                                                                                                                                                                                                 |
| Power Control (3312)              | 0xcc0e              | **flags(uint8)**, **onOff(boolean)**, dimmer(uint8), onTime(uint16), cumulActivePwr(float), pwrFactor(float)                                                                                                                                                                                                                                                                                                                                                                |
| Accelerometer (3313)              | 0xcc0f              | **flags(uint8)**, **xValue(float)**, yValue(float), zValue(float), units(string), minRangeValue(float), maxRangeValue(float)                                                                                                                                                                                                                                                                                                                                                |
| Magnetometer (3314)               | 0xcc10              | **flags(uint8)**, **xValue(float)**, yValue(float), zValue(float), units(string), compassDir(float)                                                                                                                                                                                                                                                                                                                                                                         |
| Barometer (3315)                  | 0xcc11              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer)                                                                                                                                                                                                                                                                                                   |        
| Voltage (3316)                    | 0xcc12              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |                                                                                                                                                                                                  
| Current (3317)                    | 0xcc13              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                | 
| Frequency (3318)                  | 0xcc14              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Depth (3319)                      | 0xcc15              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Percentage (3320)                 | 0xcc16              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Altitude (3321)                   | 0xcc17              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Load (3322)                       | 0xcc18              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Pressure (3323)                   | 0xcc19              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Loudness (3324)                   | 0xcc1a              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Concentration (3325)              | 0xcc1b              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Acidity (3326)                    | 0xcc1c              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Conductivity (3327)               | 0xcc1d              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Power (3328)                      | 0xcc1e              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Power Factor (3329)               | 0xcc1f              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Distance (3330)                   | 0xcc20              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Energy (3331)                     | 0xcc21              | **flags(uint8)**, **sensorValue(float)**, units(string), resetCumulEnergy(buffer), appType(string)                                                                                                                                                                                                                                                                                                                                                                          |
| Direction (3332)                  | 0xcc22              | **flags(uint8)**, **compassDir(float)**, minMeaValue(float), maxMeaValue(float), resetMinMaxMeaValues(buffer), appType(string)                                                                                                                                                                                                                                                                                                                                              |
| Time (3333)                       | 0xcc23              | **flags(uint8)**, **currentTime(uint32)**, fracTime(float), appType(string)                                                                                                                                                                                                                                                                                                                                                                                                 |
| Gyrometer (3334)                  | 0xcc24              | **flags(uint8)**, **xValue(float)**, yValue(float), zValue(float), units(string), minXValue(float), maxXValue(float), minYValue(float), maxYValue(float), minZValue(float), maxZValue(float), resetMinMaxMeaValues(buffer), minRangeValue(float), maxRangeValue(float), appType(string)                                                                                                                                                                                     |
| Color (3335)                      | 0xcc25              | **flags(uint8)**, **colour(string)**, units(string), appType(string)                                                                                                                                                                                                                                                                                                                                                                                                        |
| GPS Location (3336)               | 0xcc26              | **flags(uint8)**, **latitude(string)**, **longitude(string)**, altitude(string), uncertainty(string), compassDir(float), velocity(buffer), timestamp(uint32), appType(string)                                                                                                                                                                                                                                                                                               |
| Positioner (3337)                 | 0xcc27              | **flags(uint8)**, **currentPos(float)**, transTime(float), remainTime(float), minMeaValue(float), maxMeaValue(float), resetMinMaxMeaValues(buffer), minLimit(float), maxLimit(float), appType(string)                                                                                                                                                                                                                                                                       |
| Buzzer (3338)                     | 0xcc28              | **flags(uint8)**, **onOff(boolean)**, **minOffTime(float)**, level(float), timeDuration(float), appType(string)                                                                                                                                                                                                                                                                                                                                                             |
| Audio Clip (3339)                 | 0xcc29              | **flags(uint8)**, **clip(buffer)**, trigger(buffer), level(float), soundDuration(float), appType(string)                                                                                                                                                                                                                                                                                                                                                                    |
| Timer (3340)                      | 0xcc2a              | **flags(uint8)**, **timeDuration(float)**, remainTime(float), minOffTime(float), trigger(buffer), onOff(boolean), counter(uint8), cumulTime(float), digitalState(boolean), eventCounter(uint8), mode(uint8), appType(string)                                                                                                                                                                                                                                                |
| Addressable Text Display (3341)   | 0xcc2b              | **flags(uint8)**, **text(string)**, xCoord(uint16), yCoord(uint16), maxXCoord(uint16), maxYCoord(uint16), clearDisplay(buffer), level(float), contrast(float), appType(string)                                                                                                                                                                                                                                                                                              |
| On/Off Switch (3342)              | 0xcc2c              | **flags(uint8)**, **dInState(boolean)**, counter(uint8), onTime(uint16), offTime(uint16), appType(string)                                                                                                                                                                                                                                                                                                                                                                   |
| Level Control (3343)              | 0xcc2d              | **flags(uint8)**, level(float), onTime(uint16), offTime(uint16), appType(string)                                                                                                                                                                                                                                                                                                                                                                                            |
| Up/Down Control (3344)            | 0xcc2e              | **flags(uint8)**, incInputState(boolean), decInputState(boolean), upCounter(uint8), downCounter(uint8), appType(string)                                                                                                                                                                                                                                                                                                                                                     |
| Multiple Axis Joystick (3345)     | 0xcc2f              | **flags(uint8)**, dInState(boolean), counter(uint8), xValue(float), yValue(float), zValue(float), appType(string)                                                                                                                                                                                                                                                                                                                                                           |
| Rate (3346)                       | 0xcc30              | **flags(uint8)**, **sensorValue(float)**, units(string), minMeaValue(float), maxMeaValue(float), minRangeValue(float), maxRangeValue(float), resetMinMaxMeaValues(buffer), calOffset(float), appType(string)                                                                                                                                                                                                                                                                |
| Push Button (3347)                | 0xcc31              | **flags(uint8)**, **dInState(boolean)**, counter(uint8), appType(string)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Multistate Selector (3348)        | 0xcc32              | **flags(uint8)**, **mStateIn(uint8)**, appType(string)                                                                                                                                                                                                                                                                                                                                                                                                                      |

<br />

<a name="License"></a>
## 6. License         

The MIT License (MIT)

Copyright (c) 2016
Hedy Wang <hedywings@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.                                                         |