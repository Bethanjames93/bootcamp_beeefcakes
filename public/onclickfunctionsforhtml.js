function logInFunc() {
    const logInButton = document.getElementById("log-in-button");
    const createAccountButton = document.getElementById("create-account-button");
    const searchBreweryButton = document.getElementById("search-brewery-button");
    const searchBarHeader = document.getElementById("search-bar-header");
    const logInForm = document.getElementById("log-in-form");
    if (logInButton.style.display === "none") {
        logInButton.style.display = "block";
    } else {
        logInButton.style.display = "none";
        createAccountButton.style.display = "none";
        searchBreweryButton.style.display = "none";
        searchBarHeader.style.display = "none";
        logInForm.style.display = "inline";
    }
  }

  function createAccountFunc() {
    const logInButton = document.getElementById("log-in-button");
    const createAccountButton = document.getElementById("create-account-button");
    const searchBreweryButton = document.getElementById("search-brewery-button");
    const searchBarHeader = document.getElementById("search-bar-header");
    const createAccountForm = document.getElementById("create-account-form");

    if (logInButton.style.display === "none") {
        logInButton.style.display = "block";
    } else {
        logInButton.style.display = "none";
        createAccountButton.style.display = "none";
        searchBreweryButton.style.display = "none";
        searchBarHeader.style.display = "none";
        createAccountForm.style.display = "inline";

    }
  }