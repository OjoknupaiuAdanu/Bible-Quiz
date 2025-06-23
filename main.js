const data = [
    {
        id: 1,
        question: "Q1: Who was swallowed by a fish in the Bible?",
        answers: [
            {answer: "Jonah", isCorrect: true },
            {answer: "Peter", isCorrect: false },
            {answer: "Moses", isCorrect: false },
            {answer: "Hopin", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "Q2: How many disciples did Jesus have while he was on Earth?",
        answers: [
            {answer: "1000", isCorrect: false },
            {answer: "72", isCorrect: false },
            {answer: "40", isCorrect: false },
            {answer: "12", isCorrect: true },
        ],
    },
    {
        id: 3,
        question: "Q3: All these were the names of Jesus' brothers except ______",
        answers: [
            {answer: "James", isCorrect: false },
            {answer: "Jude", isCorrect: true },
            {answer: "Judas", isCorrect: false },
            {answer: "Joseph", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "Q4: How many men did Jesus fed with 5 loaves of bread and 2 fishes?",
        answers: [
            {answer: "5,000", isCorrect: true },
            {answer: "4,000", isCorrect: false },
            {answer: "500", isCorrect: false },
            {answer: "7,000", isCorrect: false },
        ],
    },
    {
        id: 5,
        question: "Q5: How many daughter(s) did Jacob had?",
        answers: [
            {answer: "1", isCorrect: true },
            {answer: "4", isCorrect: false },
            {answer: "12", isCorrect: false },
            {answer: "none", isCorrect: false },
        ],
    },
    {
        id: 6,
        question: "Q6: Why was Daniel thrown into the Lion's den?",
        answers: [
            {answer: "Because he was wealthy", isCorrect: false },
            {answer: "Because he had many wives", isCorrect: false },
            {answer: "Because of his faith in God", isCorrect: true },
            {answer: "Because he wasn't feeling too well", isCorrect: false },
        ],
    },
    {
        id: 7,
        question: "Q7: Who did God commanded to build an ark?",
        answers: [
            {answer: "Noah", isCorrect: true },
            {answer: "Abraham", isCorrect: false },
            {answer: "Moses", isCorrect: false },
            {answer: "Enoch", isCorrect: false },
        ],
    },
    {
        id: 8,
        question: "Q8: After the flood, the ark of Noah rested on _____?",
        answers: [
            {answer: "Mount Carmel", isCorrect: false },
            {answer: "Mount Sinai", isCorrect: false },
            {answer: "Mount Horeb", isCorrect: false },
            {answer: "Mount Ararat", isCorrect: true },
        ],
    },
    {
        id: 9,
        question: "Q9: The first thing Noah did after coming out from the ark was _____?",
        answers: [
            {answer: "Partying", isCorrect: false },
            {answer: "He offered a sacrifice to God", isCorrect: true },
            {answer: "He went to marry another wife", isCorrect: false },
            {answer: "He fainted", isCorrect: false },
        ],
    },
    {
        id: 10,
        question: "Q10: Samson's strength was in his ____",
        answers: [
            {answer: "Hair", isCorrect: true },
            {answer: "Muscle", isCorrect: false },
            {answer: "Money", isCorrect: false },
            {answer: "Influence", isCorrect: false },
        ],
    },
    {
        id: 11,
        question: "Q11: 'Keep this book of the law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful'. Who was God speaking to in the passage?",
        answers: [
            {answer: "Deborah", isCorrect: false },
            {answer: "Moses", isCorrect: false },
            {answer: "Gideon", isCorrect: false },
            {answer: "Joshua", isCorrect: true },
        ],
    },
    {
        id: 12,
        question: "Q12: Deborah judged Israel for how many years?",
        answers: [
            {answer: "20 years", isCorrect: false },
            {answer: "50 years", isCorrect: false },
            {answer: "40 years", isCorrect: true },
            {answer: "12 years", isCorrect: false },
        ],
    },
    {
        id: 13,
        question: "Q13: Othniel was the son of ____?",
        answers: [
            {answer: "Caleb", isCorrect: false },
            {answer: "Joseph", isCorrect: false },
            {answer: "Kenaz", isCorrect: true },
            {answer: "Zachariah", isCorrect: false },
        ],
    },
    {
        id: 14,
        question: "Q14: Paul met Aquila and Priscilla in ____?",
        answers: [
            {answer: "Pamphylia", isCorrect: false },
            {answer: "Iconium", isCorrect: false },
            {answer: "Corinth", isCorrect: true },
            {answer: "Anthens", isCorrect: false },
        ],
    },
    {
        id: 15,
        question: "Q15: Mark deserted Paul and Barnabas in ____?",
        answers: [
            {answer: "Pamphylia", isCorrect: true },
            {answer: "Lystra", isCorrect: false },
            {answer: "Jerusalem", isCorrect: false },
            {answer: "Samaria", isCorrect: false },
        ],
    },
    
    {
        id: 16,
        question: "Q16: Paul raised Eutychus from the dead in ____?",
        answers: [
            {answer: "Troas", isCorrect: true },
            {answer: "Assos", isCorrect: false },
            {answer: "Malta", isCorrect: false },
            {answer: "Rome", isCorrect: false },
        ],
    },
    {
        id: 17,
        question: "Q17: All these are the name of Noah's son except?",
        answers: [
            {answer: "Shem", isCorrect: false },
            {answer: "Jabez", isCorrect: true },
            {answer: "Ham", isCorrect: false },
            {answer: "Japheth", isCorrect: false },
        ],
    },
    {
        id: 18,
        question: "Q18: Who among Noah's son saw their father's nakedness?",
        answers: [
            {answer: "Jabez", isCorrect: false },
            {answer: "Japheth", isCorrect: false },
            {answer: "Shem", isCorrect: false },
            {answer: "Ham", isCorrect: true },
        ],
    },
    {
        id: 19,
        question: "Q19: The first plague in Egypt was the plague of ____?",
        answers: [
            {answer: "Blood", isCorrect: true },
            {answer: "Gants", isCorrect: false },
            {answer: "Locust", isCorrect: false },
            {answer: "Darkness", isCorrect: false },
        ],
    },
    {
        id: 20,
        question: "Q20: What is the name of Moses' first son?",
        answers: [
            {answer: "Hur", isCorrect: false },
            {answer: "Caleb", isCorrect: false },
            {answer: "Gershom", isCorrect: true },
            {answer: "Joshua", isCorrect: false },
        ],
    },
    {
        id: 21,
        question: "Q21: Who did Moses got married to?",
        answers: [
            {answer: "Mariam", isCorrect: false },
            {answer: "Zipporah", isCorrect: true },
            {answer: "Deborah", isCorrect: false },
            {answer: "Leah", isCorrect: false },
        ],
    },
    {
        id: 22,
        question: "Q22: Who authored the book of Genesis?",
        answers: [
            {answer: "Moses", isCorrect: true },
            {answer: "Aaron", isCorrect: false },
            {answer: "Jethro", isCorrect: false },
            {answer: "Jeremiah", isCorrect: false },
        ],
    },
    {
        id: 23,
        question: "Q23: Who was also known as the weeping prophet.",
        answers: [
            {answer: "Ezekiel", isCorrect: false },
            {answer: "Hosea", isCorrect: false },
            {answer: "Jeremiah", isCorrect: true },
            {answer: "Isaiah", isCorrect: false },
        ],
    },
    {
        id: 24,
        question: "Q24: Eve was decieved by the devil through ____",
        answers: [
            {answer: "A Lion", isCorrect: false },
            {answer: "An Eagle", isCorrect: false },
            {answer: "A Dove", isCorrect: false },
            {answer: "A Serpent", isCorrect: true },
        ],
    },
    {
        id: 25,
        question: "Q25: Prophet Isaiah was the son of ____",
        answers: [
            {answer: "Amoz", isCorrect: true },
            {answer: "Caleb", isCorrect: false },
            {answer: "Gershom", isCorrect: false },
            {answer: "Nehemiah", isCorrect: false },
        ],
    },
    {
        id: 26,
        question: "Q26: Why did Ahab killed Naboth?",
        answers: [
            {answer: "Because Naboth insulted him", isCorrect: false },
            {answer: "Because he was jealous of Naboth success", isCorrect: false },
            {answer: "Because he wanted Naboth's wife", isCorrect: false },
            {answer: "Because Naboth refused him his vineyard", isCorrect: true },
        ],
    },
    {
        id: 27,
        question: "Q27: Jezebel was ____ wife",
        answers: [
            {answer: "Jehu", isCorrect: false },
            {answer: "Josiah", isCorrect: false },
            {answer: "Ahab", isCorrect: true },
            {answer: "Joshua", isCorrect: false },
        ],
    },
    {
        id: 28,
        question: "Q28: Zacheuseus was a _____",
        answers: [
            {answer: "Doctor", isCorrect: false },
            {answer: "Farmer", isCorrect: false },
            {answer: "Tax-Collector", isCorrect: true },
            {answer: "Teacher", isCorrect: false },
        ],
    },
    {
        id: 29,
        question: "Q29: Luke was a ____ by profession?",
        answers: [
            {answer: "Governor", isCorrect: false },
            {answer: "Physician", isCorrect: true },
            {answer: "Phariees", isCorrect: false },
            {answer: "Soldier", isCorrect: false },
        ],
    },
    {
        id: 30,
        question: "Q30: Whose shadow healed the sick?",
        answers: [
            {answer: "Philip", isCorrect: false },
            {answer: "Peter", isCorrect: true },
            {answer: "Paul", isCorrect: false },
            {answer: "John", isCorrect: false },
        ],
    },
    {
        id: 31,
        question: "Q31: How many stones did David picked from the stream when he was going to kill Goliath?",
        answers: [
            {answer: "5", isCorrect: true },
            {answer: "3", isCorrect: false },
            {answer: "7", isCorrect: false },
            {answer: "8", isCorrect: false },
        ],
    },
    {
        id: 32,
        question: "Q32: David killed Goliath with _____?",
        answers: [
            {answer: "A sling and a stone", isCorrect: true },
            {answer: "Sword", isCorrect: false },
            {answer: "Spear", isCorrect: false },
            {answer: "Arrows", isCorrect: false },
        ],
    },
    {
        id: 33,
        question: "Q33: Esau came to meet Jacob with how men?",
        answers: [
            {answer: "40 men", isCorrect: false },
            {answer: "450 men", isCorrect: false },
            {answer: "400 men", isCorrect: true },
            {answer: "500 men", isCorrect: false },
        ],
    },
    {
        id: 34,
        question: "Q34: What is the name of the woman who hid the spies of Israel in Jericho?",
        answers: [
            {answer: "Ophra", isCorrect: false },
            {answer: "Ruth", isCorrect: false },
            {answer: "Anna", isCorrect: false },
            {answer: "Rahab", isCorrect: true },
        ],
    },
    {
        id: 35,
        question: "Q35: How many times did the Israelites marched round Jericho on the seventh day?",
        answers: [
            {answer: "12 times", isCorrect: false },
            {answer: "1 time", isCorrect: false },
            {answer: "6 times", isCorrect: false },
            {answer: "7 times", isCorrect: true },
        ],
    },
    {
        id: 36,
        question: "Q36: How many years did the Israelites spent in widerness?",
        answers: [
            {answer: "50 years", isCorrect: false },
            {answer: "5 years", isCorrect: false },
            {answer: "40 years", isCorrect: true },
            {answer: "10 years", isCorrect: false },
        ],
    },
    {
        id: 37,
        question: "Q37: Joshua was formerly known as?",
        answers: [
            {answer: "Joseph", isCorrect: false },
            {answer: "Hosea", isCorrect: true },
            {answer: "Gershom", isCorrect: false },
            {answer: "Hezekiah", isCorrect: false },
        ],
    },
    {
        id: 38,
        question: "Q38: Joshua was the son of ____",
        answers: [
            {answer: "Hur", isCorrect: false },
            {answer: "Jeremiah", isCorrect: false },
            {answer: "Moses", isCorrect: false },
            {answer: "Nun", isCorrect: true },
        ],
    },
    {
        id: 39,
        question: "Q39: Who did God asked to go to battle with only 300 soldiers?",
        answers: [
            {answer: "Gideon", isCorrect: true },
            {answer: "Abner", isCorrect: false },
            {answer: "Joab", isCorrect: false },
            {answer: "Jabin", isCorrect: false },
        ],
    },
    {
        id: 40,
        question: "Q40: Who asked the sun to stand still?",
        answers: [
            {answer: "Moses", isCorrect: false },
            {answer: "Caleb", isCorrect: false },
            {answer: "Samson", isCorrect: false },
            {answer: "Joshua", isCorrect: true },
        ],
    },
    {
        id: 41,
        question: "Q41: Who became king when he was 8 years old?",
        answers: [
            {answer: "Joash", isCorrect: false },
            {answer: "Darius", isCorrect: false },
            {answer: "Josiah", isCorrect: true },
            {answer: "Asa", isCorrect: false },
        ],
    },
    {
        id: 42,
        question: "Q42: Solomon was anointed to be king by prophet ____",
        answers: [
            {answer: "Samuel", isCorrect: false },
            {answer: "Abijah", isCorrect: false },
            {answer: "Nathan", isCorrect: true },
            {answer: "Isaiah", isCorrect: false },
        ],
    },
    {
        id: 43,
        question: "Q43: Racheal gave birth to ___ sons?",
        answers: [
            {answer: "2", isCorrect: true },
            {answer: "5", isCorrect: false },
            {answer: "1", isCorrect: false },
            {answer: "3", isCorrect: false },
        ],
    },
    {
        id: 44,
        question: "Q44: Hagar was Sarah's maid from?",
        answers: [
            {answer: "Egypt", isCorrect: true },
            {answer: "Gaza", isCorrect: false },
            {answer: "Moab", isCorrect: false },
            {answer: "Bashan", isCorrect: false },
        ],
    },
    {
        id: 45,
        question: "Q45: What is the name of Bathsheba's husband?",
        answers: [
            {answer: "Absalom", isCorrect: false },
            {answer: "Caleb", isCorrect: false },
            {answer: "Uriah", isCorrect: true },
            {answer: "Nabal", isCorrect: false },
        ],
    },
    {
        id: 46,
        question: "Q46: Who was the first person to commit murder in the Bible?",
        answers: [
            {answer: "Hur", isCorrect: false },
            {answer: "Caleb", isCorrect: false },
            {answer: "Ruben", isCorrect: false },
            {answer: "Cain", isCorrect: true },
        ],
    },
    {
        id: 47,
        question: "Q47: Naomi lost her husband and two sons in the land of _____",
        answers: [
            {answer: "Moab", isCorrect: true },
            {answer: "Edom", isCorrect: false },
            {answer: "Israel", isCorrect: false },
            {answer: "Jericho", isCorrect: false },
        ],
    },
    {
        id: 48,
        question: "Q48: The well where Jesus met with the Samaritan woman was dugged by _____",
        answers: [
            {answer: "Isaac", isCorrect: false },
            {answer: "Caleb", isCorrect: false },
            {answer: "Jacob", isCorrect: true },
            {answer: "Joshua", isCorrect: false },
        ],
    },
    {
        id: 49,
        question: "Q49: The longest name in the Bible can be found in the book of ____?",
        answers: [
            {answer: "Isaiah 8 vs 1,3", isCorrect: true },
            {answer: "Psalm 119 vs 109", isCorrect: false },
            {answer: "Jeremiah 1 vs 27", isCorrect: false },
            {answer: "Matthew 6 vs 30", isCorrect: false },
        ],
    },
    {
        id: 50,
        question: "Q50: What is the longest name in the Bible?",
        answers: [
            {answer: "Zacharia", isCorrect: false },
            {answer: "Maher-Shalal-Hash-Baz", isCorrect: true },
            {answer: "Zacchaeus", isCorrect: false },
            {answer: "Immanuel", isCorrect: false },
        ],
    },
    {
        id: 51,
        question: "Q51: When Moses was given birth to, his mother hid him in the house for how many months?",
        answers: [
            {answer: "6 months", isCorrect: false },
            {answer: "3 months", isCorrect: true },
            {answer: "18 months", isCorrect: false },
            {answer: "9 months", isCorrect: false },
        ],
    },
    {
        id: 52,
        question: "Q52: When Paul and Barnabas was preaching to the proconsul,Sergius Paulus, who was the sorcerer that was trying to turn him away?",
        answers: [
            {answer: "Bar-Jesus", isCorrect: true },
            {answer: "John Paul", isCorrect: false },
            {answer: "Demetrius", isCorrect: false },
            {answer: "Eutychus", isCorrect: false },
        ],
    },
    {
        id: 53,
        question: "Q53: Onesimus was a servant to?",
        answers: [
            {answer: "Abraham", isCorrect: false },
            {answer: "Apphia", isCorrect: false },
            {answer: "James", isCorrect: false },
            {answer: "Philemon", isCorrect: true },
        ],
    },
    {
        id: 54,
        question: "Q54: Hebrews 12 vs 29 describes God as a ____?",
        answers: [
            {answer: "Provider", isCorrect: false },
            {answer: "Defender", isCorrect: false },
            {answer: "Consuming fire", isCorrect: true },
            {answer: "Judge", isCorrect: false },
        ],
    },
    {
        id: 55,
        question: "Q55: 'For everything in the world - the lust of the flesh, the lust of the eyes, and the pride of life - comes not from the father but from the world.' Where can this passage be found?",
        answers: [
            {answer: "Zacharia 3 vs 8", isCorrect: false },
            {answer: "1st John 2 vs 16", isCorrect: true },
            {answer: "1 Peter 2 vs 5", isCorrect: false },
            {answer: "Luke 1 vs 45", isCorrect: false },
        ],
    },
    {
        id: 56,
        question: "Q56: 'And now these three remain: faith, hope and ____'?",
        answers: [
            {answer: "Wealth", isCorrect: false },
            {answer: "Influence", isCorrect: false },
            {answer: "Power", isCorrect: false },
            {answer: "Love", isCorrect: true },
        ],
    },
    {
        id: 57,
        question: "Q57: According to 1st Corinthians 14 vs 22, which of these is for believers?",
        answers: [
            {answer: "Healing", isCorrect: false },
            {answer: "Deliverace", isCorrect: false },
            {answer: "Tongues", isCorrect: false },
            {answer: "Prophecy", isCorrect: true },
        ],
    },
    {
        id: 58,
        question: "Q58: Which of these Churches did Paul praised the most for giving?",
        answers: [
            {answer: "The Church in Corinth", isCorrect: false },
            {answer: "The Church in Philippi", isCorrect: true },
            {answer: "The Church in Ephesus", isCorrect: false },
            {answer: "The Church in Rome", isCorrect: false },
        ],
    },
    {
        id: 59,
        question: "Q59: Who was the governor of Syria when Caesar Augustus ordered that a census should be taken?",
        answers: [
            {answer: "Zacharia", isCorrect: false },
            {answer: "Quirinius", isCorrect: true },
            {answer: "Felix", isCorrect: false },
            {answer: "Pilate", isCorrect: false },
        ],
    },
    {
        id: 60,
        question: "Q60: What did Judas do after he betrayed Jesus and Jesus was condemned to death?",
        answers: [
            {answer: "He went on vacation", isCorrect: false },
            {answer: "He asked Jesus for forgiveness", isCorrect: false },
            {answer: "He went to marry", isCorrect: false },
            {answer: "He hanged himself", isCorrect: true },
        ],
    },
    {
        id: 61,
        question: "Q61: Timothy joined Paul and Silas in ____?",
        answers: [
            {answer: "Lystra", isCorrect: true },
            {answer: "Derbe", isCorrect: false },
            {answer: "Macedonia", isCorrect: false },
            {answer: "Jerusalem", isCorrect: false },
        ],
    },
    {
        id: 62,
        question: "Q62: Timothy father was a  ____?",
        answers: [
            {answer: "Greek", isCorrect: true },
            {answer: "Roman", isCorrect: false },
            {answer: "Jewish", isCorrect: false },
            {answer: "Samaritan", isCorrect: false },
        ],
    },
    {
        id: 63,
        question: "Q63: A hand came writing on a wall during king ____ banquet?",
        answers: [
            {answer: "Cyrus", isCorrect: false },
            {answer: "Belshazzer", isCorrect: true },
            {answer: "Artaxerxes", isCorrect: false },
            {answer: "Darius", isCorrect: false },
        ],
    },
    {
        id: 64,
        question: "Q64: Who was the king that freed the Israelites from Babylonia captivity?",
        answers: [
            {answer: "King Cyrus", isCorrect: true },
            {answer: "King Artaxerxes", isCorrect: false },
            {answer: "King Darius", isCorrect: false },
            {answer: "King Belshazzer", isCorrect: false },
        ],
    },
    {
        id: 65,
        question: "Q65: What was Nehemiah's job in King Artaxerxes' palace?",
        answers: [
            {answer: "A personal bodyguard", isCorrect: false },
            {answer: "A cupbearer", isCorrect: true },
            {answer: "Treasurer", isCorrect: false },
            {answer: "A gatekeeper", isCorrect: false },
        ],
    },
    {
        id: 66,
        question: "Q66: Nehemiah was known for  ____?",
        answers: [
            {answer: "Rebuilding  the walls of Jerusalem", isCorrect: true },
            {answer: "Fighting wars", isCorrect: false },
            {answer: "Settling disputes", isCorrect: false },
            {answer: "Collecting taxes", isCorrect: false },
        ],
    },
    {
        id: 67,
        question: "Q67: Immediately Elizabeth heard the greetings of Mary, what happened to her?",
        answers: [
            {answer: "She ran away", isCorrect: false },
            {answer: "She fainted", isCorrect: false },
            {answer: "The baby in her womb leaped for joy", isCorrect: true },
            {answer: "She started crying", isCorrect: false },
        ],
    },
    {
        id: 68,
        question: "Q68: Which priestly division did Zechariah the father of John belonged?",
        answers: [
            {answer: "David", isCorrect: false },
            {answer: "Abijah", isCorrect: true },
            {answer: "Aaron", isCorrect: false },
            {answer: "David", isCorrect: false },
        ],
    },
    {
        id: 69,
        question: "Q69: Which of these is the first temptation of Jesus? The temptation of",
        answers: [
            {answer: "Turing stones to bread", isCorrect: true },
            {answer: "Worshippig the devil", isCorrect: false },
            {answer: "Jumping off the pinnacle of the temple", isCorrect: false },
            {answer: "Running away", isCorrect: false },
        ],
    },
    {
        id: 70,
        question: "Q70: At Jesus' transfiguration who were the people that appeared to him?",
        answers: [
            {answer: "Angels", isCorrect: false },
            {answer: "David and Moses", isCorrect: false },
            {answer: "Elijah and Elisha", isCorrect: false },
            {answer: "Moses and Elijah", isCorrect: true },
        ],
    },
    {
        id: 71,
        question: "Q71: In the parable of the good Samaritan, the man beaten by robbers was travelling from?",
        answers: [
            {answer: "Samaria to Jerusalem", isCorrect: false },
            {answer: "Jerusalem to Jericho", isCorrect: true },
            {answer: "Jericho to Jerusalem", isCorrect: false },
            {answer: "Samaria to Jericho", isCorrect: false },
        ],
    },
    {
        id: 72,
        question: "Q72: The period between King Nebuchadnezzar's dream of a tree and its fulfillment was?",
        answers: [
            {answer: "12 months", isCorrect: true },
            {answer: "7 months", isCorrect: false },
            {answer: "15 months", isCorrect: false },
            {answer: "10 months", isCorrect: false },
        ],
    },
    {
        id: 73,
        question: "Q73: Who interpreted Nebuchadnezzar's dream of a tree?",
        answers: [
            {answer: "Daniel", isCorrect: true },
            {answer: "Shadrach", isCorrect: false },
            {answer: "Meshach", isCorrect: false },
            {answer: "Abednego", isCorrect: false },
        ],
    },
    {
        id: 74,
        question: "Q74: What is the name of Queen Esther's uncle?",
        answers: [
            {answer: "Xerxes", isCorrect: false },
            {answer: "Ezra", isCorrect: false },
            {answer: "Haman", isCorrect: false },
            {answer: "Mordecai", isCorrect: true },
        ],
    },
    {
        id: 75,
        question: "Q75: Who planned to eliminate the people of Israel in King Xerxes' kingdom?",
        answers: [
            {answer: "Sanballat", isCorrect: false },
            {answer: "Haman", isCorrect: true },
            {answer: "Tobiah", isCorrect: false },
            {answer: "Geshem", isCorrect: false },
        ],
    },
    {
        id: 76,
        question: "Q76: All these were eunuchs who served King Xerxes except?",
        answers: [
            {answer: "Nehemiah", isCorrect: true },
            {answer: "Mehuman", isCorrect: false },
            {answer: "Zethar", isCorrect: false },
            {answer: "Harbona", isCorrect: false },
        ],
    },
    {
        id: 77,
        question: "Q77: Why did King Xerxes disposed Queen Vashti?",
        answers: [
            {answer: "He wanted to get rid of her", isCorrect: false },
            {answer: "She hosted her own banquet", isCorrect: false },
            {answer: "She disobeyed the King", isCorrect: true },
            {answer: "She was not hardworking", isCorrect: false },
        ],
    },
    {
        id: 78,
        question: "Q78: Before Job died, he saw his chhildren and their children to the ____ generation?",
        answers: [
            {answer: "Tenth", isCorrect: false },
            {answer: "fourth", isCorrect: true },
            {answer: "Fifth", isCorrect: false },
            {answer: "Third", isCorrect: false },
        ],
    },
    {
        id: 79,
        question: "Q79: Who among these is not among the three friends of Job?",
        answers: [
            {answer: "Darius", isCorrect: true },
            {answer: "Eliphaz", isCorrect: false },
            {answer: "Bildad", isCorrect: false },
            {answer: "Zophar", isCorrect: false },
        ],
    },
    {
        id: 80,
        question: "Q80: How long did Mary stayed with Elizabeth?",
        answers: [
            {answer: "3 months", isCorrect: true },
            {answer: "3 weeks", isCorrect: false },
            {answer: "4 months", isCorrect: false },
            {answer: "4 weeks", isCorrect: false },
        ],
    },
    {
        id: 81,
        question: "Q81: Mary and Elizabeth were ____?",
        answers: [
            {answer: "Friends", isCorrect: false },
            {answer: "Relatives", isCorrect: true },
            {answer: "Neighbours", isCorrect: false },
            {answer: "Enemies", isCorrect: false },
        ],
    },
    {
        id: 82,
        question: "Q82: God opposes the  ____?",
        answers: [
            {answer: "Humble", isCorrect: false },
            {answer: "Proud", isCorrect:true },
            {answer: "Meek", isCorrect: false },
            {answer: "Lowly", isCorrect: false },
        ],
    },
    {
        id: 83,
        question: "Q83: How was the Jews and the Gentiles reconciled?",
        answers: [
            {answer: "Through paying taxes to Ceasar", isCorrect: false },
            {answer: "Through the Emperor of Rome", isCorrect: false },
            {answer: "Through Christ", isCorrect: true },
            {answer: "Through good works of the Jews", isCorrect: false },
        ],
    },
    {
        id: 84,
        question: "Q84: According to 1 Corinthians 16 vs 15, who were the first converts in Achaia?",
        answers: [
            {answer: "The household of Lydia", isCorrect: false },
            {answer: "The household of Dorcas", isCorrect: false },
            {answer: "The household of Louis", isCorrect: false },
            {answer: "The household of Stephanas", isCorrect: true },
        ],
    },
    {
        id: 85,
        question: "Q85: Paul was arrested in ____?",
        answers: [
            {answer: "Jerusalem", isCorrect: true },
            {answer: "Rome", isCorrect: false },
            {answer: "Macedonia", isCorrect: false },
            {answer: "Greece", isCorrect: false },
        ],
    },
    {
        id: 86,
        question: "Q86: Peter and John healed a lame man at the ____?",
        answers: [
            {answer: "Market's gate", isCorrect: false },
            {answer: "Market's square", isCorrect: false },
            {answer: "Temple's gate", isCorrect: true },
            {answer: "King's gate", isCorrect: false },
        ],
    },
    {
        id: 87,
        question: "Q87: After Peter's message during Pentecost, how many people believed?",
        answers: [
            {answer: "About 5,000", isCorrect: false },
            {answer: "About 3,000", isCorrect: true },
            {answer: "About 1,500", isCorrect: false },
            {answer: "About 2,000", isCorrect: false },
        ],
    },
    {
        id: 88,
        question: "Q88: When Jesus was about to leave the Earth, he commanded his disciples not to leave ____?",
        answers: [
            {answer: "Jerusalem", isCorrect: true },
            {answer: "Galilee", isCorrect: false },
            {answer: "Capernaum", isCorrect: false },
            {answer: "Samaria", isCorrect: false },
        ],
    },
    {
        id: 89,
        question: "Q89: Who was chosen to replace Judas?",
        answers: [
            {answer: "Paul", isCorrect: false },
            {answer: "Stephen", isCorrect: false },
            {answer: "Joseph", isCorrect: false },
            {answer: "Matthias", isCorrect: true },
        ],
    },
    {
        id: 90,
        question: "Q90: How many believers received the Holy Spirit on the day of Pentecost?",
        answers: [
            {answer: "3,000", isCorrect: false },
            {answer: "500", isCorrect: false },
            {answer: "120", isCorrect: true },
            {answer: "250", isCorrect: false },
        ],
    },
    {
        id: 91,
        question: "Q91: While Jesus was on the cross, were his bones broken?",
        answers: [
            {answer: "Yes, they were", isCorrect: false },
            {answer: "No, they were not", isCorrect: true },
        ],
    },
    {
        id: 92,
        question: "Q92: Jesus is the vine and we are the ____?",
        answers: [
            {answer: "Branches", isCorrect: true },
            {answer: "Fruits", isCorrect: false },
            {answer: "Watcher", isCorrect: false },
            {answer: "Gardener", isCorrect: false },
        ],
    },
    {
        id: 93,
        question: "Q93: Jesus was anointed at ____?",
        answers: [
            {answer: "Mount of Olives", isCorrect: false },
            {answer: "Jerusalem", isCorrect: false },
            {answer: "Jericho", isCorrect: false },
            {answer: "Bethany", isCorrect: true },
        ],
    },
    {
        id: 94,
        question: "Q94: The invalid man by the pool of Bethesda was ther for how many years before Jesus healed him?",
        answers: [
            {answer: "40 years", isCorrect: false },
            {answer: "38 years", isCorrect: true },
            {answer: "48 years", isCorrect: false },
            {answer: "30 years", isCorrect: false },
        ],
    },
    {
        id: 95,
        question: "Q95: Jesus changes water into wine at a wedding feast in ____?",
        answers: [
            {answer: "Bethsaida", isCorrect: false },
            {answer: "Cana in Galilee", isCorrect: true },
            {answer: "Bethany", isCorrect: false },
            {answer: "Samaria", isCorrect: false },
        ],
    },
    {
        id: 96,
        question: "Q96: While Jesus was on the cross, how did the soldiers divided his clothes?",
        answers: [
            {answer: "Engaged in a combat and gave it to the winner", isCorrect: false },
            {answer: "Giving to just 1 person", isCorrect: false },
            {answer: "Sharing it equally ", isCorrect: false },
            {answer: "By casting lots", isCorrect: true },
        ],
    },
    {
        id: 97,
        question: "Q97: Jesus rose from the dead on the _____?",
        answers: [
            {answer: "Third day of the week", isCorrect: false },
            {answer: "First day of the week", isCorrect: true },
            {answer: "Seventh day of the week", isCorrect: false },
            {answer: "Second day of the week", isCorrect: false },
        ],
    },
    {
        id: 98,
        question: "Q98: How many times did Peter denied Jesus?",
        answers: [
            {answer: "5 times", isCorrect: false },
            {answer: "2 times", isCorrect: false },
            {answer: "3 times", isCorrect: true },
            {answer: "4 times", isCorrect: false },
        ],
    },
    {
        id: 99,
        question: "Q99: Judas agreed to betray Jesus for?",
        answers: [
            {answer: "30 pieces of silver coins", isCorrect: true },
            {answer: "20 pieces of silver coins", isCorrect: false },
            {answer: "35 pieces of silver coins", isCorrect: false },
            {answer: "25 pieces of silver coins", isCorrect: false },
        ],
    },
    {
        id: 100,
        question: "Q100: Joseph was sold to the Ishmaelites for?",
        answers: [
            {answer: "30 shekels of silver", isCorrect: false },
            {answer: "35 shekels of silver", isCorrect: false },
            {answer: "25 shekels of silver", isCorrect: false },
            {answer: "20 shekels of silver", isCorrect: true },
        ],
    }
]

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const previous = document.querySelector(".previous");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
};

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
});

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
    resultScreen.querySelector(".correct").textContent = 
    `Correct Answers: ${correctCount}`;

    resultScreen.querySelector(".wrong").textContent = 
    `Wrong Answers: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent = 
    `Score: ${(correctCount - wrongCount) * 2}`;
};


const showQuestion = (qNumber) =>{
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `
        <div class="answer">
            <input type="radio" name="answer" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div>
        `
    ).join("");

    selectAnswer();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null){
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else{
            alert("select an answer!");
        };
    });
};

showQuestion(qIndex);
submitAnswer();