
// 1
const ar=("https://pokeapi.co/api/v2/pokemon/1/")
axios.get(ar)
.then(function(rese){
     console.log(rese.data)
     console.log(rese.data.height)
    //  document.getElementById("height").innerHTML=rese.data.height
 
    //  document.getElementById("weight").innerHTML=rese.data.weight
 
});




const ad=document.getElementById("ad001") 
var input = document.getElementById("input");
input.addEventListener("click",function () {
    var inputvalue = input.value;
    var number = parseFloat(inputvalue);
    input.value=ad
});
 const linkrandom = ("https://pokeapi.co/api/v2/pokemon/" + number4(1,20))
function random () {
    const number3 = document.getElementById("input").value
 axios.get(linkrandom)
.then(function(response){
    //  console.log(response.data);
const reza = document.getElementById("img")
reza.src=response.data.sprites.back_default

document.getElementById("height").innerHTML=response.data.height
 
document.getElementById("weight").innerHTML=response.data.weight


const reza2 = document.getElementById("img-box")
reza2.src=response.data.sprites.back_default

document.getElementById("name").innerHTML = response.data.name

document.getElementById("name1").innerHTML = response.data.name


});


}
random();
 function number4(min,max) {
    return Math.floor(Math.random()   *    (max-min) +min) 
 }
//  var a = document.getElementById("a")
//  var carikn = ('file:///C:/Users/iLaptop/Downloads/4_6021705012697108428reza/pokemon/design/reza.aps/reza.html')
//  addEventListener("click",function(){

// var aslan = carikn.a.value
// var belbord = parseFloat(aslan).value

//  });

// const linkrandom1 = ("https://pokeapi.co/api/v2/pokemon/" + number4(1,20))
// function random2 () {
    // const numberr2 = document.getElementById("input").value
// axios.get(linkrandom1)
// .then(function(response){
// console.log(response.data);
// const reza2 = document.getElementById("img-box")
// reza2.src=response.data.sprites.back_default
 
// document.getElementById("name").innerHTML = response.data.name

// });


// }
// random2();
