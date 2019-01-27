$(document).ready(function(){
    
  fetchInfo(); //Fetch weather Info at startup
  
 
  
  $("#weatherButton").on("click",function(){
  
    fetchInfo();
  });
  
  $("#changeDegree").on("click",function(){
   
      let celciusTemp;
      let FarenTemp;
    if(isCelcius === true){
        celciusTemp = $("#degree").text();
      console.log(celciusTemp);
        FarenTemp =  celciusTemp *(9/5) + 32; 
        $("#type").text("Fahrenheit: ");
        $("#degree").text(FarenTemp.toFixed(1));
        isCelcius = !isCelcius; //Toggle
    }else{
        FarenTemp = $("#degree").text();
        celciusTemp =  (FarenTemp - 32)*(5/9); 
        $("#type").text("Celsius: ");
        $("#degree").text(celciusTemp.toFixed(1));
        isCelcius = !isCelcius; //Toggle
    }
    
  });
  
  //Handle Twitter Share
  $("#twitterShare").on("click",function(event){
    
    if(!disableTwitterShare){
    var url = "http://zainsra.com";
    
     var text = "Location: "+$("#location").text()+" Weather: "+$("#main").text()+", "+$("#type").text()+" "+$("#degree").text();
      
     window.open('http://twitter.com/share? hashtags=fcc,zainsra,code&url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }
    else{
       M.toast({html: 'Click on "Get Weather" First!'});
    }
    
  });  
});

 var isCelcius = true; //keep track of current type of degree
  var disableTwitterShare = true;

function fetchInfo(){
  
    $("#spinner").show();
    
    let longitude = 0;
    let latitude = 0;
    
    if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(function(position){
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            weatherAPI(longitude,latitude);
            disableTwitterShare = false;
            isCelcius = true;
        });
    }
        else{
            $("#spinner").hide();
           M.toast({html: 'Shoot! Geolocation is not supported by this browser'});    
        }
}


//WeatherAPI() to get information from weather API and fill in the approriate data in HTML!

function weatherAPI(longitude,latitude){
  
  let url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
  
    $.getJSON(url,function(json){
      
      $("#spinner").hide();
      let main = json.weather[0].main;

      $("#type").text("Celsius: ");
      $("#degree").text(json.main.temp.toFixed(1));
      $("#main").text(main);
      $("#location").text(json.name+", "+json.sys.country);
      if(json.weather[0].icon)
         $("#weatherIcon").html("<img alt='Weather Icon' src="+json.weather[0].icon+"></img>");
       
      
      $("#weatherInfo").show();
      
      if(imageLinks.hasOwnProperty(main)){
        let imageLink = imageLinks[main];
        $("body").css("background","url("+imageLink+") center no-repeat fixed");
      }  
      
      
      
    });
}


//Got the list from -> https://github.com/freeCodeCamp/freeCodeCamp/issues/15767

var possibleWeatherTypes = [
  "Drizzle","Rain","Snow","Clear","Thunderstorm","Mist","Clouds","Smoke","Dust","Haze"
];

//Images Links from Codepen Assest (unsplash)

var imageLinks = {
  Drizzle: "https://images.unsplash.com/photo-1505404919723-002ecad81b92?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=389937d667bd68fc4c97498fe25b95f0" ,
  Rain:"https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c66445dff4442aca613c25ed1ac30993",
  Snow:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3681e893c7002ed3c0e0dc00dda6e0e7",
  Clear:"https://images.unsplash.com/photo-1448570289386-7ec70f72f7dc?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=03ab81bd2c26cd21a064465bb67d6dcd",
  Thunderstorm:"https://images.unsplash.com/photo-1516490981167-dc990a242afe?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=64c30ffb420b83c4250860a77f70f4a7",
  Mist:"https://images.unsplash.com/photo-1495733014470-54e8000f94c3?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=718bf53e764eaabb9566eb432f1ce2ac",
  Clouds:"https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=4c226c985dcee927bc9e326dfe92fb0f",
  Smoke:"https://images.unsplash.com/photo-1504252060324-1c76e2e09939?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=11d9e98e963f8f56586e35fba1924644",
  Haze:"https://images.unsplash.com/photo-1503180036370-373c16943ae6?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=61d9352a6dae4caf1526dd024b666449",
  Dust:"https://images.unsplash.com/photo-1514043118079-e5e7dd44747a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=2862d8de571295cce801362b7fc6ff68",
};