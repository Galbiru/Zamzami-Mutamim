document.addEventListener('DOMContentLoaded', function() {
    // Data untuk detail gambar portfolio
    const portfolioData = {
        1: {
            title: "Proyek A: Desain Website Responsif",
            description: "Proyek ini melibatkan desain dan pengembangan website yang sepenuhnya responsif untuk sebuah startup teknologi. Fokus utamanya adalah user experience (UX) dan memastikan tampilan yang optimal di berbagai perangkat."
        },
        2: {
            title: "Proyek B: Aplikasi Mobile (UI/UX)",
            description: "Pengembangan antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk aplikasi mobile e-commerce. Desainnya menitikberatkan pada navigasi yang intuitif dan visual yang menarik."
        },
        3: {
            title: "Proyek C: Sistem Manajemen Data",
            description: "Implementasi sistem manajemen data berbasis web untuk sebuah perusahaan logistik, yang memungkinkan pelacakan pengiriman secara real-time dan analisis data efisien."
        },
        4: {
            title: "Proyek D: Ilustrasi Digital",
            description: "Kumpulan ilustrasi digital yang dibuat untuk branding sebuah kafe lokal. Menggunakan gaya visual yang ceria dan modern untuk menarik target audiens muda."
        },
        5: {
            title: "Proyek E: Kampanye Pemasaran Digital",
            description: "Perencanaan dan eksekusi kampanye pemasaran digital komprehensif untuk peluncuran produk baru, mencakup SEO, SEM, dan manajemen media sosial."
        }
    };

    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const id = this.dataset.id;
            const data = portfolioData[id];

            if (data) {
                modalImage.src = this.querySelector('img').src; // Ambil src gambar yang diklik
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.description;
                imageModal.style.display = 'flex'; // Gunakan flex untuk centering
            }
        });
    });

    closeButton.addEventListener('click', function() {
        imageModal.style.display = 'none';
    });

    // Menutup modal jika area di luar konten modal diklik
    window.addEventListener('click', function(event) {
        if (event.target == imageModal) {
            imageModal.style.display = 'none';
        }
    });

    // Sidebar functionality
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    hamburgerMenu.addEventListener('click', function() {
        sidebar.style.width = '250px'; // Lebar sidebar saat terbuka
    });

    closeSidebar.addEventListener('click', function() {
        sidebar.style.width = '0'; // Tutup sidebar
    });

    // Menutup sidebar ketika link di dalamnya diklik (optional, untuk navigasi single page)
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if it's a section link, if so, close sidebar after a short delay
            if (this.getAttribute('href').startsWith('#')) {
                setTimeout(() => {
                    sidebar.style.width = '0';
                }, 300); // Penundaan agar scroll ke section terlihat
            }
        });
    });
});