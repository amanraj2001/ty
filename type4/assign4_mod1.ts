var products = [
    {
        "pid": 0, "productname": "tom", "productquantity": 10
    },
    {
        "pid": 1, "productname": "jerry", "productquantity": 17
    },
    {
        "pid": 2, "productname": "hello", "productquantity": 5
    }]

    function abc(){
    console.log(products[0].pid)

    result ="<tr></tr>"
    for(var i=0;i<products.length;i++){
        result +=`<tr><td>${products[i].pid}</td><td>${products[i].productname}</td><td><input type="number" id="${products[i].pid}" class="form-control w-25" value="${products[i].productquantity}"></td><td><button class="btn btn-primary" onclick="a(${products[i].pid})">click</button></td></tr>`
    }
    document.getElementById('tab')!.innerHTML=result
}
abc()
function a(id){
    // console.log(id)
    // console.log(`${products[id].productname}`)
    // console.log(`${products[id].productquantity}`)
    // var y = parseInt(`${products[id].productquantity}`)
    var y =document.getElementById(id).value
    // console.log(typeof y)
   var x= y-1;
    document.getElementById(id).value = x
    // if(x<5){
    //     alert("need to reorder")
    // }

}
// ${products[i].productquantity}