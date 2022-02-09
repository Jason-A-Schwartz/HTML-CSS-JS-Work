
/*This is the code for TimeManage() and does a bunch of calculations based on user input*/
function TimeManage(){
    
    /*This obtains user input from HoursUsedInADay and makes parses it as a float and assigns it to variable v*/
    var v = parseFloat(document.getElementById('HoursUsedInADay').value);
    
    /*This obtains user input from DaysWorkedInWeek and makes parses it as a float and assigns it to variable w*/
    var w = parseFloat(document.getElementById('DaysWorkedInWeek').value);
    
    /*This calculates how many hours you will spend working in a week by multiplying the user inputs against one another and assigns it to variable x*/
    var x = v*w;
    
    /*This calculates the amount of free time left over on work days by subtracting the user input from hours in the day (24) and assigns it to variable y*/
    var y = 24-v;
    
    /*This calculates how many days you have off in the week by subtracting the users working days input from days in the week (7) and assigns it to variable z*/
    var z = 7-w;
    
    /*This Calculates the days you have off a year by mulitplying the amount of weeks in a year by user inputed days and subtracting from days in a year (365) and assigns it to variable t*/
    var t = Math.round(365-w*52.214);
    
    /*This calculates the amount of freetime the user has on days off plus hours not working. It does this by multiplying days off by the amount of hours in a day (24) and then adding it to the amount of time off on workdays which is obtained from the multiplication of y and w. It is then assigned to variable s*/
    var s = z*24 + y*w;
    
    /*This calculates how many hours you have off a year by multiplying the amount of days you have off a year by the amount of hours in a day (24) and assigns it to variable q*/
    var q = t*24 ;

    /*This tests if the hours in a work day that the user input isn't within the correct fields (0-24) and sends an alert to the screen if true*/
    if(v<0 || v>24){
        
    alert("Please insert a number within 0 and 24 (in a valid format)");
        
}
        
    /*If it does not pass the above condition then the days worked in a week that the user inout is tested to see if it isn't within the correct fields (0-7) and sends an alert if it is true*/
    else if(w<0 || w>7){

    /*This sends the alert letting the user know they need to input a valid format*/
    alert("Please insert a number within 1 and 7 (in a valid format)");
    
}
    
    /*If it does not pass the above condition then it checks if the users inputs are within 1-23 and 1-6. It then calculates the days off a year (same as before) but with an extra day added to days in a year to make up for rounding and to equal 365 days in a year. It assigns the value to variable t again and then it calculates hours off a year (same as before but with rounding because of the previous calculation) and assigns it to variable q again. It then outputs all the information in a well formated way for the user to see if it is true*/
    else if(v>0 && v<24 && w>0 && w<7){
    
    /*Calculates the days off a year (same as before) but with an extra day added to days in a year to make up for rounding and to equal 365 days in a year. It assigns the value to variable t again*/
    t = Math.round(366-w*52.214);
        
    /*Calculates hours off a year (same as before but with rounding because of the previous calculation) and assigns it to variable q again*/
    q = Math.round(t*24);
        
    /*Outputs all the above information in an easily readable way for the user*/
    document.getElementById("TimeManageResponse").innerHTML= "You will limit yourself to " + v +" hours each working day and work for " + w + " days a week." + " This means you will dedicate " + x + " hours a week to creating content for YouTube and that you will have "+ y + " hours left over (on work days) to do whatever you want." + "<br>" + "<br>" + "<b>Fun Fact:</b>" + "<i> You have </i>" + z + "<i> days off a week (which means </i>" + s + " hours of free time<i>) and </i>" + t + " <i>days off a year (</i>which is " + q +"<i> hours).";
        
}
    
    /*If it does not pass the above condition it tests if the user inputs are 0/24 and 0/7 to not adjust for rounding*/
    else if(v>=0 && v<=24 && w>=0 && w<=7){
        
    /*Outputs all the above information in an easily readable way for the user*/   
    document.getElementById("TimeManageResponse").innerHTML= "You will limit yourself to " + v +" hours each working day and work for " + w + " days a week." + " This means you will dedicate " + x + " hours a week to creating content for YouTube and that you will have "+ y + " hours left over (on work days) to do whatever you want." + "<br>" + "<br>" + "<b>Fun Fact:</b>" + "<i> You have </i>" + z + "<i> days off a week (which means </i>" + s + " hours of free time<i>) and </i>" + t + " <i>days off a year (</i>which is " + q +"<i> hours).";
        
}
    
}

/*This is the code for ValidatorOne() and validates if the function from above has empty inputs or not*/
function ValidatorOne(){
    
    /*This obtains user input from HoursUsedInADay and assigns it to variable x*/
    var x = document.getElementById('HoursUsedInADay').value;
    
    /*This obtains user input from DaysWorkedInWeek and  assigns it to variable y*/
    var y = document.getElementById('DaysWorkedInWeek').value;
    
    /*This tests if the user inputs are both empty and if true alerts the user that both are blank*/
    if(x=="" && y==""){
        
    /*Alerts the user that inout x and y are blank*/
    alert("Please enter the hours you will work in a day and the days you will work in a week (in a valid format)");
        
}
    /*If it does not pass the above condition it tests if just user input x is blank and if true it alerts the user that x is blank*/
    else if(x==""){
    
    /*Alerts the user that inout x is blank*/
    alert("Please enter the number of hours you will work in a day (in a valid format)");
        
}
    /*If it does not pass the above condition it tests if just user input y is blank and if true it alerts the user that y is blank*/
    else if(y==""){
        
    /*Alerts the user that inout y is blank*/
    alert("Please enter the number of days you will work in a week (in a valid format)");
}

}

/*This is the code for Genre() and it takes user input and preforms a conditional statement*/
function  Genre(){
    
    /*Gets user input from GenreHelp and assigns it to variable x*/
    var x = document.getElementById('GenreHelp').value;
    
    
    /*Tests if the user input is equal to 1 and then displays a specific text for the user*/
    if(x==1){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you will give viewers a tour of your house. You should make sure to include how you make videos and show them your computer setup. Also, it's a good idea to take the time to clean your house before shooting the video so that the viewers won't see how dirty your house might be.";
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 2 and then displays a specific text for the user*/
    else if(x==2){
         
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you will show off the merchandise you want to begin selling to your viewers. Obviously this only applies if you have stuff that you want to sell. If you do, make sure to show how nice the product is and to explain the reason behind selling it. Maybe put some of the profits towards a charity of your choice.";
         
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 3 and then displays a specific text for the user*/
    else if(x==3){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you can explain how you got to where you are today. You can begin wherever you like and end with the present. Make sure to talk about the hardships you have faced to get to the point you are at today and how you overcame them. This will help people really understand who you are and maybe help them with something they are going through.";
    
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 4 and then displays a specific text for the user*/
    else if(x==4){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you explain how you manage your time effectively. Many viewers might want to follow in your footsteps but have a problem sticking to a schedule. Show them how you do it so that they can learn from you and make them better at managing their time effectively.";
    
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 5 and then displays a specific text for the user*/
    else if(x==5){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you show people how you create your videos and thumbnails. Your style on YouTube is unique to you and only you. This is one of the reasons that people come to your channel. You should teach them some of the tips and tricks you have learned over the years so that they can see how its done.";
    
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 6 and then displays a specific text for the user*/
    else if(x==6){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you build something for fun. One example could be a birdhouse. All you have to do is show the viewers the materials you had to buy and then explain to them step by step how you built whatever it is you choose. This is always a fun idea to break away from the normal videos you see all the time on YouTube.";
    
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 7 and then displays a specific text for the user*/
    else if(x==7){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a gaming video in which you will record yourself (and maybe some friends) playing your favorite video games. Make sure that you talk a lot while recording to keep the audience engaged. It also helps to invest in a camera to record you and friends reactions to the game while you are playing.";
    
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 8 and then displays a specific text for the user*/
    else if(x==8){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a virtual log video (VLOG) in which you record a day in the life of yourself. These videos are fun to do because they don’t take any planning. All you have to do is take a camera and record the things that you do on the daily. Show the viewers how you wake up, where/what you eat, what you do for fun...";
    
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 9 and then displays a specific text for the user*/
    else if(x==9){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you do a Q&A session with your fans. You begin by asking for questions through some sort of social media platform and then waiting for your followers to respond. Once they respond all you have to do is read them aloud on camera and answer them as best as you can.";
    
}
    
    /*If it does not pass the above condition it tests if the user input is equal to 10 and then displays a specific text for the user*/
    else if(x==10){
        
    /*Displays text for the user based on the chosen number*/
    document.getElementById("GenreAnswer").innerHTML="You should make a video in which you review a popular film or tv show that people like. All you need to do is express how you feel about the movie. Describe how it made you feel or how much you liked/hated it. Make sure to try and make the review dynamic. Maybe add some jokes, some serious parts...";
    
}
    
}

/*This is the code for ShowAll() it has all the responses in an array and shows you all the responses from the function above if called*/
function ShowAll(){
    
    /*Creates an array with all the responses from the function above*/
    var Genres=["1. You should make a video in which you will give viewers a tour of your house. You should make sure to include how you make videos and show them your computer setup. Also, it's a good idea to take the time to clean your house before shooting the video so that the viewers won't see how dirty your house might be.","2. You should make a video in which you will show off the merchandise you want to begin selling to your viewers. Obviously this only applies if you have stuff that you want to sell. If you do, make sure to show how nice the product is and to explain the reason behind selling it. Maybe put some of the profits towards a charity of your choice.","3. You should make a video in which you can explain how you got to where you are today. You can begin wherever you like and end with the present. Make sure to talk about the hardships you have faced to get to the point you are at today and how you overcame them. This will help people really understand who you are and maybe help them with something they are going through.","4. You should make a video in which you explain how you manage your time effectively. Many viewers might want to follow in your footsteps but have a problem sticking to a schedule. Show them how you do it so that they can learn from you and make them better at managing their time effectively.","5. You should make a video in which you show people how you create your videos and thumbnails. Your style on YouTube is unique to you and only you. This is one of the reasons that people come to your channel. You should teach them some of the tips and tricks you have learned over the years so that they can see how its done.","6. You should make a video in which you build something for fun. One example could be a birdhouse. All you have to do is show the viewers the materials you had to buy and then explain to them step by step how you built whatever it is you choose. This is always a fun idea to break away from the normal videos you see all the time on YouTube.","7. You should make a gaming video in which you will record yourself (and maybe some friends) playing your favorite video games. Make sure that you talk a lot while recording to keep the audience engaged. It also helps to invest in a camera to record you and friends reactions to the game while you are playing.","8. You should make a virtual log video (VLOG) in which you record a day in the life of yourself. These videos are fun to do because they don’t take any planning. All you have to do is take a camera and record the things that you do on the daily. Show the viewers how you wake up, where/what you eat, what you do for fun...","9. You should make a video in which you do a Q&A session with your fans. You begin by asking for questions through some sort of social media platform and then waiting for your followers to respond. Once they respond all you have to do is read them aloud on camera and answer them as best as you can.","10. You should make a video in which you review a popular film or tv show that people like. All you need to do is express how you feel about the movie. Describe how it made you feel or how much you liked/hated it. Make sure to try and make the review dynamic. Maybe add some jokes, some serious parts...","IMPORTANT: Refresh the page or press the back arrow to go back!"];
    
    /*Sets the Responses variable to blank so it can be assigned later*/
    var Responses="";
    
    /*Creates a for loop that keeps going until the array is finished*/
    for(i=0;i<11;i++){
        
    /*Assigns and adds each value from the array (with breaks inbetween) to the Responses variable*/
    Responses= Genres[i]+ "<br>" +"<br>";
        
    /*writes the Responses from the array to a seperate document*/
    document.write(Responses);
}
    
}

/*This is the code for ValidatorTwo() and checks if the user input from the function above is empty/within range*/
function ValidatorTwo(){
    
    /*This obtains user input from GenreHelp and assigns it to variable x*/
    var x = document.getElementById('GenreHelp').value;
   
    /*This tests if user input x is empty and if true alerts the user to enter a number in a valid format*/
    if(x==""){
        
    /*Alerts the user to enter a number in valid format*/    
    alert("Please enter a number to generate a video idea suggestion (in a valid format)");
        
}
    /*If it does not pass the above condition then it tests if the user input is within 1 and 10 and if true alerts them to enter a number within 1 and 10*/
    else if(x<1 || x>10){
    
    /*Alerts the user to enter a number within 1 and 10*/
    alert("Please enter a number within 1 and 10 (in a valid format)");
       
}

}

/*This is the code for NameMaker() and it takes user input to access and array and loop the results based on what the user wants to see*/
function NameMaker(){
    
    /*This obtains user input from NameGenerator and assigns it to variable x*/
    var x = document.getElementById('NameGenerator').value;
    
    /*This creates an array that stores a bunch of names to be called upon later*/
    var Names =["WildVids","ItchyPictures","InsidiousTv","SuperVideos","PurpleTelevision","QuackVids","DigitalxHavoc","MeltedShows","DigitalxUniverse","TheGodlyGamer","JumbledVlogger","JackSepticEye","PewDiePie","SmoshGames","Markiplier","SmoshPit","EpicRapBattles","CaptainSparklez","TrickyVlogger","GameTheorists","SmoshPitWeekly","NostalgiaCritic","FilmTheorists","TopFiveGaming","LazerCorn","TheMysticalGamer","GoodMythicalMorning","AngryVideoGameNerd","Cinemassacre","TheTrumanShow","DudePerfect","FazeAdapt","OpticGaming","TheCompletionist","SuperBeardBros","JonTronShow","ChannelAwesome","FineBrosReact","CinemaSins","ScreenRant","GameGrumps","RiceGum","MrBeast","NoahJ456","MrRoffleWaffles","KingBobGaming","LilKirby","StyleGaming","LilSteve","PeppaGames","RockyPlaysGames","DexTheGamer","Maxamillion","ScreenJunkies","OutFoxedGaming","TrophyHunter","ImaginedGamer","HardcoreGamer","KeyAndPeele"];
    
    /*This subtracts one from the user input to make up for the array miscount and assigns it to variable y*/
    var y = x-1;
    
    /*This sets NameResponse to empty so it can be added to later*/
    var NameResponse ="";
    
    /*This creates a while loop that shows the results based on how many the user input (up to 5)*/
    while(y >= 0 && x<=5){
        
    /*This sorts and returns a random selection of the array (based on the amount the user wants to see)*/
    Names.sort(function(a, b){return 0.5 - Math.random()});
    
    /*This adds the array values with the array correction (and a space) to NameResponse*/
    NameResponse+= Names[y]+ " ";
        
    /*This sets the value to be output to NameAnswers and outputs NameResponse which has the random selected array values the user wants to see*/
    document.getElementById("NameAnswers").innerHTML=NameResponse;
        
    /*This decreases the count by 1*/
    y--;
        
}   
    
}

/*This is the code for ValidatorThree() it checks if the user input from the function above is empty*/
function ValidatorThree(){
    
    /*This obtains user input from NameGenerator and assigns it to variable x*/
    var x = document.getElementById('NameGenerator').value;
   
    /*This tests if the user input is empty or not and if true alerts the user to input a number in a valid format*/
    if(x==""){
    
    /*Alerts the user to input a number in valid format*/
    alert("Please enter a number to generate name suggestions (in a valid format)");
        
}
    
    /*If it does not pass the above condition then this tests if the user input is within 1 and 5 and if true alerts them to input a valid format*/
    else if(x<1 || x>5){
        
    /*Alerts the user to input a valid number within 1 and 5*/
    alert("Please enter a number within 1 and 5 (in a valid format)");
       
}

}

/*This is the code for DateTime() it uses the Date() object and onload method and gets the time and day and makes an array to assign the day and has conditional statements to format the time.*/
function DateTime() {

    /*Assigns the Date() object to variable x*/
    var x = new Date();
    
    /*Pulls the day from variable x by using x.getDay()*/
    var z = x.getDay();
    
    /*Pulls the hours from variable x by using x.getHours()*/
    var h = x.getHours(); 
    
    /*Pulls the minutes from variable x by using x.getMinutes()*/
    var m = x.getMinutes();
    
    /*Creates a new array with 7 slots*/
    var WeekDay = new Array(7);
    
    /*Inserts the day numbers from the getDay() object to the new array*/
    var n = WeekDay[x.getDay()];
    
    /*Assigns 0 to Sunday*/
    WeekDay[0] = "Sunday";
    
    /*Assigns 1 to Monday*/
    WeekDay[1] = "Monday";
    
    /*Assigns 2 to Tuesday*/
    WeekDay[2] = "Tuesday";
    
    /*Assigns 3 to Wednesday*/
    WeekDay[3] = "Wednesday";
    
    /*Assigns 4 to Thursday*/
    WeekDay[4] = "Thursday";
    
    /*Assigns 5 to Friday*/
    WeekDay[5] = "Friday";
    
    /*Assigns 6 to Saturday*/
    WeekDay[6] = "Saturday";
    
    /*Applys the day numbers from the getDay() object intoto the new array*/
    var n = WeekDay[x.getDay()];
    
    /*Tests if the hours (h) is equal to 0 (12:00AM) and if so sets 12 to display as 12 and makes TimeFormat "AM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    if(h==0){
        
    /*Sets h to display as 12*/
    h=12;
    
    /*Sets TimeFormat to display as AM*/
    TimeFormat = "AM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to or less than 11 and makes TimeFormat "AM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h<=11){
        
    /*Sets TimeFormat to display as AM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 12 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==12){
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 13 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==13){
        
    /*Sets h to display as 1*/
    h=1;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
        
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 14 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==14){
        
    /*Sets h to display as 2*/
    h=2;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 15 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==15){
    
    /*Sets h to display as 3*/
    h=3;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 16 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/    
    else if(h==16){
        
    /*Sets h to display as 4*/
    h=4;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
    
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 17 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==17){
        
    /*Sets h to display as 5*/
    h=5;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 18 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==18){
        
    /*Sets h to display as 6*/
    h=6;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
    
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 19 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==19){
        
    /*Sets h to display as 7*/
    h=7;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
    
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
    
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 20 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==20){
        
    /*Sets h to display as 8*/
    h=8;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
     
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day " + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 21 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==21){
        
    /*Sets h to display as 9*/
    h=9;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
    
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
     
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 22 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==22){
        
    /*Sets h to display as 10*/
    h=10;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";
        
    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
     
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
    /*If it doesn't pass the above condition then it tests if the hours (h) is equal to 23 and makes TimeFormat "PM". It then checks to see if the time is under 10 minutes by calling another function (CheckTime()) and using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    else if(h==23){
        
    /*Sets h to display as 11*/
    h=11;
        
    /*Sets TimeFormat to display as PM*/
    TimeFormat = "PM";

    /*Calls the CheckTime() function using minutes. If its under 10 minutes it adds a 0 before the minutes if not it does nothing*/
    m = CheckTime(m);
        
    /*Alerts the user of the current time (with correct format) and date*/
    alert("This step uses the current time (" + h + ":" + m + " " + TimeFormat + ") and day (" + n +") to check if you should post a video.");
        
}
    
}
    
/*This is the code for the CheckTime() function it checks to see if the minutes in the above function are less than 10 and adds a zero*/
function CheckTime(i){
    
    /*This tests if the minutes in the above function are less than 10 and adds a zero if so*/
    if (i < 10) {
    
    /*This assigns the 0 to i*/   
    i = "0" + i;
  
}
    
    /*This returns i*/
    return i;
    
}

/*This is the code for the DateTime() function and it uses the Date() object and gets the time and day and makes an array to assign the day and has conditional statements to test the time and day against the users time and day*/
function CheckPost(){

    /*Assigns the Date() object to variable x*/
    var x = new Date();
    
    /*Pulls the day from variable x by using x.getDay()*/
    var z = x.getDay();
    
    /*Pulls the hours from variable x by using x.getHours()*/
    var h = x.getHours(); 
    
    /*Pulls the minutes from variable x by using x.getMinutes()*/
    var m = x.getMinutes();
    
    /*Creates a new array with 7 slots*/
    var WeekDay = new Array(7);
    
    /*Inserts the day numbers from the getDay() object to the new array*/
    var n = WeekDay[x.getDay()];
    
    /*Assigns 0 to Sunday*/
    WeekDay[0] = "Sunday";
    
    /*Assigns 1 to Monday*/
    WeekDay[1] = "Monday";
    
    /*Assigns 2 to Tuesday*/
    WeekDay[2] = "Tuesday";
    
    /*Assigns 3 to Wednesday*/
    WeekDay[3] = "Wednesday";
    
    /*Assigns 4 to Thursday*/
    WeekDay[4] = "Thursday";
    
    /*Assigns 5 to Friday*/
    WeekDay[5] = "Friday";
    
    /*Assigns 6 to Saturday*/
    WeekDay[6] = "Saturday";
    
    /*Applys the day numbers from the getDay() object intoto the new array*/
    var w = WeekDay[x.getDay()];
    
    /*Tests if the day is Sunday and if the time is before 11:00AM and then outputs a custom response for the user*/
    if(z==0 && h<=10){
        
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="Before 11:00 AM on a Sunday is too early to be posting a video. Most people are sleeping in and don't want it to be Monday yet.";
        
}
    
    /*If it passes the above condition then this tests if the day is Sunday and if the time is after 11:00AM and before 9:00PM then outputs a custom response for the user*/
    else if(z==0 && h>10 && h<=20){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 11:00 AM (but before 9:00 PM) on a Sunday is the perfect time to post a video. Everyone's relaxing before they have to start the week again.";
        
}
    
    /*If it passes the above condition then this tests if the day is Sunday and if the time is after 9:00PM and then outputs a custom response for the user*/
    else if(z==0 && h>=21){
     
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 9:00 PM on a Sunday is too late to be posting a video. Most people are getting ready to sleep and get up for work/school";
        
}
    
    /*If it passes the above condition then this tests if the day is Monday and if the time is before 4:00PM and then outputs a custom response for the user*/
    else if(z==1 && h<=15){
     
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="Before 4:00 PM on a Monday is too early to be posting a video. Most kids are in school, and most adults are at work.";
        
}
    
    /*If it passes the above condition then this tests if the day is Monday and if the time is after 4:00PM and before 8:00PM and then outputs a custom response for the user*/
    else if(z==1 && h>15 && h<=19){
     
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 4:00 PM (but before 8:00PM) on a Monday is the perfect time to post a video. kids should be home from school and parents should be home from work";
        
}
    
    /*If it passes the above condition then this tests if the day is Monday and if the time is after 8:00PM and then outputs a custom response for the user*/
    else if(z==1 && h>=20){
     
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 8:00 PM on a Monday is too late to be posting a video. Most people are getting ready to sleep and get up for work/school";
        
}
    
    /*If it passes the above condition then this tests if the day is Tuesday and if the time is before 4:00PM and then outputs a custom response for the user*/
    else if(z==2 && h<=15){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="Before 4:00 PM on a Tuesday is too early to be posting a video. Most kids are in school, and most adults are at work.";
        
}
    /*If it passes the above condition then this tests if the day is Tuesday and if the time is after 4:00PM and before 8:00PM and then outputs a custom response for the user*/
    else if(z==2 && h>15 && h<=19){
     
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 4:00 PM (but before 8:00 PM) on a Tuesday is the perfect time to post a video. kids should be home from school and parents should be home from work";
        
}
    
    /*If it passes the above condition then this tests if the day is Tuesday and if the time is after 8:00PM and then outputs a custom response for the user*/
    else if(z==2 && h>=20){
     
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 8:00 PM on a Tuesday is too late to be posting a video. Most people are getting ready to sleep and get up for work/school";
        
}
    
    /*If it passes the above condition then this tests if the day is Wednesday and if the time is before 4:00PM and then outputs a custom response for the user*/
    else if(z==3 && h<=15){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="Before 4:00 PM on a Wednesday is too early to be posting a video. Most kids are in school, and most adults are at work.";
        
}
    
    /*If it passes the above condition then this tests if the day is Wednesday and if the time is after 4:00PM and before 8:00PM and then outputs a custom response for the user*/
    else if(z==3 && h>15 && h<=19){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 4:00 PM (but before 8:00 PM) on a Wednesday is the perfect time to post a video. kids should be home from school and parents should be home from work";
        
}
    
    /*If it passes the above condition then this tests if the day is Wenesday and if the time is after 8:00PM and then outputs a custom response for the user*/
    else if(z==3 && h>=20){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 8:00 PM on a Wednesday is too late to be posting a video. Most people are getting ready to sleep and get up for work/school";
        
}
   
    /*If it passes the above condition then this tests if the day is Thursday and if the time is before 4:00PM and then outputs a custom response for the user*/
    else if(z==4 && h<=15){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="Before 4:00 PM on a Thursday is too early to be posting a video. Most kids are in school, and most adults are at work.";
        
}
    
    /*If it passes the above condition then this tests if the day is Thursday and if the time is after 4:00PM and before 8:00PM and then outputs a custom response for the user*/
    else if(z==4 && h>15 && h<=19){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 4:00 PM (but before 8:00 PM) on a Thursday is the perfect time to post a video. kids should be home from school and parents should be home from work";
        
}
    
    /*If it passes the above condition then this tests if the day is Thursday and if the time is after 8:00PM and then outputs a custom response for the user*/
    else if(z==4 && h>=20){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 8:00 PM on a Thursday is too late to be posting a video. Most people are getting ready to sleep and get up for work/school";
        
}
    
    /*If it passes the above condition then this tests if the day is Friday and if the time is before 4:00PM and then outputs a custom response for the user*/
    else if(z==5 && h<=15){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="Before 4:00 PM on a Friday is too early to be posting a video. Most kids are in school, and most adults are at work.";
        
}
    
    /*If it passes the above condition then this tests if the day is Friday and if the time is after 4:00PM and before 10:00PM and then outputs a custom response for the user*/
    else if(z==5 && h>15 && h<=21){
    
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 4:00 PM (but before 10:00 PM) on a Friday is the perfect time to post a video. kids should be home from school and parents should be home from work";
        
}
   
    /*If it passes the above condition then this tests if the day is Friday and if the time is after 10:00PM and then outputs a custom response for the user*/
    else if(z==5 && h>=22){
        
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 10:00 PM on a Friday is too late to be posting a video. Most people are going to bed to get ready for the weekend.";
        
}
    
    /*If it passes the above condition then this tests if the day is Saturday and if the time is before 11:00AM and then outputs a custom response for the user*/ 
    else if(z==6 && h<=10){
        
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="Before 11:00 AM on a Saturday is too early to be posting a video. Most people are sleeping in";
        
}
    
    /*If it passes the above condition then this tests if the day is Saturday and if the time is after 11:00AM but before 10:00PM and then outputs a custom response for the user*/
    else if(z==6 && h>10 && h<=21){
        
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 11:00 AM (but before 10:00 PM) on a Saturday is the perfect time to post a video. Everyone's relaxing";
        
}
    
    /*If it passes the above condition then this tests if the day is Saturday and if the time is after 10:00PM and then outputs a custom response for the user*/
    else if(z==6 && h>=22){
      
    /*Outputs a custom response for the user based on the day and time*/
    document.getElementById("DateTimeOutput").innerHTML="After 10:00 PM on a Saturday is too late to be posting a video. Most people are going to bed to get back into their sleep schedule.";
        
}
    
}

/*This is the code for the AudienceResponse() function and it takes user input and validates it and then runs a conditional statement*/
function AudienceResponse(){
    
    /*This obtains user input from AudienceGuess and assigns it to variable x*/
    var x = document.getElementById("AudienceGuess").value;

    /*This tests if the user input is blank or not and if true alerts them to enter a number in valid format*/
    if(x==""){
      
    /*Alerts the user that they need to input a number that is a valid format*/
    alert("Please enter a number to generate name suggestions (in a valid format)");
        
}
    /*If it doesn't pass the above condition then it tests if the user input is under 1000 and outputs a custom response*/
    else if (x<1000){
       
    /*Outputs a custom response for the user*/  
    document.getElementById("AudienceAnswer").innerHTML="You estimated that you will have " + x + " viewers. This is way too low. You have to aim higher if you want to put the right amount of time and effort into each video you create. You are just starting out on YouTube but that doesn't mean you can't do better!" + "<b> Hint: </b>" + "<i> (Think more in the thousands)<i>.";
        
}
    /*If it doesn't pass the above condition then it tests if the user input is under above or equal to 1000 and under 5000 and outputs a custom response*/
    else if(x>=1000 && x<5000){
        
    /*Outputs a custom response for the user*/
    document.getElementById("AudienceAnswer").innerHTML="You estimated that you will have " + x + " viewers. This is a perfect estimate for your audience. You can now assume that " + x + " viewers will see your videos, so don't make a fool of yourself. Make sure to put in the right amount of work and time but don't rush it and don't spend countless hours on a video until your audience gets larger.";
}
    
    /*If it doesn't pass the above condition then it tests if the user input is over 5000 and outputs a custom response*/
    else if(x>=5000){
        
    /*Outputs a custom response for the user*/
    document.getElementById("AudienceAnswer").innerHTML="You estimated that you will have " + x + " viewers. Sadly that is too high. You will be spending way too much time and effort on a video that not many people are gonna see. However, don't let that get you down. " + x + " viewers is a good thing to shoot for in the future. Keep up the high hopes for your channel and you are going to go far.";
        
}
}

    /*This is a code from DynamicDrive.com that shows an interactive calendar.*/

    /*Dynamic Calendar II (By Jason Moon at http://www.jasonmoon.net)
    Permission granted to Dynamicdrive.com to include script in archive
    For this and 100's more DHTML scripts, visit http://dynamicdrive.com*/

    /*This is from DynamicDrive, im not sure what this does*/
    var ns6=document.getElementById&&!document.all

    /*This is from DynamicDrive, im not sure what this does*/
    var ie4=document.all

    /*This is from DynamicDrive, it seems to declare Selected_Month as a variable*/
    var Selected_Month;

    /*This is from DynamicDrive, it seems to declare Selected_Year as a variable*/
    var Selected_Year;

    /*This is from DynamicDrive, it seems to call the Date() object*/
    var Current_Date = new Date();

    /*This is from DynamicDrive, it seems to get the months from the Date() object*/
    var Current_Month = Current_Date.getMonth();

    /*This is from DynamicDrive, it seems to make a new array with days in the months*/
    var Days_in_Month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    /*This is from DynamicDrive, it seems to make a new array with the month names*/
    var Month_Label = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

    /*This is from DynamicDrive, it seems to get the year with the Date() object*/
    var Current_Year = Current_Date.getYear();


    /*This is from DynamicDrive, it seems to be testing the current year is less than 100 then add 1900 to the current years value*/
    if (Current_Year < 1000)
    
    /*This is from DynamicDrive, it seems to be adding 1900 to the current year value*/
    Current_Year+=1900
    

    /*This is from DynamicDrive, it seems to be getting the current date using the Date() object*/
    var Today = Current_Date.getDate();

/*This is from DynamicDrive, This is the code for the Header(), it seems to establish the top of the calendar*/
function Header(Year, Month) {

    /*This is from DynamicDrive, it seems to be testing if the month is equal to 1 then to call the array and calculate the year and days*/
    if (Month == 1) {
    
    /*This is from DynamicDrive, I think its trying to calculate the current month and year/days*/
    Days_in_Month[1] = ((Year % 400 == 0) || ((Year % 4 == 0) && (Year % 100 !=0))) ? 29 : 28;
        
}
   
    /*This is from DynamicDrive, I think its making the month label a string with the month array and year*/
    var Header_String = Month_Label[Month] + ' ' + Year;
    
    
    /*This is from DynamicDrive, it seems to returns the above string*/
    return Header_String;
}

/*This is from DynamicDrive, this is the code for Make_Calendar(), it seems to make the calendar with the years and months/days*/
function Make_Calendar(Year, Month) {
   
    /*This is from DynamicDrive, I think this aquires the first day of the month of the year with the Date() object*/
    var First_Date = new Date(Year, Month, 1);
   
    /*This is from DynamicDrive, I think this establishes the header with a year/month*/
    var Heading = Header(Year, Month);
   
    /*This is from DynamicDrive, I think this gets the first day with the Date() object and adds one because of array miscalculation*/
    var First_Day = First_Date.getDay() + 1;
   
    /*This is from DynamicDrive, I think it is testinf the days and months to see how many rows should be on the calendar*/
    if (((Days_in_Month[Month] == 31) && (First_Day >= 6)) || ((Days_in_Month[Month] == 30) && (First_Day == 7))){
        
    /*This is from DynamicDrive, it seems to output the rows necessary*/
    var Rows = 6;
        
}
   else if ((Days_in_Month[Month] == 28) && (First_Day == 1)){
       
    /*This is from DynamicDrive, it seems to output the rows necessary*/
    var Rows = 4;
       
}
    
   else{
       
    /*This is from DynamicDrive, it seems to output the rows necessary*/
    var Rows = 5;
       
}

   /*This is from DynamicDrive, this seems to add formating to the string made earlier*/
   var HTML_String = '<table><tr><td valign="top"><table BORDER=4 CELLSPACING=1 cellpadding=2 FRAME="box" BGCOLOR="C0C0C0" BORDERCOLORLIGHT="808080">';

   HTML_String += '<tr><th colspan=7 BGCOLOR="FFFFFF" BORDERCOLOR="000000">' + Heading + '</font></th></tr>';

   HTML_String += '<tr><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Sun</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Mon</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Tue</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Wed</th>';

   HTML_String += '<th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Thu</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Fri</th><th ALIGN="CENTER" BGCOLOR="FFFFFF" BORDERCOLOR="000000">Sat</th></tr>';

    
    /*This is from DynamicDrive, it seems to set the day counter to 1*/
    var Day_Counter = 1;
    
    /*This is from DynamicDrive, it seems to set the loop counter to 1*/
    var Loop_Counter = 1;
    
    /*This is from DynamicDrive, it seems to be a for loop for the rows*/
    for(var j = 1; j <= Rows; j++){
    
    /*This is from DynamicDrive, I think this formats the rows*/
    HTML_String += '<tr ALIGN="left" VALIGN="top">';
    
    /*This is from DynamicDrive, it seems to be a for loop for outputing the week days*/
    for(var i = 1; i < 8; i++){
    
    /*This is from DynamicDrive, it seems to be checking the loop counter and day counter before checking the day counter to the day and year and month*/
    if((Loop_Counter >= First_Day) && (Day_Counter <= Days_in_Month[Month])){
    
    /*This is from DynamicDrive, it seems to be checking the day counter to the day and year to the year and month to the month and then formating and adding the day counter*/
    if((Day_Counter == Today) && (Year == Current_Year) && (Month == Current_Month)){
    
    /*This is from DynamicDrive, it seems to add some formating and the day counter to the calendar*/
    HTML_String += '<td BGCOLOR="FFFFFF" BORDERCOLOR="000000"><strong><font color="red">' + Day_Counter + '</font></strong></td>';
                
}
    
    /*This is from DynamicDrive, it seems to be an else statement for the loop counter and day counter check, I think it changes the format if the above condition was false*/
    else{
                
    HTML_String += '<td BGCOLOR="FFFFFF" BORDERCOLOR="000000">' + Day_Counter + '</td>';
        
}
        
    /*This is from DynamicDrive, this seems to incriment the day counter*/         
    Day_Counter++;   
             
}
    /*This is from DynamicDrive, it seems to be an else statement for the day count to day and year to year and month to month checker, I think it changes the format if the above condition is false*/
    else{

    HTML_String += '<td BORDERCOLOR="C0C0C0"> </td>';
        
}
     
    /*This is from DynamicDrive, this seems to incriment the loop counter*/
    Loop_Counter++;
          
}
    
    /*This is from DynamicDrive, it seems to add some more formating to the string*/
    HTML_String += '</tr>';
        
}
    /*This is from DynamicDrive, it seems to add some more formating to the string*/
    HTML_String += '</table></td></tr></table>';
    
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    cross_el=ns6? document.getElementById("Calendar") : document.all.Calendar
    
    /*This is from DynamicDrive, im not too sure as to what this does*/
    cross_el.innerHTML = HTML_String;
    
}

/*This is from DynamicDrive, this is the code for Check_NUms(), i'm not too sure what it's checking*/
function Check_Nums(){
    
    /*This is from DynamicDrive, it seems to be testing some numbers against 48 and 57, i'm not really sure what it is doing*/
    if ((event.keyCode < 48) || (event.keyCode > 57)){
    
    /*This is from DynamicDrive, it seems to returns false*/
    return false;
        
}
    
}

/*This is from DynamicDrive, this is the code for On_Year(), i'm not too sure what it does*/
function On_Year(){
    
    /*This is from DynamicDrivem, i'm not really sure what it does*/
    var Year = document.when.year.value;
    
    /*This is from DynamicDrive, it seems to be testing if the year length is equal to 4*/
    if (Year.length == 4){
    
    /*This is from DynamicDrive, i'm not too sure as to what this does */
    Selected_Month = document.when.month.selectedIndex;
    
    /*This is from DynamicDrive, it seems to set selected year equal to year*/
    Selected_Year = Year;
     
    /*This is from DynamicDrive, I think this might make the calendar based on the user selected year and month*/
    Make_Calendar(Selected_Year, Selected_Month);
   
}

}

/*This is from DynamicDrive, this is the code for On_Month(), im not really sure as to what it does*/
function On_Month(){
    
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    var Year = document.when.year.value;
    
    /*This is from DynamicDrive, this seems to be testing if the year length is equal to 4*/
    if (Year.length == 4){
        
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    Selected_Month = document.when.month.selectedIndex;
      
    /*This is from DynamicDrive, this sets selected year to year*/    
    Selected_Year = Year;
      
    /*This is from DynamicDrive, I think this makes the calendar based on selected year and month*/    
    Make_Calendar(Selected_Year, Selected_Month);
        
}

    /*This is from DynamicDrive, this seems to be the else statement for the above condition, I think it alerts the user if they enter an invalid year*/
    else{
        
    /*This is from DynamicDrive, I think this alerts the user to enter a valid year*/    
    alert('Please enter a valid year.');
        
    /*This is from DynamicDrive, i'm not too sure as to what this does*/    
    document.when.year.focus();
        
}
    
}

/*This is from DynamicDrive, this is the code for Defaults(), I think it sets the defaults of the calendar when the page is loaded*/
function Defaults(){
    
    /*This is from DynamicDrive, i'm not too sure as to what it's testing*/
    if (!ie4&&!ns6)
        
    /*This is from DynamicDrive, i'm not too sure as to what it's returning*/
    return
    
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    var Mid_Screen = Math.round(document.body.clientWidth / 2);
   
    
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    document.when.month.selectedIndex = Current_Month;
   
    
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    document.when.year.value = Current_Year;
   
    
    /*This is from DynamicDrive, it seems to be setting selected month equal to current month*/
    Selected_Month = Current_Month;
   
    
    /*This is from DynamicDrive, it seems to be setting selected year to current year*/
    Selected_Year = Current_Year;
   
    /*This is from DynamicDrive, it seems to be making the calendar with the now default current year and month*/
    Make_Calendar(Current_Year, Current_Month);
}

/*This is from DynamicDrive, this is the code for Skip(), i think it's what allows the user to browse the calendar*/
function Skip(Direction){
    
    /*This is from DynamicDrive, I think it tests if you want to go right on the calendar*/
    if (Direction == '+') {
    
    /*This is from DynamicDrive, I think this tests if the selected month is equal to 11*/
    if (Selected_Month == 11) {
    
    /*This is from DynamicDrive, it seems to set the selected month to 0*/
    Selected_Month = 0;
    
    /*This is from DynamicDrive, I think this incriments the selected year*/
    Selected_Year++;
        
}
    /*This is from DynamicDrive, this seems to incriment the selected month if the above conditions fail*/    
    else{
    
    /*This is from DynamicDrive, this seems to incriment the selected month*/
    Selected_Month++;
        
}
        
}
    /*This is from DynamicDrive, this seems to test the selected month and year if the above conditions fail*/
    else{
    
    /*This is from DynamicDrive, this seems to test the selected month and see if it is equal to 0*/
    if (Selected_Month == 0) {
    
    /*This is from DynamicDrive, this seems to set the selected month equal to 11*/
    Selected_Month = 11;
      
    /*This is from DynamicDrive, this seems to decrease the selected year by one*/
    Selected_Year--;
      
}
    /*This is from DynamicDrive, this seems to decrease the selected month by 1 if the above conditions fail*/
    else{
         
    Selected_Month--;
      
}
   
}
   
    /*This is from DynamicDrive, I think this creates the calendar*/
    Make_Calendar(Selected_Year, Selected_Month);
    
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    document.when.month.selectedIndex = Selected_Month;
   
    /*This is from DynamicDrive, i'm not too sure as to what this does*/
    document.when.year.value = Selected_Year;
    
}