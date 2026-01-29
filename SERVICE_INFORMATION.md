# Klinik Vista - Service Information Guide

## Overview
When customers click on "Lihat Maklumat" (View Information) on any service infographic, they will now see detailed information about that service in an enhanced modal window. Here's what each service shows:

---

## 1. Rawatan Cuci Mata (Eye Irrigation)

**Description:**
Rawatan pencucian mata adalah prosedur membersihkan mata dengan larutan steril untuk menghilangkan kotoran, bahan kimia, atau partikel asing. Prosedur ini dilakukan dengan hati-hati oleh tenaga medis profesional menggunakan peralatan khusus.

**Benefits:**
- Menghilangkan benda asing dari mata
- Membersihkan mata dari debu atau polusi
- Mengurangi iritasi dan rasa tidak nyaman
- Mencegah infeksi
- Aman dan tidak menyakitkan

---

## 2. Rawatan Inhaler (Inhaler Treatment)

**Description:**
Rawatan inhaler adalah pemberian ubat melalui inhalasi untuk mengatasi masalah pernapasan seperti asma dan penyakit paru-paru obstruktif kronis (PPOK). Ubat langsung masuk ke saluran pernapasan untuk hasil yang lebih cepat dan efektif.

**Benefits:**
- Memberikan keringanan cepat dari sesak nafas
- Ubat langsung ke saluran pernapasan
- Mengurangi peradangan di paru-paru
- Meningkatkan kapasitas pernapasan
- Cocok untuk penanganan akut dan pencegahan

---

## 3. Rawatan Cuci Luka (Wound Cleaning)

**Description:**
Rawatan pembersihan luka adalah prosedur medis untuk membersihkan luka dari kotoran, bakteri, dan jaringan mati. Ini adalah langkah penting dalam proses penyembuhan luka dan pencegahan infeksi.

**Benefits:**
- Menghilangkan kotoran dan bakteri
- Mengeluarkan jaringan yang sudah mati
- Mempercepat proses penyembuhan
- Mengurangi risiko infeksi serius
- Mempersiapkan luka untuk perawatan lanjutan

---

## 4. Ujian Elektrokardiogram - EKG (ECG Test)

**Description:**
EKG adalah pemeriksaan jantung yang mencatat aktivitas kelistrikan jantung. Pemeriksaan ini membantu dokter mendeteksi masalah jantung, ritme jantung yang tidak normal, dan penyakit jantung lainnya dengan cepat dan akurat.

**Benefits:**
- Mendeteksi gangguan ritme jantung
- Mengidentifikasi kerusakan jantung
- Prosedur cepat dan tidak invasif
- Hasil langsung dan akurat
- Penting untuk deteksi dini penyakit jantung

---

## 5. Ultrasound Bakin & Ovari (Ovarian Ultrasound)

**Description:**
Ultrasound adalah pemeriksaan dengan gelombang suara untuk melihat kondisi ovarium dan struktur reproduksi wanita. Pemeriksaan ini aman, tanpa radiasi, dan memberikan gambaran detail tentang kesehatan reproduksi.

**Benefits:**
- Mendeteksi kelainan ovarium dan kista
- Memantau siklus haid dan ovulasi
- Evaluasi kesuburan
- Aman dan tanpa radiasi
- Membantu dalam perencanaan kehamilan

---

## 6. Suntikan Lutut PRP (PRP Knee Injection)

**Description:**
Suntikan PRP (Platelet-Rich Plasma) adalah rawatan regeneratif yang menggunakan plasma kaya platelet dari darah pasien sendiri untuk memperbaiki dan memperkuat sendi lutut. Terapi ini membantu mengurangi nyeri dan meningkatkan fungsi lutut.

**Benefits:**
- Mengurangi nyeri lutut secara signifikan
- Meningkatkan mobilitas dan fleksibilitas
- Merangsang penyembuhan alami
- Menggunakan bahan biologis alami
- Alternatif lebih baik daripada operasi

---

## 7. Ultrasound Gynae (Gynecological Ultrasound)

**Description:**
Ultrasound ginekologi adalah pemeriksaan menyeluruh untuk mengevaluasi kesehatan sistem reproduksi wanita termasuk rahim, serviks, dan ovarium. Pemeriksaan ini penting untuk diagnosis berbagai kondisi ginekologis.

**Benefits:**
- Deteksi masalah ginekologi dini
- Evaluasi komprehensif organ reproduksi
- Membantu diagnosis endometriosis
- Aman untuk semua usia
- Panduan untuk perawatan yang tepat

---

## 8. Pap Smear

**Description:**
Pap Smear adalah tes skrining untuk mendeteksi sel abnormal dan kanker serviks pada wanita. Tes ini adalah salah satu alat pencegahan kanker yang paling efektif dan direkomendasikan untuk semua wanita aktif secara seksual.

**Benefits:**
- Deteksi dini kanker serviks
- Identifikasi sel abnormal sebelum menjadi kanker
- Pencegahan melalui skrining rutin
- Prosedur cepat dan sederhana
- Perawatan kesehatan preventif yang penting

---

## Modal Display Features

### How It Works:
1. Customer hovers over or clicks on a service infographic card
2. Clicks the "Lihat Maklumat" (View Information) button
3. Modal opens with:
   - Service infographic image (left side)
   - Service name/title
   - Detailed description
   - List of benefits with checkmarks
4. Customer can close modal by:
   - Clicking the X button
   - Pressing Escape key
   - Clicking outside the modal

### Responsive Design:
- Desktop: Side-by-side layout (image on left, info on right)
- Tablet: Side-by-side with adjusted spacing
- Mobile: Stacked layout (image on top, info below)

---

## Technical Implementation

All service information is stored in JavaScript object in `script.js`:
```javascript
const serviceData = {
    'filename.jpg': {
        title: '...',
        description: '...',
        benefits: [...]
    }
}
```

The modal automatically populates based on which service image was clicked.

---

**Last Updated:** January 25, 2026
**Language:** Malay (Bahasa Malaysia)
