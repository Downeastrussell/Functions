//1
function yell(){
    console.log("I Love JavaScript");
}

yell();

//2
function dreamVacation(name, place){
    
    console.log(`${name} wants to travel to ${place}.`);
}

dreamVacation("Russ","China")
dreamVacation("Jeff","Europe")
dreamVacation("Matt","Africa")

//3
function sandwich(breadType, sandwichName, toasted){
    if(toasted == true){
        toasted = "toasted";
    }
    if(toasted == false){
        toasted = "non toasted";
    }
    
    var order = `You ordered a ${toasted} ${sandwichName} on ${breadType} bread.`
     console.log(order);   

}




sandwich("Wheat", "Reuben", true)
sandwich("White", "Italian", false)
sandwich("Rye", "Club", true)

//4
var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"];

var toppings = "Our topping choices are: " ;
function newToppings(array){
    
    for(i=0; i<array.length; i++){
        
        toppings = toppings + ` ${array[i]} `;
       

    }
    console.log(toppings);
} 

newToppings(sandwichToppings);

//5
var partyGuests = [
    {
      name: "Sam",
      age: 18
    },
    {
      name: "Jerry",
      age: 45
    },
    {
      name: "Lila",
      age: 29
    },
    {
      name: "Mary",
      age: 68
    },
    {
      name: "Todd",
      age: 10
    }
  ]
  
  var ofAge="";
  var underAge = "";
  function ageChecker(guestList){
  
    for(i=0; i<guestList.length; i++){
        if(guestList[i].age < 21){
            ofAge = ofAge + ` ${guestList[i].name} `;
        }
        else{
            underAge = underAge + ` ${guestList[i].name} `;
        }

    
    }
    console.log("These guests are under age: " + underAge);
    console.log("These guests are over 21: " + ofAge);
  }

  ageChecker(partyGuests);





