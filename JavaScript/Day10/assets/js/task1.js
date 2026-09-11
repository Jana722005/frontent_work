function test() {

    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {

        var x = 100;
        let y = 200;
        const z = 300;

        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log(x);
    console.log(y); // Error
    console.log(z); // Error
}

test();