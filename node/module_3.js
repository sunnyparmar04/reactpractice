var convertor ={
rupeesToDoller : function(rupees)
{
    var doller = rupees/81.96;
    console.log("doller is ",doller);
},
repeesToPound : function(rupees)
{
    var pound =rupees/62.5;
    console.log("pound is ",pound);
}
}
module.exports =convertor;