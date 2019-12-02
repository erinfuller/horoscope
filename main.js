var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var today = mm + '/' + dd + '/' + yyyy;
console.log(today);





/* A key/value dictionary for texts to be displayed.
 * The keys are paired with each image's alt attribute. 
 */

var texts = {
  "default_title" : "Horoscope for " + today,
  "default_description" : "Erin Fuller",
    
  "item1_title" : "Aries",
  "item1_description" : "March 21 - April 20",
    
  "item2_title" : "Taurus",
  "item2_description" : "April 21 - May 21",
    
  "item3_title" : "Gemini",
  "item3_description" : "May 22 - June 21",
    
  "item4_title" : "Cancer",
  "item4_description" : "June 22 - July 22",
    
  "item5_title" : "Leo",
  "item5_description" : "July 23 - August 21",
    
  "item6_title" : "Virgo",
  "item6_description" : "August 22 - September 23",
    
  "item7_title" : "Libra",
  "item7_description" : "September 24 - October 23",
    
  "item8_title" : "Scorpio",
  "item8_description" : "October 24 - November 22",
    
  "item9_title" : "Sagittarius",
  "item9_description" : "November 23 - December 22",
  
  "item10_title" : "Capricorn",
  "item10_description" : "December 23 - January 20", 
    
  "item11_title" : "Aquarius",
  "item11_description" : "January 21 - February 19",
    
  "item12_title" : "Pisces",
  "item12_description" : "Feburary 20 - March 20",
    
}

var sign_select; 

// Hover Over State to Show Sun Sign and Dates Information
$(document).ready(function(){
    $("#item_title").html(texts["default_title"]);
      $("#item_description").html(texts["default_description"]);
  $('body').on({ 
    mouseenter : function(event){
      var item_alt = $(event.target).attr("alt");
      $("#item_title").html(texts[item_alt+"_title"]);
      $("#item_description").html(texts[item_alt+"_description"]);
    },
      click : function(event){
          var sign = $(event.target).attr("alt");
          var sign_select = texts[sign+"_title"];
          console.log(sign_select);
      },
      mouseleave : function(event){
      $("#item_title").html(texts["default_title"]);
      $("#item_description").html(texts["default_description"]);
    }
  }, ".moon");
    
});



$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today',
    success:function(data){
        console.log(data.description);
//        aries = data.description;
        document.getElementById('horo').innerHTML = data.description;
    }
});











