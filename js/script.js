var typeClothingSuggestion;
var temperatureClothingSuggestion;
var eventType= prompt("what is the event type?");
var tempFahr= prompt("what is the temperature?");
if(eventType==="casual") {
  typeClothingSuggestion="something comfy";
}else if(eventType==="semi-formal") {
  typeClothingSuggestion="a polo";
}else if(eventType==="formal") {
  typeClothingSuggestion="a suit";
}

if(tempFahr<54) {
  temperatureClothingSuggestion="a coat";
}else if(tempFahr>54 && tempFahr<70){
  temperatureClothingSuggestion="a jacket";
}else if(tempFahr>70){
  temperatureClothingSuggestion="no jacket";
}

var result= "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + typeClothingSuggestion + " and " + temperatureClothingSuggestion + "."

console.log(result)
