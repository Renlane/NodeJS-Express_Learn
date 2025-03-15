//file to keep code js server>app>module>class>function>code
function getCurrentTime(){
    return Number(new Date())
}

function add(x,y){
    return x+y
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
}

module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber