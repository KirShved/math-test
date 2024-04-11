let button=document.querySelector('#finish')

let q1=document.querySelector('#q1')
let q2=document.querySelector('#q2')
let q3=document.querySelector('#q3')
let q4=document.querySelector('#q4')
let q5=document.querySelector('#q5')
let q6=document.querySelector('#q6')


button.addEventListener('click',()=>{
let result=0
if(q1.value==='4'){
    result++
}else{
    alert('В тесте 1 ошибка')
}
if(q2.value==='9'){
    result++
}else{
    alert('В тесте 2 ошибка')
}
if(q3.value==='7'){
    result++
}else{
    alert('В тесте 3 ошибка')
}
if(q4.value==='6'){
    result++
}else{
    alert('В тесте 4 ошибка')
}
if(q5.value==='27'){
    result++
}else{
    alert('В тесте 5 ошибка')
}
if(q6.value==='100'){
    result++
}else{
    alert('В тесте 6 ошибка')
}

alert(result)
})