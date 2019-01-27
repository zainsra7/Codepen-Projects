$(document).ready(function(){
 
  
  getRandomQuote(); //Initialize the Quote Machine with a random quote.
  
  //Generate and Display New Random Quote By Calling getRanomQuote function
  $("#newQuote").on("click",function(event){
      console.log("nQ");  
      getRandomQuote();
    
  });
  
  //Handle Twitter Share
  $("#twitterShare").on("click",function(event){
      console.log("tS");
    var url = "http://zainsra.com";
    var text = '"'+quotesArray[currentQuote][0] +"\" -"+quotesArray[currentQuote][1];
    window.open('http://twitter.com/share?hashtags=fcc,zainsra,code&url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

  });  
});

var currentQuote = 0; //Global Variable to keep the track of current showing Quote.

function getRandomQuote(){
      //Generate a Random Whole number between 0 and 102
      //Use the random number to select the quote from quotes array
      //Display the quote and author  
  var rNum = Math.floor(Math.random()*50);
  
  if(quotesArray[rNum] !== undefined){
    document.querySelector(".author").textContent ="- "+ quotesArray[rNum][1];
   document.querySelector(".quote").innerHTML=quotesArray[rNum][0]+"<i class='material-icons'>format_quote</i>";
    currentQuote = rNum;
  }
}

//I didn't want to use the QuotesDesign or any other API for this task, So I found an array of (first 50) random quotes from Github (https://gist.github.com/signed0/d70780518341e1396e11)

var quotesArray = [["Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"],
["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],
["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost"],
["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale"],
["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
["The most difficult thing is the decision to act, the rest is merely tenacity.", "Amelia Earhart"],
["Every strike brings me closer to the next home run.", "Babe Ruth"],
["Definiteness of purpose is the starting point of all achievement.", "W. Clement Stone"],
["We must balance conspicuous consumption with conscious capitalism.", "Kevin Kruse"],
["Life is what happens to you while you’re busy making other plans.", "John Lennon"],
["We become what we think about.", "Earl Nightingale"],
["Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "Mark Twain"],
["Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll"],
["The most common way people give up their power is by thinking they don’t have any.", "Alice Walker"],
["The mind is everything. What you think you become.", "Buddha"],
["The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese Proverb"],
["An unexamined life is not worth living.", "Socrates"],
["Eighty percent of success is showing up.", "Woody Allen"],
["Your time is limited, so don’t waste it living someone else’s life.", "Steve Jobs"],
["Winning isn’t everything, but wanting to win is.", "Vince Lombardi"],
["I am not a product of my circumstances. I am a product of my decisions.", "Stephen Covey"],
["Every child is an artist.  The problem is how to remain an artist once he grows up.", "Pablo Picasso"],
["You can never cross the ocean until you have the courage to lose sight of the shore.", "Christopher Columbus"],
["I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"],
["Either you run the day, or the day runs you.", "Jim Rohn"],
["Whether you think you can or you think you can’t, you’re right.", "Henry Ford"],
["The two most important days in your life are the day you are born and the day you find out why.", "Mark Twain"],
["Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "Johann Wolfgang von Goethe"],
["The best revenge is massive success.", "Frank Sinatra"],
["People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", "Zig Ziglar"],
["Life shrinks or expands in proportion to one’s courage.", "Anais Nin"],
["If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", "Vincent Van Gogh"],
["There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "Aristotle"],
["Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "Jesus"],
["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
["Go confidently in the direction of your dreams.  Live the life you have imagined.", "Henry David Thoreau"],
["When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "Erma Bombeck"],
["Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", "Booker T. Washington"],
["Certain things catch your eye, but pursue only those that capture the heart.", " Ancient Indian Proverb"],
["Believe you can and you’re halfway there.", "Theodore Roosevelt"],
["Everything you’ve ever wanted is on the other side of fear.", "George Addair"],
["We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", "Plato"],
["Teach thy tongue to say, “I do not know,” and thous shalt progress.", "Maimonides"],
["Start where you are. Use what you have.  Do what you can.", "Arthur Ashe"],
["Fall seven times and stand up eight.", "Japanese Proverb"],
["When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", "Helen Keller"],
["Everything has beauty, but not everyone can see.", "Confucius"]];