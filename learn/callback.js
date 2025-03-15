//callback
//callback จะเรียกใช้ตอนอีก function เสด
function calculate(x, y, callback) {
    setTimeout(() => {
        const sum = x + y
        callback(sum)
    }, 3000)
}

calculate(100, 50, function (result) {
    console.log(`result = ${result}`)
})

//download
const url1 = "test.json"

function downloading(url, callback) {
    setTimeout(() => {
        console.log(`downloading from ${url}`)
        callback(url)
    }, 3000)
}

function complete(url) { console.log(`load ${url} complete`) }

//callback hell
downloading(url1, function (url) {
    console.log(`load ${url} complete`)
    downloading(url1, function (url) {
        console.log(`load ${url} complete`)
        downloading(url1, function (url) {
            console.log(`load ${url} complete`)
        })
    })
})

