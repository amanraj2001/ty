var x = {
    Ename: "aman",
    Eid: 1,
    Esalary: 2500,
    Eaddress: "21b baker street"
};
var x1 = {
    Ename: "john",
    Eid: 2,
    Esalary: 300,
    Eaddress: "london street"
};
var y = [x, x1];
console.log(y.length);
res = "<tr><th>name</th><th>id</th><th>salary</th><th>address</th></tr>";
for (var i = 0; i < y.length; i++) {
    res += "<tr><td>" + y[i].Ename + "</td><td>" + y[i].Eid + "</td><td>" + y[i].Esalary + "</td><td>" + y[i].Eaddress + "</td></tr>";
}
document.getElementById('tab').innerHTML = res;
