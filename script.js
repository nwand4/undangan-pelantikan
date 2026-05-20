const scriptURL = "https://script.google.com/macros/s/AKfycbz1rmKiuhC68BZbJF443XlEYgeu1J9q1TWIrTk0rk8eg377BI-GC1r4fvowldddqbEXaw/exec";

const form = document.getElementById("rsvpForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  /* AMBIL BUTTON */
  const button = form.querySelector("button");

  /* UBAH BUTTON SAAT LOADING */
  button.disabled = true;
  button.innerHTML = "Mengirim Konfirmasi...";

  try{

    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    });

    await response.text();

    /* SEMBUNYIKAN FORM */
    form.style.display = "none";

    /* TAMPILKAN SUCCESS */
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