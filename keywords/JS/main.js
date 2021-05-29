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
