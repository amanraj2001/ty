var data = /** @class */ (function () {
    function data(a, b, c, d, e) {
        this.id = a;
        this.firstname = b;
        this.lastname = c;
        this.address = d;
        this.salary = e;
    }
    return data;
}());
// const x2 =new data(2,"aman","raj","225 street",2323);
var arr = [];
function show() {
    var t1 = document.getElementById('one').value;
    var t2 = document.getElementById('two').value;
    var t3 = document.getElementById('three').value;
    var t4 = document.getElementById('four').value;
    var t5 = document.getElementById('five').value;
    var x1 = new data(t1, t2, t3, t4, t5);
    arr.push(x1);
    console.log(arr);
    res = "<tr><th>id</th><th>first name</th><th>last name</th><th>address</th><th>salary</th></tr>";
    for (var i = 0; i < arr.length; i++) {
        res += "<tr><td>".concat(arr[i].id, "</td><td>").concat(arr[i].firstname, "</td><td>").concat(arr[i].lastname, "</td><td>").concat(arr[i].address, "</td><td>").concat(arr[i].salary, "</td></tr>");
    }
    document.getElementById('tab').innerHTML = res;
}
