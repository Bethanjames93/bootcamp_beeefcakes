//------------------ JQuery HTML page Elements RENAME BASED ON ACTUAL HTML ID's-----------------//
const $searchbyCity = $("#searchLocation");
const $searchSubmitBtn = $("#search-location-button");
const $showCommentsBtn = $("#show-comments");
const $commentsText = $("#comment-text");
const $username = $("#user-name");
//comments rating field & id !!-------RENAME BASED ON HTML ID'S--------!!
// const $rating = $("#example-description");
const $commentsSubmitBtn = $("#add-comment-button");

// ------------------API functions for the comments, these link to the "comments-apiRoutes"------------------

// Only need to post comments, getting comments will happen on the brewery API route, via sequelize association
const commentsAPI = {
  //function for saving a new comment
  saveComments: function (comments_data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/comments",
      data: JSON.stringify(comments_data)
    });
  }
};

//------------------API functions for the breweries, these link to the "breweries-api"------------------

// Getting breweries by location, 
const breweryByCityAPI = {
  getBreweriesByCity: function (city) {
    return $.ajax({
      url: "/api/breweries/city/" + city,
      type: "GET"
    })
    // // .done(function(data){
    // //   return data
      
    // })
  },
};

// Getting brewery comments by breweryId, 
const breweryCommentsAPI = {
  getBreweriesComments: function (breweryId) {
    return $.ajax({
      url: "/api/breweries/breweryId/" + breweryId,
      type: "GET"
    });
  },
};


//------------------Functions to be run on "search by city", "show comments" and "add a comment" form submissions------------------


// Searching by city
const handleSearch = function (event) {
  event.preventDefault();
  const city = $searchbyCity.val().trim();
  //if city is blank alert user
  if (!(city)) {
    alert("You must enter a city to search");
    return;
  }
  //run the the get breweries method, passing the city search text as the argument (which will get added to the API route)
  
  breweryByCityAPI.getBreweriesByCity(city).then(function(breweries) {
    console.log("This is the breweries data: ", breweries)
    $.ajax({
      url: "/breweries",
      data: breweries
    })
    // window.location.replace("/breweries");
  });
};

//Showing comments
const showComments = function (event) {
  event.preventDefault();
  const brewery_name = $showCommentsBtn.val();
  console.log("The button has been clicked")
  //run the get comments by brewery method, passing the brewery name as the argument (which will get added to the API route)
  breweryCommentsAPI.getBreweriesComments(brewery_name).then(function() {
    window.location.replace("/comments");
  });
};

//submitting comments
const handleComments = function (event) {
  event.preventDefault();
  const comments_data = {
    user_name: $username.val().trim(),
    comment: $commentsText.val().trim(),
    brewery_name: $showCommentsBtn.val(),
    rating: $rating.val()
  }
  //if either the username, comment or rating is blank alert user
  if (!(comments_data.user_name || comments_data.comment || comments_data.rating)) {
    alert("You must complete all fields");
    return;
  }
  //run the post comments method, passing the comments_data object as the argument (which will get sent via the API route)
  commentsAPI.saveComments(comments_data);
};


//------------------Event listeners for "search by city", "show comments" and "add a comment" buttons ------------------

//search by location
$searchSubmitBtn.on("click", handleSearch);
$showCommentsBtn.on("click", showComments);
$commentsSubmitBtn.on("click", handleComments);


