window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
   let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let fuelLevelNum = Number(fuelLevel.value);
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargoMassNum = Number(cargoMass.value);
    let launchStatus = document.getElementById('launchStatus');
   if (pilotName.value === "" || copilotName.value === ""|| fuelLevelNum === ""|| cargoMassNum === "" 
   || isNaN(fuelLevelNum) || isNaN(cargoMassNum)) {
   alert("All fields are required!");
   
}else{
   document.getElementById("pilotStatus").style.visibility = "visible";
   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} Ready`;
   document.getElementById("copilotStatus").style.visibility = "visible";
   document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} Ready`;
   if (fuelLevelNum < 10000){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `Fuel level NOT high enough for launch`;
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   }else if (cargoMassNum > 10000){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML = `Cargo mass TOO HIGH for launch`;
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   }else{
      launchStatus.style.color = "green";
      launchStatus.innerHTML = "Shuttle ready for launch";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
      document.getElementById("cargoStatus").innerHTML = `Cargo mass ok for launch`;
   }
}
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  div.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[3].name}</li>
                     <li>Diameter: ${json[3].diameter}</li>
                     <li>Star: ${json[3].star}</li>
                     <li>Distance from Earth: ${json[3].distance}</li>
                     <li>Number of Moons: ${json[3].moons}</li>
                  </ol>
                  <img src="${json[3].image}">`
});
});
});
