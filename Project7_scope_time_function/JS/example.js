//Get Date example
function GetDate()  {
    if (new Date().getHours() < 18) {
        document.getElementsById("greeting").innerHTML = "How are you doing today?";
    }
    else  {
        document.getElementById("greeting").innerHTML = "It's late. Go to bed."
    }
}

//Voting "else" example
function GetDate()  {
    var a = document.getElementById("age").value;

    if (a < 18 )    {
        document.getElementById("vote_output").innerHTML = "You are not old enough to vote. Obtain a fake ID and come back.";
                    }
        else {
            document.getElementById("vote_output").innerHTML = "Your are old enough to vote!";
        }
}

//time "else if" example


function TimeOfDay()    {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0)  {
        reply = "It is morning time";
    }
    else if (time >= 12 == time < 18)   {
        reply = "It is afternoon";
    }
    else{
        reply = "It is evening time";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}