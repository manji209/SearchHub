
function openSearch(website, search, loc){

switch (website){
  case 'github':
    var str = search.trim();
    str = str.replace(/ /g, '+');
    var github_url = "https://github.com/search?utf8=✓&q=" + str + "&type=Repositories&ref=searchresults";
    var win = window.open(github_url, '_blank');
      if (win) {
        //Browser has allowed it to be opened
        win.focus();
      } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
      }
      break;
  case 'indeed':
    var str = search.trim();
    str = str.replace(/ /g, '+');
    var location = loc.replace(/ /g, '+');
    location = location.replace(',', '%2C');
    var indeed_url = "https://www.indeed.com/resumes?q=" + str + "&l=" + location;
    var win = window.open(indeed_url, '_blank');
      if (win) {
        //Browser has allowed it to be opened
        win.focus();
      } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
      }
      break;
    case 'dice':
      var str = search.trim();
      var location = loc.replace(',', '%2C');
      var dice_url = "https://employer.dice.com/ows/isearch.html?keywords=" + str + "&&search=true&location=" + location;
      var win = window.open(dice_url, '_blank');
          if (win) {

          //Browser has allowed it to be opened
          win.focus();

        } else {
          //Browser has blocked it
          alert('Please allow popups for this website');
        }
        break;
      case 'google':
        var str = search.trim();
        str = str.replace(/ /g, '+');
        var location = loc.replace(/ /g, '+');
        location = location.replace(',', '%2C');
          var google_url = "https://www.google.com/#q=" + str + "+" + location;
          var win = window.open(google_url, '_blank');
              if (win) {

              //Browser has allowed it to be opened
              win.focus();

            } else {
              //Browser has blocked it
              alert('Please allow popups for this website');
            }
          break;

  }

}
