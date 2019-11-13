
let CTCounter=372, OTCounter=11;
function tap() {
    if(confirm("Are you sure you want to change the number of tasks?"))
        {   if (OTCounter>0)
            {
                CTCounter++;
                OTCounter--;
                document.getElementById("t372").innerHTML = CTCounter;
                document.getElementById("t11").innerHTML = OTCounter;
            }
            else alert("Sorry no opened task now!");
        }
}


let arr1 = new Array(document.getElementsByClassName("artpics"));

for (let i = 0; i < arr1.length; i++)
{
    if (arr1[i].onclick)
    {
        document.getElementById("yellowcircle").innerHTML = i;
    }
}



