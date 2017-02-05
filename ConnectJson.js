
var search;
//var url = 'https://hiringsolved.com/api/v2/related?q=kubernetes&size=20&filter=true'

//$(document).ready(function(){
$.ajaxPrefilter( function (options) {
if (options.crossDomain && jQuery.support.cors) {
  var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
  options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
  //options.url = "http://cors.corsproxy.io/url=" + options.url;
}
});

function testBox(word, tab_button){

  var url = "https://hiringsolved.com/api/v2/related?q=" + word + "&size=100&filter=true";
  //Removes all the Buttons created from the last call
  document.getElementById(tab_button).innerHTML = "";
//Gets the JSON info from external source  
$.get(url, function (response) {
//related is the dict in the returned json var response
    for (var item in response.related) {
      var x = document.createElement("INPUT");
      var tab_area
      butId = response.related[item].id;

      x.setAttribute("type", "button");
      x.setAttribute("class", "results_buttons");
      x.setAttribute("value", butId);
      x.setAttribute("id", butId);
      x.setAttribute("onclick", "getValue(this.id)");

      //document.body.appendChild(x);
      //var x = document.getElementById("myButton").value;
      //document.getElementById("demo").innerHTML = x;
      //var p_id = 'buttons' + butt_num;
      //document.getElementById(p_id).appendChild(x);
      document.getElementById(tab_button).appendChild(x);
    }

      console.log("> ", response);
      $("#viewer").html(response);
});



}

//Gets the value of the resulting word and add it to the boolean search box
function getValue(clicked_id) {
	var txt = document.getElementById(clicked_id).value;
  search = document.getElementById("what").value;

  if(!search.includes(txt)){
    search = search + " " + txt;
    document.getElementById("what").value = search;
  }

}
