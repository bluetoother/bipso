var _ = require('busyman'),
    Enum = require('enum'),
    expect = require('chai').expect,
    // fs = require('fs'),
    bipso = require('../index'),
    BIPSODEF = require('../defs/defs.js');

var DEFS = {};
DEFS.oid = new Enum(BIPSODEF.oid);
DEFS.ipsoCharUuid = new Enum(BIPSODEF.ipsoCharUuid);
delete BIPSODEF.oid;
delete BIPSODEF.ipsoCharUuid;

var oidKeys = [],
    oidVals = [],
    uuidKeys = [],
    uuidVals = [];
    bipsoDefs = {};

for(var k in DEFS.oid._enumMap) {
    oidKeys.push(k);
    oidVals.push(DEFS.oid._enumMap[k]);
}

for(var k in DEFS.ipsoCharUuid._enumMap) {
    uuidVals.push(DEFS.ipsoCharUuid._enumMap[k]);
    uuidKeys.push('0x' + DEFS.ipsoCharUuid._enumMap[k].toString(16));
}

for(var k in BIPSODEF) {
    var charDef = {
            uuid: null,
            oid: null,
            fields: {
                mandatory: [],
                optional: []
            }
        };
    
    charDef.uuid = k;
    charDef.oid = DEFS.ipsoCharUuid.get(parseInt(k)).key;

    BIPSODEF[k].params.mandatory.forEach(function (item, idx) {
        var name = Object.keys(item)[0];
        charDef.fields.mandatory.push({name: name, type: item[name]});
    });

    BIPSODEF[k].params.optional.forEach(function (item, idx) {
        var name = Object.keys(item)[0];
        charDef.fields.optional.push({name: name, type: item[name]});
    });

    bipsoDefs[k] = charDef;
}

describe('Signature Check', function () {
    it('ou(oid)', function () {
        expect(function () { bipso.ou({}); }).to.throw('oid must be a string or number');
        expect(function () { bipso.ou([]); }).to.throw('oid must be a string or number');
        expect(function () { bipso.ou(false); }).to.throw('oid must be a string or number');
        expect(function () { bipso.ou(undefined); }).to.throw('oid must be a string or number');
        expect(function () { bipso.ou(null); }).to.throw('oid must be a string or number');
    });

    it('uo(uuid)', function () {
        expect(function () { bipso.uo({}); }).to.throw('uuid must be a string or number');
        expect(function () { bipso.uo([]); }).to.throw('uuid must be a string or number');
        expect(function () { bipso.uo(false); }).to.throw('uuid must be a string or number');
        expect(function () { bipso.uo(undefined); }).to.throw('uuid must be a string or number');
        expect(function () { bipso.uo(null); }).to.throw('uuid must be a string or number');
    });

    it('spec(id)', function () {
        expect(function () { bipso.spec({}); }).to.throw('id must be a string');
        expect(function () { bipso.spec([]); }).to.throw('id must be a string');
        expect(function () { bipso.spec(123); }).to.throw('id must be a string');
        expect(function () { bipso.spec(false); }).to.throw('id must be a string');
        expect(function () { bipso.spec(undefined); }).to.throw('id must be a string');
        expect(function () { bipso.spec(null); }).to.throw('id must be a string');
    });
});

describe('Getter Check', function () {
    it('ou()', function () {
        oidKeys.forEach(function (key, i) {
            expect(bipso.ou(key)).to.be.equal(uuidKeys[i]);
        });

        oidVals.forEach(function (key, i) {
            expect(bipso.ou(key)).to.be.equal(uuidKeys[i]);
        });

        oidVals.forEach(function (key, i) {
            expect(bipso.ou(key).toString()).to.be.equal(uuidKeys[i]);
        });

        expect(bipso.ou('1234')).to.be.undefined;
        expect(bipso.ou('xxxx')).to.be.undefined;
    });

    it('uo()', function () {
        uuidKeys.forEach(function (key, i) {
            expect(bipso.uo(key)).to.be.equal(oidKeys[i]);
        });

        uuidVals.forEach(function (key, i) {
            expect(bipso.uo(key)).to.be.equal(oidKeys[i]);
        });

        expect(bipso.ou('0x6300')).to.be.undefined;
        expect(bipso.ou(0x6300)).to.be.undefined;
        expect(bipso.ou(25344)).to.be.undefined;
    });

    it('spec()', function () {
        oidKeys.forEach(function (key, i) {
            expect(bipso.spec(key)).to.be.deep.equal(bipsoDefs[bipso.ou(key)]);
        });

        uuidKeys.forEach(function (key, i) {
            expect(bipso.spec(key)).to.be.deep.equal(bipsoDefs[key]);
        });
    });
});

describe('#.frame & #.parse', function () {
    var valObjs = [
            { uuid: 0xcc00, value: {"flags":0,"id": 0,"dInState":false} },
            { uuid: 0xcc02, value: {"flags":64,"id": 0,"aInCurrValue":0,"sensorType":"Voltage mV"} },
            { uuid: 0xcc0a, value: {"flags":8,"id": 0,"onOff":false,"appType":"VoltageMeas"} },
            { uuid: 0xcc11, value: {"flags":1,"id": 0,"sensorValue":0,"units":"hPa"} },
            { uuid: 0xcc04, value: {"flags":129,"id": 0,"sensorValue":0,"units":"ppm","sensorType":"MQ7"} },
            { uuid: 0xcc0a, value: {"flags":8,"id": 0,"onOff":false,"appType":"WeatherStation"} },
            { uuid: 0xcc1a, value: {"flags":1,"id": 0,"sensorValue":0,"units":"dB-SPL"} },
            { uuid: 0xcc24, value: {"flags":7,"id": 0,"xValue":0,"yValue":0,"zValue":0,"units":"dps"} },
            { uuid: 0xcc32, value: {"flags":1,"id": 0,"mStateIn":8,"appType":"Remote"} },
            { uuid: 0xcc05, value: {"flags":1,"id": 0,"sensorValue":109,"units":"lux"} },
            { uuid: 0xcc07, value: {"flags":1,"id": 0,"sensorValue":25.41571044921875,"units":"C"} }
        ];

    valObjs.forEach(function (valObj) {
        it(valObj.uuid, function (done) {
            var buf = bipso.frame(valObj.uuid, valObj.value);

            bipso.parse(valObj.uuid, buf, function (err, result) {
                if (err) 
                    console.log(err);
                else if (_.isEqual(valObj.value, result)) 
                    done();
            });
        });
    });
});

describe('', function () {
    
});