function add(){
   var textValue=0,lastEle=0;
   textValue=form.name.value;
    lastEle=textValue.charAt(textValue.length-1);
    if(lastEle=='+'||lastEle=='-'||lastEle=='/'||lastEle=='*'){
        form.name.value=textValue.substring(0,textValue.length-1);
        form.name.value+='+';
    }else{
        form.name.value+='+';
    }
}

function subtract(){
    var textValue=0,lastEle=0;
    textValue=form.name.value;
     lastEle=textValue.charAt(textValue.length-1);
     if(lastEle=='+'||lastEle=='-'||lastEle=='/'||lastEle=='*'){
         form.name.value=textValue.substring(0,textValue.length-1);
         form.name.value+='-';
     }else{
         form.name.value+='-';
     }
 }
 function divide(){
    var textValue=0,lastEle=0;
    textValue=form.name.value;
     lastEle=textValue.charAt(textValue.length-1);
     if(lastEle=='+'||lastEle=='-'||lastEle=='/'||lastEle=='*'){
         form.name.value=textValue.substring(0,textValue.length-1);
         form.name.value+='/';
     }else{
         form.name.value+='/';
     }
 }

 function multiply(){
    var textValue=0,lastEle=0;
    textValue=form.name.value;
     lastEle=textValue.charAt(textValue.length-1);
     if(lastEle=='+'||lastEle=='-'||lastEle=='/'||lastEle=='x'){
         form.name.value=textValue.substring(0,textValue.length-1);
         form.name.value+='*';
     }else{
         form.name.value+='*';
     }
 }