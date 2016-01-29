var myFunction = function(){
	 var str= document.getElementById("write").value;
     	 document.getElementById("demo").innerHTML = str;
     	 var obj={};
      	 for(var i=0;i<str.length;i++){
        	obj[str[i]];
        	obj[str[i]] ? ++obj[str[i]] : obj[str[i]] = 1;
      	 }
    //  console.log(obj);
     	var max=0;
      	var ch="";
      	for(var i in obj){

       		 if(max< obj[i])
        	{
          		ch=i;
         		max=obj[i];
        	}
	}
       console.log(ch);

   }












