// TODO: add code here
window.addEventListener("load",function(event){
    
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const div = document.getElementById("container");
            let currentAstronautBio;
            for(let i = 0; i < json.length; i++){
                currentAstronautBio = json[i];
                currentAstronautSkills = currentAstronautBio.skills.join(", ");
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${currentAstronautBio.firstName} ${currentAstronautBio.lastName}</h3>
                        <ul>
                            <li>${currentAstronautBio.hoursInSpace}</li>
                            <li>Active: ${currentAstronautBio.active}</li>
                            <li>Skills: ${currentAstronautSkills}</li>
                        </ul>
                        </div>
                        <img class="avatar" src="${currentAstronautBio.picture}">
                    </div>
                `;
            }
        });
    });
});