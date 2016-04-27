'use strict';

var fs = require('fs'),
    Enum = require('enum'),
    _defs = JSON.parse(fs.readFileSync(__dirname + '/defs/defs.json', { encoding: 'utf8' })),
    DEFS = {
        ipsoCharUuid: null
    };

/*************************************************************************************************/
/*** Loading Enumerations                                                                      ***/
/*************************************************************************************************/
DEFS.ipsoCharUuid = new Enum(_defs.ipsoCharUuid);

/*************************************************************************************************/
/*** DEFS Methods                                                                              ***/
/*************************************************************************************************/
DEFS.getUuid = function (oid) {
    if (typeof oid !== 'string' || typeof oid !== 'number')
        throw new Error('oid must be a string or number');

    var oidNum = oid.parseInt(),
        oidName;

    if (!isNaN(oidNum))
        oid = oidNum;

    oidName = _defs.oid.get(oid).key;

    if (!oidName) {
        return;
    } else {
        return DEFS.ipsoCharUuid.get(oidName).value;
    }
};

DEFS.getParams = function (uuid) {
    var params = [],
        paramObj;

    if (typeof uuid !== 'string' && typeof uuid !== 'number')
        throw new Error('uuid must be a string or number');

    if (typeof uuid === 'number')
        uuid = '0x' + uuid.toString(16);

    paramObj = _defs[uuid].params;

    paramObj.forEach(function (item, idx) {
        var name = Object.keys(item)[0];
        params.push({name: name, type: item[name]});
    });

    return params;
};

module.exports = DEFS;