// Database Soal CodePlay (30 Soal)
const SOAL = [
  {
    cerita:
      "Seorang siswa membuat program untuk mengecek apakah nilai ujian lebih dari 75. Jika iya maka siswa dinyatakan lulus, jika tidak maka tidak lulus.",
    misi: "Temukan konsep percabangan yang digunakan dalam kasus ini!",
    jawaban: ["IF", "ELSE", "TRUE", "FALSE"],
  },
  {
    cerita:
      "Sebuah aplikasi kasir menghitung total belanja pelanggan. Jika total belanja lebih dari 100000 maka mendapatkan diskon. Jika tidak maka tidak ada diskon.",
    misi: "Temukan konsep yang digunakan (Operator & Variabel)!",
    jawaban: ["IF", "ELSE", "VARIABLE"],
  },
  {
    cerita:
      "Program dibuat untuk menampilkan angka dari 1 sampai 10 secara berulang.",
    misi: "Konsep apa saja yang digunakan dalam kasus perulangan ini?",
    jawaban: ["LOOP", "FOR", "INTEGER"],
  },
  {
    cerita:
      "Seorang programmer membuat sistem login yang mengecek username dan password. Jika sesuai maka berhasil login, jika tidak maka gagal.",
    misi: "Temukan kata kunci logika yang digunakan!",
    jawaban: ["IF", "ELSE", "AND", "TRUE", "FALSE"],
  },
  {
    cerita:
      "Program menghitung luas persegi panjang dengan input panjang dan lebar dari pengguna. Nilai tersebut disimpan lalu ditampilkan.",
    misi: "Konsep dasar apa saja yang digunakan?",
    jawaban: ["INPUT", "VARIABLE", "OUTPUT"],
  },
  {
    cerita:
      "Program digunakan untuk menentukan apakah suatu angka genap atau ganjil dengan menggunakan operasi modulus.",
    misi: "Temukan konsep percabangan dan perhitungannya!",
    jawaban: ["IF", "ELSE", "OPERATOR"],
  },
  {
    cerita:
      "Sebuah aplikasi menghitung rata-rata nilai siswa dari beberapa data yang disimpan dalam sebuah struktur.",
    misi: "Tentukan tipe data dan struktur yang digunakan!",
    jawaban: ["ARRAY", "VARIABLE", "FLOAT"],
  },
  {
    cerita: "Program dibuat untuk mencetak teks 'Hello World' ke layar.",
    misi: "Konsep dasar apa yang digunakan untuk menampilkan teks?",
    jawaban: ["OUTPUT", "PRINT", "STRING"],
  },
  {
    cerita: "Sistem menghitung jumlah data yang ada dalam sebuah daftar nilai.",
    misi: "Tentukan struktur data dan properti yang digunakan!",
    jawaban: ["ARRAY", "LENGTH"],
  },
  {
    cerita:
      "Program melakukan perulangan selama kondisi tertentu masih terpenuhi.",
    misi: "Konsep perulangan logika apa yang digunakan?",
    jawaban: ["WHILE", "LOOP", "BOOLEAN"],
  },
  {
    cerita:
      "Program memiliki banyak kondisi berbeda untuk menentukan nilai huruf (A, B, C, D).",
    misi: "Temukan struktur percabangan lengkap yang digunakan!",
    jawaban: ["IF", "ELSEIF", "ELSE"],
  },
  {
    cerita:
      "Sebuah fungsi dibuat untuk menghitung luas lingkaran dengan parameter jari-jari.",
    misi: "Tentukan elemen-elemen fungsi yang digunakan!",
    jawaban: ["FUNCTION", "PARAMETER", "RETURN"],
  },
  {
    cerita:
      "Program menyimpan nama siswa dalam bentuk teks dan menampilkannya kembali ke layar.",
    misi: "Tipe data dan alur apa yang digunakan?",
    jawaban: ["STRING", "VARIABLE", "OUTPUT"],
  },
  {
    cerita:
      "Sistem menentukan apakah user berhak mengakses fitur tertentu berdasarkan status login.",
    misi: "Temukan konsep logika dan tipe data yang tepat!",
    jawaban: ["IF", "AND", "BOOLEAN"],
  },
  {
    cerita:
      "Program menggunakan nilai konstan untuk menentukan pajak tetap dalam suatu perhitungan.",
    misi: "Konsep penyimpanan data apa yang digunakan?",
    jawaban: ["CONST", "VARIABLE"],
  },
  {
    cerita:
      "Program meminta input umur dari user dan menentukan apakah termasuk dewasa atau tidak.",
    misi: "Alur program apa yang digunakan?",
    jawaban: ["INPUT", "IF", "ELSE"],
  },
  {
    cerita:
      "Program menghentikan perulangan ketika kondisi tertentu terpenuhi.",
    misi: "Kata kunci apa yang digunakan dalam perulangan ini?",
    jawaban: ["BREAK", "LOOP"],
  },
  {
    cerita: "Program menambahkan data baru ke dalam daftar nilai siswa.",
    misi: "Manipulasi data apa yang dilakukan pada array?",
    jawaban: ["ARRAY", "PUSH"],
  },
  {
    cerita: "Program menghapus data terakhir dari sebuah array.",
    misi: "Perintah array apa yang digunakan?",
    jawaban: ["ARRAY", "POP"],
  },
  {
    cerita:
      "Program menggunakan operator logika untuk menentukan dua kondisi sekaligus.",
    misi: "Sebutkan operator logika yang ada!",
    jawaban: ["AND", "OR", "NOT"],
  },
  {
    cerita:
      "Program membaca input dari pengguna melalui keyboard dan memprosesnya.",
    misi: "Alur dasar apa yang sedang berjalan?",
    jawaban: ["INPUT", "PROCESS"],
  },
  {
    cerita:
      "Program menampilkan hasil perhitungan ke layar setelah dilakukan proses.",
    misi: "Langkah akhir apa yang dilakukan program?",
    jawaban: ["OUTPUT", "PRINT"],
  },
  {
    cerita:
      "Program menggunakan indeks untuk mengambil data tertentu dari sebuah array.",
    misi: "Konsep pengaksesan data apa yang digunakan?",
    jawaban: ["ARRAY", "INDEX"],
  },
  {
    cerita:
      "Program menggunakan perbandingan nilai untuk menentukan keputusan.",
    misi: "Sebutkan simbol-simbol operator perbandingan!",
    jawaban: ["==", ">", "<"],
  },
  {
    cerita:
      "Program memanggil sebuah fungsi untuk menjalankan tugas tertentu secara berulang.",
    misi: "Aksi apa yang dilakukan terhadap fungsi tersebut?",
    jawaban: ["FUNCTION", "CALL"],
  },
  {
    cerita:
      "Program mengelompokkan data dalam satu struktur agar mudah diakses.",
    misi: "Sebutkan tipe struktur data yang digunakan!",
    jawaban: ["ARRAY", "OBJECT"],
  },
  {
    cerita:
      "Program menggunakan event klik untuk menjalankan aksi tertentu pada tombol.",
    misi: "Konsep interaksi apa yang digunakan?",
    jawaban: ["EVENT", "CLICK"],
  },
  {
    cerita:
      "Program mengubah tampilan halaman dengan memanipulasi elemen HTML menggunakan JavaScript.",
    misi: "Teknik manipulasi apa yang digunakan?",
    jawaban: ["DOM", "SELECTOR"],
  },
  {
    cerita: "Program melakukan debugging untuk menemukan kesalahan dalam kode.",
    misi: "Apa yang sedang dicari oleh programmer?",
    jawaban: ["DEBUG", "ERROR"],
  },
  {
    cerita:
      "Program dirancang menggunakan langkah-langkah sistematis untuk menyelesaikan masalah.",
    misi: "Sebutkan alat bantu perancangan yang digunakan!",
    jawaban: ["ALGORITHM", "FLOWCHART"],
  },
];

// Inisialisasi Level & Progress
if (!localStorage.getItem("unlockedLevel")) {
  localStorage.setItem("unlockedLevel", "1");
}
