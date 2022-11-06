function addTasks(){
    document.getElementById('warning').innerHTML="";
 let taskadd = document.getElementById('taskadd').value;
 if(taskadd==''){
    document.getElementById('warning').innerHTML="Enter you Task";
 }else{
    let tks = document.getElementById('tks');
    let li = document.createElement('li');
    li.textContent=taskadd;

    //tks.insertBefore(li,tks);

    let index = tks.firstElementChild;
    //console.log(index);
    if(index==null){
        tks.appendChild(li);
    }else{
        tks.insertBefore(li,index);
    }
 }
 document.getElementById('taskadd').value="";
}