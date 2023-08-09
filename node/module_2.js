var log = {
    info: function (message) {
        console.log("info1", message);
    },
    warning : function(message)
    {
         console.log("Warning ",message );
    }
    ,
    error : function(message)
    {
         console.log("error ",message);
    }
}
module.exports = log;