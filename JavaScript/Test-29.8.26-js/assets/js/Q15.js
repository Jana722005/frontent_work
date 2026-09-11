const users = [
    {
        name: "Ravi",
        marks: [80, 90, 85],
        address: {
            city: "Chennai"
        }
    },
    {
        name: "Kumar",
        marks: [60, 70, 75]
    }
]

for (let i = 0; i < users.length; i++) {

    let name = users[i].name;
    let total = 0;
    let city;

    if (users[i].address) {
        city = users[i].address.city;
    } else {
        city = "City Not Available";
    }

    for (let j = 0; j < users[i].marks.length; j++) {
        total += users[i].marks[j];
    }

    console.log("Name:", name);
    console.log("City:", city);
    console.log("Total Marks:", total);
}