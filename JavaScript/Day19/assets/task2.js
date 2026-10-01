const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }

});