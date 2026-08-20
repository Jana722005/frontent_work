let day = 3

let result;

switch (true){

    case day == 1:
        result = "Monday"
        break

    case day == 2:
        result = "Tuesday"
        break

    case day == 3:
        result = "Wednesday"
        break

    case day == 4:
        result = "Thursday"
        break

    case day == 5:
        result = "Friday"
        break

    case day == 6:
        result = "Saturday"
        break

    case day == 7:
        result = "Sunday"
        break

    default:
        result = "Invalid Day"
        break
}

console.log(result);
