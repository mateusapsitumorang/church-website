// content.js
// Semua teks di sini bisa Anda edit tanpa menyentuh kode komponen.
// Kalau nanti pakai Prisma/database, file ini bisa diganti dengan fetch dari DB.

export const homeContent = {
  headline: "Membangun Rumah Tuhan, Mewariskan Iman",
  subheadline:
    "Setiap batu yang tersusun adalah doa. Setiap uluran tangan adalah warisan iman yang akan terus berdiri, jauh melampaui masa kita.",
  description:
    "Sejak Juni 2016, umat Stasi Santo Petrus Bratasena telah bergotong-royong membangun rumah Tuhan dengan segenap kemampuan yang ada. Kini pembangunan telah mencapai 85% — namun perjalanan menuju kesempurnaan masih membutuhkan uluran kasih kita bersama. Tahap akhir ini meliputi penyelesaian plafon, pengecatan dinding, pengadaan kursi umat, dan instalasi listrik, agar gereja ini benar-benar siap menjadi tempat umat berhimpun dalam doa, memuji, dan memuliakan Tuhan.",
  verse: {
    text: "Dengan segenap kemampuan aku telah mengadakan persediaan untuk rumah Allah-ku.",
    source: "1 Tawarikh 29:2",
  },
  cta: "Mari Berdonasi Sekarang",
  progress: {
    target: 234691736,
    collected: 66500000,
  },
};

export const donationContent = {
  title: "Setiap Rupiah, Sebuah Persembahan yang Berarti",
  paragraphs: [
    "Kami percaya bahwa transparansi adalah bentuk penghormatan kepada setiap donatur yang telah mempercayakan persembahannya. Setiap dana yang terkumpul akan dicatat, dilaporkan, dan digunakan sepenuhnya untuk kelanjutan pembangunan fisik gereja — mulai dari pekerjaan plafon, pengecatan dinding, pengadaan kursi umat, hingga instalasi listrik — sesuai Rencana Anggaran Biaya yang telah disusun oleh Panitia Pembangunan bersama Pengurus Stasi.",
    "Bapak/Ibu tidak sekadar memberi sumbangan — Bapak/Ibu sedang menanam bagian dari sejarah iman yang akan dikenang oleh generasi yang akan datang. Sebagaimana umat Israel dahulu memberi dengan tulus hati untuk rumah Tuhan, demikian pula uluran kasih Bapak/Ibu hari ini menjadi bagian dari karya besar yang tak ternilai harganya.",
  ],
  verse: {
    text: "Bangsa itu bersukacita karena kerelaan mereka masing-masing, sebab dengan tulus hati mereka memberikan persembahan sukarela kepada Tuhan.",
    source: "1 Tawarikh 29:9",
  },
  rab: [
    { label: "Plafon", amount: 97715136 },
    { label: "Cat Dinding (Luar & Dalam)", amount: 83990600 },
    { label: "Kursi Umat", amount: 40000000 },
    { label: "Instalasi Listrik", amount: 12986000 },
  ],
  bank: {
    name: "Bank Rakyat Indonesia (BRI) Unit Bratasena Tulang Bawang",
    account: "7857-01-030844-53-1",
    holder: "GEREJA KATOLIK STASI SANTO PETRUS",
  },
  contacts: [
    { role: "Ketua Stasi", name: "Anastasia Sartini", phone: "082186539077" },
    { role: "Ketua Pembangunan", name: "Thamrin Situmorang", phone: "081370522209" },
    { role: "Bendahara Pembangunan", name: "Yosep Beni Kurniawan", phone: "081272530072" },
  ],
};

export const pastorLetterContent = {
  title: "Sepucuk Surat dari Romo Kepala Unit Pastoral",
  location: "Bratasena Adiwarna",
  paragraphs: [
    "Umat yang terkasih dalam Kristus,",
    "Sejak tahun 2016, saya menyaksikan sendiri bagaimana umat Stasi Santo Petrus Bratasena membangun rumah Tuhan ini dengan tangan yang sederhana namun hati yang penuh iman. Delapan puluh lima persen bangunan telah berdiri — sebuah bukti nyata bahwa ketika umat bersatu hati, tidak ada yang mustahil bagi Tuhan.",
    "Namun perjalanan ini belum selesai. Masih ada plafon yang menanti dipasang, dinding yang menanti warna, kursi yang menanti diduduki umat yang beribadah, dan lampu yang menanti dinyalakan sebagai tanda terang Kristus di tengah gereja ini.",
    "Saya mengajak Bapak, Ibu, dan Saudara/i sekalian — baik umat di lingkungan stasi maupun Bapak/Ibu donatur yang budiman di mana pun berada — untuk bergotong-royong menyelesaikan karya ini. Bukan karena kita berkelimpahan, tetapi karena kita percaya bahwa Tuhan yang memulai karya baik ini akan menyelesaikannya melalui kemurahan hati kita bersama.",
    "Marilah kita jadikan rumah ini bukan hanya bangunan dari plafon, cat, dan kursi — melainkan rumah doa yang hidup, tempat iman diwariskan dari generasi ke generasi.",
    "Tuhan memberkati setiap niat baik dan uluran tangan Bapak/Ibu sekalian.",
  ],
  closing: "Dalam kasih Kristus,",
  signature: "RD. Cornelius Suja'i",
  signatureRole: "Pastor Kepala Unit Pastoral St. Yohanes Don Bosco Rumbia",
};

export const milestoneContent = {
  period: "Juli 2026",
  title: "Menuju Rumah Tuhan yang Paripurna",
  summary:
    "Puji syukur kepada Tuhan, pada bulan ini pekerjaan pemasangan plafon PVC telah menyelesaikan sebagian area utama gedung gereja, menandai satu langkah penting menuju tahap penyelesaian 100%. Selain itu, tim pengawas pembangunan juga telah memulai persiapan untuk pekerjaan pengecatan dinding luar dan dalam, yang akan memberikan wajah baru bagi rumah ibadah kita.",
  items: [
    { status: "done", label: "Pemasangan plafon PVC — sebagian area terselesaikan" },
    { status: "in_progress", label: "Persiapan pengecatan dinding luar & dalam" },
    { status: "pending", label: "Pengadaan kursi umat (32 buah)" },
    { status: "pending", label: "Instalasi listrik (lampu, kabel, panel)" },
  ],
  closingQuote:
    "Karya Tuhan tidak pernah berhenti selama umat-Nya terus setia melangkah bersama.",
};