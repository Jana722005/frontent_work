function Counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = Counter();

counter();
counter();
counter();