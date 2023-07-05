 function getFakeName(){
    const firstNames = ["Emma", "Liam", "Olivia", "Noah", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoey", "Nora", "Lily", "Eleanor", "Hannah", "Lillian", "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe", "Leah", "Hazel", "Violet", "Aurora", "Savannah", "Audrey", "Brooklyn", "Bella", "Claire", "Skylar", "Lucy", "Paisley", "Everly", "Anna", "Caroline", "Nova", "Genesis", "Emilia", "Kennedy", "Samantha", "Maya", "Willow", "Kinsley", "Naomi", "Aaliyah", "Elena", "Sarah", "Ariana", "Allison", "Gabriella", "Alice", "Madelyn", "Cora", "Ruby", "Eva", "Serenity", "Autumn", "Adeline", "Hailey", "Gianna", "Valentina", "Isla", "Eliana", "Quinn", "Nevaeh", "Ivy", "Sadie", "Piper", "Lydia", "Alexa", "Josephine", "Emery", "Julia", "Delilah"];
    const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Miller", "Anderson", "Wilson", "Clark", "White", "Lewis", "Walker", "Hall", "Allen", "Young", "Harris", "King", "Wright", "Lee", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West"];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}

function getFakeAddress() {
    const streets = ["Main Street", "First Avenue", "Park Road", "Elm Street", "Oak Avenue", "Cedar Lane", "Street 1", "Avenue 2", "Garden Road", "Pine Street", "Maple Avenue", "Sunset Boulevard", "Highland Drive", "Lakeview Drive", "Washington Street", "Broadway", "Church Road", "River Street", "Hillside Avenue", "Meadow Lane", "Forest Drive", "Roosevelt Avenue", "Valley Road", "Bridge Street", "Cottage Lane", "Lakeside Drive", "Park Avenue", "Beech Street", "Winding Way", "Willow Lane", "Chestnut Avenue", "Magnolia Drive", "College Road", "Hickory Lane", "Rose Street", "Crescent Avenue", "Spruce Drive", "Manor Road", "Sycamore Street", "Brookside Drive", "Orchard Lane", "Juniper Avenue", "Woodsman Court", "School Street", "Sunrise Avenue", "Daisy Lane", "Heritage Drive", "Pond Road", "Westminster Place", "Victoria Street", "Linden Avenue", "Harmony Lane", "Evergreen Terrace", "Cambridge Road", "Alder Street", "Country Club Drive", "Grove Avenue", "Holly Court", "Mansion Lane", "Griffin Road", "Peachtree Lane", "Briarwood Drive", "Pleasant Street", "Prairie Avenue", "Cherry Lane", "Havenwood Drive", "Meadowbrook Lane", "Belmont Avenue", "Paradise Road", "Rosewood Court", "Silver Street", "Primrose Lane", "Shady Lane", "Ocean View Drive", "Wilderness Trail", "Creek Road", "Sunnyvale Avenue", "Lighthouse Lane", "Autumn Drive", "Willowbrook Lane", "Wisteria Lane", "Fairview Avenue", "Majestic Court", "Sawmill Lane", "Cottonwood Drive", "Serenity Place", "Sapphire Street", "Harborview Drive", "Bayberry Lane", "Azalea Court", "Hidden Meadow Lane", "Marina Road", "Mountain View Drive", "Palm Avenue", "Clearwater Drive", "Stonegate Court", "Ponderosa Drive", "Whispering Pines Lane", "Seaside Boulevard", "Eagle Ridge Road", "Serenade Street", "Forest Hills Drive", "Summerfield Avenue"];
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "El Paso", "Detroit", "Washington", "Boston", "Memphis", "Nashville", "Portland", "Oklahoma City", "Las Vegas", "Baltimore", "Louisville", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Kansas City", "Long Beach", "Mesa", "Atlanta", "Colorado Springs", "Virginia Beach", "Raleigh", "Omaha", "Miami", "Oakland", "Minneapolis", "Tulsa", "Wichita", "New Orleans", "Arlington", "Cleveland", "Bakersfield", "Tampa", "Aurora", "Honolulu", "Anaheim", "Santa Ana", "Corpus Christi", "Riverside", "Lexington", "St. Louis", "Stockton", "Pittsburgh", "Saint Paul", "Cincinnati", "Anchorage", "Henderson", "Greensboro", "Plano", "Newark", "Lincoln", "Orlando", "Chula Vista", "Jersey City", "Buffalo", "Fort Wayne", "Chandler", "St. Petersburg", "Laredo", "Durham", "Irvine", "Madison", "Norfolk", "Lubbock", "Gilbert", "Winston-Salem", "Glendale", "Reno", "Hialeah", "Garland", "Chesapeake", "Irving", "North Las Vegas", "Scottsdale", "Baton Rouge", "Fremont", "Richmond", "Boise", "San Bernardino", "Spokane", "Birmingham", "Modesto"];
    const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia", "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", "United States Minor Outlying Islands", "U.S. Virgin Islands", "Armed Forces Americas", "Armed Forces Europe", "Armed Forces Pacific", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"];

    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const randomZip = Math.floor(Math.random() * 90000) + 10000;
  
    return `${randomStreet}, ${randomCity}, ${randomState} ${randomZip}`;
  }


  function getFakeMobileNumber() {
    const areaCodes = ["201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "212", "213", "214", "215", "216", "217", "218", "219", "224", "225", "226", "228", "229", "231", "234", "236", "239", "240", "242", "246", "248", "249", "250", "251", "252", "253", "254", "256", "260", "262", "264", "267", "268", "269", "270", "272", "276", "281", "283", "284", "289", "301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "323", "325", "330", "331", "334", "336", "337", "339", "340", "343", "345", "346", "347", "351", "352", "360", "361", "365", "367", "380", "385", "386", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "412", "413", "414", "415", "416", "417", "418"];
    
    const randomAreaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
    const randomPrefix = Math.floor(Math.random() * 900) + 100;
    const randomLineNumber = Math.floor(Math.random() * 9000) + 1000;
  
    return `+1 ${randomAreaCode}-${randomPrefix}-${randomLineNumber}`;
  }
  

  function getFakeEmail(firstName, lastName) {
    const emailProviders = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com", "protonmail.com", "mail.com", "zoho.com", "yandex.com", "live.com", "msn.com", "cox.net", "sbcglobal.net", "att.net", "verizon.net", "rocketmail.com", "me.com", "gmx.com", "fastmail.com", "tutanota.com", "mailinator.com", "inbox.com", "optonline.net", "earthlink.net", "aim.com", "charter.net", "mac.com", "juno.com", "netzero.net", "wowway.com", "windstream.net", "mail.ru", "bellsouth.net", "frontier.com", "ymail.com", "roadrunner.com", "comcast.net", "centurylink.net", "bigpond.com", "telus.net", "shaw.ca", "sympatico.ca", "blueyonder.co.uk", "ntlworld.com", "virginmedia.com", "btinternet.com", "sky.com", "talktalk.net", "orange.fr", "web.de", "t-online.de", "alice.it", "libero.it", "tin.it", "abv.bg", "wp.pl", "o2.pl", "interia.pl", "onet.pl", "rambler.ru", "yandex.ru", "ukr.net", "inbox.ru", "list.ru", "bk.ru", "rambler.com", "rediffmail.com", "indiatimes.com", "yahoo.co.in", "hotmail.co.uk", "btinternet.com", "ntlworld.com", "virginmedia.com", "talktalk.net", "sky.com", "orange.fr", "web.de", "t-online.de", "alice.it", "libero.it", "tin.it"];

    const randomProvider = emailProviders[Math.floor(Math.random() * emailProviders.length)];
    const randomUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 100)}`;
  
    return `${randomUsername}@${randomProvider}`;
  }


  function getFakeEmail() {
    const emailProviders = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com", "protonmail.com", "mail.com", "zoho.com", "yandex.com", "live.com", "msn.com", "cox.net", "sbcglobal.net", "att.net", "verizon.net", "rocketmail.com", "me.com", "gmx.com", "fastmail.com", "tutanota.com", "mailinator.com", "inbox.com", "optonline.net", "earthlink.net", "aim.com", "charter.net", "mac.com", "juno.com", "netzero.net", "wowway.com", "windstream.net", "mail.ru", "bellsouth.net", "frontier.com", "ymail.com", "roadrunner.com", "comcast.net", "centurylink.net", "bigpond.com", "telus.net", "shaw.ca", "sympatico.ca", "blueyonder.co.uk", "ntlworld.com", "virginmedia.com", "btinternet.com", "sky.com", "talktalk.net", "orange.fr", "web.de", "t-online.de", "alice.it", "libero.it", "tin.it", "abv.bg", "wp.pl", "o2.pl", "interia.pl", "onet.pl", "rambler.ru", "yandex.ru", "ukr.net", "inbox.ru", "list.ru", "bk.ru", "rambler.com", "rediffmail.com", "indiatimes.com", "yahoo.co.in", "hotmail.co.uk", "btinternet.com", "ntlworld.com", "virginmedia.com", "talktalk.net", "sky.com", "orange.fr", "web.de", "t-online.de", "alice.it", "libero.it", "tin.it"];

    var fullName = getFakeName().split(" ")

    var firstName = fullName[0];
    var lastName = fullName[1];

    const randomProvider = emailProviders[Math.floor(Math.random() * emailProviders.length)];
    const randomUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 100)}`;
  
    return `${randomUsername}@${randomProvider}`;
  }
  


module.exports = {getFakeName,getFakeAddress,getFakeMobileNumber,getFakeEmail};