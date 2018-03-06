const processScript = require("child_process").exec;
// let script = require("./updateAndRestart.sh");
// console.log(script);
function runFile() {
    console.log("executing");
    processScript("git pull", function (err) {
        if (err) { console.warn(err); }
    });

    processScript("sleep 50000", function (err) {
        if (err) { console.warn(err); }
    });




    processScript("rs", function (err) {
        if (err) { console.warn(err); }
    });
}

module.exports = runFile;