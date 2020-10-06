#include cutFunctions.jsx
#include prepareFunction.jsx
//------------ Variqables -----------------
var WorkDoc;
var descrObj = {};//объект описания текущего файла
//descrObj.ukr = true
//-----------------------------------------
WorkDoc = function(item){
    this.path = item.path,
    this.name = item.name,//string
    descrObj.resolve = item.resolution,//number разрешение файла
    this.docname = (function(){
    var tmp01 = item.name.split(".");
        descrObj.name = tmp01[0];
    }()), //string descrObj -> имя файла как строка
    this.ukr = (function(){
switch (true) {
            case (ukrPat.test(descrObj.name)):
                descrObj.ukr = true}
    }()),
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
    descrObj.construct = out; //добавляет маркер конструкции в свойства объекта
    return
}()),
this.pvhConstr = (function(){
if(descrObj.construct == "pvh"){
    var exitPvh;
    inner: for (var i = 0; i < pvhConstr.length; i++) {
        switch (true) {
            case (pvhConstr[i].test(descrObj.name)):
                var out = pvhDepth[i];
                break inner;
        }
    }
    descrObj.pvhConstr = exitPvh; //добавляет маркер конструкции в свойства объекта
    return
}
}()),
this.sizesInPx = (function(){
    descrObj.widthPx = convMmToPx(descrObj.widthMM);
    descrObj.heightPx = convMmToPx(descrObj.heightMM);
    return //возвращает значения размеров документа в пикселах
}()),
//--------------------- CORE ------------------------------
this.parts = (function(){
var tmp03 = descrObj.name.split("__");
tmp03 = tmp03.slice(-1);
tmp03 = tmp03.toString();
if(regPat.test(tmp03)){
tmp03 = tmp03.match(regPat);
tmp03 = tmp03[0].split(regPatforX);
descrObj.partWidthInMM = parseInt(tmp03[0]);
descrObj.partHeightInMM = parseInt(tmp03[2]);
}
}()), //определяет, есть ли в имени файла запись о разделении на рамки, записывает размеры рамки в свойтва объекта
this.quattro = (function(){
    switch(true) {
      case (quattroPat.test(descrObj.name)): descrObj.quattro = true;
    }
}()), //определяет, есть ли в имени файла запись о рамке кваттро, записывает булевое значение в свойства объекта
this.bleeds = function(){
    switch(true) {
      case (descrObj.ukr == true && descrObj.construct == "rmtk"): ClothUkr(descrObj.widthPx, descrObj.heightPx, descrObj.construct); break;
    }
}
};//end of class WorkDoc