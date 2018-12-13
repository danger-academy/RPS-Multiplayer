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
    
        // Listen on "online" location for player 0 (display as player One)
     
        // Listen on "online" location for player 1 (display as player Two)
        
        // Set player to join game
        

        //If Player One disconnects, clear and make room for a new player
   

        //If Player Two disconnects, clear and make room for a new player.
          

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
