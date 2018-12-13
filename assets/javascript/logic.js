// ready steady go!
$(document).ready(function () {
    gameRef = firebase.database().ref().child('Players');

    //Initialize Variables
    var numPlayers = 2;
    var playerName = "";
    var playerWins = 0;
    var playerLoses = 0;
    var playerChoice = "";
    var playingState = "";

    var player_one_name = "";
    var player_one_wins = 0;
    var player_one_loses = 0;
    var player_one_choice = "";

    var player_two_name = "";
    var player_two_wins = 0;
    var player_two_loses = 0;
    var player_two_choice = "";

    //How to join game? 
    PlayingState = {
        Watching: 0,
        Joining: 1,
        Playing: 2
    };

    PlayerChoice = {
        Rock: "Rock!",
        Paper: "Paper!",
        Scissor: "Scissor!"
    }


    $("form").submit(function (e) {
        playingState = PlayingState.Watching;
        e.preventDefault();
        playerName = $("#user").val();
        console.log(playerName);
        waitingToJoin();
    });

    var waitingToJoin = function () {
        
        // Listen on "online" location for player 0 (display as player One)
        gameRef.child("player0/online").on("value", function (snapshot){
            var value = snapshot.val();
            if(value === null && playingState === PlayingState.Watching) {
                tryingToJoin(0);
            };
        });

        // Listen on "online" location for player 1 (display as player Two)
        this.gameRef.child("player1/online").on("value", function (snapshot){
            var value = snapshot.val();
            if(value === null && playingState === PlayingState.Watching) {
                tryingToJoin(1);
            };
        });
    };
        // Set player to join game
    var tryingToJoin = function(playerNum) {
            playingState = PlayingState.Joining;
        gameRef.child("player" + playerNum + "/online").transaction(function(snapshot){
            if(snapshot === null) {
                return true;
            }else{
                return; 
            }
        },function(error, committed){
            if(committed){
                playingState = PlayingState.Playing;
                syncToFirebase(playerNum);
            }else{
                playState = PlayingState.Watching;
            };   
        }); 
    }; 

    var syncToFirebase = function(playerNum) {
        var p1_pick = "";
        var p2_pick = "";

        gameRef.child('player' + playerNum + '/online').set({
            Name: playerName,
            Wins: playerWins,
            Loses: playerLoses,
            Choice: playerChoice
        });

        //If Player One disconnects, clear and make room for a new player
        gameRef.child("player0").child("online").onDisconnect().remove();

        //If Player Two disconnects, clear and make room for a new player.
        gameRef.child("player1").child("online").onDisconnect().remove();    

        //Control the players


        //*****Create a div to display info for Player One*****//

        //div to display player one name

        //div to display player one rock text

        //div to display player one paper text

        //div to display player on scissor text

        //div to display player one wins

        //div to display player one loses

        //*****Create the div to display info for Player Two*****//

        //div to display Player Two Name


        //div to display player two rock


        //div to display player two paper


        //div to display player two scissor


        //div to display player two wins


        //div to display player two loses


        //*****Player Click Events*****//


        //describe player options


        //If Player One choose Rock


        //If Player One choose Paper


        //If Player One choose Scissor


        //If Plyer Two choose Rock


        //If Player Two choose Paper

        //If Player Two choose Scissor 


        //check if both players have made a selection, call calculateWinner()

        // determine possible outcomes of RPS choices (p1 win, p2 win, tie)

        //Player One Wins and Player Two Loses

        //Player One Loses and Player Two Wins

        //No one wins 

        //Player One Wins and Player Two Loses

        //No one wins... 

        //Player One Loses and Player Two Wins

        //No one wins... 

        //Player One Wins and Player Two Loses

        //Player One Loses and Player Two Wins

        //setTimeout Function to remove data?

        //restart game


        //********** CHAT **********/

        //submit chat text

        //clear chat input

        //chat database functionality (how long?)



    }); //end of document
