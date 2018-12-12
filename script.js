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

  //6
  var dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
  }
  var list = "";
  function printHobbies(){
    
    for(i=0; i< dwayneObject.hobbies.length; i++){
        list = list + ` ${dwayneObject.hobbies[i]}`;
    }
    console.log(list);
  }
  printHobbies(list);

  //7
  var cohort1 = {
    name: "Cohort One",
    startDate: "January 15, 2018",
    endDate: "July 12, 2018",
    instructors: ["Jordan", "Josh", "Kim"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
  }
  
  function printCohort(cohortObject){
    var htmlString = `
    
    <h1 class="name">${cohort1.name}</h1>
    <h3 class="start">Start date: ${cohort1.startDate}</h3>
    <h3 class="end">Ending date: ${cohort1.endDate}</h3>
    <ul class="instructors">
        <li>${cohort1.instructors[0]}</li>
        <li>${cohort1.instructors[1]}</li>
        <li>${cohort1.instructors[2]}</li>
    </ul>
    <ul class="tech">
        <li>${cohort1.techStack[0]}</li>
        <li>${cohort1.techStack[1]}</li>
        <li>${cohort1.techStack[2]}</li>
    </ul>
    
    
    `                  
    document.querySelector("#cohort-container").innerHTML = htmlString;
  }
  printCohort(cohort1);





