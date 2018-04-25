var mw=62;
var numerogeneradores62mw=4;
var numerogeneradores124mw=15;
var totalmw=0;
var i=5;

while(numerogeneradores62mw<='4'){
    if(numerogeneradores62mw==='1'){
        totalmw=totalmw+mw;
        console.log("el generador esta prendido y se añade  %i mw" ,totalmw)
    }else if (numerogeneradores62mw==='2'){
        totalmw=totalmw+mw;
        totalmw++;
        console.log("el generador esta apagado",totalmw);
    }else if (numerogeneradores62mw==='3') {
        mw=mw*3;
        totalmw = totalmw + mw;
        console.log("el generador esta prendido y se añade  %i mw" ,totalmw)
    }else if (numerogeneradores62mw==='3') {
        mw=mw*4;
        totalmw = totalmw + mw;
        console.log("el generador esta apagado",totalmw);
    }
}
for (i=5;i<=numerogeneradores124mw;i++){
    if (i%2!==0){
        var totalto=totalto+124;
        console.log("el generador esta prendido y añade %i",totalto);
    }
    else{
        console.log("el generador esta apagado")}
}
i++;
