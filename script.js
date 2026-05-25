const scriptURL = "https://script.google.com/macros/s/AKfycby1g0-IcV698H4Ov3T-RaXj3GDFERwGO2p3NNlobb-x6MHU1a28yNS4_9Oxi9-2Rys/exec";

const form = document.getElementById("rsvpForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const button = form.querySelector("button");

  button.disabled = true;
  button.innerHTML = "Mengirim Konfirmasi...";

  try{

    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: new FormData(form)
    });

    form.style.display = "none";

    statusText.innerHTML = `
      <div class="success-box">

        <div class="check-icon">✓</div>

        <h3>
          Konfirmasi Berhasil Dikirim
        </h3>

        <p>
          Terima kasih atas konfirmasi kehadiran Anda.
        </p>

      </div>
    `;

  }catch(error){

    button.disabled = false;
    button.innerHTML = "Kirim Konfirmasi";

    statusText.innerHTML = `
      <p style="color:red;">
        Gagal mengirim konfirmasi.
      </p>
    `;

  }

});
