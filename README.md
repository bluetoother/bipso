ipso-ble-char
==================

<br />

## Table of Contents  

1. [Overview](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)  
4. [APIs](#APIs)  
5. [Table of Characteristics](#Table)

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

