const processScript = require("child_process").exec;
// let script = require("./updateAndRestart.sh");
// console.log(script);
function runFile() {
    console.log("executing");
    processScript("sh updateAndRestart.sh", function (err) {
        if (err) { console.warn(err); }
    });

    // processScript("sleep 50000", function (err) {
    //     if (err) { console.warn(err); }
    // });

    // processScript("npm run restart", function (err) {
    //     if (err) { console.warn(err); }
    // });
}

module.exports = runFile;