#include cutFunctions.jsx
//------------ Variqables -----------------
var WorkDoc;
var descrObj = {};
//-----------------------------------------
WorkDoc = function(item){
    this.path = item.path,
    this.name = item.name,//string
    this.resolve = item.resolution,//number
    this.docname = (function(){
    var tmp01 = item.name.split(".");
        descrObj.name = tmp01[0];
    }()), //string descrObj -> имя файла
    this.sizesInMM = (function(){
    var tmp02 = descrObj.name.match(regPat);
    tmp02 = tmp02[0].split(regPatforX);
    descrObj.widthMM = parseFloat(tmp02[0]);
    descrObj.heightMM = parseFloat(tmp02[2]);
    return
    }()), //number descrObj -> ширина и высота в миллиметрах
//-------------------------------------------------------
this.construct = (function () {
    var out;
    inner: for (var i = 0; i < constName.length; i++) {
        switch (true) {
            case (constName[i].test(descrObj.name)):
                var out = constForm[i];
                break inner;
        }
    }
    descrObj.construct = out;
    return
}())
this

};//end of class WorkDoc