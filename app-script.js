var content = document.getElementById("content");
var button = document.getElementById("continue-button");
var subButton = document.getElementById("Button_Image");
var addToHome = document.getElementById("addToHome");

//resgister service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("./sw.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

/* prompt user to  add to their home screen */
let promptEvt;

window.addEventListener("beforeinstallprompt", evt => {
  evt.preventDefault();

  console.log("beforeinstallprompt:fired with :" + evt.returnValue);

  //save event for future use
  promptEvt = evt;

  // Update UI notify the user they can add to home screen
  addToHome.classList.remove("d-none");

  return false;
});

function checkInstalledState() {
  console.log("subButton clicked ");

  console.log(addToHome.classList.contains("d-none"));
  addToHome.classList.remove("d-none");
  console.log(addToHome.classList.contains("d-none"));
  console.log(promptEvt.returnValue);

  //show install banner now
  if (promptEvt !== undefined) {
    // hide our user interface that shows our A2HS button
    addToHome.classList.remove("d-none");
    promptEvt.prompt();

    promptEvt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      promptEvt = null;
    });
  }
}
subButton.addEventListener("click", checkInstalledState);

window.addEventListener("appinstalled", evt => {
  console.log("a2hs installed");
});

//notifications

var n = new Notification("Title", {});
