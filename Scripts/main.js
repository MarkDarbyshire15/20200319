function storyBuild() {

    alert('Story build:main start');

    // Story content strings for output
    let txtStoryHeader = ''
    let txtStoryTitle = ''
    let txtStoryBody = ''
    let txtStoryBodyParty = ''
    let txtStoryBodyZoo = ''
    let txtStoryBodyFairground = ''
    let txtStoryFooter = ''

// Story object with main story variables.
    let objStory = {                // The story object
        firstName: "",              //  Who is the story about i.e. Mark    ${objStory.firstName}
        lastName: "",               //  Reserved - lastName not used        ${objStory.lastName}
        gender: "",                 //  boy/girl                            ${objStory.gender}
        genderShortA: "",           //  he/she                              ${objStory.genderShortA}
        genderShortB: "",           //  his/her                              ${objStory.genderShortB}
        weather: "",                //  warm/cold                           ${objStory.weather}
        trip: "",                   //  zoo/party                           ${objStory.trip}
    }; 

    alert(`Welcome to the Story Writer game.` +
          `\n\nCreate a short story to read to your younger sister or brother.` +
          `\n\nAnswer some simple questions and we will do the rest.` +
          `\n\nGood luck and enjoy the story.`);

    //Gather information about the siblings story character

    //Prompt name
    objStory.firstName = prompt(`Please enter your story characters name:`, "")
    if (!!!objStory.firstName.trim()) { return '' } // Exit and return nothing if undefined or empty.
    objStory.firstName = toUpperCaseFirst(objStory.firstName)

    //Prompt gender
    objStory.gender = prompt(`Is ${objStory.firstName} a boy or girl (boy/girl)?`, `boy`);
    if (!!!objStory.gender.trim()) { return '' } // Exit and return nothing if undefined or empty.
    //Ensure lowercase is in the var
    if (objStory.gender.toLowerCase() == 'boy'){
        objStory.gender = 'boy';
        objStory.genderShortA = 'he';
        objStory.genderShortB = 'his';
    }
    else if (objStory.gender.toLowerCase() == 'girl') {
        objStory.gender = 'girl';
        objStory.genderShortA = 'she';
        objStory.genderShortB = 'her';
    }
    else { return '' } // Exit and return nothing if wrong.
    
    //Prompt weather type
    objStory.weather = prompt(`Will it be nice weather on ${objStory.firstName}s trip (yes/no)?`, `yes`)
    if (!!!objStory.weather.trim()) { return '' } // Exit and return nothing if undefined or empty.
    if (objStory.weather.toLowerCase() == 'yes' | objStory.weather.toLowerCase() == 'y') {
        objStory.weather = 'warm'
    } else {
        objStory.weather = 'cold'
    }

    //Prompt trip type
    objStory.trip = prompt(`Where did ${objStory.firstName} go to on the trip:` +
        `\n fairground?  ` +
        `\n zoo?  ` +
        `\n party?`, `zoo`
    );
    if (!!!objStory.trip.trim()) { return '' } // Exit and return nothing if undefined or empty.
    if (objStory.trip.toLowerCase() == 'zoo') {
        objStory.trip = 'zoo'
    } else if (objStory.trip.toLowerCase() == 'party') {
        objStory.trip = 'party'
    } else if (objStory.trip.toLowerCase() == 'fairground') {
        objStory.trip = 'party'
    } else {
        return '';
    }

    alert(`Now that we know ${objStory.firstName} is going to the ${objStory.trip}` +
        `\nlets find out a little about what ${objStory.firstName} did.`)

    switch (objStory.trip) {
        case 'zoo': txtStoryBodyZoo = fStoryBuildZoo(objStory); break;
        case 'party': txtStoryBodyParty = fStoryBuildParty(objStory); break;
        case 'fairground': txtStoryBodyFairground = fStoryBuildFairground(objStory); break;
        default: break;
        }

    //Randomly switch the weather text for the story
    //####################################################################################################
    switch (objStory.weather) {         //warm/cold
        case 'warm':                    // if its "warm"
            switch (getRandomNumber(1, 4)) {
                case 1: objStory.weather = "warm"; break;
                case 2: objStory.weather = "very hot"; break;
                case 3: objStory.weather = "very warm"; break;
                case 4: objStory.weather = "sunny"; break;
            }
            break;
        default:                        // else... i.e. "cold"
            //objStory.weather = "chilly and windy";
            switch (getRandomNumber(1, 4)) {
                case 1: objStory.weather = "cold"; break;
                case 2: objStory.weather = "chilly"; break;
                case 3: objStory.weather = "windy"; break;
                case 4: objStory.weather = "overcast"; break;
            }
            break;
    }
    //####################################################################################################

    //Prep story header
    txtStoryHeader += `<div class="${objStory.gender}">`;

    //Prep story title
    txtStoryTitle += `<h2>`
    txtStoryTitle += `A short story about a little ${objStory.gender} called ${objStory.firstName} `
    txtStoryTitle += `</h2>`

    //Prep story part 1
    txtStoryBody += `<p>`
    txtStoryBody += `This is a short story about a little ${objStory.gender} called ${objStory.firstName} `;
    txtStoryBody += `and the ${objStory.weather} day that ${objStory.genderShortA} went on a trip to a ${objStory.trip}.`;
    txtStoryBody += `</p>`

    //Prep story part 2
    txtStoryBody += txtStoryBodyZoo;
    txtStoryBody += txtStoryBodyParty;
    txtStoryBody += txtStoryBodyFairground;

    //Prep story footer
    txtStoryFooter = 'The end.'
    txtStoryFooter = '</div>'
    return txtStoryHeader + txtStoryTitle + txtStoryBody + txtStoryFooter
}

//Get a random number from min to max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toUpperCaseFirst(strText) {
    return strText.charAt(0).toUpperCase() + strText.substring(1);
}
