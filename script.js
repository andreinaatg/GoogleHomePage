// function searchAlert(){
//   const googleSearch = document.getElementById("searchBar").value;
//   alert(`Search for ${googleSearch}`)
// }

// document.getElementById("searchButton").addEventListener("click", searchAlert);


function directSearch() {
    const searchQuery = document.getElementById("searchBar").value;
    const searchUrl = "https://www.google.com/search?q=" + searchQuery;
    window.location.href = searchUrl;
  }
  
  document.getElementById("searchButton").addEventListener("click", directSearch);
  
  
  //window.location.href returns the href (URL) of the current page
  