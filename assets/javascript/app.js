// Global variables for league arrays of teams 
//  Team objects contain the Team Name, the primary color, and the secondary color.  Colors are used for styling
// alphabetical array of MLB Teams
let mlbArray = [{name: "Arizona Diamondbacks", primColor: "#E3D4AD", secColor: "#A71930",}, 
{name: "Atlanta Braves", primColor: "#CE1141", secColor: "#13274F",}, 
{name: "Baltimore Orioles", primColor: "#FC4C02", secColor: "#27251F",}, 
{name: "Boston Red Sox", primColor: "#BD3039", secColor: "#0C2340",}, 
{name: "Chicago Cubs", primColor: "#0E3386", secColor: "#CC3433",}, 
{name: "Chicago White Sox", primColor: "#C4CED4", secColor: "#27251F",}, 
{name: "Cincinnati Reds", primColor: "#C6011F", secColor: "#000000",}, 
{name: "Cleveland Indians", primColor: "#0C2340", secColor: "#E31937",},
{name: "Colorado Rockies", primColor: "#33006F", secColor: "#C4CED4",}, 
{name: "Detroit Tigers", primColor: "#0C2340", secColor: "#FA4616",}, 
{name: "Houston Astros", primColor: "#EB6E1F", secColor: "#002D62", }, 
{name: "Kansas City Royals", primColor: "#004687", secColor: "#BD9B60",}, 
{name: "Los Angeles Angels", primColor: "#BA0021", secColor: "#003263",}, 
{name: "Los Angeles Dodgers", primColor: "#005A9C", secColor: "#A5ACAF",}, 
{name: "Miami Marlins", primColor: "#00A3E0", secColor: "#EF3340",}, 
{name: "Milwaukee Brewers", primColor: "#0A2351", secColor: "#B6922E",}, 
{name: "Minnesota Twins", primColor: "#002B5C", secColor: "#D31145",},
{name: "New York Mets", primColor: "#002D72", secColor: "#FF5910",}, 
{name: "New York Yankees", primColor: "#003087", secColor: "#E4002C",}, 
{name: "Oakland Athletics", primColor: "#003831", secColor: "#EFB21E",}, 
{name: "Philadelphia Phillies", primColor: "#E81828", secColor: "#002D72",}, 
{name: "Pittsburgh Pirates", primColor: "#FDB827", secColor: "#27251F",}, 
{name: "San Diego Padres", primColor: "#2F241D", secColor: "#FFC425",}, 
{name: "San Francisco Giants", primColor: "#FD5A1E", secColor: "#27251F",}, 
{name: "Seattle Mariners", primColor: "#0C2C56", secColor: "#005C5C",}, 
{name: "St. Louis Cardinals", primColor: "#C41E3A", secColor: "#0C2340",},
{name: "Tampa Bay Rays", primColor: "#092C5C", secColor: "#8FBCE6",}, 
{name: "Texas Rangers", primColor: "#003278", secColor: "#C0111F",}, 
{name: "Toronto Blue Jays", primColor: "#134A8E", secColor: "#1D2D5C",}, 
{name: "Washington Nationals", primColor: "#AB0003", secColor: "#14225A"}];

// alphabetical array of NBA Teams
let nbaArray = [{name: "Atlanta Hawks", primColor:"#26282A", secColor: "#E03A3E",}, 
{name: "Boston Celtics", primColor:"#000000", secColor: "#007A33",}, 
{name: "Brooklyn Nets", primColor:"#000000", secColor: "#FFFFFF",}, 
{name: "Charlotte Hornets", primColor:"#1D1160", secColor: "#00788C",}, 
{name: "Chicago Bulls", primColor:"#000000", secColor: "#CE1141",}, 
{name: "Cleveland Cavaliers", primColor:"#6F263D", secColor: "#FFB81C",}, 
{name: "Dallas Mavericks", primColor:"#00538C", secColor: "#B8C4CA",}, 
{name: "Denver Nuggets", primColor:"#0E2240", secColor: "#FEC524",}, 
{name: "Detroit Pistons", primColor:"#1D42BA", secColor: "#C8102E",},
{name: "Golden State Warriors", primColor:"#1D428A", secColor: "#FFC72C",},
{name: "Houston Rockets", primColor:"#000000", secColor: "#CE1141",}, 
{name: "Indiana Pacers", primColor:"#002D62", secColor: "#FDBB30",}, 
{name: "Los Angeles Clippers", primColor:"#C8102E", secColor: "#BEC0C2",}, 
{name: "Los Angeles Lakers", primColor:"#552583", secColor: "#FDB927",}, 
{name: "Memphis Grizzlies", primColor:"#12173F", secColor: "#5D76A9",}, 
{name: "Miami Heat", primColor:"#98002E", secColor: "#F9A01B",}, 
{name: "Milwaukee Bucks", primColor:"#00471B", secColor: "#EEE1C6",}, 
{name: "Minnesota Timberwolves", primColor:"#0C2340", secColor: "#9EA2A2",}, 
{name: "New Orleans Pelicans", primColor:"#0C2340", secColor: "#C8102E",}, 
{name: "New York Knicks", primColor:"#006BB6", secColor: "#F58426",}, 
{name: "Oklahoma City Thunder", primColor:"#002D62", secColor: "#EF3B24",}, 
{name: "Orlando Magic", primColor:"#0077C0", secColor: "#C4CED4",}, 
{name: "Philadelphia 76ers", primColor:"#006BB6", secColor: "#ED174C",}, 
{name: "Phoenix Suns", primColor:"#1D1160", secColor: "#E56020",}, 
{name: "Portland Trail Blazers", primColor:"#000000", secColor: "#E03A3E",}, 
{name: "Sacramento Kings", primColor:"#5A2D81", secColor: "#63727A",}, 
{name: "San Antonio Spurs", primColor:"#000000", secColor: "#C4CED4",}, 
{name: "Toronto Raptors", primColor:"#000000", secColor: "#CE1141",}, 
{name: "Utah Jazz", primColor:"#002B5C", secColor: "#F9A01B",}, 
{name: "Washington Wizards", primColor:"#002B5C", secColor: "#E31837"}];

// alphabetical array of NFL Teams
let nflArray = [{name: "Atlanta Falcons", primColor: "#A71930", secColor: "#000000",}, 
{name: "Arizona Cardinals", primColor: "#97233F", secColor: "#000000",}, 
{name: "Baltimore Ravens", primColor: "#241773", secColor: "#000000",}, 
{name: "Buffalo Bills", primColor: "#00338D", secColor: "#C60C30",}, 
{name: "Carolina Panthers", primColor: "#0085CA", secColor: "#101820",}, 
{name: "Chicago Bears", primColor: "#0B162A", secColor: "#C83803",}, 
{name: "Cincinnati Bengals", primColor: "#FB4F14", secColor: "#000000",}, 
{name: "Cleveland Browns", primColor: "#FF3C00", secColor: "#311D00",}, 
{name: "Dallas Cowboys", primColor: "#003594", secColor: "#041E42",},
{name: "Denver Broncos", primColor: "#FB4F14", secColor: "#002244",}, 
{name: "Detroit Lions", primColor: "#0076B6", secColor: "#B0B7BC",}, 
{name: "Green Bay Packers", primColor: "#203731", secColor: "#FFB612",}, 
{name: "Houston Texans", primColor: "#03202F", secColor: "#A71930",}, 
{name: "Indianapolis Colts", primColor: "#002C5F", secColor: "#A2AAAD",}, 
{name: "Jacksonville Jaguars", primColor: "#006778", secColor: "#9F792C",}, 
{name: "Kansas City Chiefs", primColor: "#E31837", secColor: "#FFB81C",}, 
{name: "Los Angeles Chargers", primColor: "#0080C6", secColor: "#FFC20E",}, 
{name: "Los Angeles Rams", primColor: "#002244", secColor: "#866D4B",},
{name: "Miami Dolphins", primColor: "#008E97", secColor: "#FC4C02",}, 
{name: "Minnesota Vikings", primColor: "#4F2683", secColor: "#4F2683",}, 
{name: "New England Patriots", primColor: "#002244", secColor: "#C60C30",}, 
{name: "New Orleans Saints", primColor: "#D3BC8D", secColor: "#101820",}, 
{name: "NY Giants", primColor: "#0B2265", secColor: "#A71930",}, 
{name: "NY Jets", primColor: "#125740", secColor: "#000000",}, 
{name: "Oakland Raiders", primColor: "#A5ACAF", secColor: "#000000",}, 
{name: "Philadelphia Eagles", primColor: "#004C54", secColor: "",}, 
{name: "Pittsburgh Steelers", primColor: "#FFB612", secColor: "#101820",}, 
{name: "San Francisco 49ers", primColor: "#AA0000", secColor: "#B3995D",},
{name: "Seattle Seahawks", primColor: "#002244", secColor: "#A5ACAF",}, 
{name: "Tampa Bay Buccaneers", primColor: "#D50A0A", secColor: "#0A0A08",}, 
{name: "Tennessee Titans", primColor: "#0C2340", secColor: "#4B92DB",}, 
{name: "Washington Redskins", primColor: "#773141", secColor: "#FFB612"}];

// alphabetical array of NHL Teams
let nhlArray = [{name: "Anaheim Ducks", primColor: "#F47A38", secColor: "#C1C6C8"}, 
{name: "Arizona Coyotes", primColor: "#8C2633", secColor: "#E2D6B5"}, 
{name: "Boston Bruins", primColor: "#FFB81C", secColor: "#000000"},  
{name: "Buffalo Sabres", primColor: "#002654", secColor: "#FCB514"}, 
{name: "Calgary Flames", primColor: "#C8102E", secColor: "#F1BE48"},  
{name: "Carolina Hurricanes", primColor: "#CC0000", secColor: "#000000"}, 
{name: "Chicago Blackhawks", primColor: "#CF0A2C", secColor: "#000000"},  
{name: "Colorado Avalanche", primColor: "#6F263D", secColor: "#236192"},  
{name: "Columbus Blue Jackets", primColor: "#002654", secColor: "#CE1126"},  
{name: "Dallas Stars", primColor: "#006847", secColor: "#8F8F8C"}, 
{name: "Detroit Red Wings", primColor: "#CE1126", secColor: "#FFFFFF"},  
{name: "Edmonton Oilers", primColor: "#041E42", secColor: "#FF4C00"}, 
{name: "Florida Panthers", primColor: "#041E42", secColor: "#C8102E"},  
{name: "Los Angeles Kings", primColor: "#111111", secColor: "#A2AAAD"}, 
{name: "Minnesota Wild", primColor: "#154734", secColor: "#A6192E"}, 
{name: "Montreal Canadiens", primColor: "#AF1E2D", secColor: "#192168"}, 
{name: "Nashville Predators", primColor: "#FFB81C", secColor: "#041E42"},  
{name: "New Jersey Devils", primColor: "#CE1126", secColor: "#000000"}, 
{name: "New York Islanders", primColor: "#00539B", secColor: "#F47D30"}, 
{name: "New York Rangers", primColor:  "#0038A8", secColor: "#CE1126"}, 
{name: "Ottawa Senators", primColor: "#C52032", secColor: "#C2912C"}, 
{name: "Philadelphia Flyers", primColor: "#F74902", secColor: "#000000"}, 
{name: "Pittsburgh Penguins", primColor: "#FCB514", secColor: "#000000"}, 
{name: "San Jose Sharks", primColor: "#006D75", secColor: "#EA7200"}, 
{name: "St. Louis Blues", primColor: "#002F87", secColor: "#FCB514"}, 
{name: "Tampa Bay Lightning", primColor: "#002868", secColor: "#FFFFFF"}, 
{name: "Toronto Maple Leafs", primColor: "#00205B", secColor: "#FFFFFF"}, 
{name: "Vancouver Canucks", primColor: "#00205B", secColor: "#00843D"}, 
{name: "Vegas Golden Knights", primColor: "#B4975A", secColor: "#333F42"}, 
{name: "Washington Capitals", primColor: "#041E42", secColor: "#C8102E"}, 
{name: "Winnipeg Jets", primColor: "#041E42", secColor: "#004C97"}];

// --------------------------------------------------------------------------------------
// event listener for submit button to get user name.
$('#sub-button').on('click', function(event) {

    // prevent the form from submitting itself.
    event.preventDefault();
    
    // get the user from the input and store it in a variable.
    var userName = $('#name').val().trim();
    // console.log(userName);

    // capitalize the user entry
    if (userName) {
        userName  = capital_letter(userName );
    };
    
    // add the user to session storage.
    sessionStorage.setItem("username", userName);

    // clear the name value
    $("#name").val('');

    // make sure a team and user were entered before clearing the modal
    var league = sessionStorage.getItem("league");
    if (userName && league) {
        $('#selectLeagueAndTeam').modal('hide');

        // show the schedule display section
        $("#schedule-display").show();

        // update the name into the display
        $("#user-name-disp").text(userName + " ");
        $("#name-event-disp").text(userName + " ");
        
    };

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
    // console.log(league); 

    // add the league to session storage
    sessionStorage.setItem("league", league);

    // function call to load the list of teams
    loadTeamSelectList(league);

    // format the modal 
    $("#dropdownMenuButton").show().css("inline-block");
    $(".team-selection").show().css("inline-block");
    $("#enterName").show().css("inline-block");

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
            $("#dropdown-list").append('<button class="dropdown-item" type="button" value="'+ array[i].name +'" data-idx="' + i + '">'+ array[i].name +'</button>');
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
    // console.log("Event Trigerred");
    var tag = $(this);
    var teamName = tag.val();
    var index = parseInt(tag.attr("data-idx"));    

    // console.log("Selected Value: " + teamName);
    // console.log("Index:  " + index);

    // add the index to session storage
    sessionStorage.setItem("index", index);

    // get the league back from session storage 
    var league = sessionStorage.getItem("league");

    // update the Header with the team selected
    $("#teamNameEntry").text(teamName);

    // update team name in schedule table
    $("#team-display").text(teamName);

    // coordinate the colors for the selected team
    if (league.toUpperCase() === "MLB") {
        // setBackgroundColorMLB(teamName);
        setBackgroundColor(teamName, mlbArray);
    } else if (league.toUpperCase() === "NBA") {
        // setBackgroundColorNBA(teamName);
        setBackgroundColor(teamName, nbaArray);
    } else if (league.toUpperCase() === "NFL") {
        // setBackgroundColorNFL(teamName);
        setBackgroundColor(teamName, nflArray);
    } else if (league.toUpperCase() === "NHL") {
        // setBackgroundColorNHL(teamName);
        setBackgroundColor(teamName, nhlArray);
    }; 

    // call the API 
    getSchedule(league.toUpperCase(), teamName);

});
// --------------------------------------------------------------------------------------
// end of event listener that gets triggerred on click of the team name
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//   Ajax call to API - MySportsFeeds.com
//  Parameter values:
//  league - the value provided from the user selection of the radio-button (MLB, NBA, NFL, NHL)
//  teamName - the value from the user selection of the dropdown list
// --------------------------------------------------------------------------------------
function getSchedule(league, teamName) {
    // console.log("Ready to make the API call to get the selected schedule");
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
        // console.log(response);

        // bulid schedule table based on json returned
        buildGameSchedule(response);
        
        // show the schedule section
        $("schedule-display").show();

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
        // console.log(response);
    });

};
// --------------------------------------------------------------------------------------
// end of getNFLSchedule() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// Show modal when the page is ready. 
// --------------------------------------------------------------------------------------
$(document).ready(function () {
    $("#selectLeagueAndTeam").modal("show");
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

    // session variable for the table row tag
    var newRow;

    for (i=0; i < apiResponse.fullgameschedule.gameentry.length; i++) {
        games.push(apiResponse.fullgameschedule.gameentry[i]);
    };

    // clear the table before reloading it with a new schedule.
    $("#sched-table tbody").empty();

    // iterate over games and build a row for each game
    for (i=0; i < games.length; i++) {

        // Create the new row of games to display and make it clickable
        newRow = $("<tr class='clickable-row'>").append(
                $("<td>").text(moment(games[i].date).format('MMM Do YYYY') + " - " + games[i].time),
                $("<td>").text(games[i].awayTeam.City + " " + games[i].awayTeam.Name + " @ " + games[i].homeTeam.City + " " + games[i].homeTeam.Name),
        );

        // use the game-row class to define the click event listener to trigger the other API call.
        newRow.addClass("game-row");  
        newRow.attr("date", games[i].date);
        newRow.attr("location", games[i].homeTeam.City);

        // Append the new row to the table
        $("#sched-table > tbody").append(newRow);

    };

};
// --------------------------------------------------------------------------------------
// end of buildGameSchedule() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function for coloring of sections based on a specific team and league array 
//  Parameter values:
//  team - the name of the team selected
//  array - the array for the specific league the team is in  
// --------------------------------------------------------------------------------------
function setBackgroundColor(team, array) {

    // get the index back from session storage to use to pull the colors from the array
    var idx = sessionStorage.getItem("index");

    $('#logo').attr('style', 'background:' + array[idx].primColor + ';color:' + array[idx].secColor + ';"');
    // $('#schedule-display').attr('style', 'background:' + array[idx].primColor + ';color:' + array[idx].secColor + ';"');
    $("#modalHeading").attr('style', 'background:' + array[idx].primColor + ';color:' + array[idx].secColor + ';"');

    $('.modal-body').attr('style', 'background:' + array[idx].primColor + ';color:' + array[idx].secColor + ';"');
    $('.modal-header').attr('style', 'background:' + array[idx].primColor + ';color:' + array[idx].secColor + ';"');
    $("#modal-body").attr('style', 'background:' + array[idx].primColor + ';color:' + array[idx].secColor + ';"');

};
// --------------------------------------------------------------------------------------
// end of setBackgroundColor() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  Ajax call to API - TicketMaster
//  Parameter values:
//  date - the date of the selected game
//  location - the home team location/city as defined in MySportsFeeds
// --------------------------------------------------------------------------------------
function getEvent(date, location) {

    //  local variable to hold the start date for the search call (made it the day before the game)
    var startDate = moment(date).add(-1, 'days').format().substring(0,19);

    // local variable to hold the end date for the search call (made it 3 days after)
    var endDate = moment(date).add(3, 'days').format().substring(0,19);

    // testing url 
    // url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=AvrVYvXQfA3uZECk6fVhRrCUOxdJ2rWw&city=" + loc + "&stateCode=" + state + "&startDateTime=" + startDate + "Z&classificationName=-sports&endDateTime=" + endDate + "Z&sort=date,asc",
    
    $.ajax({
        url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=AvrVYvXQfA3uZECk6fVhRrCUOxdJ2rWw&city=" + location + "&startDateTime=" + startDate + "Z&classificationName=-sports&endDateTime=" + endDate + "Z&sort=date,asc",
        method: "GET"
    }).then(function(response) {

        console.log(response);

        buildEventList(response);

        // show the event section
        $('#event-list-display').show();

    });
 };
 // --------------------------------------------------------------------------------------
// end of getEvent() function
// --------------------------------------------------------------------------------------

 // --------------------------------------------------------------------------------------
//  function to populate the event list display section upon successful return from the API
// --------------------------------------------------------------------------------------
function buildEventList(apiResponse) {

    // clear the events table before reloading 
    $("#event-table tbody").empty();

    // local variable to hold the array of events
    let events = [];

    // local variable for the table row tag
    var newRow;

    // iterate over the returned list of events and create an array to get more specifics from.
    for (i=0; i < apiResponse._embedded.events.length; i++) {
        events.push(apiResponse._embedded.events[i]);
    };

    // local variable to format the Date and Time
    var displayDateTime;

    // iterate over events and build a row for each event
    for (i=0; i < events.length; i++) {

        if (events[i].dates.start.dateTime) {

            // Create the new row of games to display
            displayDateTime = events[i].dates.start.dateTime.substring(0,10);
            displayDateTime = moment(displayDateTime).format('MMM Do YYYY');
            
            newRow = $("<tr>").append(
                    $("<td>").text(displayDateTime + " - " + events[i].dates.start.localTime),
                    $("<td>").text(events[i].name),
            );

        };
        
        // Append the new row to the table
        $("#event-table > tbody").append(newRow);

    };
    
};
// --------------------------------------------------------------------------------------
// end of buildEventList() function
// -------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// event listener that gets triggerred on click of a game row 
// --------------------------------------------------------------------------------------
$('body').on('click', ".clickable-row", function () { 

    // local variable to hold the clicked row details
    var tag = $(this);

    // local variable to get the date from the row
    var gameDate = tag.attr("date");

    // local variable to get the location from the row
    var locale = tag.attr("location");
 
    // update the display with the location selected
    $("#location-display").text(locale + " ");

    // update the display with the date selected
    $("#date-display").text(gameDate);

    // call the TicketMaster API to get the events
    getEvent(gameDate, locale);

});
// --------------------------------------------------------------------------------------
// end of event listener that gets triggerred on click of a game 
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function to capitalize the text before saving it.
// Found this function on W3 schools - https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-50.php
// --------------------------------------------------------------------------------------
function capital_letter(str) {
    // separate the str parameter into pieces based on the 'space' separator
    str = str.split(" ");

    // traverse the string pieces and convert the first character of each word to Upper Case and then concatenate the rest of the string.
    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    // return the capitalize string put back together with the 'space' separator.
    return str.join(" ");
};
// --------------------------------------------------------------------------------------
// end of the capital_letter() function
// --------------------------------------------------------------------------------------