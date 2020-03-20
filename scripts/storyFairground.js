//// Story object with main story variables.
//let objStory = {                // The story object
//    firstName: "",              //  Who is the story about i.e. Mark    ${objStory.firstName}
//    lastName: "",               //  Reserved - lastName not used        ${objStory.lastName}
//    gender: "",                 //  boy/girl                            ${objStory.gender}
//    genderShortA: "",           //  he/she                              ${objStory.genderShortA}
//    genderShortB: "",           //  his/her                             ${objStory.genderShortB}
//    weather: "",                //  warm/cold                           ${objStory.weather}
//    trip: "",                   //  zoo/party/fairground                ${objStory.trip}
//}; 

function fStoryBuildFairground(objStory) {

    let strQuestionA = '';
    let strQuestionB = '';
    let strQuestionC = '';
    let strQuestionD = '';
    let strQuestionE = '';
    let strQuestionF = '';
    let strQuestionG = '';
    let strQuestionH = '';

    //####################################################################################################
    //Example prompt - text answer question:
    strQuestionA = prompt(`Does ${objStory.firstName} have a favorite ride - if so what is it?`, `no`)
    if (strQuestionA.toLowerCase() != 'no') {
        //Store the full story sentence into the question string
        strQuestionA = `Whilst at the ${objStory.trip} ${objStory.firstName} was able to have a ride on the ` + strQuestionA.toLowerCase() +
            ` ${objStory.genderShortA} like it so much ${objStory.genderShortA} wanted to ride again and again.`
    } else {
        strQuestionA=''
    }
    //####################################################################################################

    //####################################################################################################
    //Example Prompt - yes/no answer question:
    strQuestionB = prompt(`Did ${objStory.firstName}s friend buy any candy floss(yes/no)?`, `yes`)
    if (strQuestionB.toLowerCase() == 'yes' | strQuestionB.toLowerCase() == 'y') {
        //Store the full story sentence into the question string
        strQuestionB = `During the visit to the ${objStory.trip}, ${objStory.firstName}s friends mum brought them both some pink candy floss` +
            ` which was really sticky and stuck all over their faces and made them both giggle.` +
            `The candy tasted very sweet, and strawberry like is was really yummy.`;
    } else {
        strQuestionB = ''
    }
    //####################################################################################################

    //####################################################################################################
    //Example Prompt - yes/no answer question:
    strQuestionC = prompt(`Does ${objStory.firstName}s friend like scary rides(yes/no)?`, `yes`)
    if (strQuestionC.toLowerCase() == 'yes' | strQuestionC.toLowerCase() == 'y') {
        //Store the full story sentence into the question string
        strQuestionC = `During the visit to the ${objStory.trip}, ${objStory.firstName}'s friend went on a scary ride.` +
        ` Although ${objStory.genderShortA} felt very grown up and tried not to look to frightened, ${objStory.genderShortA} had` +
        ` butterflies in ${objStory.genderShortB} stomach and felt a little sick. `;
    } else {
        strQuestionC = ``
    }
    //####################################################################################################
    
    //####################################################################################################
    //Example prompt - text answer question:
    strQuestionD = prompt(`Did ${objStory.firstName} you have a go at hooking the ducks? (yes/no)?`, `yes`)
    if (strQuestionD.toLowerCase() == 'yes' | strQuestionC.toLowerCase() == 'y') {
        //Store the full story sentence into the question string
        strQuestionD = `Whilst at the ${objStory.trip} ${objStory.firstName} was able to use a wooden pole with a hook at the end this is called "Hook at Duck"` + 
            ` ${objStory.genderShortA} managed to collect five ducks and won a large fluffy toy which was so cute.`
    } else {
        strQuestionD=''
    }
    //###################################################################################################

    //####################################################################################################

    //Concat the sentences togther into paragraphs.
    let TripParagraph01 = ''
    if (strQuestionA != '') { TripParagraph01 += ' ' + strQuestionA }
    if (strQuestionB != '') { TripParagraph01 += ' ' + strQuestionB }

    let TripParagraph02 = ''
    if (strQuestionC != '') { TripParagraph02 += ' ' + strQuestionC }

    let TripParagraph03 = ''
    if (strQuestionD != '') { TripParagraph03 += ' ' + strQuestionD }
    if (strQuestionE != '') { TripParagraph03 += ' ' + strQuestionE }
    if (strQuestionF != '') { TripParagraph03 += ' ' + strQuestionF }

    let TripParagraph04 = ''
    if (strQuestionG != '') { TripParagraph04 += ' ' + strQuestionG }
    if (strQuestionH != '') { TripParagraph04 += ' ' + strQuestionH }

    //Concat the paragraphs into the trip story.
    let TripStory = ''
    if (TripParagraph01 != '') { TripStory += '<p>' + TripParagraph01 + '</p>' }
    if (TripParagraph02 != '') { TripStory += '<p>' + TripParagraph02 + '</p>' }
    if (TripParagraph03 != '') { TripStory += '<p>' + TripParagraph03 + '</p>' }
    if (TripParagraph04 != '') { TripStory += '<p>' + TripParagraph04 + '</p>' }

    //Return the trip story. 
    return TripStory;

}