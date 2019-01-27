$(document).ready(function(){
  
  setStatus();
  
  setInterval(
  function(){
         setStatus();
  }
    ,30000); //To check status of all streamers every 1 minute
});

function setStatus(){
          for(let s in streamers){           
            getTwitchInfo(streamers[s]);          
          }
}

//Streamers Object (Storing Online and Channel Status)
var streamers = ['freecodecamp',
  'admiralbulldog',
  'wagamamatv',
  'esl_sc2',
  'ninja'
];

var links = ['https://www.twitch.tv/freecodecamp','https://www.twitch.tv/admiralbulldog','https://www.twitch.tv/wagamamatv','https://www.twitch.tv/esl_sc2','https://www.twitch.tv/ninja'];


//Calling TwitchAPI to get info about given streamer
function getTwitchInfo(name){
  
   $.ajax({
                    type: 'GET',
                    url: "https://wind-bow.glitch.me/twitch-api/streams/"+name,
                    dataType: 'json',
                    data: {origin:"*"},
                    success: function(json){  
                      if(json['stream'] === null){
                          setOffline(name); //Make Streamer Offline
                      }
                      else{
                        setOnline(name,json['stream']['channel']['status']); //Make Streamer Online
                      }
                    }
   });
}

//Functions to set streamer offline and online
function setOffline(name){
  let icon = "<i class=\"material-icons tiny grey-text\">brightness_1</i>";
  switch(name){
    case 'freecodecamp':
       $("#fccoffline").removeClass("green-text").addClass("grey-text");
    
       $("#fccbody").remove();
      break;
      case 'admiralbulldog':
       $("#aboffline").removeClass("green-text").addClass("grey-text");
     
      $("#abbody").remove();      
      break;
      case 'wagamamatv':
       $("#wgoffline").removeClass("green-text").addClass("grey-text");
     
      $("#wgbody").remove();
      break;
      case 'esl_sc2':
       $("#esoffline").removeClass("green-text").addClass("grey-text");
    
      $("#esbody").remove();
      break;
      case 'ninja':
       $("#ninjaoffline").removeClass("green-text").addClass("grey-text");
     
      $("#ninjabody").remove();
      break;        
         }  
  
}
function setOnline(name,status){
  let icon = "<br><i class=\"material-icons small\">chat_bubble_outline</i>";
  switch(name){
    case 'freecodecamp':
       $("#fccoffline").removeClass("grey-text").addClass("green-text");
       icon+= " <a class='green-text' target='_blank' href ="+links[0]+">"+status+"</a>";
       $("#fccbody").html(icon);
      break;
      case 'admiralbulldog':
       $("#aboffline").removeClass("grey-text").addClass("green-text"); 
       icon+= " <a class='green-text' target='_blank' href ="+links[1]+">"+status+"</a>";
       $("#abbody").html(icon);   
      break;
      case 'wagamamatv':
       $("#wgoffline").removeClass("grey-text").addClass("green-text");
       icon+= " <a class='green-text' target='_blank' href ="+links[2]+">"+status+"</a>";
      $("#wgbody").html(icon);      
      break;
      case 'esl_sc2':
       $("#esoffline").removeClass("grey-text").addClass("green-text");
       icon+= " <a class='green-text' target='_blank' href ="+links[3]+">"+status+"</a>";
       $("#esbody").html(icon);
      break;
      case 'ninja':
       $("#ninjaoffline").removeClass("grey-text").addClass("green-text");
      icon+= " <a class='green-text' target='_blank' href ="+links[4]+">"+status+"</a>";
      $("#ninjabody").html(icon);
      break;        
         }
}
