const scriptURL = "https://script.google.com/macros/s/AKfycbwGvHoUV1MWFJamq4T1cHCa1rQaIPJhX7F5sCI4s8x3NqPPCwX5AA9a80-AXptOejuR/exec";

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
