bipso
========================
An utility to help BLE developers define Characteristics in an IPSO way.  

<br />

[![NPM](https://nodei.co/npm/bipso.png?downloads=true)](https://nodei.co/npm/bipso/)  

[![Travis branch](https://img.shields.io/travis/bluetoother/bipso/master.svg?maxAge=2592000)](https://travis-ci.org/bluetoother/bipso)
[![npm](https://img.shields.io/npm/v/bipso.svg?maxAge=2592000)](https://www.npmjs.com/package/bipso)
[![npm](https://img.shields.io/npm/l/bipso.svg?maxAge=2592000)](https://www.npmjs.com/package/bipso)

## Table of Contents  

1. [Overview](#Overiew)  
2. [Installation](#Installation)  
3. [Usage](#Usage)  
4. [APIs](#APIs)  
5. [Supported Data Types](#Types)  
6. [License](#License)  

<br />

<a name="Overiew"></a>
## 1. Overview  

**bipso** is a dictionary for developers to query the UUIDs and Characteristic definitions defined by BIPSO. With BIPSO, firmware developers can organize Characteristics in an IPSO way to make their BLE devices/products IPSO-compatible.  
  
Please see [BIPSO Specification](https://github.com/bluetoother/bipso/blob/master/doc/spec.md) to learn more about why BIPSO and what it is doing.  
<br />

<a name="Installation"></a>
## 2. Installation  

> $ npm install bipso --save

<br />

<a name="Usage"></a>
## 3. Usage  

**bipso** provides you with only three APIs:  
* `.ou()`: Get the BIPSO-defined Characteristic UUID by an Smart Object ID (oid).  
* `.uo()`: Get the oid by an BIPSO-defined Characteristic UUID.  
* `.spec()`: Get the definition of an BIPSO-defined Characteristic. The returned definition is a data object to show you what possible fields should be in the BIPSO-defined **Characteristic Value**.  

```js
var bipso = require('bipso');

// Get the BIPSO-defined UUID from an oid  
bipso.ou('dIn');
// Get the oid from a BIPSO-defined UUID  
bipso.uo('0xcc00');

// Get the definition of a BIPSO-defined Characteristic:
bipso.spec('0xcc00');   // (1) from a BIPSO-defined UUID
bipso.spec('dIn');      // (2) from an oid
```
<br />

<a name="APIs"></a>
## 4. APIs  

* [.ou()](#ou)  
* [.uo()](#uo)  
* [.spec()](#spec)  

*************************************************
<a name="ou"></a>
### .ou(oid)

Get the BIPSO-defined Characteristic UUID by an Smart Object ID (oid).  

**Arguments:**  

* `oid`(_String_ | _Number_): Smart Object ID. `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_String_ | _Undefined_): Returns the Characteristic UUID, or `undefined` if cannot be transformed.  

**Example:**  

```js
bipso.ou('dIn');     // '0xcc00'
bipso.ou('3200');    // '0xcc00'
bipso.ou(3200);      // '0xcc00'

bipso.ou('1234');    // undefined
bipso.ou('xxxx');    // undefined
```

*************************************************
<a name="uo"></a>
### .uo(uuid)

Get the oid by an BIPSO-defined Characteristic UUID.  

**Arguments:**  

* `uuid`(_String_ | _Number_): Characteristic UUID defined in [BIPSO Specification](https://github.com/bluetoother/bipso/blob/master/doc/spec.md).  

**Returns:**  

* (_String_ | _Undefined_): Returns the oid in string, or `undefined` if cannot be transformed.  

**Example:**  

```js
bipso.uo('0xcc00');     // 'dIn'
bipso.uo(0xcc00);       // 'dIn'
bipso.uo(52224);        // 'dIn'

bipso.uo('0x6300');     // undefined
bipso.uo(0x6300);       // undefined
bipso.uo(25344);        // undefined
```

*************************************************
<a name="spec"></a>
### .spec(id)

Get the BIPSO Characteristic definition by an UUID or an oid. This API only accepts an id in string. An `id` starts with '0x' will be taken as an UUID, otherwiese it will be recognized as an oid.  

**Arguments:**  

* `id`(_String_): An UUID or an oid to find its BIPSO spec for. An `id` prefixed with '0x' will be taken as an UUID, otherwiese it will be taken as an oid.  

**Returns:**  

* (_Object_): The spec object of BIPSO Characteristic definition. This object has the following properties:  

| Property | Type    | Description                                                                    |
|----------|---------|--------------------------------------------------------------------------------|
| oid      | String  | Smart Object ID in string                                                      |
| uuid     | String  | BIPSO-defined Characteristic ID in string                                      |
| fields   | Object  | An object to show what possible fields should be in a **Characteristic Value** |

* The `fields` object has two properties `mandatory` and `optional`, each is an array of field names and field types.  
    * The `mandatory` property tells what fields a **Characteristic Value** must have.  
    * The `optional` property tells what fields a **Characteristic Value** can have.  
    * The mandatory field `flags` is a bit-vector to tell which optional fields does a **Characteristic Value** have. The following exmaple gives the spec of a 'dIn' Object, let's say if the flags has a value of `0000,0001` in binary, then the **Characteristic Value** does only have the `counter` field in it. If the flags is `0000,1110` in binary, then the **Characteristic Value** does have the `dInPolarity`, `debouncePeriod`, and `edgeSelection` fields in it.  

| Property  | Type    | Description                                                                                                |
|-----------|---------|------------------------------------------------------------------------------------------------------------|
| mandatory | Array   | Each element is an object of `{ name, type }`, and the **Characteristic Value** must have this field in it |
| optional  | Array   | Each element is an object of `{ name, type }`, and the **Characteristic Value** can have this field in it  |

**Example**  

```js
// Get the definition of a BIPSO-defined Characteristic:
bipso.spec('0xcc00');   // (1) from a BIPSO-defined UUID
bipso.spec('dIn');      // (2) from an oid

// Returned object from (1) and (2)  
// {
//     oid: 'dIn',
//     uuid: '0xcc00',
//     fields: {
//          mandatory: [
//              { name: 'flags',          type: 'uint8'   },
//				      { name: 'id',             type: 'uint8'   },
//              { name: 'dInState',       type: 'boolean' }
//          ],
//          optional: [
//              { name: 'counter',        type: 'uint8'   },
//              { name: 'dInPolarity',    type: 'boolean' },
//              { name: 'debouncePeriod', type: 'uint16'  },
//              { name: 'edgeSelection',  type: 'uint8'   },
//              { name: 'counterReset',   type: 'buffer'  },
//              { name: 'appType',        type: 'string'  },
//              { name: 'sensorType',     type: 'string'  }
//         ]
//     }
// }
```
<br />

<a name="Types"></a>
## 5. Supported Data Types  

Data types BIPSO supports are listed in the following table.  

| Data Class | Supported Data Types                                                       |
|------------|----------------------------------------------------------------------------|
| String     | 'string' (should have a length byte at the beginning)                      |
| Integer    | 'int8', 'uint8', 'int16', 'uint16', 'int32', 'uint32', 'int64', 'uint64'   |
| Float      | 'float' (32-bit), 'double' (64-bit)                                        |
| Boolean    | 'boolean' (1 for true, and 0 for false)                                    |
| Opaque     | 'buffer' (should have a length byte at the beginning)                      |
| Time       | 'time' (Unix time, an int32 number representing seconds since Jan 1, 1970) |
| None       | 'none' (A field with this data type may be an Excutable Resource)          |

[**Important!!**]
* A 'string' data should be an UTF-8 string. In firmware, it should have a length byte precedes the string in **Characteristic Value** raw data to indicate how long the string is.  
* Integer and Float values are all little-endian.  
* One should be noticed that, in firmware, it should have a length byte precedes the buffer in **Characteristic Value** raw data to indicate how many bytes the buffer is.  

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
SOFTWARE.
