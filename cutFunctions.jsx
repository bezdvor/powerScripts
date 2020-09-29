//---------------------- VARIABLES ------------------------------
var regPat = /\d{2,}(x|\u0445|\u0447)\d{2,}/ig; //паттерн для поиска размеров, без учета регистра, ищет все совпадения
var regPatforX = /(x|\u0445|\u0447)/ig; //паттерн для поиска х, т.е. символа разбивки на ширину и высоту
var ukrPat = /@ukr/ig;
var quattroPat = /quat(t)ro|кват(т)ро/ig;
//-------------------------------------------------------
var constName = [
    /магвинил|магнит|mag\s*(vinil|vynyl)/i, //01
    /стикер|наклей|пленк|плёнк|оракал/i, //02
    /LB|лайтбо|lightbo|ЛБ/i, //03
    /рама|марзан/i, //04
    /карман(ы)*\s*\-*35/i, //05 
    /карман(ы)*\s*\-*40/i, //06
    /карман(ы)*\s*\-*45/i, //07
    /карман(ы)*\s*\-*50/i, //08
    /карман(ы)*\s*\-*90/i, //09
    /карман(ы)*\s*\-*100/i, //10
    /ПВХ\_*\-*\d{1,}\мм/i, //11
    /бумага|мгк/i, //12
    /плоттер|plot(t)er/i, //13
    ];
var constForm = [
    "magvin", //01
    "plnk", //02
    "lbox", //03
    "rmtk", //04
    "krmn35", //05
    "krmn40", //06
    "krmn45", //07
    "krmn50", //08
    "krmn90", //09
    "krmn100", //10
    "pvh", //11
    "plnk", //12
    "plot", //13
    ];
//-------------------------------------------------------
function convMmToPx(item){
var myMM = UnitValue(item,"mm");
	var myPixBase = UnitValue(1/(parseInt(app.activeDocument.resolution)), "in");
	myMM.baseUnit = myPixBase;
return Math.round(myMM.as("px"));
};
function convPxToMm(item){
var myPx = UnitValue(item,"px");
return Math.round((myPx.as("mm")));
};