//// Story object with main story variables.
//let objStory = {                // The story object
//    firstName: "",              //  Who is the story about i.e. Mark    ${objStory.firstName}
//    lastName: "",               //  Reserved - lastName not used        ${objStory.lastName}
//    gender: "",                 //  boy/girl                            ${objStory.gender}
//    genderShortA: "",           //  he/she                              ${objStory.genderShortA}
//    genderShortB: "",           //  his/her                             ${objStory.genderShortB}
//    weather: "",                //  warm/cold                           ${objStory.weather}
//    trip: "",                   //  zoo/party                           ${objStory.trip}
//}; 

function fStoryBuildFairground(objStory) {

    //####################################################################################################
    //Example prompt - text answer question:
    let strQuestionA = prompt(`Does ${objStory.firstName} have a favorite fizzy drink - if so what is it?`, `no`)
    if (strQuestionA.toLowerCase() != 'no') {
        //Store the full story sentence into the question string
        strQuestionA = `Whilst at the ${objStory.trip} ${objStory.firstName} was able to have ` + strQuestionA.toLowerCase() +
            ` with ${objStory.genderShortB} friends who all loved it.`
    }
    //####################################################################################################

    //####################################################################################################
    //Example Prompt - yes/no answer question:
    let strQuestionB = prompt(`Did ${objStory.firstName}s friend have a birthday cake (yes/no)?`, `yes`)
    if (strQuestionB.toLowerCase() == 'yes' | strQuestionB.toLowerCase() == 'y') {
        //Store the full story sentence into the question string
        strQuestionB = `During the party, ${objStory.genderShortB} friends mum brought out a big cake and everyone ` +
            `sang happy birthday while ${objStory.genderShortB} friend blew out the candles. After the ${objStory.trip} ` +
            `${objStory.firstName} and everyone else were given a party bag to take home with them that had some birthday cake in it.`;
    }
    //####################################################################################################

    let strQuestionC = '';
    let strQuestionD = '';
    let strQuestionE = '';
    let strQuestionF = '';
    let strQuestionG = '';
    let strQuestionH = '';

    //Concat the sentences togther into paragraphs.
    let TripParagraph01 = ''
    if (strQuestionA != '') { TripParagraph01 += ' ' + strQuestionA }
    if (strQuestionB != '') { TripParagraph01 += ' ' + strQuestionB }

    let TripParagraph02 = ''
    if (strQuestionC != '') { TripParagraph02 += ' ' + strQuestionC }
    if (strQuestionD != '') { TripParagraph02 += ' ' + strQuestionD }

    let TripParagraph03 = ''
    if (strQuestionE != '') { TripParagraph03 += ' ' + strQuestionE }
    if (strQuestionF != '') { TripParagraph03 += ' ' + strQuestionF }

    let TripParagraph04 = ''
    if (strQuestionG != '') { TripParagraph04 += ' ' + strQuestionG }
    if (strQuestionH != '') { TripParagraph04 += ' ' + strQuestionH }

    //Concat the paragraphs into the story.
    let TripStory = ''
    if (TripParagraph01 != '') { TripStory += '<p>' + TripParagraph01 + '</p>' }
    if (TripParagraph02 != '') { TripStory += '<p>' + TripParagraph02 + '</p>' }
    if (TripParagraph03 != '') { TripStory += '<p>' + TripParagraph03 + '</p>' }
    if (TripParagraph04 != '') { TripStory += '<p>' + TripParagraph04 + '</p>' }

    //Return the trip story. 
    return TripStory;

}

