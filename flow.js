"use strict"

const gpio = require("./index");

exports.activate = (scope, state, args, data, stream, next) => {
    console.log('GPIO.activate:', args);
    gpio.activate(args.gpio, args.direction || "out");
    next(null, data, stream);
};

exports.deactivate = (scope, state, args, data, stream, next) => {
    console.log('GPIO.deactivate:', args);
    gpio.deactivate(args.gpio);
    next(null, data, stream);
};

exports.read = (scope, state, args, data, stream, next) => {
    console.log('GPIO.read:', args);
    next(null, data, gpio.read(args.gpio));
};

exports.write = (scope, state, args, data, stream, next) => {
    console.log('GPIO.write:', args);
    stream.pipe(gpio.write(args.gpio));
    next(null, data, stream);
};
