let log = function (object) {
    console.log(JSON.parse(JSON.stringify(object)), new Error().stack.match(/(\w+)\.(\w+):(\d+):(\d+)/g)[1]);
};