function GetDate()  {
    if (new Date().getHours() < 18) {
        document.getElementsById("greeting").innerHTML = "How are you doing today?";
    }
    else  {
        document.getElementById("greeting").innerHTML = "It's late. Go to bed."
    }
}