/* jshint node: true */
'use strict';

var Concentrate = require('concentrate'),
    DChunks = require('dissolve-chunks'),
    ru = DChunks().Rule();

var bipsoMeta = require('./defs/defs');

/*************************************************************************************************/
/*** BipsoObject Class                                                                         ***/
/***   1. Provides command framer                                                              ***/
/***   2. Provides parser                                                                      ***/
/*************************************************************************************************/
function BipsoObject(uuid) { 
    var self = this;

    if (typeof uuid === 'number')
        uuid = '0x' + uuid.toString(16);

    if (!bipsoMeta[uuid])
        throw new Error('Unrecognized UUID');

    this.uuid = uuid;    
    this.args = { mandatory: [], optional: [] };

    bipsoMeta[uuid].params.mandatory.forEach(function (item, idx) {
        var name = Object.keys(item)[0];
        item[name] = transType(item[name]);
        self.args.mandatory.push({name: name, type: item[name]});
    });

    bipsoMeta[uuid].params.optional.forEach(function (item, idx) {
        var name = Object.keys(item)[0];
        item[name] = transType(item[name]);
        self.args.optional.push({name: name, type: item[name]});
    });
}

BipsoObject.prototype.frame = function (valObj) {
    var args = [],
        index = 1,
        dataBuf = Concentrate();

    if (typeof window === 'object')
        throw new Error('The method is disabled in the client-side.');

    this.args.mandatory.forEach(function (arg) {
        arg.value = valObj[arg.name];
        args.push(arg);
    });

    this.args.optional.forEach(function (arg, i) {
        if ((valObj.flags & index) === index) {
            arg.value = valObj[arg.name];
            args.push(arg);
        }
        index = index * 2;
    });

    args.forEach(function (arg) {
        var type = arg.type,
            val = arg.value;

        switch (type) {
            case 'uint8':
            case 'uint16':
            case 'uint32':
            case 'floatle':
                dataBuf = dataBuf[type](val);
                break;
            case 'boolean':
                dataBuf = dataBuf.uint8(val);
                break;
            case 'stringPreLenUint8':
                dataBuf = dataBuf.uint8(val.length).string(val, 'utf8');
                break;
            case 'bufferPreLenUint8':
                dataBuf = dataBuf.uint8(val.length).buffer(val);
                break;
            default:
                throw new Error("Unknown Data Type");
        }
    });

    return dataBuf.result();
};

BipsoObject.prototype.parse = function (buf, callback) {
    var chunkRules = [],
        parser,
        err;

    if (typeof window === 'object')
        throw new Error('The method is disabled in the client-side.');

    this.args.mandatory.forEach(function (arg) {
        var rule = ru[arg.type];
        if (rule) {
            rule = rule(arg.name);
            chunkRules.push(rule);
        } else {
            err = new Error('Parsing rule for ' + arg.type + ' is not found.');
        }
    });

    chunkRules.push(ru.depends(this.args.optional));

    if (!err) {
        if (chunkRules.length === 0) {
            process.nextTick(function () {
                callback(null, {});
            });

            return;
        }

        parser = DChunks().join(chunkRules).compile();

        parser.once('parsed', function (result) {
            parser = null;
            callback(null, result);
        });

        parser.end(buf);
    } else {
        callback(err);
    }
};

ru.clause('depends', function (optArgs) {
    var self = this;

    this.tap(function () {
        var flags = this.vars.flags,
            index = 1;

        optArgs.forEach(function (arg) {
            if ((flags & index) === index) 
                ru[arg.type](arg.name)(self);

            index = index * 2;
        });
    });
});

ru.clause('boolean', function (name) {
    this.uint8('bool').tap(function () {
        if (!this.vars.bool) this.vars[name] = false;
        else this.vars[name] = true; 
        delete this.vars.bool;
    });   
});

function transType (type) {
    if (type === 'float')
        type = 'floatle';
    else if (type === 'buffer')
        type = 'bufferPreLenUint8';
    else if (type === 'string') 
        type = 'stringPreLenUint8';

    return type;
}

module.exports = BipsoObject;