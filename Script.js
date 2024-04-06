document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById('toggle');

    toggleButton.addEventListener('click', function() {
        if (toggleButton.checked) {
            openNav();
        } else {
            closeNav();
        }
    });

    var closeBtn = document.getElementById('closeBtn'); // tambahkan untuk menangani klik tombol tutup

    closeBtn.addEventListener('click', function() {
        closeNav();
    });

    function closeNav() {
        document.getElementById('toggle').checked = false; // ubah untuk menutup sidebar
        document.getElementById('mySidebar').style.width = "0";
        document.getElementById('content').style.marginLeft = "0";
    }

    function openNav() {
        document.getElementById('mySidebar').style.width = "250px";
        document.getElementById('content').style.marginLeft = "250px";
    }

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "30px 10px";
        } else {
            document.getElementById("navbar").style.padding = "80px 10px";
        }
    }
});
