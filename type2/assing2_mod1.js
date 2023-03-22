var arr = [{ "id": 1, "firstname": "john", "lastname": "doe", "address": "A-121, baker street, london, U.K", "salary": 20000 }, { "id": 2, "firstname": "sherlock", "lastname": "jamison", "address": "B-18,Broadway Street , newyork, U.S.A", "salary": 40000 }, { "id": 3, "firstname": "watson", "lastname": "joe", "address": "C-009, baker street3, Ireland, U.K", "salary": 25000 }, { "id": 4, "firstname": "jake", "lastname": "tim", "address": "D-221b, baker street4, scotland, U.K", "salary": 30000 }, { "id": 5, "firstname": "jim", "lastname": "york", "address": "E-22, ajanta residence, mumbai, india", "salary": 10000 }];
var emp = [{ "id": 6, "firstname": "aman", "lastname": "rajput", "address": "13/122,dawyers street,pondicherry,India", "salary": 1500 }];
var arr = arr.concat(emp);
console.log(arr);
console.log(arr[0].address.split(","));
var arr1 = [];
// arr1.push("")
console.log((arr[0].salary) - ((arr[0].salary) * 12) / 100);
function show() {
    result = "<tr><th>ID</th><th>Fullname</th><th>Flat no</th><th>Residency</th><th>City</th><th>State</th><th>P.F amount at 12%</th><th>In-Hand Salary</th><th>Total Salary</th></tr>";
    for (var i = 0; i < arr.length; i++) {
        var addr = arr[i].address.split(",");
        var tsalary = ((arr[i].salary) - ((arr[i].salary) * 12) / 100);
        var pf = ((arr[i].salary) * 12) / 100;
        console.log(pf);
        arr1.push({ "x1": addr[0], "x2": addr[1], "x3": addr[2], "x4": addr[3] });
        result += "<tr><td>".concat(arr[i].id, "</td><td>").concat(arr[i].firstname, " ").concat(arr[i].lastname, "</td><td>").concat(arr1[i].x1, "</td><td>").concat(arr1[i].x2, "</td><td>").concat(arr1[i].x3, "</td><td>").concat(arr1[i].x4, "</td><td>").concat(pf, "</td><td>").concat(tsalary, "</td><td>").concat(arr[i].salary, "</td></tr>");
    }
    document.getElementById('tab').innerHTML = result;
}
