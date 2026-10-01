function processData(callback) {
    callback();
}

processData(() => {
    console.log("Data processed");
});