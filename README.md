bipso
==================

<br />

## Table of Contents  

1. [Overview](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)  
4. [APIs](#APIs)  
5. [License](#License)

<br />

<a name="Overiew"></a>
## 1. Overview  

**bipso** is a dictionary of uuids defined by [BIPSO Specifications](https://github.com/bluetoother/bipso/blob/master/doc/spec.md), and each uuid is corresponding to a [IPSO Smart Object](http://www.ipso-alliance.org/ipso-community/resources/smart-objects-interoperability/). Please visit [BIPSO Specifications](https://github.com/bluetoother/bipso/blob/master/doc/spec.md) for more information.

<br />

<a name="Installation"></a>
## 2. Installation

> $ npm install bipso --save

<br />

<a name="Usage"></a>
## 3. Usage

**bipso** provides you two getters, i.e. `getUuid()` and `getParams()`, to get Characteristic UUID and Characteristic value format.

Here is a quick exemple:

```js
var ipsoChar = require('bipso'),
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

<a name="License"></a>
## 5. License         

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
