/* --- JAVASCRIPT DITEMPATKAN DI SINI --- */
document.addEventListener('DOMContentLoaded', function() {
    // --- ENTRANCE SCREEN LOGIC ---
    const entranceScreen = document.getElementById('entrance-screen');
    setTimeout(() => {
        entranceScreen.classList.add('fade-out');
    }, 2000); // Tahan selama 2 detik sebelum fade out

    // --- MY CONTACT BUTTON DROPDOWN LOGIC ---
    const myContactButton = document.getElementById('myContactButton');
    const contactDropdown = document.getElementById('contactDropdown');

    myContactButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from closing immediately
        contactDropdown.style.display = contactDropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (contactDropdown && event.target !== myContactButton && !contactDropdown.contains(event.target)) {
            contactDropdown.style.display = 'none';
        }
    });

    // --- MASTERPIECE MODAL LOGIC (BEHANCE-LIKE) ---
    const masterpieceModal = document.getElementById('masterpiece-modal');
    const closeModalButton = document.querySelector('.close-modal-button');
    const modalProjectTitle = document.querySelector('.modal-project-title');
    const modalMainImage = document.getElementById('modalMainImage');
    const modalProjectStory = document.querySelector('.modal-project-story');
    const modalGalleryVertical = document.querySelector('.modal-gallery-vertical');

    // Sample data for masterpiece projects (replace with your actual data)
    const projectsData = {
        1: {
            title: "Digital Art: 'Urban Echoes'",
            mainImage: "https://via.placeholder.com/800x600/C0C0C0/333333?text=Urban+Echoes+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Urban+Echoes+1",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Urban+Echoes+2",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Urban+Echoes+3",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Urban+Echoes+4",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Urban+Echoes+5",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Urban+Echoes+6",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Urban+Echoes+7",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Urban+Echoes+8",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Urban+Echoes+9",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Urban+Echoes+10"
            ],
            story: "This digital artwork explores the abstract beauty of urban environments. It combines sharp lines with soft gradients, reflecting the contrast between man-made structures and the organic flow of city life. The use of vibrant colors aims to capture the hidden energy and unique character of the metropolis. <br><br>The composition uses dynamic angles and overlapping elements to create depth, inviting the viewer to explore its intricate details. The final piece was created after extensive experimentation with various digital painting techniques and color theory applications."
        },
        2: {
            title: "Web UI: 'Horizon Travel'",
            mainImage: "https://via.placeholder.com/800x600/A0A0A0/333333?text=Horizon+Travel+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Horizon+Travel+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Horizon+Travel+2",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Horizon+Travel+3",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Horizon+Travel+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Horizon+Travel+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Horizon+Travel+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Horizon+Travel+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Horizon+Travel+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Horizon+Travel+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Horizon+Travel+10"
            ],
            story: "A modern and intuitive UI design for a travel booking website. The focus was on creating a seamless user experience from search to checkout, with visually appealing destination showcases and easy navigation. Clean typography and a calming color palette enhance the user's journey. Extensive user research and A/B testing were performed to optimize the layout and call-to-action elements, resulting in a higher conversion rate for bookings."
        },
        3: {
            title: "Branding: 'Coffee Bean Co.'",
            mainImage: "https://via.placeholder.com/800x600/D0D0D0/333333?text=Coffee+Bean+Co+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Coffee+Bean+Co+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Coffee+Bean+Co+2",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Coffee+Bean+Co+3",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Coffee+Bean+Co+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Coffee+Bean+Co+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Coffee+Bean+Co+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Coffee+Bean+Co+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Coffee+Bean+Co+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Coffee+Bean+Co+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Coffee+Bean+Co+10"
            ],
            story: "Development of a comprehensive brand identity for a new artisanal coffee shop. This included logo design, typography selection, color palette definition, and various mockups for packaging and signage. The goal was to convey a sense of warmth, craftsmanship, and community. The design process involved exploring various visual metaphors related to coffee, ultimately leading to a minimalist yet inviting aesthetic that resonates with target consumers."
        },
        4: {
            title: "Illustration: 'Forest Spirit'",
            mainImage: "https://via.placeholder.com/800x600/C8C8C8/333333?text=Forest+Spirit+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Forest+Spirit+1",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Forest+Spirit+2",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Forest+Spirit+3",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Forest+Spirit+4",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Forest+Spirit+5",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Forest+Spirit+6",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Forest+Spirit+7",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Forest+Spirit+8",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Forest+Spirit+9",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Forest+Spirit+10"
            ],
            story: "A whimsical digital illustration depicting a mythical forest guardian. The artwork utilizes a soft, ethereal color palette and intricate details to evoke a sense of magic and wonder. It was created using Procreate on an iPad, focusing on organic forms and atmospheric lighting. The narrative behind the piece explores the silent protectors of nature and the unseen forces that shape our world, inviting viewers to delve into a mystical realm."
        },
        5: {
            title: "App UI: 'Fitness Tracker'",
            mainImage: "https://via.placeholder.com/800x600/B8B8B8/333333?text=Fitness+Tracker+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Fitness+Tracker+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Fitness+Tracker+2",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Fitness+Tracker+3",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Fitness+Tracker+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Fitness+Tracker+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Fitness+Tracker+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Fitness+Tracker+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Fitness+Tracker+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Fitness+Tracker+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Fitness+Tracker+10"
            ],
            story: "Designed a clean and highly functional user interface for a mobile fitness tracking application. Key features include intuitive progress visualization, personalized workout routines, and social sharing capabilities. The design prioritizes readability and ease of data input for a seamless user journey. A comprehensive design system was developed to ensure consistency across all screens, improving both user experience and developer handover."
        },
        6: {
            title: "Poster: 'Music Festival'",
            mainImage: "https://via.placeholder.com/800x600/D8D8D8/333333?text=Music+Festival+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Music+Festival+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Music+Festival+2",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Music+Festival+3",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Music+Festival+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Music+Festival+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Music+Festival+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Music+Festival+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Music+Festival+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Music+Festival+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Music+Festival+10"
            ],
            story: "A vibrant and energetic poster design for a summer music festival. The design incorporates bold typography, abstract shapes, and a limited but impactful color palette to create a visually striking announcement. The aim was to evoke the excitement and dynamism of live music events. The layered elements and distressed textures add a gritty, authentic feel, perfectly capturing the spirit of modern music festivals."
        },
        7: {
            title: "Iconography: 'Tech Startup'",
            mainImage: "https://via.placeholder.com/800x600/A8A8A8/333333?text=Icon+Set+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Icon+Set+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Icon+Set+2",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Icon+Set+3",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Icon+Set+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Icon+Set+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Icon+Set+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Icon+Set+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Icon+Set+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Icon+Set+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Icon+Set+10"
            ],
            story: "A cohesive set of custom icons designed for a cutting-edge tech startup's web and mobile applications. The icons follow a minimalist and geometric style, ensuring clarity and scalability across various interfaces. Each icon was crafted to represent a core feature of the product, simplifying complex ideas into easily recognizable visual elements. The process involved extensive ideation and user testing to ensure intuitive understanding."
        },
        8: {
            title: "Website: 'Portfolio V2'",
            mainImage: "https://via.placeholder.com/800x600/E0E0E0/333333?text=Portfolio+V2+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Portfolio+V2+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Portfolio+V2+2",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Portfolio+V2+3",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Portfolio+V2+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Portfolio+V2+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Portfolio+V2+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Portfolio+V2+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Portfolio+V2+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Portfolio+V2+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Portfolio+V2+10"
            ],
            story: "The second iteration of my personal portfolio website, focusing on a cleaner design, faster loading times, and a more intuitive user experience. This version features dynamic content loading and a responsive layout optimized for all devices, showcasing a curated selection of my best works. The development prioritized modern web standards and accessibility, ensuring a smooth experience for all visitors."
        },
        8: {
            title: "Website: 'Portfolio V2'",
            mainImage: "https://via.placeholder.com/800x600/E0E0E0/333333?text=Portfolio+V2+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Portfolio+V2+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Portfolio+V2+2",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Portfolio+V2+3",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Portfolio+V2+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Portfolio+V2+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Portfolio+V2+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Portfolio+V2+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Portfolio+V2+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Portfolio+V2+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Portfolio+V2+10"
            ],
            story: "The second iteration of my personal portfolio website, focusing on a cleaner design, faster loading times, and a more intuitive user experience. This version features dynamic content loading and a responsive layout optimized for all devices, showcasing a curated selection of my best works. The development prioritized modern web standards and accessibility, ensuring a smooth experience for all visitors."
        },
        9: {
            title: "Photo Art: 'Dreamscape'",
            mainImage: "https://via.placeholder.com/800x600/B0B0B0/333333?text=Dreamscape+Main",
            thumbnails: [
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Dreamscape+1",
                "https://via.placeholder.com/800x600/C0C0C0/333333?text=Dreamscape+2",
                "https://via.placeholder.com/800x600/A0A0A0/333333?text=Dreamscape+3",
                "https://via.placeholder.com/800x600/D0D0D0/333333?text=Dreamscape+4",
                "https://via.placeholder.com/800x600/C8C8C8/333333?text=Dreamscape+5",
                "https://via.placeholder.com/800x600/B8B8B8/333333?text=Dreamscape+6",
                "https://via.placeholder.com/800x600/D8D8D8/333333?text=Dreamscape+7",
                "https://via.placeholder.com/800x600/A8A8A8/333333?text=Dreamscape+8",
                "https://via.placeholder.com/800x600/E0E0E0/333333?text=Dreamscape+9",
                "https://via.placeholder.com/800x600/B0B0B0/333333?text=Dreamscape+10"
            ],
            story: "A series of conceptual photo manipulations that blend reality with fantasy, creating surreal dreamlike landscapes. Each piece explores themes of escapism, imagination, and the subconscious. Techniques involved advanced photo compositing and color grading in Adobe Photoshop. The goal was to transport the viewer to an alternate reality, prompting contemplation on the boundaries between the real and the imagined."
        }
    };

    document.querySelectorAll('.masterpiece-item').forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            const project = projectsData[projectId];

            if (project) {
                // Set main image and initial story
                modalMainImage.src = project.mainImage || project.thumbnails[0]; // Use mainImage or first thumbnail as default
                modalMainImage.alt = project.title;
                modalProjectTitle.textContent = project.title;
                modalProjectStory.innerHTML = project.story; // Use innerHTML to allow <br> tags
                
                // Clear previous active states from thumbnails
                document.querySelectorAll('.gallery-thumb-item').forEach(thumb => {
                    thumb.classList.remove('active');
                });

                // Clear previous thumbnails
                modalGalleryVertical.innerHTML = '';
                // Load new thumbnails
                project.thumbnails.forEach((thumbUrl, index) => {
                    const galleryThumbItemDiv = document.createElement('div');
                    galleryThumbItemDiv.classList.add('gallery-thumb-item');
                    
                    // Mark the initially displayed main image's thumbnail as active
                    if (modalMainImage.src === thumbUrl) {
                        galleryThumbItemDiv.classList.add('active');
                    }

                    const img = document.createElement('img');
                    img.src = thumbUrl;
                    img.alt = `${project.title} - Thumbnail ${index + 1}`;
                    img.dataset.fullSrc = thumbUrl; // Store full size URL
                    
                    // Add click listener to thumbnails to change main image
                    galleryThumbItemDiv.addEventListener('click', function() {
                        // Remove 'active' from previous active thumbnail
                        document.querySelectorAll('.gallery-thumb-item.active').forEach(activeItem => {
                            activeItem.classList.remove('active');
                        });
                        // Add 'active' to clicked thumbnail
                        galleryThumbItemDiv.classList.add('active');
                        
                        modalMainImage.src = img.dataset.fullSrc; // Change main image
                        modalMainImage.classList.remove('fadeIn'); // Reset animation
                        void modalMainImage.offsetWidth; // Trigger reflow
                        modalMainImage.classList.add('fadeIn'); // Re-add animation
                    });

                    galleryThumbItemDiv.appendChild(img);
                    modalGalleryVertical.appendChild(galleryThumbItemDiv);
                });

                masterpieceModal.style.display = 'flex'; // Show modal
                document.body.style.overflow = 'hidden'; // Prevent scrolling body when modal is open
                
                // Scroll modal content to top on open
                document.querySelector('.modal-content-wrapper').scrollTop = 0;
            }
        });
    });

    closeModalButton.addEventListener('click', function() {
        masterpieceModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable body scrolling
    });

    // Close modal if clicked outside modal content
    masterpieceModal.addEventListener('click', function(event) {
        if (event.target === masterpieceModal) {
            masterpieceModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // --- CURSOR EFFECT (BUNGA & SERBUK BUNGA & LEBAH) ---
    const flowerCursor = document.getElementById('flower-cursor'); // Elemen bunga (kursor utama)
    const beeCursor = document.getElementById('bee-cursor');     // Elemen lebah
    let idleTimeout;
    let targetCursorX = 0;
    let targetCursorY = 0;
    let currentCursorX = 0;
    let currentCursorY = 0;
    let lastTrailDotTime = 0;
    const trailDotInterval = 80; // Interval waktu (ms) untuk membuat titik jejak baru (lebih lambat)
    const maxTrailDots = 30; // Jumlah maksimum titik jejak (lebih sedikit)

    // Update mouse position and reset idle timer
    document.addEventListener('mousemove', (e) => {
        targetCursorX = e.clientX;
        targetCursorY = e.clientY;
        
        // Sembunyikan lebah dan hentikan animasinya saat mouse bergerak
        beeCursor.style.opacity = 0; 
        beeCursor.style.animation = 'none';

        clearTimeout(idleTimeout);
        idleTimeout = setTimeout(() => {
            // Setelah 2 detik tidak bergerak, tampilkan lebah dan mulai animasi
            beeCursor.style.opacity = 1; 
            beeCursor.style.animation = 'beeVibrate 0.3s infinite ease-in-out';
            burstPollen(targetCursorX, targetCursorY + 5); // Semburkan serbuk bunga dari bawah lebah
        }, 2000); // <-- DELAY IDLE 2 DETIK

        // Create trail dots (smaller pollen dust)
        const now = Date.now();
        if (now - lastTrailDotTime > trailDotInterval) {
            lastTrailDotTime = now;
            const trailDot = document.createElement('div');
            trailDot.classList.add('cursor-trail-dot');
            // Posisi titik jejak sedikit di belakang kursor atau agak acak
            trailDot.style.left = `${e.clientX + (Math.random() - 0.5) * 5}px`;
            trailDot.style.top = `${e.clientY + (Math.random() - 0.5) * 5}px`;
            document.body.appendChild(trailDot);

            // Remove old trail dots
            const currentTrailDots = document.querySelectorAll('.cursor-trail-dot');
            if (currentTrailDots.length > maxTrailDots) {
                currentTrailDots[0].remove(); // Remove the oldest one
            }
        }
    });

    // Animation loop for flower cursor lag and bee follow
    function animateCursorLag() {
        // Smoothly interpolate current flower cursor position towards mouse position
        currentCursorX += (targetCursorX - currentCursorX) * 0.1; // Lebih lambat (0.1 damping factor)
        currentCursorY += (targetCursorY - currentCursorY) * 0.1;

        flowerCursor.style.left = `${currentCursorX}px`;
        flowerCursor.style.top = `${currentCursorY}px`;
        
        // Lebah mengikuti posisi bunga kursor
        // Posisi lebah relatif terhadap bunga, tapi lebah itu sendiri fixed
        // Jadi, posisinya harus dihitung berdasarkan posisi bunga
        beeCursor.style.left = `${currentCursorX}px`;
        beeCursor.style.top = `${currentCursorY - 15}px`; // Lebah sedikit di atas bunga (15px)

        requestAnimationFrame(animateCursorLag);
    }
    animateCursorLag(); // Start the lag animation loop

    // Function to burst pollen when idle
    function burstPollen(x, y) {
        const numPollen = 10; // Jumlah serbuk bunga yang menyebar
        for (let i = 0; i < numPollen; i++) {
            const pollen = document.createElement('div');
            pollen.classList.add('star-dot'); // Menggunakan kelas star-dot untuk pollen burst
            pollen.style.left = `${x}px`;
            pollen.style.top = `${y}px`;
            
            // Arah dan jarak penyebaran acak
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 30 + 10; // Jarak 10-40px
            pollen.style.setProperty('--dx', `${distance * Math.cos(angle)}px`);
            pollen.style.setProperty('--dy', `${distance * Math.sin(angle)}px`);
            
            document.body.appendChild(pollen);

            pollen.addEventListener('animationend', () => {
                pollen.remove();
            });
        }
    }


    // NEW: Cursor Click Animation Logic
    document.addEventListener('mousedown', (e) => {
        const clickEffect = document.createElement('div');
        clickEffect.classList.add('cursor-click-effect');
        clickEffect.style.left = `${e.clientX}px`;
        clickEffect.style.top = `${e.clientY}px`;
        document.body.appendChild(clickEffect);

        // Remove the element after its animation is done
        clickEffect.addEventListener('animationend', () => {
            clickEffect.remove();
        });
    });
});