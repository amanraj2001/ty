var arr = [
    { "id": 0, "name": "aman", "city": "mumbai", "DOB": "02-02-2022" },
    { "id": 1, "name": "aman2", "city": "ahmedabad", "DOB": "12-12-2002" },
    { "id": 2, "name": "aman3", "city": "ahmedabad", "DOB": "12-12-2023" },
    { "id": 2, "name": "aman3", "city": "ahmedabad", "DOB": "12-12-2025" },
    { "id": 2, "name": "aman3", "city": "mumbai", "DOB": "12-12-2019" },
];
// console.log(arr[0].DOB)
// var date = new Date(arr[0].DOB)
arr.map(function (val, index) {
    var x = arr[index].DOB;
    // console.log(x)
    var date = new Date(x);
    var z = date.getFullYear();
    if (z > 2020) {
        // console.log("x")
        // console.log()
        console.log(arr[index]);
    }
    // console.log(x) 
    // console.log(val)
});
arr.map(function (val, index) {
    var x = val.DOB;
    // console.log(x)
    var date = new Date(x);
    var y = val.city;
    // console.log(y)
    if (date.getFullYear() > 2020 && y == "mumbai") {
        console.log(val);
    }
});
