
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

document.addEventListener('DOMContentLoaded', function()
{
    let arr1 = document.querySelectorAll(".artpics div");
    console.log(arr1);
    for (let i = 0; i < arr1.length; i++)
    {
        arr1[i].addEventListener("click", fclick.bind(null,i));
    }
});

function fclick(i)
                {
                    document.getElementById("yellowcircle").innerHTML = i;

                }
