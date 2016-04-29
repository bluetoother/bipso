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
    //     {name: dInState, type: bool},
    //     {name: counter, type: uint8},
    //     {name: dInPolarity, type: bool},
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
* Field Names
    * Characteristic value is an object formed from these properties
    * Field name followed by `(M)` indicates it is mandatory, otherwise, it is optional
* Field Types 
    * Indicate data type of each property in `Field Names` column

| IPSO Object               | Characteristic UUID | Field Names                                                                                                                                                                                                                                                                                                                     | Field Types                                                                                                                            |
|---------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Digital Input (3200)      | 0xcc00              | flags(M), dInState(M), counter, dInPolarity, debouncePeriod, edgeSelection, counterReset, appType, sensorType                                                                                                                                                                                                                   | uint8, bool, uint8, bool, uint16, uint8, buffer, string, string                                                                        |
| Digital Output (3201)     | 0xcc01              | flags(M), dOutState(M), dOutPolarity, appType                                                                                                                                                                                                                                                                                   | uint8, bool, bool, string                                                                                                              |
| Analogue Input (3202)     | 0xcc02              | flags(M), aInCurrValue(M), minMeaValue, maxMeaValue, minRangeValue, maxRangeValue, resetMinMaxMeaValues, appType, sensorType                                                                                                                                                                                                    | uint8, float, float, float, float, float, buffer, string, string                                                                       |
| Analogue Output (3203)    | 0xcc03              | flags(M), aOutCurrValue(M), minRangeValue, maxRangeValue, appType                                                                                                                                                                                                                                                               | uint8, float, float, float, string                                                                                                     |
| Generic Sensor (3300)     | 0xcc04              | flags(M), sensorValue(M), units, minMeaValue, maxMeaValue, minRangeValue, maxRangeValue, resetMinMaxMeaValues, appType, sensorType                                                                                                                                                                                              | uint8, float, string, float, float, float, float, buffer, string, string                                                               |
| Illuminance Sensor (3301) | 0xcc05              | flags(M), sensorValue(M), units, minMeaValue, maxMeaValue, minRangeValue, maxRangeValue, resetMinMaxMeaValues                                                                                                                                                                                                                   | uint8, float, string, float, float, float, float, buffer                                                                               |
| Presence Sensor (3302)    | 0xcc06              | flags(M), dInState(M), counter, counterReset, sensorType, busyToClearDelay, clearToBusyDelay                                                                                                                                                                                                                                    | uint8, bool, uint8, buffer, string, uint16, uint16                                                                                     |
| Temperature Sensor (3303) | 0xcc07              | flags(M), sensorValue(M), units, minMeaValue, maxMeaValue, minRangeValue, maxRangeValue, resetMinMaxMeaValues                                                                                                                                                                                                                   | uint8, float, string, float, float, float, float, buffer                                                                               |
| Humidity Sensor (3304)    | 0xcc08              | flags(M), sensorValue(M), units, minMeaValue, maxMeaValue, minRangeValue, maxRangeValue, resetMinMaxMeaValues                                                                                                                                                                                                                   | uint8, float, string, float, float, float, float, buffer                                                                               |
| Power Measurement (3305)  | 0xcc09              | flags(M), instActivePwr(M), minMeaActivePwr, maxMeaActivePwr, minRangeActivePwr, maxRangeActivePwr, cumulActivePwr, activePwrCal, instReactivePwr, minMeaReactivePwr, maxMeaReactivePwr, minRangeReactivePwr, maxRangeReactivePwr, resetMinMaxMeaValues, cumulReactivePwr, reactivePwrCal, pwrFactor, currCal, resetCumulEnergy | uint32, float, float, float, float, float, float, float, float, float, float, float, float, buffer, float, float, float, float, buffer |
| Actuation (3306)          | 0xcc0a              | flags(M), onOff(M), dimmer, onTime, mStateOut, appType                                                                                                                                                                                                                                                                          | uint8, bool, uint8, uint16, string, string                                                                                             |
| Set Point (3308)          | 0xcc0b              | flags(M), setPointValue(M), colour, units, appType                                                                                                                                                                                                                                                                              | uint8, float, string, string, string                                                                                                   |
| Load Control (3310)       | 0xcc0c              | flags(M), eventId(M), startTime(M), durationInMin(M), criticalLevel, avgLoadAdjPct, dutyCycle                                                                                                                                                                                                                                   | uint8, string, uint32, uint16, uint8, uint8, uint8                                                                                     |
| Light Control (3311)      | 0xcc0d              | flags(M), onOff(M), dimmer, colour, units, onTime, cumulActivePwr, pwrFactor                                                                                                                                                                                                                                                    | uint8, bool, uint8, string, string, uint16, float, float                                                                               |
| Power Control (3312)      | 0xcc0e              | flags(M), onOff(M), dimmer, onTime, cumulActivePwr, pwrFactor                                                                                                                                                                                                                                                                   | uint8, bool, uint8, uint16, float, float                                                                                               |
| Accelerometer (3313)      | 0xcc0f              | flags(M), xValue(M), yValue, zValue, units, minRangeValue, maxRangeValue                                                                                                                                                                                                                                                        | uint8, float, float, float, string, float, float                                                                                       |
| Magnetometer (3314)       | 0xcc10              | flags(M), xValue(M), yValue, zValue, units, compassDir                                                                                                                                                                                                                                                                          | uint8, float, float, float, string, float                                                                                              |
| Barometer (3315)          | 0xcc11              | flags(M), sensorValue(M), units, minMeaValue, maxMeaValue, minRangeValue, maxRangeValue, resetMinMaxMeaValues                                                                                                                                                                                                                   | uint8, float, string, float, float, float, float, buffer          

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