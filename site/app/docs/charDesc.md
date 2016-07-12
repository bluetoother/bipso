## BIPSO Characteristics  

In BIPSO, an IPSO Smart Object will be mapped to a BLE **Characteristic** with a well-defined *Characteristic Value*. The *Characteristic Value* is a piece of data containing IPSO Resources on a Smart Object.  
  
BIPSO uses Characteristic UUIDs range from 0xcc00 to 0xcccc to do the mapping. BIPSO has mapped 51 Smart Objects at this moment, and UUIDs 0xcc33 to 0xcccc is reserved for future use. The following table is a cross-reference between a IPSO Smart Object and its BIPSO-defined Characteristic, each column in this table is:  

* **Object ID**: IPSO Object identifier defined by IPSO Alliance. For example, **lightCtrl** is a light controller Smart Object, its ID is `'lightCtrl'` in string.  
* **Char. UUID**: BIPSO-defined Characteristic UUID corresponding to an IPSO Object.  
* **Possible Fields in Char. Value**: Possible fields within a *Characteristic Value*. For example, **sensorValue(float)** is a field named `'sensorValue'` and its value is a float number.  
    * The boldface field is mandatory while the other fields are optional Resources.  
    * A *Characteristic Value* should be parsed into an data object with these fields as its keys.  
    * The mandatory field **id** is a Object Instance Id. In your application, you may have many instances of same IPSO Object , and **id** can help you distinguish between different instances.
    * The mandatory field **flags** is a bit-vector to tell which optional fields does a *Characteristic Value* have. Let's take 'dIn' Object as an example, if the **flags** has a value of `0000,0001` in binary, then the *Characteristic Value* does only have the `counter` field in it. If the flags is `0000,1110` in binary, then the *Characteristic Value* does have the `dInPolarity`, `debouncePeriod`, and `edgeSelection` fields in it. 

**Important: **
1. Add a mandatory **id** field to identify different Object Instances.
2. With node.js, it is quite simple to use [.frame()](https://github.com/bluetoother/bipso#frame) and [.parse()](https://github.com/bluetoother/bipso#parse) to build and parse your BIPSO-defined Characteristic Value.
3. If you need a tool to manage your BLE network on node.js, [**ble-shepherd**](https://github.com/bluetoother/ble-shepherd) is a BLE network controller which has all the features you need in controlling your BLE network, and it also supports BIPSO Specification.