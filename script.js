window.addEventListener("load", function() {
   let form = document.querySelector("form[id=launchForm]");
   form.addEventListener("submit", function(event) {
   let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let launchStatus = document.getElementById('launchStatus');
   if (pilotName.value === "" || copilotName.value === ""|| fuelLevel.value === ""|| cargoMass.value === "" 
   || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
   alert("All fields are required!");
   event.preventDefault();
}else{
   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} Ready`;
   document.getElementById("pilotStatus").innerHTML = `Co-pilot ${copilotName} Ready`;
   if (fuelLevel < 10000){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `Fuel level NOT high enough for launch`;
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   }
   if (cargoMass > 10000){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML = `Cargo mass TOO HIGH for launch`;
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   }else{
      launchStatus.style.color = "green";
      launchStatus.innerHTML = "Shuttle ready for launch";
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
