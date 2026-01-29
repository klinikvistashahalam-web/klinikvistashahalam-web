// Scroll to Section Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Clinic Status Logic
function updateClinicStatus() {
    const text = document.getElementById('status-text');
    const dot = document.getElementById('status-dot');
    const statusButton = document.getElementById('statusButton');
    const statusLabel = document.getElementById('statusLabel');
    const statusIndicator = document.getElementById('statusIndicator');
    
    const hour = new Date().getHours();
    const day = new Date().getDay();
    
    // Check if open: Daily 8AM-12 Midnight
    let isOpen = hour >= 8 && hour < 24;
    
    if (isOpen) {
        // Clinic is OPEN
        if (text) {
            text.innerText = "KLINIK DIBUKA";
            text.style.color = "#155724";
        }
        if (dot) {
            dot.classList.add("pulse-green");
            dot.style.background = "#25d366";
        }
        if (statusButton) {
            statusButton.classList.remove("closed");
            statusLabel.innerText = "🟢 KLINIK DIBUKA";
            statusIndicator.style.background = "var(--white)";
        }
        
        // Update floating button
        const floatingBtn = document.getElementById('floatingStatusButton');
        if (floatingBtn) {
            floatingBtn.classList.remove('closed');
            document.getElementById('floatingStatusText').innerText = "🟢 KLINIK DIBUKA";
        }
    } else {
        // Clinic is CLOSED
        if (text) {
            text.innerText = "KLINIK TUTUP";
            text.style.color = "#721c24";
        }
        if (dot) {
            dot.classList.remove("pulse-green");
            dot.style.background = "#e74c3c";
        }
        if (statusButton) {
            statusButton.classList.add("closed");
            statusLabel.innerText = "🔴 KLINIK TUTUP";
            statusIndicator.style.background = "var(--white)";
        }
        
        // Update floating button
        const floatingBtn = document.getElementById('floatingStatusButton');
        if (floatingBtn) {
            floatingBtn.classList.add('closed');
            document.getElementById('floatingStatusText').innerText = "🔴 KLINIK TUTUP";
        }
    }
}
updateClinicStatus();
setInterval(updateClinicStatus, 60000);

// Show Floating Status Button on Scroll
window.addEventListener('scroll', function() {
    const floatingStatusButton = document.getElementById('floatingStatusButton');
    const hero = document.querySelector('.hero');
    
    if (hero && floatingStatusButton) {
        const heroRect = hero.getBoundingClientRect();
        // Show button when hero section is no longer visible (scrolled past it)
        if (heroRect.bottom < 0) {
            floatingStatusButton.classList.add('visible');
        } else {
            floatingStatusButton.classList.remove('visible');
        }
    }
});

// Mobile Menu
const mobileMenu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// WhatsApp Form Handler
function handleAppointmentSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const notes = document.getElementById('message').value.trim();
    
    if (!name || !phone || !doctor || !date || !time) {
        alert('Sila isi semua maklumat yang diperlukan.');
        return;
    }
    
    // Show confirmation message before WhatsApp opens
    const confirmationDiv = document.getElementById('confirmationMessage');
    confirmationDiv.innerHTML = '<p style="color: #25d366; font-weight: bold; margin-bottom: 10px;">⏳ Sila tunggu... WhatsApp sedang terbuka.</p>';
    
    // Format message for WhatsApp with complete greeting
    const message = `Assalamualaikum. Saya ingin membuat temu janji dengan Klinik Vista.\n\n` +
        `📋 *BUTIRAN TEMU JANJI*\n` +
        `Nama Pasien: ${name}\n` +
        `Nombor Telefon: ${phone}\n` +
        `Pilihan Doktor: ${doctor}\n` +
        `Tarikh Pilihan: ${new Date(date).toLocaleDateString('ms-MY')}\n` +
        `Masa Pilihan: ${time}\n\n` +
        `${notes ? `💬 *Nota Tambahan*\n${notes}\n\n` : ''}` +
        `Terima kasih. Saya tunggu pengesahan daripada Klinik Vista.\n` +
        `Wassalam.`;
    
    // WhatsApp clinic number
    const clinicPhone = '60175456218';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${clinicPhone}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    document.querySelector('.appointment-form').reset();
    
    // Show combined confirmation message after form submission
    setTimeout(() => {
        confirmationDiv.innerHTML = `
            <div style="background: #e8f5e9; border-left: 4px solid #25d366; padding: 15px; border-radius: 4px;">
                <p style="color: #155724; margin: 5px 0; font-weight: bold;">✓ Temu janji anda telah dihantar!</p>
                <p style="color: #155724; margin: 5px 0; font-size: 14px;">Pesan anda telah disediakan dan telah dibuka di WhatsApp.</p>
                <p style="color: #155724; margin: 5px 0; font-size: 14px;">Sila tunggu balasan dari klinik kami dalam masa 24 jam.</p>
            </div>
        `;
        
        // Auto-hide message after 6 seconds
        setTimeout(() => {
            confirmationDiv.innerHTML = '';
        }, 6000);
    }, 800);
}

// Gallery Modal
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    if (modal && modalImg) {
        modalImg.src = src;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Gallery Modal Functions
function openGallery(src) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryImage');
    modal.style.display = 'block';
    modalImg.src = src;
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Service Modal Functions
// Service Information Database
const serviceData = {
    'service-male-fertility.png': {
        title: 'Rawatan Kesuburan Lelaki',
        description: 'Rawatan kesuburan lelaki adalah perkhidmatan konsultasi khusus dan terapi untuk meningkatkan kualiti sperma dan mengatasi masalah kesuburan. Kami menawarkan diagnosis komprehensif, rawatan semulajadi dan moden untuk membantu pasangan mencapai impian memiliki zuriat.',
        benefits: [
            'Meningkatkan kualiti dan kuantiti sperma',
            'Diagnosis komprehensif masalah kesuburan',
            'Terapi semulajadi dan moden',
            'Konsultasi pakar andrologi berpengalaman',
            'Rawatan peribadi mengikut keperluan individu'
        ]
    },
    'service-eye-irrigation.jpg': {
        title: 'Rawatan Cuci Mata',
        description: 'Rawatan pencucian mata adalah prosedur membersihkan mata dengan larutan steril untuk menghilangkan kotoran, bahan kimia, atau partikel asing. Prosedur ini dilakukan dengan hati-hati oleh tenaga medis profesional menggunakan peralatan khusus.',
        benefits: [
            'Menghilangkan benda asing dari mata',
            'Membersihkan mata dari debu atau polusi',
            'Mengurangi iritasi dan rasa tidak nyaman',
            'Mencegah infeksi',
            'Aman dan tidak menyakitkan'
        ]
    },
    'service-inhaler.jpg': {
        title: 'Rawatan Inhaler',
        description: 'Rawatan inhaler adalah pemberian ubat melalui inhalasi untuk mengatasi masalah pernapasan seperti asma dan penyakit paru-paru obstruktif kronis (PPOK). Ubat langsung masuk ke saluran pernapasan untuk hasil yang lebih cepat dan efektif.',
        benefits: [
            'Memberikan keringanan cepat dari sesak nafas',
            'Ubat langsung ke saluran pernapasan',
            'Mengurangi peradangan di paru-paru',
            'Meningkatkan kapasitas pernapasan',
            'Cocok untuk penanganan akut dan pencegahan'
        ]
    },
    'service-cuci-luka.jpg': {
        title: 'Rawatan Cuci Luka',
        description: 'Rawatan pembersihan luka adalah prosedur medis untuk membersihkan luka dari kotoran, bakteri, dan jaringan mati. Ini adalah langkah penting dalam proses penyembuhan luka dan pencegahan infeksi.',
        benefits: [
            'Menghilangkan kotoran dan bakteri',
            'Mengeluarkan jaringan yang sudah mati',
            'Mempercepat proses penyembuhan',
            'Mengurangi risiko infeksi serius',
            'Mempersiapkan luka untuk perawatan lanjutan'
        ]
    },
    'service-ekg.jpg': {
        title: 'Ujian Elektrokardiogram (EKG)',
        description: 'EKG adalah pemeriksaan jantung yang mencatat aktivitas kelistrikan jantung. Pemeriksaan ini membantu dokter mendeteksi masalah jantung, ritme jantung yang tidak normal, dan penyakit jantung lainnya dengan cepat dan akurat.',
        benefits: [
            'Mendeteksi gangguan ritme jantung',
            'Mengidentifikasi kerusakan jantung',
            'Prosedur cepat dan tidak invasif',
            'Hasil langsung dan akurat',
            'Penting untuk deteksi dini penyakit jantung'
        ]
    },
    'service-ultrasound-bakin.jpg': {
        title: 'Ultrasound Bakin & Ovari',
        description: 'Ultrasound adalah pemeriksaan dengan gelombang suara untuk melihat kondisi ovarium dan struktur reproduksi wanita. Pemeriksaan ini aman, tanpa radiasi, dan memberikan gambaran detail tentang kesehatan reproduksi.',
        benefits: [
            'Mendeteksi kelainan ovarium dan kista',
            'Memantau siklus haid dan ovulasi',
            'Evaluasi kesuburan',
            'Aman dan tanpa radiasi',
            'Membantu dalam perencanaan kehamilan'
        ]
    },
    'service-knee-injection.jpg': {
        title: 'Suntikan Lutut PRP',
        description: 'Suntikan PRP (Platelet-Rich Plasma) adalah rawatan regeneratif yang menggunakan plasma kaya platelet dari darah pasien sendiri untuk memperbaiki dan memperkuat sendi lutut. Terapi ini membantu mengurangi nyeri dan meningkatkan fungsi lutut.',
        benefits: [
            'Mengurangi nyeri lutut secara signifikan',
            'Meningkatkan mobilitas dan fleksibilitas',
            'Merangsang penyembuhan alami',
            'Menggunakan bahan biologis alami',
            'Alternatif lebih baik daripada operasi'
        ]
    },
    'service-ultrasound-gynae.jpg': {
        title: 'Ultrasound Gynae',
        description: 'Ultrasound ginekologi adalah pemeriksaan menyeluruh untuk mengevaluasi kesehatan sistem reproduksi wanita termasuk rahim, serviks, dan ovarium. Pemeriksaan ini penting untuk diagnosis berbagai kondisi ginekologis.',
        benefits: [
            'Deteksi masalah ginekologi dini',
            'Evaluasi komprehensif organ reproduksi',
            'Membantu diagnosis endometriosis',
            'Aman untuk semua usia',
            'Panduan untuk perawatan yang tepat'
        ]
    },
    'service-pap-smear.jpg': {
        title: 'Pap Smear',
        description: 'Pap Smear adalah tes skrining untuk mendeteksi sel abnormal dan kanker serviks pada wanita. Tes ini adalah salah satu alat pencegahan kanker yang paling efektif dan direkomendasikan untuk semua wanita aktif secara seksual.',
        benefits: [
            'Deteksi dini kanker serviks',
            'Identifikasi sel abnormal sebelum menjadi kanker',
            'Pencegahan melalui skrining rutin',
            'Prosedur cepat dan sederhana',
            'Perawatan kesehatan preventif yang penting'
        ]
    }
};

function openServiceModal(element) {
    const modal = document.getElementById('serviceModal');
    const modalImg = document.getElementById('serviceModalImage');
    const modalTitle = document.getElementById('serviceModalTitle');
    const modalDesc = document.getElementById('serviceModalDescription');
    const modalBenefits = document.getElementById('serviceModalBenefits');
    
    const imgSrc = element.querySelector('img').src;
    const filename = imgSrc.split('/').pop();
    const serviceInfo = serviceData[filename];
    
    if (modal && modalImg && serviceInfo) {
        modalImg.src = imgSrc;
        modalTitle.textContent = serviceInfo.title;
        modalDesc.textContent = serviceInfo.description;
        
        // Clear and populate benefits list
        modalBenefits.innerHTML = '';
        serviceInfo.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            modalBenefits.appendChild(li);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close service modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeServiceModal();
        const galleryModal = document.getElementById('galleryModal');
        if (galleryModal) {
            galleryModal.style.display = 'none';
        }
    }
});
