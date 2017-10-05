function cross(_r)
{

}

function bar(_r){

return 5;
}
function foo(_r){

	var _bar=_r("import bar");
	
	console.log(_bar);

}

var _req=function (_request){
// Write your own code:

var regex = /import\s([a-z]+)/g;
var str =_request;
var m=regex.exec(str);

var fun=eval(m[1]);
return fun(_req);
//==============================
}



foo(_req); 

