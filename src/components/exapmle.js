let input = ["Mango", "Orange", "Grape", "Banana", "Mango", "Orange", "Grape", "Banana", "Mango", "Orange", "Grape", "Banana"];

var mango = 0;

var orange = 0;

var grape = 0;
var banana = 0;

let newArr = []

input.forEach((item,index)=>{

if(item =="Mango"){
mango++
}else if(item =="Orange"){
orange++

}else if(item =="Grape"){
grape++

}else if(item =="Banana"){
banana++

}
if(mango===1){
newArr.push(item)

}
if(orange===1||orange===2){
newArr.push(item)

}

if(grape===1||grape===2||grape===3){
newArr.push(item)

}

if(banana===1||banana===2){
newArr.push(item)

}


})
console.log(newArr,'gsydigasi')


