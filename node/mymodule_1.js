function getCurrentDate()
{
    var date =new Date();
    var currentdate =date.getDate() + '/' + (date.getMonth()+1) +'/'+ date.getFullYear() ;
    return currentdate;  
}

function getCurrentTime()
{
    var time =new Date();
    var currenttime=time.getHours() + ':' + time.getMinutes() +':'+ time.getSeconds() ;
    return currenttime;
}
module.exports.getdate=getCurrentDate;
module.exports.gettime=getCurrentTime;