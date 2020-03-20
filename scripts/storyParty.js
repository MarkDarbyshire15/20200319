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

function fStoryBuildParty(objStory) {

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
    strQuestionA = prompt(`Did ${objStory.firstName} have to drink at the ${objStory.trip} - what is it?`, `no`)
    if (strQuestionA.toLowerCase() != 'no') {
        //Store the full story sentence into the question string
        strQuestionA = `Whilst at the ${objStory.trip} ${objStory.firstName} was able to have ` + strQuestionA +
            ` with ${objStory.genderShortB} friends who all loved it.`
    }
    else {
        strQuestionA = '';
    }
    //####################################################################################################

    //####################################################################################################
    //Example Prompt - yes/no answer question:
    strQuestionB = prompt(`Did ${objStory.firstName}s friend have a birthday cake (yes/no)?`, `yes`)
    if (strQuestionB.toLowerCase() == 'yes' | strQuestionB.toLowerCase() == 'y') {
        //Store the full story sentence into the question string
        strQuestionB = `During the party, ${objStory.genderShortB} friends mum brought out a big cake and` +
            ` everyone sang happy birthday while ${objStory.genderShortB} friend blew out the candles. After` +
            ` the ${objStory.trip} ${objStory.firstName} and everyone else were given a party bag to take` +
            ` home with them that had some birthday cake in it.`;
    }
    else {
        strQuestionB = '';
    }
    //####################################################################################################

    //####################################################################################################
    //Example Prompt - yes/no answer question:
    strQuestionC = prompt(`Were there balloons at the party (yes/no)?`, `yes`)
    if (strQuestionC.toLowerCase() == 'yes' | strQuestionC.toLowerCase() == 'y') {
        //Store the full story sentence into the question string
        strQuestionC = ` At the ${objStory.trip} balloons were bouncing all over the floor, some on the ` +
            `tables and some were stuck to the ceiling. Everyone tried popping the baloons and when they` + 
            ` burst some of girls screamed!. Everyone did say that they had a wonerful time at` +
            ` the ${objStory.trip}.`;
    }
    else {
        strQuestionC = '';
    }
     //####################################################################################################

    //####################################################################################################
    //Example prompt - text answer question:
    strQuestionD = prompt(`Did ${objStory.firstName} have a favorite party game? What was it?`, `no`)
    if (strQuestionD.toLowerCase() != 'no') {
    //Store the full story sentence into the question string
            strQuestionD = `At the ${objStory.trip} we were able to play ` + strQuestionD +
        ` with ${objStory.genderShortB} friends who all loved it and wanted to play over and over again. ` +
                strQuestionD +` is now my favourate game too!`;
    }
    else {
        strQuestionD = '';
    }
    //####################################################################################################

    //####################################################################################################
    //Example Prompt - yes/no answer question:
    strQuestionE = prompt(`Was there a picnic (yes/no)?`, `yes`)
    if (strQuestionE.toLowerCase() == 'yes' | strQuestionE.toLowerCase() == 'y') {
    //Store the full story sentence into the question string
    strQuestionE = `In the afternoon we had a picnic which included lots of treats like jelly, chocolate, ` +
        `sweets, crisps, sandwiches and even ice cream.` + 
        ` At the ${objStory.trip} everyone had so much to eat we thought they might pop.`;
    }
    else {
        strQuestionE = '';
    }
    //####################################################################################################

    //####################################################################################################
    //Example Prompt - yes/no answer question:
    strQuestionF = prompt(`Were presents opened at the party?  (yes/no)?`, `yes`)
    if (strQuestionF.toLowerCase() == 'yes' | strQuestionF.toLowerCase() == 'y') {
    //Store the full story sentence into the question string
    strQuestionF = `After ${objStory.firstName} opened ${objStory.genderShortB} presents, stacks of wrapping` + 
        ` paper and ribbon were everywhere, boxes too. I think that the ${objStory.trip} day was probably` +
        ` the best day of ${objStory.genderShortB} life.`;
    }
    else {
        strQuestionF = '';
    }
   //####################################################################################################

   //####################################################################################################
   //Example prompt - text answer question:
   strQuestionG = prompt(`Did ${objStory.firstName} have a favorite story read out at the Party?  What is it?`, `no`)
   if (strQuestionG.toLowerCase() != 'no') {
   //Store the full story sentence into the question string
    strQuestionG = `Whilst at the ${objStory.trip}, ${objStory.firstName} was able to have` +
        ` ${objStory.genderShortB} favourate story read out to all the children which is ` + strQuestionG +
                `, ${objStory.genderShortB} friends all sat very still and quiet while they listened to it.`;
    }
    else {
        strQuestionG = '';
    }
    //####################################################################################################
    
    //####################################################################################################
    //Example Prompt - yes/no answer question:
    strQuestionH = prompt(`Was there a funny clown at the ${objStory.trip}?  (yes/no)?`, `yes`)
    if (strQuestionH.toLowerCase() == 'yes' | strQuestionF.toLowerCase() == 'y') {
        //Store the full story sentence into the question string
        strQuestionH = `${objStory.firstName} was so surpirsed when the clown arrived at the ${objStory.trip}.` + 
                        ` Some of the children were at first frightened by the clown but once he made them` + 
                        ` laugh the ${objStory.trip} was a great success!` + 
                        ` ${objStory.firstName} thought that the ${objStory.trip} was the best ever.`;
    }
    else {
        strQuestionH = '';
    }

    //####################################################################################################

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

    //Concat the paragraphs into the trip story.
    let TripStory = ''
    if (TripParagraph01 != '') { TripStory += '<p>' + TripParagraph01 + '</p>' }
    if (TripParagraph02 != '') { TripStory += '<p>' + TripParagraph02 + '</p>' }
    if (TripParagraph03 != '') { TripStory += '<p>' + TripParagraph03 + '</p>' }
    if (TripParagraph04 != '') { TripStory += '<p>' + TripParagraph04 + '</p>' }

    //Return the trip story. 
    return TripStory;

}