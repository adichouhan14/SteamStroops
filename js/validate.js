function checkform()
    {
        
        var f = document.forms["theform"].elements;
        var cansubmit = true;
        for (var i = 0; i < f.length; i++) 
        {
            if (f[i].type=="text" || f[i].type=="email")
	        {
                if (f[i].value.length == 0) cansubmit = false;
            }
        }
       var ch=document.getElementsByName("yes-no");
       var che=document.getElementsByName("check");
       //document.getElementById("hello").innerHTML= che[0].value;
       if (!ch[0].checked && !ch[1].checked) cansubmit = false;
       if (!che[0].checked) cansubmit = false;


       document.getElementById('submitbutton').disabled = !cansubmit;
    }

function checkGrade()
{
    var radio=document.getElementsByName("studentGrade");
    //document.getElementById("hello").innerHTML = "function called";
    for(i = 0; i < radio.length; i++) 
    { 
        //document.getElementById("hello").innerHTML= "Gender: "+radio[i].value;
        if(radio[i].checked) 
        {
            document.getElementById("grade"+radio[i].value).className="grade-label selected";
            //document.getElementById("hello").innerHTML= "Gender: "+radio[i].value;
        }
        else
        {
            document.getElementById("grade"+radio[i].value).className="grade-label";
        }
            //document.getElementById("hello").innerHTML= "Gender: "+radio[i].value; 
            /*
            box-shadow: 0 2px 0 0 #ffa526;
            border: solid 1px #ffa526;
            background-color: #fff2e0;
            */
    } 
    
}


