ampm=document.getElementById('ampm')
function displayTime(){2
 let dateTime=new Date();
 let hr=dateTime.getHours();
 let min=dateTime.getMinutes();
 let sec=dateTime.getSeconds(); 
 if(hr>12){
    ampm.innerHTML="PM"
    hr=hr-12;
 }
 else{
    ampm.innerHTML="AM"
 }
 document.getElementById('hours').innerHTML=padZero(hr);
document.getElementById('mins').innerHTML=padZero(min);
document.getElementById('sec').innerHTML=padZero(sec);
}


function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,1000);