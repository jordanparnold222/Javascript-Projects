//rollercoaster example
function ride_function()    {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";

}

//Voting age example
function VoteFunction() {
    var MyAge, can_vote;
    MyAge = document.getElementById("age").value;
    can_vote = (MyAge > 17) ? "You are old enough to vote!":"You aren't old enough to vote. You must be at least 18 years of age";
    document.getElementById("vote").innerHTML = can_vote;
}

//Vehicle example
function vehicle(make, model, year, color)  {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new vehicle ("Ford","Pinto", 1971, "Mustard");

function myfunction()    {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_make + " " + Erik.vehicle_model + ", which was manufactured in " + Erik.vehicle_year + ".";
}

//My own example of "new" and "this"

function animal(skin, color, coolness)  {
    this.animal_skin = skin;
    this.animal_color = color;
    this.animal_coolness = coolness;
}

var alligator = new animal("scaly", "green", "cool");
var lion = new animal("furry", "orange", "kinda cool");
var penguin = new animal("blubber or something", "black and white", "lame");

function MyOwnFunction() {
    document.getElementById("new_and_this").innerHTML = "Penguins are made out of " + penguin.animal_skin + ", are " + penguin.animal_color + ", and are " + penguin.animal_coolness;
}

//Nested counting function
function nested_function()   {
    document.getElementById("counting").innerHTML = count();
    function count()    {   //Nested function 1
        var starting_point = 7;
        function plus_one() {starting_point += 1;}  //Nested function 2
        plus_one();
        return starting_point;
    }
}