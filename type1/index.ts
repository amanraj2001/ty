
// console.log("fnfn")
var arr:{id:number,firstname:string,lastname:string,address:string,salary:number}[]=[{"id":1,"firstname":"john","lastname":"doe","address":"A-121, baker street, london, U.K","salary":20000}, {"id":2,"firstname":"sherlock","lastname":"jamison","address":"B-18,Broadway Street , newyork, U.S.A","salary":40000},{"id":3,"firstname":"watson","lastname":"joe","address":"C-009, baker street3, Ireland, U.K","salary":25000},{"id":4,"firstname":"jake","lastname":"tim","address":"D-221b, baker street4, scotland, U.K","salary":30000},{"id":5,"firstname":"jim","lastname":"york","address":"E-22, ajanta residence, mumbai, india","salary":10000}]
// console.log(arr)

// var x :any=arr.entries();;
// console.log(x);

// document.getElementById()
// arr.push({"id":6,"first name":"john4","last name":"doe","address":"221b baker street","salary":20000})
// console.log(arr);
// delete arr[1];
// console.log(arr);
// console.log(arr[0].id)


function show(){

    // var x1 = document.getElementById('one')!.value;
    // var x2 = document.getElementById('two')!.value;
    // var x3 = document.getElementById('three')!.value;
    // var x4 = document.getElementById('four')!.value;
    // var x5 = document.getElementById('five')!.value;
    // arr.push({"id":x1,"firstname":x2,"lastname":x3,"address":x4,"salary":x5});

    var result ="<tr><th>id</th><th>name</th><th>last</th><th>address</th><th>salary</th></tr>"
        for(let i in arr ){

            result+="<tr><td>"+arr[i].id+"</td><td>"+arr[i].firstname+"</td><td>"+arr[i].lastname+"</td><td>"+arr[i].address+"</td><td>"+arr[i].salary+"</td></tr>"

    }
    document.getElementById('tab')!.innerHTML=result
    
}
function del(){
      var x1 = document.getElementById('one')!.value;
      for(let i in arr){
        if(x1==arr[i].id){
            delete arr[i]
        }
      }
      show()
}
function add():void{
    
    var x1:number = parseInt(document.getElementById('one')!.value);
    var x2 = document.getElementById('two')!.value;
    var x3 = document.getElementById('three')!.value;
    var x4 = document.getElementById('four')!.value;
    var x5 = parseInt(document.getElementById('five')!.value);
    arr.push({"id":x1,"firstname":x2,"lastname":x3,"address":x4,"salary":x5});
    console.log(arr)
    show()
}

function search(){
    var x = Number(prompt("Enter id :"))
    // console.log(x)

    var result ="<tr><th>id</th><th>name</th><th>last</th><th>address</th><th>salary</th></tr>"
    for(let i in arr){
        if(x===arr[i].id){
            result+="<tr><td>"+arr[i].id+"</td><td>"+arr[i].firstname+"</td><td>"+arr[i].lastname+"</td><td>"+arr[i].address+"</td><td>"+arr[i].salary+"</td></tr>"
        }
        document.getElementById('tab')!.innerHTML=result
    }
}

