## BIPSO Characteristics  

In BIPSO, an IPSO Smart Object will be mapped to a BLE **Characteristic** with a well-defined *Characteristic Value*. The *Characteristic Value* is a piece of data containing IPSO Resources on a Smart Object.  
  
BIPSO uses Characteristic UUIDs range from 0xcc00 to 0xcccc to do the mapping. BIPSO has mapped 51 Smart Objects at this moment, and UUIDs 0xcc33 to 0xcccc is reserved for future use. The following table are cross-references between a IPSO Smart Object and its BIPSO-defined Characteristic, each column in this table is:  

* **Object ID**: IPSO Object identifier defined by IPSO Alliance. For example, **lightCtrl** is a light controller Smart Object, its ID is `'lightCtrl'` in string.  
* **Char. UUID**: BIPSO-defined Characteristic UUID corresponding to an IPSO Object.  
* **Possible Fields in Char. Value**: Possible fields within a *Characteristic Value*. For example, **sensorValue(float)** is a field named `'sensorValue'` and its value is a float number.  
    * The boldface field is mandatory while the other fields are optional Resources.  
    * A *Characteristic Value* should be parsed into an data object with these fields as its keys.  
    * The mandatory field **flags** is a bit-vector to tell which optional fields does a *Characteristic Value* have. Let's take 'dIn' Object as an example, if the **flags** has a value of `0000,0001` in binary, then the *Characteristic Value* does only have the `counter` field in it. If the flags is `0000,1110` in binary, then the *Characteristic Value* does have the `dInPolarity`, `debouncePeriod`, and `edgeSelection` fields in it. 
