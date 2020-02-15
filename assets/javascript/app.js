// Global variables for league arrays of teams 
// alphabetical array of MLB Teams
let mlbArray = [{name: "Arizona Diamondbacks", pcol: "#E3D4AD", scol: "#A71930",}, 
{name: "Atlanta Braves", pcol: "#CE1141", scol: "#13274F",}, 
{name: "Baltimore Orioles", pcol: "#FC4C02", scol: "#27251F",}, 
{name: "Boston Red Sox", pcol: "#BD3039", scol: "#0C2340",}, 
{name: "Chicago Cubs", pcol: "#0E3386", scol: "#CC3433",}, 
{name: "Chicago White Sox", pcol: "#C4CED4", scol: "#27251F",}, 
{name: "Cincinnati Reds", pcol: "#C6011F", scol: "#000000",}, 
{name: "Cleveland Indians", pcol: "#0C2340", scol: "#E31937",},
{name: "Colorado Rockies", pcol: "#33006F", scol: "#C4CED4",}, 
{name: "Detroit Tigers", pcol: "#0C2340", scol: "#FA4616",}, 
{name: "Houston Astros", pcol: "#EB6E1F", scol: "#002D62", }, 
{name: "Kansas City Royals", pcol: "#004687", scol: "#BD9B60",}, 
{name: "Los Angeles Angels", pcol: "#BA0021", scol: "#003263",}, 
{name: "Los Angeles Dodgers", pcol: "#005A9C", scol: "#A5ACAF",}, 
{name: "Miami Marlins", pcol: "#00A3E0", scol: "#EF3340",}, 
{name: "Milwaukee Brewers", pcol: "#0A2351", scol: "#B6922E",}, 
{name: "Minnesota Twins", pcol: "#002B5C", scol: "#D31145",},
{name: "New York Mets", pcol: "#002D72", scol: "#FF5910",}, 
{name: "New York Yankees", pcol: "#003087", scol: "#E4002C",}, 
{name: "Oakland Athletics", pcol: "#003831", scol: "#EFB21E",}, 
{name: "Philadelphia Phillies", pcol: "#E81828", scol: "#002D72",}, 
{name: "Pittsburgh Pirates", pcol: "#FDB827", scol: "#27251F",}, 
{name: "San Diego Padres", pcol: "#2F241D", scol: "#FFC425",}, 
{name: "San Francisco Giants", pcol: "#FD5A1E", scol: "#27251F",}, 
{name: "Seattle Mariners", pcol: "#0C2C56", scol: "#005C5C",}, 
{name: "St. Louis Cardinals", pcol: "#C41E3A", scol: "#0C2340",},
{name: "Tampa Bay Rays", pcol: "#092C5C", scol: "#8FBCE6",}, 
{name: "Texas Rangers", pcol: "#003278", scol: "#C0111F",}, 
{name: "Toronto Blue Jays", pcol: "#134A8E", scol: "#1D2D5C",}, 
{name: "Washington Nationals", pcol: "#AB0003", scol: "#14225A"}];

// alphabetical array of NBA Teams
let nbaArray = [{name: "Atlanta Hawks", pcol:"#26282A", scol: "#E03A3E",}, 
{name: "Boston Celtics", pcol:"#000000", scol: "#007A33",}, 
{name: "Brooklyn Nets", pcol:"#000000", scol: "#FFFFFF",}, 
{name: "Charlotte Hornets", pcol:"#1D1160", scol: "#00788C",}, 
{name: "Chicago Bulls", pcol:"#000000", scol: "#CE1141",}, 
{name: "Cleveland Cavaliers", pcol:"#6F263D", scol: "#FFB81C",}, 
{name: "Dallas Mavericks", pcol:"#00538C", scol: "#B8C4CA",}, 
{name: "Denver Nuggets", pcol:"#0E2240", scol: "#FEC524",}, 
{name: "Detroit Pistons", pcol:"#1D42BA", scol: "#C8102E",},
{name: "Golden State Warriors", pcol:"#1D428A", scol: "#FFC72C",},
{name: "Houston Rockets", pcol:"#000000", scol: "#CE1141",}, 
{name: "Indiana Pacers", pcol:"#002D62", scol: "#FDBB30",}, 
{name: "Los Angeles Clippers", pcol:"#C8102E", scol: "#BEC0C2",}, 
{name: "Los Angeles Lakers", pcol:"#552583", scol: "#FDB927",}, 
{name: "Memphis Grizzlies", pcol:"#12173F", scol: "#5D76A9",}, 
{name: "Miami Heat", pcol:"#98002E", scol: "#F9A01B",}, 
{name: "Milwaukee Bucks", pcol:"#00471B", scol: "#EEE1C6",}, 
{name: "Minnesota Timberwolves", pcol:"#0C2340", scol: "#9EA2A2",}, 
{name: "New Orleans Pelicans", pcol:"#0C2340", scol: "#C8102E",}, 
{name: "New York Knicks", pcol:"#006BB6", scol: "#F58426",}, 
{name: "Oklahoma City Thunder", pcol:"#002D62", scol: "#EF3B24",}, 
{name: "Orlando Magic", pcol:"#0077C0", scol: "#C4CED4",}, 
{name: "Philadelphia 76ers", pcol:"#006BB6", scol: "#ED174C",}, 
{name: "Phoenix Suns", pcol:"#1D1160", scol: "#E56020",}, 
{name: "Portland Trail Blazers", pcol:"#000000", scol: "#E03A3E",}, 
{name: "Sacramento Kings", pcol:"#5A2D81", scol: "#63727A",}, 
{name: "San Antonio Spurs", pcol:"#000000", scol: "#C4CED4",}, 
{name: "Toronto Raptors", pcol:"#000000", scol: "#CE1141",}, 
{name: "Utah Jazz", pcol:"#002B5C", scol: "#F9A01B",}, 
{name: "Washington Wizards", pcol:"#002B5C", scol: "#E31837"}];

// alphabetical array of NFL Teams
let nflArray = [{name: "Atlanta Falcons", pcol: "#A71930", scol: "#000000",}, 
{name: "Arizona Cardinals", pcol: "#97233F", scol: "#000000",}, 
{name: "Baltimore Ravens", pcol: "#241773", scol: "#000000",}, 
{name: "Buffalo Bills", pcol: "#00338D", scol: "#C60C30",}, 
{name: "Carolina Panthers", pcol: "#0085CA", scol: "#101820",}, 
{name: "Chicago Bears", pcol: "#0B162A", scol: "#C83803",}, 
{name: "Cincinnati Bengals", pcol: "#FB4F14", scol: "#000000",}, 
{name: "Cleveland Browns", pcol: "#FF3C00", scol: "#311D00",}, 
{name: "Dallas Cowboys", pcol: "#003594", scol: "#041E42",},
{name: "Denver Broncos", pcol: "#FB4F14", scol: "#002244",}, 
{name: "Detroit Lions", pcol: "#0076B6", scol: "#B0B7BC",}, 
{name: "Green Bay Packers", pcol: "#203731", scol: "#FFB612",}, 
{name: "Houston Texans", pcol: "#03202F", scol: "#A71930",}, 
{name: "Indianapolis Colts", pcol: "#002C5F", scol: "#A2AAAD",}, 
{name: "Jacksonville Jaguars", pcol: "#006778", scol: "#9F792C",}, 
{name: "Kansas City Chiefs", pcol: "#E31837", scol: "#FFB81C",}, 
{name: "Los Angeles Chargers", pcol: "#0080C6", scol: "#FFC20E",}, 
{name: "Los Angeles Rams", pcol: "#002244", scol: "#866D4B",},
{name: "Miami Dolphins", pcol: "#008E97", scol: "#FC4C02",}, 
{name: "Minnesota Vikings", pcol: "#4F2683", scol: "#4F2683",}, 
{name: "New England Patriots", pcol: "#002244", scol: "#C60C30",}, 
{name: "New Orleans Saints", pcol: "#D3BC8D", scol: "#101820",}, 
{name: "NY Giants", pcol: "#0B2265", scol: "#A71930",}, 
{name: "NY Jets", pcol: "#125740", scol: "#000000",}, 
{name: "Oakland Raiders", pcol: "#A5ACAF", scol: "#000000",}, 
{name: "Philadelphia Eagles", pcol: "#004C54", scol: "#004C54",}, 
{name: "Pittsburgh Steelers", pcol: "#FFB612", scol: "#101820",}, 
{name: "San Francisco 49ers", pcol: "#AA0000", scol: "#B3995D",},
{name: "Seattle Seahawks", pcol: "#002244", scol: "#69BE28",}, 
{name: "Tampa Bay Buccaneers", pcol: "#D50A0A", scol: "#0A0A08",}, 
{name: "Tennessee Titans", pcol: "#0C2340", scol: "#4B92DB",}, 
{name: "Washington Redskins", pcol: "#773141", scol: "#FFB612"}];

// alphabetical array of NHL Teams
let nhlArray = [{name: "Anaheim Ducks", pcol: "#F47A38", scol: "#B9975B"}, 
{name: "Arizona Coyotes", pcol: "#8C2633", scol: "#E2D6B5"}, 
{name: "Boston Bruins", pcol: "#FFB81C", scol: "#000000"},  
{name: "Buffalo Sabres", pcol: "#002654", scol: "#FCB514"}, 
{name: "Calgary Flames", pcol: "#C8102E", scol: "#F1BE48"},  
{name: "Carolina Hurricanes", pcol: "#CC0000", scol: "#000000"}, 
{name: "Chicago Blackhawks", pcol: "#CF0A2C", scol: "#000000"},  
{name: "Colorado Avalanche", pcol: "#6F263D", scol: "#236192"},  
{name: "Columbus Blue Jackets", pcol: "#002654", scol: "#CE1126"},  
{name: "Dallas Stars", pcol: "#006847", scol: "#8F8F8C"}, 
{name: "Detroit Red Wings", pcol: "#CE1126", scol: "#FFFFFF"},  
{name: "Edmonton Oilers", pcol: "#041E42", scol: "#FF4C00"}, 
{name: "Florida Panthers", pcol: "#041E42", scol: "#C8102E"},  
{name: "Los Angeles Kings", pcol: "#111111", scol: "#A2AAAD"}, 
{name: "Minnesota Wild", pcol: "#154734", scol: "#A6192E"}, 
{name: "Montreal Canadiens", pcol: "#AF1E2D", scol: "#192168"}, 
{name: "Nashville Predators", pcol: "#FFB81C", scol: "#041E42"},  
{name: "New Jersey Devils", pcol: "#CE1126", scol: "#000000"}, 
{name: "New York Islanders", pcol: "#00539B", scol: "#F47D30"}, 
{name: "New York Rangers", pcol:  "#0038A8", scol: "#CE1126"}, 
{name: "Ottawa Senators", pcol: "#C52032", scol: "#C2912C"}, 
{name: "Philadelphia Flyers", pcol: "#F74902", scol: "#000000"}, 
{name: "Pittsburgh Penguins", pcol: "#FCB514", scol: "#000000"}, 
{name: "San Jose Sharks", pcol: "#006D75", scol: "#EA7200"}, 
{name: "St. Louis Blues", pcol: "#002F87", scol: "#FCB514"}, 
{name: "Tampa Bay Lightning", pcol: "#002868", scol: "#FFFFFF"}, 
{name: "Toronto Maple Leafs", pcol: "#00205B", scol: "#FFFFFF"}, 
{name: "Vancouver Canucks", pcol: "#00205B", scol: "#00843D"}, 
{name: "Vegas Golden Knights", pcol: "#B4975A", scol: "#333F42"}, 
{name: "Washington Capitals", pcol: "#041E42", scol: "#C8102E"}, 
{name: "Winnipeg Jets", pcol: "#041E42", scol: "#004C97"}];

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