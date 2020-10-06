function ClothUkr(width, height, construct){

if(width <= convMmToPx(3000) && height <= convMmToPx(3000)){
    if(construct == "rmtk"){app.activeDocument.resizeCanvas(convMmToPx(70), convMmToPx(70), AnchorPosition.MIDDLECENTER)} 
  }
  
  if(convMmToPx(3001) <= width <= convMmToPx(4000) || convMmToPx(3001) <= height <= convMmToPx(4000)){
if(construct == "rmtk"){app.activeDocument.resizeCanvas(convMmToPx(90), convMmToPx(90), AnchorPosition.MIDDLECENTER)}
  }
 
if (convMmToPx(4001) <= width <= convMmToPx(5000) || convMmToPx(4001) <= height <= convMmToPx(5000)){
    if(construct == "rmtk"){app.activeDocument.resizeCanvas(convMmToPx(110), convMmToPx(110), AnchorPosition.MIDDLECENTER)}
  }

}//end of function
//----------------- added Functions ------------------------
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