'use strict';

var Enum = require('enum'),
    _defs = require('./defs/defs.js'),
    BipsoObject = require('./bipsoObject'),
    DEFS = {
        ipsoCharUuid: null
    };

var __defs = {};

/*************************************************************************************************/
/*** Loading Enumerations                                                                      ***/
/*************************************************************************************************/
__defs.oid = new Enum(_defs.oid);
__defs.ipsoCharUuid = new Enum(_defs.ipsoCharUuid);


/*************************************************************************************************/
/*** DEFS Methods                                                                              ***/
/*************************************************************************************************/
DEFS.ou = function (oid) {
    if (typeof oid !== 'string' && typeof oid !== 'number')
        throw new Error('oid must be a string or number');

    var oidNum = parseInt(oid),
        oidName;

    if (!isNaN(oidNum))
        oid = oidNum;

    oidName = __defs.oid.get(oid);

    if (!oidName) {
        return;
    } else {
        return '0x' + __defs.ipsoCharUuid.get(oidName.key).value.toString(16);
    }
};

DEFS.uo = function (uuid) {
    if (typeof uuid !== 'string' && typeof uuid !== 'number')
        throw new Error('uuid must be a string or number');

    var uuidNum = parseInt(uuid),
        oidName;

    if (!isNaN(uuidNum))
        uuid = uuidNum;

    oidName = __defs.ipsoCharUuid.get(uuid);

    if (!oidName) {
        return;
    } else {
        return oidName.key;
    }
};

DEFS.spec = function (id) {
    var paramObj,
        defs = { 
            oid: null,
            uuid: null,
            fields: {
                mandatory: [], 
                optional: [] 
            }
        };

    if (typeof id !== 'string')
        throw new Error('id must be a string');

    if (!id.startsWith('0x'))
        id = this.ou(id);

    defs.uuid = id;
    defs.oid = this.uo(id);
    paramObj = _defs[id].params;

    paramObj.mandatory.forEach(function (item, idx) {
        var name = Object.keys(item)[0];
        defs.fields.mandatory.push({name: name, type: item[name]});
    });

    paramObj.optional.forEach(function (item, idx) {
        var name = Object.keys(item)[0];
        defs.fields.optional.push({name: name, type: item[name]});
    });

    if (!defs.oid)
        return;
    else
        return defs;
};

DEFS.frame = function (uuid, valObj) {
    return (new BipsoObject(uuid)).frame(valObj);
};

DEFS.parse = function (uuid, buf, callback) {
    return (new BipsoObject(uuid)).parse(buf, callback);
};

module.exports = DEFS;