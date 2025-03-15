//synchronous
console.log("เริ่มต้น")
console.log("ดาวน์โหลด")
console.log("จบ")

//asynchronous
console.log("เริ่มต้น")
setTimeout(()=>{console.log("ดาวน์โหลด")},3000)
console.log("จบ")