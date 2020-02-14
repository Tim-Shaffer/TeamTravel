// Global variables for league arrays of teams
// alphabetical array of MLB Teams
let mlbArray = ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago Cubs", "Chicago White Sox", "Cincinnati Reds", "Cleveland Indians",
"Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins",
"New York Mets", "New York Yankees", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals",
"Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"];

// alphabetical array of NBA Teams
let nbaArray = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons",
"Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", 
"New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", 
"Toronto Raptors", "Utah Jazz", "Washington Wizards"];

// alphabetical array of NFL Teams
let nflArray = ["Atlanta Falcons", "Arizona Cardinals", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys",
"Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Los Angeles Chargers", "Los Angeles Rams",
"Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "NY Giants", "NY Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers",
"Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];

// alphabetical array of NHL Teams
let nhlArray = ["Anaheim Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche", "Columbus Blue Jackets", 
"Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers",  "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", 
"New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "St. Louis Blues", "Tampa Bay Lightning", 
"Toronto Maple Leafs", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets"];

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

    // **** change submit button id
    // **** Add to remove entry after the button clicked 
    $("#name").val('');

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
            $("#dropdown-list").append('<button class="dropdown-item" type="button" value="'+ array[i]+'">'+ array[i] +'</button>');
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


    // call the API 
    getSchedule(league.toUpperCase(), teamName);

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

function buildGameSchedule(apiResponse) {

    let games = [];
    var newRow;

    for (i=0; i < apiResponse.fullgameschedule.gameentry.length; i++) {
        games.push(apiResponse.fullgameschedule.gameentry[i]);
    };

    // iterate over games and build a row for each game
    for (i=0; i < games.length; i++) {

        // Create the new row of games to display
        // newRow = $("<tr>").append(
        //         $("<td>").text("On: " + games[i].date + " Time: " + games[i].time + " " + games[i].awayTeam.City + " " 
        //                         + games[i].awayTeam.Name + " @ " + games[i].homeTeam.City + " " + games[i].homeTeam.Name),
        // );
        // newRow.addClass("game-row");   --- use the game-row class to define the click event listener to trigger the other API call.
        // newRow.attr("date", games[i].date);
        // newRow.attr("location", games[i].homeTeam.City);

        // Append the new row to the table
        // $("#sched-table > tbody").append(newRow);

        // log it for testing until there is a table to append to
        console.log("On: " + games[i].date + " Time: " + games[i].time + " " + games[i].awayTeam.City + " " 
                    + games[i].awayTeam.Name + " @ " + games[i].homeTeam.City + " " + games[i].homeTeam.Name);

    }

};