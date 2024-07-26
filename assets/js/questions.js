// content for questions and their answers
const questionsB1 = [
    {
        question : "What is the city called in which Bioshock I takes place?",
        answers : [
            { text : "Fracture", correct : false},
            { text : "Manhattan", correct : false},
            { text : "Rapture", correct : true},
            { text : "Winnenden", correct : false}
        ]
    },
    {
        question : "Who are you playing as in Bioshock I?",
        answers : [
            { text : "James", correct : false},
            { text : "Jack", correct : true},
            { text : "John", correct : false},
            { text : "Jacob", correct : false}
        ]
    },
    {
        question : "How does Jack first arrive at the lighthouse?",
        answers : [
            { text : "Plane crash", correct : true},
            { text : "Shipwreck ", correct : false},
            { text : "Family reunion", correct : false},
            { text : "Car crash", correct : false}
        ]
    },
    {
        question : "Who is the founder of Rapture?",
        answers : [
            { text : "Andrew Ryan", correct : true},
            { text : "Atlas", correct : false},
            { text : "Brigid Tenenbaum", correct : false},
            { text : "Frank Fontaine", correct : false}
        ]
    },
    {
        question : "What are the most common enemies in the game called?",
        answers : [
            { text : "Soldiers", correct : false},
            { text : "Capitalists", correct : false},
            { text : "Robots", correct : false},
            { text : "Splicer", correct : true}
        ]
    },
    {
        question : "What grants the player superhuman powers?",
        answers : [
            { text : "The bible", correct : false},
            { text : "Plasmids", correct : true},
            { text : "Hard work", correct : false},
            { text : "Guns", correct : false}
        ]
    },
    {
        question : "What substance does one need to use plasmids?",
        answers : [
            { text : "Solomon", correct : false},
            { text : "Eve", correct : false},
            { text : "Adam", correct : true},
            { text : "David", correct : false}
        ]
    },
    {
        question : "From whom can you harvest Adam?",
        answers : [
            { text : "Big Sisters", correct : false},
            { text : "Little Sisters", correct : true},
            { text : "Little Mama", correct : false},
            { text : "Little Cousin", correct : false}
        ]
    },
    {
        question : "Does saving or harvesting the little sisters grant more Adam at the end of the game?",
        answers : [
            { text : "Both are the same", correct : false},
            { text : "Saving", correct : false},
            { text : "Harvesting", correct : true},
            { text : "Pure luck", correct : false}
        ]
    },
    {
        question : "Who should you save for the revolutionary Atlas?",
        answers : [
            { text : "Himself", correct : false},
            { text : "Rapture", correct : false},
            { text : "Andrew Ryan", correct : false},
            { text : "His family", correct : true}
        ]
    },
    {
        question : "When killing Andrew Ryan for Atlas what is the secret being revealed?",
        answers : [
            { text : "The little sisters are your children", correct : false},
            { text : "Andrew Ryan is your father", correct : true},
            { text : "Atlas is your father", correct : false},
            { text : "Brigid Tenenbaum is your mother", correct : false}
        ]
    },
    {
        question : "What is Atlas' real identity?",
        answers : [
            { text : "Frank Fontain", correct : true},
            { text : "Sander Cohen", correct : false},
            { text : "Zachary Comstock", correct : false},
            { text : "J.S. Steinman", correct : false}
        ]
    },
    {
        question : "With which sentence can Jack be controlled??",
        answers : [
            { text : "... do for me swiftly", correct : false},
            { text : "Be a good boy and ...", correct : false},
            { text : "Could you please?", correct : false},
            { text : "Would you kindly?", correct : true}
        ]
    },
    {
        question : "How does Atlas come up with the name of his 'family', Moira and Patrick?",
        answers : [
            { text : "These are his real family names", correct : false},
            { text : "They were employees in a pub", correct : false},
            { text : "A Stage play by Sander Cohen", correct : true},
            { text : "These are Andrew Ryan's parents", correct : false}
        ]
    },
    {
        question : "How many endings are there to Bioshock I?",
        answers : [
            { text : "Three", correct : true},
            { text : "Four", correct : false},
            { text : "Two", correct : false},
            { text : "One", correct : false}
        ]
    }
];

const questionsB2 = [
    {
        question : "Who is the main character you are playing in Bioshock II?",
        answers : [
            { text : "Big Sister", correct : false},
            { text : "Subject Sigma", correct : false},
            { text : "Eleanor Lamb", correct : false},
            { text : "Subject Delta", correct : true}
        ]
    },
    {
        question : "Who is the main antagonist of Bioshock II?",
        answers : [
            { text : "Sofia Lamb", correct : true},
            { text : "Eleanor Lamb", correct : false},
            { text : "Augustus Sinclar", correct : false},
            { text : "Gilbert Alexander", correct : false}
        ]
    },
    {
        question : "What is the name of ammunition vending machines?",
        answers : [
            { text : "Gatherer's Garden", correct : false},
            { text : "Circus of Values", correct : false},
            { text : "Epstein the Swami machine", correct : false},
            { text : "El Ammo Bandito", correct : true}
        ]
    },
    {
        question : "What are Big Sisters?",
        answers : [
            { text : "House maids", correct : false},
            { text : "The female counterpart to big daddies", correct : false},
            { text : "Little sisters who grown into adolescence", correct : true},
            { text : "Nuns of a new religion", correct : false}
        ]
    },
    {
        question : "What is not true for Big Sisters?",
        answers : [
            { text : "They are all born from the same mother", correct : true},
            { text : "They are highly aggressive", correct : false},
            { text : "They can use plasmids due to being little sisters once", correct : false},
            { text : "They kidnap girls from the upper world and turn them into little sisters", correct : false}
        ]
    },{
        question : "How does Subject Delta meet Eleanor Lamb initially?",
        answers : [
            { text : "He was her teacher", correct : false},
            { text : "He tried to gather Adam from her when he was a Splicer", correct : false},
            { text : "He was a patient of Sofia Lamb", correct : false},
            { text : "He was her Big Daddy", correct : true}
        ]
    },
    {
        question : "What is Rapture's Family?",
        answers : [
            { text : "Sofia Lamb's cult", correct : true},
            { text : "Rapture's social agency", correct : false},
            { text : "a kindergarten in Rapture", correct : false},
            { text : "a famous jazz band", correct : false}
        ]
    },
    {
        question : "How did Eleanor become a Little Sister?",
        answers : [
            { text : "Andrew Ryan took her away from her mother to punish her", correct : false},
            { text : "She was sold to one of Fontaines orphanages by a caregiver", correct : true},
            { text : "She ran away because her mother was too strict", correct : false},
            { text : "Sofia Lamb sold her to get money for her cult", correct : false}
        ]
    },
    {
        question : "Why is the bond to Eleanor so important for Subject Delta?",
        answers : [
            { text : "He needs her Adam for himself", correct : false},
            { text : "He needs her as religious-bargain against Sofia Lamb", correct : false},
            { text : "He needs her advice in buying better ammunition", correct : false},
            { text : "He will die if he strays too far away from her or if she dies", correct : true}
        ]
    },
    {
        question : "How does Sofia Lamb capture Subject Delta?",
        answers : [
            { text : "By a shot to his head from behind", correct : false},
            { text : "By smothering Eleanor and stoping her heart", correct : true},
            { text : "By turning Eleanor against him", correct : false},
            { text : "By flooding Rapture completely", correct : false}
        ]
    },
    {
        question : "How does Eleanor free Subject Delta?",
        answers : [
            { text : "By immediately killing her mother", correct : false},
            { text : "By allowing him to take control over Little Sisters", correct : true},
            { text : "By working with Andrew Ryan", correct : false},
            { text : "By assembling a splicer army", correct : false}
        ]
    },
    {
        question : "What does Eleanor become at the end of the game?",
        answers : [
            { text : "a big Daddy", correct : false},
            { text : "a Big Sister", correct : true},
            { text : "Subject Gama", correct : false},
            { text : "Sofia Lamb's successor", correct : false}
        ]
    },
    {
        question : "What happened to August Sinclair in the last part of the game?",
        answers : [
            { text : "Sofia Lamb transformed him into Subject Omega", correct : true},
            { text : "He was forced to marry Sofia Lamb", correct : false},
            { text : "He is completely controlled by Sophia Lamb and can't even speak for himself", correct : false},
            { text : "He decided to never forgive Subject Delta for killing him", correct : false}
        ]
    },
    {
        question : "How many endings are there to Bioshock II?",
        answers : [
            { text : "Three", correct : false},
            { text : "One", correct : false},
            { text : "Eight", correct : false},
            { text : "Six", correct : true}
        ]
    },
    {
        question : "What are Sofia Lamb's main values?",
        answers : [
            { text : "Genius of the individual", correct : false},
            { text : "The Power of the state", correct : false},
            { text : "Genius of the money machine", correct : false},
            { text : "The power of the community & rebirth", correct : true}
        ]
    }
];

const questionsB3 = [
    {
        question : "What is Bioshock III's official name?",
        answers : [
            { text : "Bioshock Fascist", correct : false},
            { text : "Bioshock Infinite", correct : true},
            { text : "Bioshock in the clouds", correct : false},
            { text : "Bioshock return of the skibidy", correct : false}
        ]
    },
    {
        question : "What is the city called in which Bioshock Infinite takes place?",
        answers : [
            { text : "Columbus", correct : false},
            { text : "Manhattan", correct : false},
            { text : "Columbia", correct : true},
            { text : "Winnenden", correct : false}
        ]
    },
    {
        question : "Who are you mainly playing as in Bioshock Infinite ?",
        answers : [
            { text : "Zachary Hale Comstock", correct : false},
            { text : "Booker DeWitt", correct : true},
            { text : "Elizabeth", correct : false},
            { text : "Songbird", correct : false}
        ]
    },
    {
        question : "How does Booker first arrive at the lighthouse?",
        answers : [
            { text : "By a boat ride from the Lutece twins", correct : true},
            { text : "By a plane ride from the Lutece twins ", correct : false},
            { text : "By a ride from Songbird", correct : false},
            { text : "By swimming through the ocean", correct : false}
        ]
    },
    {
        question : "What is Booker DeWitts official job?",
        answers : [
            { text : "politician", correct : false},
            { text : "slave owner", correct : false},
            { text : "babysitter", correct : false},
            { text : "private investigator", correct : true}
        ]
    },
    {
        question : "What is the main phrase that follows Booker throughout the game?",
        answers : [
            { text : "bring us the girl and wipe away the debt", correct : true},
            { text : "bring us the bird and wipe away the debt", correct : false},
            { text : "bring us the girl and wipe her away", correct : false},
            { text : "bring us the money and wipe away the debt", correct : false}
        ]
    },
    {
        question : "What are the letters carved into Booker's hand?",
        answers : [
            { text : "ED", correct : false},
            { text : "BD", correct : false},
            { text : "AD", correct : true},
            { text : "OD", correct : false}
        ]
    },
    {
        question : "Who is the lamb Comstock always mentions?",
        answers : [
            { text : "a fat animal", correct : false},
            { text : "Elizabeth", correct : true},
            { text : "Songbird", correct : false},
            { text : "Jesus", correct : false}
        ]
    },
    {
        question : "What is the name of the militant underground insurgency group?",
        answers : [
            { text : "Vox Populi", correct : true},
            { text : "Badger Populi ", correct : false},
            { text : "Daisy Fitzroy's gang", correct : false},
            { text : "Viet Cong", correct : false}
        ]
    },
    {
        question : "Where is Elizabeth kept in the beginning of the game?",
        answers : [
            { text : "Songbird", correct : false},
            { text : "prison", correct : false},
            { text : "Paris", correct : false},
            { text : "Monument Islands' tower", correct : true}
        ]
    },
    {
        question : "What are tears in the game?",
        answers : [
            { text : "things that happen when you are sad ):", correct : false},
            { text : "a rip in dimensional time and space, revealing an alternate universe  ", correct : true},
            { text : "a rip in the system to make the city float", correct : false},
            { text : "songbird's children", correct : false}
        ]
    },
    {
        question : "Who was Zachary Hale Comstock before his baptism?",
        answers : [
            { text : "Booker DeWitt", correct : true},
            { text : "Andrew Ryan", correct : false},
            { text : "Jeremiah Fink", correct : false},
            { text : "Robert Lutece", correct : false}
        ]
    },
    {
        question : "Who is AD?",
        answers : [
            { text : "Booker's son, Alex DeWitt", correct : false},
            { text : "Comsock's Mother, Annabelle DeWitt", correct : false},
            { text : "Songbird's real name, August Delphis", correct : false},
            { text : "Booker's daughter, Anna DeWitt", correct : true}
        ]
    },
    {
        question : "What famous movie's name appears in one of the tears?",
        answers : [
            { text : "Scarface", correct : false},
            { text : "Revenge of the Jedi", correct : true},
            { text : "Shining", correct : false},
            { text : "Grease", correct : false}
        ]
    },
    {
        question : "How many endings are there to Bioshock Infinite?",
        answers : [
            { text : "Two", correct : false},
            { text : "Five", correct : false},
            { text : "Four", correct : false},
            { text : "One", correct : true}
        ]
    }
];

const questionsBAll = [
    {
        question : "What is not true for Big Sisters?",
        answers : [
            { text : "They are all born from the same mother", correct : true},
            { text : "They are highly aggressive", correct : false},
            { text : "They can use plasmids due to being little sisters once", correct : false},
            { text : "They kidnap girls from the upper world and turn them into little sisters", correct : false}
        ]
    },
    {
        question : "Who are you playing as in Bioshock I?",
        answers : [
            { text : "James", correct : false},
            { text : "Jack", correct : true},
            { text : "John", correct : false},
            { text : "Jacob", correct : false}
        ]
    },
    {
        question : "Who are you mainly playing as in Bioshock Infinite ?",
        answers : [
            { text : "Zachary Hale Comstock", correct : false},
            { text : "Booker DeWitt", correct : true},
            { text : "Elizabeth", correct : false},
            { text : "Songbird", correct : false}
        ]
    },
    {
        question : "How does Booker first arrive at the lighthouse in Bioshock Infinite?",
        answers : [
            { text : "By a boat ride from the Lutece twins", correct : true},
            { text : "By a plane ride from the Lutece twins ", correct : false},
            { text : "By a ride from Songbird", correct : false},
            { text : "By swimming through the ocean", correct : false}
        ]
    },
    {
        question : "Who is the founder of Rapture?",
        answers : [
            { text : "Andrew Ryan", correct : true},
            { text : "Atlas", correct : false},
            { text : "Brigid Tenenbaum", correct : false},
            { text : "Frank Fontaine", correct : false}
        ]
    },
    {
        question : "What is rapture's family?",
        answers : [
            { text : "Sofia Lamb's cult", correct : true},
            { text : "Rapture's social agency", correct : false},
            { text : "a kindergarten in Rapture", correct : false},
            { text : "a famous jazz band", correct : false}
        ]
    },
    {
        question : "What happened to August Sinclair in the last part of Bioshock II?",
        answers : [
            { text : "Sofia Lamb transformed him into Subject Omega", correct : true},
            { text : "He was forced to marry Sofia Lamb", correct : false},
            { text : "He is completely controlled by Sophia Lamb and can't even speak for himself", correct : false},
            { text : "He decided to never forgive Subject Delta for killing him", correct : false}
        ]
    },
    {
        question : "When killing Andrew Ryan for Atlas what is the secret being revealed?",
        answers : [
            { text : "The little sisters are your children", correct : false},
            { text : "Andrew Ryan is your father", correct : true},
            { text : "Atlas is your father", correct : false},
            { text : "Brigid Tenenbaum is your mother", correct : false}
        ]
    },
    {
        question : "What is the name of the militant underground insurgency group in Bioshock Infinite?",
        answers : [
            { text : "Vox Populi", correct : true},
            { text : "Badger Populi ", correct : false},
            { text : "Daisy Fitzroy's gang", correct : false},
            { text : "Viet Cong", correct : false}
        ]
    },
    {
        question : "In Bioshock II which frozen cat can be found in Dionysus Park?",
        answers : [
            { text : "Ghassan", correct : false},
            { text : "Spinelli", correct : false},
            { text : "Nezuko", correct : false},
            { text : "Schrödinger", correct : true}
        ]
    },
    {
        question : "Which is a easter egg in Bioshock I?",
        answers : [
            { text : "a drawing of Pikachu", correct : false},
            { text : "a Pac-Man reference from rotten food", correct : true},
            { text : "an homage to souls-like games", correct : false},
            { text : "letters from King Arthur made from skin", correct : false}
        ]
    },
    {
        question : "Which Bioshock I & II related store can be found in Bioshock Infinite?",
        answers : [
            { text : "Adam's Delight", correct : false},
            { text : "Meet your Little Sister", correct : false},
            { text : "Rapture's Records", correct : true},
            { text : "A splice of life", correct : false}
        ]
    },
    {
        question : "In the DLC Burial At Sea which sad scene can be seen?",
        answers : [
            { text : "Subject Delta not getting any christmas gifts", correct : false},
            { text : "Jack killing his twin", correct : false},
            { text : "Booker pushing a 'Pull'-door", correct : false},
            { text : "a Little Sister crying over a dead Big Daddy", correct : true}
        ]
    },
    {
        question : "What enemy was planned to be included in Bioshock Infinite?",
        answers : [
            { text : "Claw Daddy", correct : true},
            { text : "Jelly Mommy", correct : false},
            { text : "Croc Brother", correct : false},
            { text : "Spider Aunt", correct : false}
        ]
    },
    {
        question : "Did Songbird deserve to die?",
        answers : [
            { text : "No, but since he killed Booker...", correct : false},
            { text : "Yes, Elizabeth never showed any connection to him", correct : false},
            { text : "Yes, I hate birds", correct : false},
            { text : "No, he was just a good little, loyal boy", correct : true}
        ]
    }
];
