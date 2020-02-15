// Global variables for league arrays of teams
// alphabetical array of MLB Teams
let mlbArray = [{name: "Arizona Diamondbacks"}, 
{name: "Atlanta Braves"}, 
{name: "Baltimore Orioles"}, 
{name: "Boston Red Sox"}, 
{name: "Chicago Cubs"}, 
{name: "Chicago White Sox"}, 
{name: "Cincinnati Reds"}, 
{name: "Cleveland Indians"},
{name: "Colorado Rockies"}, 
{name: "Detroit Tigers"}, 
{name: "Houston Astros"}, 
{name: "Kansas City Royals"}, 
{name: "Los Angeles Angels"}, 
{name: "Los Angeles Dodgers"}, 
{name: "Miami Marlins"}, 
{name: "Milwaukee Brewers"}, 
{name: "Minnesota Twins"},
{name: "New York Mets"}, 
{name: "New York Yankees"}, 
{name: "Oakland Athletics"}, 
{name: "Philadelphia Phillies"}, 
{name: "Pittsburgh Pirates"}, 
{name: "San Diego Padres"}, 
{name: "San Francisco Giants"}, 
{name: "Seattle Mariners"}, 
{name: "St. Louis Cardinals"},
{name: "Tampa Bay Rays"}, 
{name: "Texas Rangers"}, 
{name: "Toronto Blue Jays"}, 
{name: "Washington Nationals"}];

// alphabetical array of NBA Teams
let nbaArray = [{name: "Atlanta Hawks"}, 
{name: "Boston Celtics"}, 
{name: "Brooklyn Nets"}, 
{name: "Charlotte Hornets"}, 
{name: "Chicago Bulls"}, 
{name: "Cleveland Cavaliers"}, 
{name: "Dallas Mavericks"}, 
{name: "Denver Nuggets"}, 
{name: "Detroit Pistons"},
{name: "Golden State Warriors"}, 
{name: "Houston Rockets"}, 
{name: "Indiana Pacers"}, 
{name: "Los Angeles Clippers"}, 
{name: "Los Angeles Lakers"}, 
{name: "Memphis Grizzlies"}, 
{name: "Miami Heat"}, 
{name: "Milwaukee Bucks"}, 
{name: "Minnesota Timberwolves"}, 
{name: "New Orleans Pelicans"}, 
{name: "New York Knicks"}, 
{name: "Oklahoma City Thunder"}, 
{name: "Orlando Magic"}, 
{name: "Philadelphia 76ers"}, 
{name: "Phoenix Suns"}, 
{name: "Portland Trail Blazers"}, 
{name: "Sacramento Kings"}, 
{name: "San Antonio Spurs"}, 
{name: "Toronto Raptors"}, 
{name: "Utah Jazz"}, 
{name: "Washington Wizards"}];

// alphabetical array of NFL Teams
let nflArray = [{name: "Atlanta Falcons"}, 
{name: "Arizona Cardinals"}, 
{name: "Baltimore Ravens"}, 
{name: "Buffalo Bills"}, 
{name: "Carolina Panthers"}, 
{name: "Chicago Bears"}, 
{name: "Cincinnati Bengals"}, 
{name: "Cleveland Browns"}, 
{name: "Dallas Cowboys"},
{name: "Denver Broncos"}, 
{name: "Detroit Lions"}, 
{name: "Green Bay Packers"}, 
{name: "Houston Texans"}, 
{name: "Indianapolis Colts"}, 
{name: "Jacksonville Jaguars"}, 
{name: "Kansas City Chiefs"}, 
{name: "Los Angeles Chargers"}, 
{name: "Los Angeles Rams"},
{name: "Miami Dolphins"}, 
{name: "Minnesota Vikings"}, 
{name: "New England Patriots"}, 
{name: "New Orleans Saints"}, 
{name: "NY Giants"}, 
{name: "NY Jets"}, 
{name: "Oakland Raiders"}, 
{name: "Philadelphia Eagles"}, 
{name: "Pittsburgh Steelers"}, 
{name: "San Francisco 49ers"},
{name: "Seattle Seahawks"}, 
{name: "Tampa Bay Buccaneers"}, 
{name: "Tennessee Titans"}, 
{name: "Washington Redskins"}];

// alphabetical array of NHL Teams
// let nhlArray = ["Anaheim Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche", "Columbus Blue Jackets", 
// "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers",  "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", 
// "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "St. Louis Blues", "Tampa Bay Lightning", 
// "Toronto Maple Leafs", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets"];

// let PcolsNHL = ["#F47A38", "#8C2633", "#FFB81C", "#002654", "#C8102E", "#CC0000", "#CF0A2C", "#6F263D", "#002654",
//     "#006847", "#CE1126", "#041E42", "#041E42", "#111111", "#154734", "#AF1E2D", "#FFB81C", "#CE1126",
//     "#00539B", "#0038A8", "#C52032", "#F74902", "#FCB514", "#006D75", "#002F87", "#002868",
//     "#00205B", "#00205B", "#B4975A", "041E42", "#041E42"];

// let ScolsNHL = ["#B9975B", "#E2D6B5", "#000000", "#FCB514", "#F1BE48", "#000000", "#000000", "#236192", "#CE1126",
//     "#8F8F8C", "#FFFFFF", "#FF4C00", "#C8102E", "#A2AAAD", "#A6192E", "#192168", "#041E42", "#000000",
//     "#F47D30", "#CE1126", "#C2912C", "#000000", "#000000", "#EA7200", "#FCB514", "#FFFFFF",
//     "#FFFFFF", "#00843D", "#333F42", "#C8102E", "#004C97"];

let nhlArray = [{name: "Anaheim Ducks", pcol: "#F47A38", scol: "#B9975B"}, 
{name: "Arizona Coyotes", pcol: "#8C2633", scol: "#B9975B"}, 
{name: "Boston Bruins", pcol: "#FFB81C", scol: "#B9975B"},  
{name: "Buffalo Sabres", pcol: "#002654", scol: "#B9975B"}, 
{name: "Calgary Flames", pcol: "#C8102E", scol: "#B9975B"},  
{name: "Carolina Hurricanes", pcol: "#CC0000", scol: "#B9975B"}, 
{name: "Chicago Blackhawks", pcol: "#CF0A2C", scol: "#B9975B"},  
{name: "Colorado Avalanche", pcol: "#6F263D", scol: "#B9975B"},  
{name: "Columbus Blue Jackets", pcol: "#002654", scol: "#B9975B"},  
{name: "Dallas Stars", pcol: "#006847", scol: "#B9975B"}, 
{name: "Detroit Red Wings", pcol: "#CE1126", scol: "#B9975B"},  
{name: "Edmonton Oilers", pcol: "#041E42", scol: "#B9975B"}, 
{name: "Florida Panthers", pcol: "#041E42", scol: "#B9975B"},  
{name: "Los Angeles Kings", pcol: "#111111", scol: "#B9975B"}, 
{name: "Minnesota Wild", pcol: "#154734", scol: "#B9975B"}, 
{name: "Montreal Canadiens", pcol: "#AF1E2D", scol: "#B9975B"}, 
{name: "Nashville Predators", pcol: "#FFB81C", scol: "#B9975B"},  
{name: "New Jersey Devils", pcol: "#CE1126", scol: "#B9975B"}, 
{name: "New York Islanders", pcol: "#00539B", scol: "#B9975B"}, 
{name: "New York Rangers", pcol:  "#0038A8", scol: "#B9975B"}, 
{name: "Ottawa Senators", pcol: "#C52032", scol: "#B9975B"}, 
{name: "Philadelphia Flyers", pcol: "#F74902", scol: "#B9975B"}, 
{name: "Pittsburgh Penguins", pcol: "#FCB514", scol: "#B9975B"}, 
{name: "San Jose Sharks", pcol: "#006D75", scol: "#B9975B"}, 
{name: "St. Louis Blues", pcol: "#002F87", scol: "#B9975B"}, 
{name: "Tampa Bay Lightning", pcol: "#002868", scol: "#B9975B"}, 
{name: "Toronto Maple Leafs", pcol: "#00205B", scol: "#B9975B"}, 
{name: "Vancouver Canucks", pcol: "#00205B", scol: "#B9975B"}, 
{name: "Vegas Golden Knights", pcol: "#B4975A", scol: "#B9975B"}, 
{name: "Washington Capitals", pcol: "#041E42", scol: "#B9975B"}, 
{name: "Winnipeg Jets", pcol: "#041E42", scol: "#B9975B"}];

let PcolsNBA = ["#26282A","#000000","#000000","#1D1160","#000000","#6F263D","#00538C","#0E2240","#1D42BA","#1D428A",
"#000000","#002D62","#C8102E","#552583","#12173F","#98002E",
"#00471B","#0C2340","#0C2340","#006BB6","#002D62","#0077C0",
"#006BB6","#1D1160","#000000","#5A2D81","#000000","#000000",
"#002B5C","#002B5C"
]; 

let ScolsNBA = ["#E03A3E","#007A33","#FFFFFF","#00788C","#CE1141","#FFB81C","#B8C4CA","#FEC524","#C8102E","#FFC72C",
"#CE1141","#FDBB30","#BEC0C2","#FDB927","#5D76A9","#F9A01B",
"#EEE1C6","#9EA2A2","#C8102E","#F58426","#EF3B24","#C4CED4","#ED174C","#E56020","#E03A3E","#63727A","#C4CED4","#CE1141","#F9A01B","#E31837"];

let PcolsMLB = ["#E3D4AD", "#CE1141", "#FC4C02", "#BD3039", "#0E3386", "#C4CED4", "#C6011F", "#0C2340",
    "#33006F", "#0C2340", "#EB6E1F", "#004687", "#BA0021", "#005A9C", "#00A3E0", "#0A2351", "#002B5C",
    "#002D72", "#003087", "#003831", "#E81828", "#FDB827", "#2F241D", "#FD5A1E", "#0C2C56", "#C41E3A",
    "#092C5C", "#003278", "#134A8E", "#AB0003"
]; 

let ScolsMLB = ["#A71930", "#13274F", "#27251F", "#0C2340", "#CC3433", "#27251F", "#000000", "#E31937",
    "#C4CED4", "#FA4616", "#002D62", "#BD9B60", "#003263", "#A5ACAF", "#EF3340", "#B6922E", "#D31145",
    "#FF5910", "#E4002C", "#EFB21E", "#002D72", "#27251F", "#FFC425", "#27251F", "#005C5C", "#0C2340",
    "#8FBCE6", "#C0111F", "#1D2D5C", "#14225A"
]; 





let ScolsNHL = ["#B9975B", "#E2D6B5", "#000000", "#FCB514", "#F1BE48", "#000000", "#000000", "#236192", "#CE1126",
    "#8F8F8C", "#FFFFFF", "#FF4C00", "#C8102E", "#A2AAAD", "#A6192E", "#192168", "#041E42", "#000000",
    "#F47D30", "#CE1126", "#C2912C", "#000000", "#000000", "#EA7200", "#FCB514", "#FFFFFF",
    "#FFFFFF", "#00843D", "#333F42", "#C8102E", "#004C97"
]; 


let PcolsNFL = ["#A71930", "#97233F", "#241773", "#00338D", "#0085CA", "#0B162A", "#FB4F14", "#FF3C00", "#003594",
    "#FB4F14", "#0076B6", "#203731", "#03202F", "#002C5F", "#006778", "#E31837", "#0080C6", "#002244",
    "#008E97", "#4F2683", "#002244", "#D3BC8D", "#0B2265", "#125740", "#A5ACAF", "#004C54", "#FFB612", "#AA0000",
    "#002244", "#D50A0A", "#0C2340", "#773141"
];

let ScolsNFL = ["#000000", "#000000", "#000000", "#C60C30", "#101820", "#C83803", "#000000", "#311D00", "#041E42",
    "#002244", "#B0B7BC", "#FFB612", "#A71930", "#A2AAAD", "#9F792C", "#FFB81C", "#FFC20E", "#866D4B",
    "#FC4C02", "#4F2683", "#C60C30", "#101820", "#A71930", "#000000", "#000000", "#004C54", "#101820", "#B3995D",
    "#69BE28", "#0A0A08", "#4B92DB", "#FFB612"
];

// --------------------------------------------------------------------------------------
// event listener for submit button to get user name.
$('#sub-button').on('click', function(event) {

    // prevent the form from submitting itself.
    event.preventDefault();
    
    // get the user from the input and store it in a variable.
    var userName = $('#name').val().trim();
    console.log(userName);
    
    // add the user to local storage.
    localStorage.setItem("username", userName);

    // clear the name value
    $("#name").val('');

    // show the schedule display section
    $("#schedule-display").show();

});
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// event listener that gets triggerred on click of a radio button
// 
//  1 - takes the name from the radio button to store as the league used in the API call
//      to get the schedule for the particular league.
//  2 - the league will also be used to build the list of teams possible to select
// --------------------------------------------------------------------------------------
$('input:radio').on('click', function() {
    
    // gather the name of the league from the value attribute of the button
    var league = this.value;  // need to make sure that there is a value attribute on the radio buttons ****
    console.log(league); 

    // add the league to local storage
    localStorage.setItem("league", league);

    // **** needed the value attributes added to the html
    // **** added function call
    loadTeamSelectList(league);

});
// --------------------------------------------------------------------------------------
// end of event listener that gets triggerred on click of a radio button
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  function to populate the list of teams based on the selected league
//  Parameter values:
//  league - the value provided from the user selection of the radio-button (MLB, NBA, NFL, NHL)
// --------------------------------------------------------------------------------------
function loadTeamSelectList(league) {

    league = league.toUpperCase();

    // verify the passed in league is valid
    if (league === "MLB" || league === "NBA" || league === "NFL" || league === "NHL") {

        $("#dropdown-list").empty();

        let array = [];
        // set the array for the appropriate league
        if (league === "MLB") {
            array = mlbArray;
        } else if (league === "NBA") {
            array = nbaArray;
        } else if (league === "NFL") {
            array = nflArray;
        } else if (league === "NHL") {
            array = nhlArray;
        };

        // basics found on https://www.caveofprogramming.com/guest-posts/introduction-to-jquery-populating-creating-dynamic-dropdowns.html
        // remove any previously added options
        $("#team-dropdown").find('option').remove();
        
        // loop through the array and build the new list
        for (i=0; i < array.length; i++) {
            // $("#dropdown-list").append('<button class="dropdown-item" type="button" value="'+ array[i]+'">'+ array[i] +'</button>');
            $("#dropdown-list").append('<button class="dropdown-item" type="button" value="'+ array[i].name +'">'+ array[i].name +'</button>');
        };  
        
        return true;

    } else {

        return false;

    }

};
// --------------------------------------------------------------------------------------
// end of loadTeamSelectList() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// event listener that gets triggerred on click of the team name
// --------------------------------------------------------------------------------------

$('body').on('click', ".dropdown-item:button", function () {
    console.log("Event Trigerred");
    var tag = $(this);
    var teamName = tag.val();

    console.log("Selected Value: " + teamName);

    // get the league back from local storage **** may look to change to session storage instead
    var league = localStorage.getItem("league");

    // update the Header with the team selected
    $("#teamNameEntry").text(teamName);

    // update team name in schedule table
    $("#team-display").text(teamName);

    // coordinate the colors for the selected team
    if (league.toUpperCase() === "MLB") {
        setBackgroundColorMLB(teamName);
    } else if (league.toUpperCase() === "NBA") {
        setBackgroundColorNBA(teamName);
    } else if (league.toUpperCase() === "NFL") {
        setBackgroundColorNFL(teamName);
    } else if (league.toUpperCase() === "NHL") {
        // setBackgroundColorNHL(teamName);
        setBackgroundColor(teamName, nhlArray);
    }; 

    // call the API 
    getSchedule(league.toUpperCase(), teamName);

    // show the schedule section
    $("schedule-display").show();

});
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//   Ajax call to API - MySportsFeeds.com
//  Parameter values:
//  league - the value provided from the user selection of the radio-button (MLB, NBA, NFL, NHL)
//  teamName - the value from the user selection of the dropdown list
// --------------------------------------------------------------------------------------
function getSchedule(league, teamName) {
    console.log("Ready to make the API call to get the selected schedule");
    // set the API key for the app
    var apiKey = "Basic MjNjYjY0NGItNDRkOC00NDkwLTg2YmItMDM5ZmIxOlVQZW5uXzIwX0IwMHRjQG1w"

    var team = teamName.replace(" ", "-").toLowerCase();
    var limit = 10;
    var queryURL;

    var today = moment();
    var tomorrow = today.add(1, 'days');
    var fromDate =  "since-" + moment(tomorrow).format("YYYYMMDD");
    // console.log(fromDate);

    // make the API call for each league
    if (league === "MLB" ) {

        queryURL = "https://api.mysportsfeeds.com/v1.2/pull/mlb/2020-regular/full_game_schedule.json?type=GET&datatype=json&async=false&date=" + fromDate + "&team=" + team + "&limit=" + limit;

    } else if (league === "NBA") {
        
        queryURL = "https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/full_game_schedule.json?type=GET&datatype=json&async=false&date=" + fromDate + "&team=" + team + "&limit=" + limit;

    } else if (league === "NFL") {
        // queryURL = "https://api.mysportsfeeds.com/v1.2/pull/nfl/2020-playoff/full_game_schedule.json?&datatype=json&async=false";
           getNFLSchedule(apiKey);

    } else if (league === "NHL") {
        
        queryURL= "https://api.mysportsfeeds.com/v1.2/pull/nhl/2019-2020-regular/full_game_schedule.json?type=GET&datatype=json&async=false&date=" + fromDate + "&team=" + team + "&limit=" + limit;
    
    };

    $.ajax ({
        url: queryURL,
        headers: {
            "Authorization": apiKey
        },
    }).then(function(response) {
        console.log(response);

        // bulid schedule table based on json returned
        buildGameSchedule(response);

    });   

};
// --------------------------------------------------------------------------------------
//  end of getSchedule() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  function to return the NFL Schedule  **** Currently not Working ****
//  Parameter values:
//  apiKey - the Base64 encoded Authorization key for this feed 
// --------------------------------------------------------------------------------------
function getNFLSchedule(apiKey) {

    $.ajax ({
        url: "https://api.mysportsfeeds.com/v1.2/pull/nfl/2019-regular/full_game_schedule.json?type=GET&datatype=json&async=false",
        headers: {
            "Authorization": apiKey
        },
    }).then(function(response) {
        console.log(response);
    });

};
// --------------------------------------------------------------------------------------
// end of getNFLSchedule() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// Show modal when the page is ready. 
// --------------------------------------------------------------------------------------
$(document).ready(function () {
    $("#selectLeagureAndTeam").modal("show");
}); 
// --------------------------------------------------------------------------------------
//  end of document ready action
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  function to populate the schedule display section upon successful return from the API
// --------------------------------------------------------------------------------------
function buildGameSchedule(apiResponse) {

    // local variable to hold the array of games
    let games = [];

    // local variable for the table row tag
    var newRow;

    for (i=0; i < apiResponse.fullgameschedule.gameentry.length; i++) {
        games.push(apiResponse.fullgameschedule.gameentry[i]);
    };

    // clear the table before reloading it with a new schedule.
    $("#dropdown-list").empty();

    // iterate over games and build a row for each game
    for (i=0; i < games.length; i++) {

        // Create the new row of games to display
        newRow = $("<tr>").append(
                $("<td>").text(games[i].date + "/" + games[i].time),
                $("<td>").text(games[i].awayTeam.City + " " + games[i].awayTeam.Name + " @ " + games[i].homeTeam.City + " " + games[i].homeTeam.Name),
        );
        // use the game-row class to define the click event listener to trigger the other API call.
        newRow.addClass("game-row");  
        newRow.attr("date", games[i].date);
        newRow.attr("location", games[i].homeTeam.City);

        // Append the new row to the table
        $("#sched-table > tbody").append(newRow);

        // log it for testing until there is a table to append to
        console.log("On: " + games[i].date + " Time: " + games[i].time + " " + games[i].awayTeam.City + " " 
                    + games[i].awayTeam.Name + " @ " + games[i].homeTeam.City + " " + games[i].homeTeam.Name);

    };

};
// --------------------------------------------------------------------------------------
// end of buildGameSchedule() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function for coloring of sections based on an NBA team
// --------------------------------------------------------------------------------------
function setBackgroundColorNBA(team) {

    for (j = 0; j < nbaArray.length; j++) {

        var primaryColorNBA = PcolsNBA[j];
        var secondaryColorNBA = ScolsNBA[j];

        if (team === nbaArray[j]) {
            $('#logo').attr('style', 'background:' + primaryColorNBA + ';color:' + secondaryColorNBA + ';"');
        }
    };
};
// --------------------------------------------------------------------------------------
// end of setBackgroundColorNBA() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function for coloring of sections based on an NBA team
// --------------------------------------------------------------------------------------
function setBackgroundColorMLB(team) {

    for (j = 0; j < mlbArray.length; j++) {

        var primaryColorMLB = PcolsMLB[j];
        var secondaryColorMLB = ScolsMLB[j];

        if (team === mlbArray[j]) {
            $('#logo').attr('style', 'background:' + primaryColorMLB + ';color:' + secondaryColorMLB + ';"');
        }
    };
};
// --------------------------------------------------------------------------------------
// end of setBackgroundColorMLB() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function for coloring of sections based on an NFL team
// --------------------------------------------------------------------------------------
function setBackgroundColorNFL(team) {

    for (j = 0; j < nflArray.length; j++) {

        var primaryColorNFL = PcolsNFL[j];
        var secondaryColorNFL = ScolsNFL[j];

        if (team === nflArray[j]) {
            $('#logo').attr('style', 'background:' + primaryColorNFL + ';color:' + secondaryColorNFL + ';"');
        }
    };
};
// --------------------------------------------------------------------------------------
// end of setBackgroundColorNFL() function
// --------------------------------------------------------------------------------------

// // --------------------------------------------------------------------------------------
// // function for coloring of sections based on an NHL team
// // --------------------------------------------------------------------------------------
// function setBackgroundColorNHL(team) {

//     for (j = 0; j < nhlArray.length; j++) {

//         var primaryColorNHL = PcolsNHL[j];
//         var secondaryColorNHL = ScolsNHL[j];

//         if (team === nhlArray[j]) {
//             $('#logo').attr('style', 'background:' + primaryColorNHL + ';color:' + secondaryColorNHL + ';"');
//         }
//     };
// };
// // --------------------------------------------------------------------------------------
// // end of setBackgroundColorNHL() function
// // --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function for coloring of sections based on an NHL team
// --------------------------------------------------------------------------------------
function setBackgroundColor(team, array) {

    for (i = 0; i < array.length; i++) {

        if (team === array[i].name) {
            $('#logo').attr('style', 'background:' + array[i].pcol + ';color:' + array[i].scol + ';"');
        }
    };
};
// --------------------------------------------------------------------------------------
// end of setBackgroundColorNHL() function
// --------------------------------------------------------------------------------------