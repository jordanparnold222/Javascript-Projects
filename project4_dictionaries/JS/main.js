function animal_dictionary()    {
    var animal_coolness = {
        sheep:"lame",
        sloth:"rad",
        penguin:"meh",
        alpaca:"ultra rad"
    };
    delete animal_coolness.alpaca;
    document.getElementById("dictionary").innerHTML = animal_coolness.alpaca;
}