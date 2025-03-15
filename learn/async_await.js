//from promise.js
let connect = true
const url = "new.json"
const url2 = "new2.json"
const url3 = "new3.json"
const url4 = "new4.json"
function downloading(url) {
    return new Promise(function (resolve, reject) {
        console.log("loading...")
        setTimeout(() => {
            if (connect) {
                resolve(`${url} downloaded`)
            } else {
                reject("error")
            }
        }, 1000)
    })
}

//async await
async function start(){
    console.log(await downloading(url))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
}

start()