function mudou(){
    document.getElementById('fraseLegal').innerHTML = document.getElementById('campoEscrita').value
}


const d = new Date
const today = d.getDate()
const month = d.getMonth()+1
const year = d.getFullYear()
const dateNow = `${today}/${month}/${year}`

console.log(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear())

const hour = d.getHours()
const minute = d.getMinutes()
const second = d.getSeconds()
const hourNow = `${hour}:${minute}:${second}`
console.log(hourNow)
