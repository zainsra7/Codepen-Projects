 $(document).ready(function(){  
   
   $("#spinner").hide();
   
    var single = $('#singleInput').materialize_autocomplete({
            multiple: {
                enable: false
            },
            dropdown: {
                el: '#singleDropdown'
            }
        });
        single.resultCache = resultCache;
 
   
//Get Data from Wiki API when input is focused and user pressed enter key (13)   
//and
//Each property has an array, first we need to find if user's input is already
 // a property and if it's then we push it (only if it's unique in the array) and also create it as a separate
 // property. (I am only allowing 5 arrays of suggestions per property)
   $("#singleInput").keyup(function( event ) {     
        
     
     let val = $("#singleInput").val();
     
     if(val !== ""){
     
       //Enter key pressed
     if(event.which === 13) {
       $("#collapse").empty(); //Clear last entries
       $("#spinner").show();

       let valUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+val+"&prop=info&inprop=url&utf8=&format=json"
       $.ajax({
         type: 'GET',
                    url: valUrl,
                    dataType: 'json',
                    data: {origin:"*"},
                    success: function(json){                
                        $("#spinner").hide(); 
                      
                      let pages = json.query.search;   
                      console.log(pages);
                      for(let i = 0; i< 5; i++){                
                        let title = pages[i].title;
                        let pageId = pages[i].pageid;
                        let summary = pages[i].snippet;
                          //Create a new List Element and append to collapse ul                       
                           let listElement = "<li><div class='collapsible-header'><i class='material-icons'>filter_"+(i+1)+"</i>"+title+"</div>"+"<div class='collapsible-body white-text grey darken-4'><span class='truncate'>"+summary+"</span><a href='https://en.wikipedia.org/?curid="+pageId+"' target=_blank>[Read More]</a></div></li>"
                           
                        $("#collapse").append(listElement);                        
                      }                      
                    }
                });          
     }else{
     
    //Fill Cache with User Input       
      let obj= {id: val,
               text: val};
       
       let alreadyExists = false;
       
      for (let prop in resultCache) {
          
        if(prop.includes(val.toUpperCase())){   
            
            if(resultCache[prop].length < 5){
              
              let temp = resultCache[prop];
              
              for(let i in temp)
                {
                  if(i.id === obj.id){
                    alreadyExists = true;
                  }
                }
              if(!alreadyExists)
                  resultCache[prop].push(obj); //Only push if there it's unique
            alreadyExists = false; //for next iteration
          }
       }
     }//end of for     
     resultCache[val.toUpperCase()] = [obj];  
     }//end of else
  }
   });
     
  });

var resultCache = {}; //Cache to store user Input Suggestions