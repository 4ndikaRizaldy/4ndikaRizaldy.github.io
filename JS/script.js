<script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      const galeryimage = document.querySelectorAll('.galery-img')

      galeryImage.forEach(image, i)
        img.dataset.aos = 'fade-down';
        img.dataset.aosDelay = i * 100;
        img.dataset.aosDuration = 1000;
      

      AOS.init({
        once: true,
        duration: 2000,
      });
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/TextPlugin.min.js"></script>
    <script>
      gsap.registerPlugin(TextPlugin);
      gsap.to('.lead', {duration: 2, delay: 1.5, text:'Penulis | Content Creator'});
      gsap.from('.jumbotron img', {duration: 1, rotateY: 360, opacity:0});
      gsap.from('.navbar', {duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce'});
      gsap.from('.display-4', {duration: 1, x: -50, opacity: 0, delay: 0.5, ease: 'back'});

    </script>

    <script>
      const scriptURL = 'https://script.google.com/macros/s/AKfycbz0pFial5Vu_5Cr9cvFWalt-qya_dzDh0OMZN0tKuPpJBBsnC_uZoTbfTg4I8sZV0_-/exec'
      const form = document.forms['portofolio-contact-form']
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.my-alert');

      form.addEventListener('submit', e => {
        e.preventDefault()
        // ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            // ketika tombol submit diklik
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            //tampilkan alert
            myAlert.classList.toggle('d-none');
            //reset formnya
            form.reset();
            console.log('Success!', response)
          })
          .catch(error => console.error('Error!', error.message))
      })
    </script>

    <script type="text/javascript" src="js/vanilla-tilt.min.js"></script>
  <script type="text/javascript">
	VanillaTilt.init(document.querySelectorAll(".book-box"), {
		max: 25,
		speed: 400
	});
</script>