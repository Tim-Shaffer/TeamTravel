# Travel with the Team
Repository for Group Project 1

# Authors:
*   Nancy Ta: worked on the Event API processing.
*   Matt Krebs: worked on the layout and styling.
*   Tim Shaffer: worked on the Game Schedule API processing.

## Tech Used
* HTML 
* CSS
* Bootstrap
* JavaScript
* jQuery
* moment.js

## Default Page - index.html
* Link directly to the page here:  https://tim-shaffer.github.io/Project-1/

## Instructions
1. Create an APP that can solve a problem.
    * Problem:  **A sports fan wanting to travel to a different city to watch a game and wanting to bring his/her significant other along who is not as much of a sports fan.**
    * Solution: **Travel with the Team** - has the ability to present other event/activity options to the non sports fan to make the case that the trip would be entertaining for all.
    

## Requirements:
1. Must uses at least two APIs
    * Uses the MySportsFeeds.com API to pull back a provided teams schedule.
    * Uses the TicketMaster API to pull back activities for a location and specific date range

1. Must use AJAX to pull data
    * AJAX calls were used to GET data from both API's

1. Must utilize at least one new library or technology that we haven't discussed 
    * MySportsFeeds API required Basic Authorization and the use of a Base 64 encoded key
    * The Postman App was used to verify API calls and parameters

1. Must have a polished frontend / UI

1. Must meet good quality coding standards (indentation, scoping, naming)

1. Must NOT use alerts, confirms, or prompts (look into modals!)
    * A Modal is used to gather input from the User including the league and Team Name that they want to get a schedule for.

1. Must have some sort of repeating element (table, columns, etc)
    * The game and activities pulled back from the APIs are presented in a table format.

1. Must use Bootstrap or Alternative CSS Framework

1. Must be Deployed (GitHub Pages or Firebase)
    * Project was deployed to GitHub Pages and can be accessed here: https://tim-shaffer.github.io/Project-1/

1. Must have User Input Validation   
    * User must first select a league which then populates the Team Name dropdowns.
    * User must enter league, team, and name or the submit button will not proceed to the next step.
    * User name is mentioned within the game and activities sections.


    

