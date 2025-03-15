//promise แก้ปญหา callback hell (pending resolve reject)
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
        }, 3000)
    })
        // .then(result => { console.log(result) })
        // .catch(result => { console.log(result) })
        // .finally(() => {console.log("0[")})
}

downloading(url).then(function(result){
    console.log(result)
    downloading(url2).then(function(result){
        console.log(result)
        downloading(url3).then(function(result){
            console.log(result)
        })
    })
})

downloading(url).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
})

//then(resolve) catch(reject) finally(all)