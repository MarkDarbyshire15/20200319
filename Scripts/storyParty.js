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

    //####################################################################################################
        //Example Prompt - yes/no answer question:
        let strQuestionC = prompt(`Did ${objStory.firstName} want to have balloons at the party (yes/no)?`, `yes`)
        if (strQuestionC.toLowerCase() == 'yes' | strQuestionC.toLowerCase() == 'y') {
            //Store the full story sentence into the question string
            strQuestionC = ` At ${objStory.firstName}'s, ${objStory.trip} balloons were bouncing all over the floor. Some are on the ` +
             `table. Some are stuck to the ceiling. We started bopping them around. Some were bust and some of ` + 
             `girls screamed!. At the ${objStory.trip} everyone had a wonerful time.`;
        }
     //####################################################################################################

    //####################################################################################################
         //Example prompt - text answer question:
         let strQuestionD = prompt(`Does ${objStory.firstName} have a favorite party game - if so what is it?`, `no`)
         if (strQuestionD.toLowerCase() != 'no') {
        //Store the full story sentence into the question string
        strQuestionD = `Whilst at the ${objStory.trip} ${objStory.firstName} we were able to play ` + strQuestionD.toLowerCase() +
            ` with ${objStory.genderShortB} friends who all loved it and wanted to play over and over again.` + strQuestionD.toLowerCase() +
            ` is now my favourate game too!`;
    }
    //####################################################################################################

    //####################################################################################################
        //Example Prompt - yes/no answer question:
         let strQuestionE = prompt(`Did ${objStory.firstName} want to have a party picnic (yes/no)?`, `yes`)
         if (strQuestionE.toLowerCase() == 'yes' | strQuestionE.toLowerCase() == 'y') {
            //Store the full story sentence into the question string
            strQuestionE = `At ${objStory.firstName}'s, ${objStory.trip} we had a ${objStory.trip} picnic which included lots of treat like jelly, chocolate ` +
             `sweets, crisps, sandwiches and even icecream.` + 
             ` At the ${objStory.trip} everyone had a so much to eat we thought we would pop.`;
        }
    //####################################################################################################

    //####################################################################################################
        //Example Prompt - yes/no answer question:
        let strQuestionF = prompt(`Did ${objStory.firstName} want to open ${objStory.genderShortB} presents at the party?  (yes/no)?`, `yes`)
        if (strQuestionF.toLowerCase() == 'yes' | strQuestionF.toLowerCase() == 'y') {
           //Store the full story sentence into the question string
           strQuestionF = `After ${objStory.firstName} opened ${objStory.genderShortB} presents a stack of wrapping paper and ribbon were everywhere, ` + 
            `Boxes too. Today is the best day of ${objStory.firstName} life.`;
       }
   //####################################################################################################

      //####################################################################################################
         //Example prompt - text answer question:
         let strQuestionG = prompt(`Does ${objStory.firstName} have a favorite story to read at the Party  - if so what is it?`, `no`)
         if (strQuestionG.toLowerCase() != 'no') {
        //Store the full story sentence into the question string
        strQuestionG = `Whilst at the ${objStory.trip} ${objStory.firstName} was able to have ${objStory.genderShortB} favourate story which read out to all the children which was ` + strQuestionG.toLowerCase() +
            ` with ${objStory.genderShortB} friends who all sat very still and listened with `;
    }
    //####################################################################################################
    
    //####################################################################################################
        //Example Prompt - yes/no answer question:
        let strQuestionH = prompt(`Did ${objStory.firstName} want to have a clown at ${objStory.genderShortB} party?  (yes/no)?`, `yes`)
        if (strQuestionH.toLowerCase() == 'yes' | strQuestionF.toLowerCase() == 'y') {
           //Store the full story sentence into the question string
           strQuestionH = `${objStory.firstName} was so surpirsed when the clown arrived at ${objStory.genderShortB} ${objStory.trip}. Some of the children were at first frightened by the clown but once he made them, ` + 
            `laugh. The ${objStory.trip} was a great success! Everyone thought that ${objStory.firstName} ${objStory.trip} was the best ever`;
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

