// ==================== toggle icon navbar ====================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// ==================== scroll section active link ====================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        } else {
            document.querySelector(`header nav a[href*='${id}']`).classList.remove('active');
        }
    });

    /*==================== sticky navbar ====================*/
    let headers = document.querySelectorAll('header');

window.addEventListener('scroll', () => {
    headers.forEach(header => {
        header.classList.toggle('sticky', window.scrollY > 100);

        /*==================== remove toggle icon and navbar when click navbar links (scroll) ====================*/
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    //  reset: true, 
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .heading1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.home-img, .sevices-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developers', 'Perakit Mobil RC', 'Siswa'],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 1000, // Mengganti backDelay menjadi startDelay
    backDelay: 1000,
    loop: true
});

function sendwhatsapp(){
      var phonenumber = "+6285172260115";

      // Mendapatkan nilai dari input
      var fullName = document.querySelector(".fullName").value;
      var emailAddress = document.querySelector(".emailAddress").value;
      var mobileNumber = document.querySelector(".mobileNumber").value;
      var country = document.querySelector(".country").value;
      var message = document.querySelector(".message").value;

      // Mengecek apakah ada input yang kosong
      if (!fullName || !emailAddress || !mobileNumber || !country || !message) {
        showPopup(); // Menampilkan pop-up jika ada input yang kosong
        return; // Menghentikan eksekusi jika ada input yang kosong
      }

      // Membuat URL WhatsApp dengan teks yang diisi
      var url = "https://wa.me/" + phonenumber + "?text="
        + "*Name :* " + fullName + "%0a"
        + "*Email Address :* " + emailAddress + "%0a"
        + "*Mobile Number :* " + mobileNumber + "%0a"
        + "*Country:* " + country + "%0a"
        + "*Message :* " + message;

      // Membuka pesan di tab baru
      window.open(url, '_blank').focus();
    }

    // Fungsi untuk menampilkan pop-up
    function showPopup() {
      document.getElementById("popupWarning").style.display = "block";
    }

    // Fungsi untuk menutup pop-up
    function closePopup() {
      document.getElementById("popupWarning").style.display = "none";
    }

// function sendwhatsapp(){
//     var phonenumber = "+6285172260115";

//     var fullName = document.querySelector(".fullName").value;
//     var emailAddress = document.querySelector(".emailAddress").value;
//     var mobileNumber = document.querySelector(".mobileNumber").value;
//     var country = document.querySelector(".country").value;
//     var message = document.querySelector(".message").value;

//     var url = "https://wa.me/" + phonenumber + "?text="
//     +"*Name :* "+fullName+"%0a"
//     +"*Email Address :* "+emailAddress+"%0a"
//     +"*Mobile Number :* "+mobileNumber+"%0a"
//     +"*Country:* "+country+"%0a"
//     +"*Message :* "+message;

//     window.open(url, '_blank').focus();
//   }
