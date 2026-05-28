const videos = [
  // 0 - 5 (LOGIKA DASAR)
  {
    title: "IF",
    url: "https://youtu.be/VyrP3Bg67h0?si=G3T1WvDQpB6VpBM8",
    desc: "IF merupakan struktur kontrol kondisional fundamental yang berfungsi untuk mengeksekusi suatu blok instruksi kode secara spesifik apabila parameter atau syarat kondisi yang ditentukan terpenuhi atau bernilai benar (True).",
  },
  {
    title: "ELSE",
    url: "https://youtu.be/x8uGvVg0ac0?si=mEr8XsfOk1ZtcweJ",
    desc: "ELSE bertindak sebagai jalur percabangan sekunder dalam struktur kendali aliran program yang akan dijalankan secara otomatis oleh sistem komputasi ketika seluruh kriteria pengujian pada instruksi IF utama dinyatakan tidak terpenuhi (False).",
  },
  {
    title: "ELSE IF",
    url: "https://youtu.be/Ixuw0M3lySI?si=O1SMsEDltGud2WTu",
    desc: "ELSE IF merupakan metode penstrukturan kondisi bertingkat yang memungkinkan sistem melakukan evaluasi terhadap beberapa parameter skenario secara sekuensial sebelum menetapkan keputusan akhir eksekusi kode.",
  },
  {
    title: "BOOLEAN",
    url: "https://youtu.be/kQbtDWDdfzg?si=zfOfg7biVDuJIedD",
    desc: "Boolean merepresentasikan tipe data logika dasar dalam arsitektur komputer yang mengadopsi prinsip aljabar Boolean, di mana variabel di dalamnya hanya diizinkan memiliki salah satu dari dua nilai mutlak, yakni True atau False.",
  },
  {
    title: "TRUE",
    url: "https://youtu.be/m9hg0V-Wn-s?si=c3akHt7e9y0Va6cY",
    desc: "TRUE merupakan entitas nilai logika Boolean yang mengonfirmasi bahwa suatu ekspresi perbandingan, operasi relasional, atau kondisi prasyarat yang dievaluasi oleh sistem bernilai benar dan valid.",
  },
  {
    title: "FALSE",
    url: "https://youtu.be/m9hg0V-Wn-s?si=c3akHt7e9y0Va6cY",
    desc: "FALSE merepresentasikan kondisi di mana sebuah ekspresi logika atau parameter kondisional yang diuji dalam program tidak memenuhi kriteria hukum pemenuhan syarat, sehingga menghasilkan nilai salah.",
  },
  {
    title: "STRING",
    url: "https://youtu.be/O-aDeiapOng?si=L2-ic6z020zXHCHL",
    desc: "String merupakan tipe data non-primitif berupa urutan linier sekumpulan karakter alfanumerik yang dialokasikan dalam memori untuk merepresentasikan representasi tekstual formal di dalam kode program.",
  },
  {
    title: "INTEGER",
    url: "https://youtu.be/O-aDeiapOng?si=L2-ic6z020zXHCHL",
    desc: "Integer adalah tipe data numerik fundamental yang dialokasikan sistem untuk menyimpan representasi nilai bilangan bulat, baik positif maupun negatif, tanpa melibatkan komponen pecahan desimal.",
  },
  {
    title: "FLOAT",
    url: "https://youtu.be/O-aDeiapOng?si=L2-ic6z020zXHCHL",
    desc: "Float merepresentasikan tipe data numerik berbasis titik mengambang (floating-point) yang digunakan secara spesifik untuk memproses perhitungan matematis dengan nilai pecahan atau akurasi desimal.",
  },
  {
    title: "CHAR",
    url: "https://youtu.be/KHLp57E3tn4?si=V_3WLBYnOLqCaJr3",
    desc: "Char (Character) merupakan tipe data primitif berukuran terbatas yang berfungsi memetakan satu unit simbol tekstual tunggal, angka, atau kode kontrol berdasarkan standardisasi arsitektur ASCII atau Unicode.",
  },
  {
    title: "ARRAY",
    url: "https://youtu.be/E_IplykMZH0?si=YXkHFzI8_EN_qfZ-",
    desc: "Array adalah struktur data linier berurutan yang menyimpan kumpulan elemen data bertipe sejenis di dalam lokasi memori terintegrasi, yang diakses menggunakan basis indeks numerik.",
  },
  {
    title: "OBJECT",
    url: "https://youtu.be/vgKACpceYD4?si=HRnJ7I0vR_7pygeL",
    desc: "Object merepresentasikan model struktur data non-linier kompleks yang mengorganisasikan kumpulan properti abstrak dalam format pasangan kunci dan nilai (key-value pairs) untuk memetakan entitas data nyata.",
  },
  {
    title: "VARIABLE",
    url: "https://youtu.be/VcCHzeSEpY4?si=i-Esqd6DetT9639y",
    desc: "Variable merupakan komponen pengenal (identifier) memori abstrak yang berfungsi sebagai wadah penyimpanan dinamis untuk memanipulasi nilai data tertentu sepanjang siklus eksekusi program.",
  },
  {
    title: "CONST",
    url: "https://youtu.be/VcCHzeSEpY4?si=i-Esqd6DetT9639y",
    desc: "Const (Constant) digunakan untuk mendeklarasikan identifier imutabel, di mana nilai data yang telah diinisialisasikan di awal bersifat permanen dan tidak dapat dimodifikasi oleh instruksi kode lain.",
  },
  {
    title: "LET",
    url: "https://youtu.be/op30bc1Mm60?si=6XPHCWpOT2XnnjRe",
    desc: "Let merupakan kata kunci instruksi alokasi variabel modern berbasis cakupan blok (block-scoped) yang mengizinkan pembaruan nilai data secara dinamis dalam lingkup lokal terisolasi.",
  },
  {
    title: "OPERATOR",
    url: "https://youtu.be/pUmILtJyPBY?si=EnDt71T4digsOllN",
    desc: "Operator merepresentasikan simbol instruksi khusus komputasi yang digunakan untuk melaksanakan pemrosesan kalkulasi aritmatika, modifikasi string, maupun operasi perbandingan logika nilai.",
  },
  {
    title: "==",
    url: "https://youtu.be/pe3VxboDe2U?si=S17T3eznMs-Uf9fq",
    desc: "Operator perbandingan kesetaraan lemah (Loose Equality) yang mengevaluasi kesamaan nilai kuantitas antara dua operan dengan mengaktifkan sistem konversi tipe data otomatis (type coercion).",
  },
  {
    title: "===",
    url: "https://youtu.be/pe3VxboDe2U?si=S17T3eznMs-Uf9fq",
    desc: "Operator perbandingan kesetaraan kuat (Strict Equality) yang melakukan validasi komparasi secara absolut, menguji apakah kedua operan memiliki nilai dan tipe identitas data yang benar-benar sepadan.",
  },
  {
    title: "!=",
    url: "https://youtu.be/pe3VxboDe2U?si=S17T3eznMs-Uf9fq",
    desc: "Operator ketidaksamaan (Inequality) yang diaplikasikan untuk memverifikasi apakah dua buah objek operan memiliki nilai kuantitas yang berbeda tanpa memedulikan batas perbedaan rumpun tipe datanya.",
  },
  {
    title: ">",
    url: "https://youtu.be/pe3VxboDe2U?si=S17T3eznMs-Uf9fq",
    desc: "Operator komparasi relasional 'Lebih Besar Dari' yang memvalidasi kondisi numerik untuk membuktikan apakah operan sisi kiri memiliki nilai kuantitatif yang lebih superior dibanding sisi kanan.",
  },
  {
    title: "<",
    url: "https://youtu.be/pe3VxboDe2U?si=S17T3eznMs-Uf9fq",
    desc: "Operator komparasi relasional 'Lebih Kecil Dari' yang mengevaluasi relasi numerik guna memastikan bahwa kuantitas nilai elemen di sisi kiri berada di bawah ambang batas nilai sisi kanan.",
  },
  {
    title: ">=",
    url: "https://youtu.be/pe3VxboDe2U?si=S17T3eznMs-Uf9fq",
    desc: "Operator relasional perbandingan yang memvalidasi apakah kuantitas data di sisi kiri memiliki nilai yang lebih besar atau minimal menyamai ambang batas nilai operan sisi kanan.",
  },
  {
    title: "<=",
    url: "https://youtu.be/pe3VxboDe2U?si=S17T3eznMs-Uf9fq",
    desc: "Operator relasional perbandingan yang memvalidasi apakah kuantitas data di sisi kiri memiliki nilai yang lebih kecil atau maksimal hanya menyamai ambang batas nilai operan sisi kanan.",
  },
  {
    title: "AND (&&)",
    url: "https://youtu.be/zyoxrvnjLi8?si=9Fuo6DfWrjC-l14i",
    desc: "Operator logika AND (Konjungsi) yang menguji validitas ekspresi logika majemuk, di mana output akhir sistem dinyatakan bernilai True jika seluruh komponen kondisi yang diuji adalah benar.",
  },
  {
    title: "OR (||)",
    url: "https://youtu.be/zyoxrvnjLi8?si=9Fuo6DfWrjC-l14i",
    desc: "Operator logika OR (Disjungsi) yang mengevaluasi parameter multi-kondisi, di mana status kebenaran True akan dicapai apabila salah satu dari ekspresi logika yang diuji terbukti valid.",
  },
  {
    title: "NOT (!)",
    url: "https://youtu.be/zyoxrvnjLi8?si=9Fuo6DfWrjC-l14i",
    desc: "Operator logika NOT (Inversi/Negasi) yang diimplementasikan untuk melakukan pembalikan status nilai Boolean secara mutlak, merekonstruksi nilai True menjadi False dan sebaliknya.",
  },
  {
    title: "INPUT",
    url: "https://youtu.be/3ifAyi4AwRA?si=ZSVsvezvPn5YaegZ",
    desc: "Input mendefinisikan sebuah subsistem penangkapan data yang berfungsi mengalirkan parameter data mentah dari pengguna ke dalam sistem memori program untuk diproses komputasi.",
  },
  {
    title: "OUTPUT",
    url: "https://youtu.be/3ifAyi4AwRA?si=ZSVsvezvPn5YaegZ",
    desc: "Output merupakan instruksi akhir pemrosesan sistem yang bertugas untuk merender dan menyajikan representasi informasi hasil kalkulasi algoritma ke perangkat antarmuka pengguna.",
  },
  {
    title: "PRINT",
    url: "https://youtu.be/3ifAyi4AwRA?si=ZSVsvezvPn5YaegZ",
    desc: "Perintah spesifik manipulasi antarmuka yang digunakan untuk mencetak atau merender visualisasi luaran karakter teks langsung ke dalam area dokumen tampilan aktif.",
  },
  {
    title: "LOOP",
    url: "https://youtu.be/pQAURepXZOU?si=HS8m7z70DvZPrVP_",
    desc: "Loop (Perulangan) merupakan struktur arsitektur kontrol repetisi yang memberikan perintah bagi program untuk mengeksekusi sekumpulan baris kode secara berulang sampai batas kondisi terminasi tercapai.",
  },
  {
    title: "FOR",
    url: "https://youtu.be/pQAURepXZOU?si=HS8m7z70DvZPrVP_",
    desc: "FOR merepresentasikan blok perulangan terhitung (counted loop) yang siklus repetisinya diatur secara presisi melalui parameter inisialisasi awal, batas terminasi, dan mutasi variabel pencacah.",
  },
  {
    title: "WHILE",
    url: "https://youtu.be/pQAURepXZOU?si=HS8m7z70DvZPrVP_",
    desc: "WHILE mendefinisikan arsitektur kontrol perulangan tak terhitung (uncounted loop) yang akan terus-menerus menjalankan siklus instruksi internal selama prasyarat kondisi logika bernilai True.",
  },
  {
    title: "DO WHILE",
    url: "https://youtu.be/pQAURepXZOU?si=HS8m7z70DvZPrVP_",
    desc: "DO WHILE merupakan variasi kontrol repetisi yang melakukan eksekusi baris instruksi minimal sebanyak satu kali di awal sebelum menguji parameter logika terminasi perulangan.",
  },
  {
    title: "INDEX",
    url: "https://youtu.be/ukb_C6v9J40?si=cNSzQKIT7PMof32a",
    desc: "Index merepresentasikan indikator penanda urutan numerik berbasis nol (zero-based positioning) yang mereferensikan alokasi letak elemen spesifik di dalam struktur data Array.",
  },
  {
    title: "LENGTH",
    url: "https://youtu.be/ukb_C6v9J40?si=cNSzQKIT7PMof32a",
    desc: "Length merupakan properti refleksi data yang digunakan untuk menghitung serta mengembalikan nilai total kuantitas elemen atau panjang barisan karakter yang tersimpan di dalam objek.",
  },
  {
    title: "PUSH",
    url: "https://youtu.be/ukb_C6v9J40?si=cNSzQKIT7PMof32a",
    desc: "Push adalah metode mutasi array dinamis yang digunakan untuk menginjeksikan atau menyisipkan barisan elemen data baru ke dalam posisi indeks paling akhir dari suatu Array.",
  },
  {
    title: "POP",
    url: "https://youtu.be/ukb_C6v9J40?si=cNSzQKIT7PMof32a",
    desc: "Pop merupakan metode manipulasi array yang bertugas mengekstraksi, menghapus, serta mengembalikan entitas elemen data yang menempati indeks posisi terakhir di dalam Array.",
  },
  {
    title: "FUNCTION",
    url: "https://youtu.be/KHYJMKrcrco?si=WB-BnmgJX9jyMHSz",
    desc: "Function (Fungsi) merupakan sub-program atau blok kode terisolasi yang dienkapsulasi untuk memproses tugas spesifik tertentu sehingga mendukung implementasi kode modular yang dapat dipanggil ulang.",
  },
  {
    title: "PARAMETER",
    url: "https://youtu.be/raOjtxnFDV0?si=ebid1AxCHQj8gP18",
    desc: "Parameter merepresentasikan variabel penampung formal yang dideklarasikan pada struktur kepala fungsi untuk menangkap suplai nilai argumen eksternal saat sub-program dijalankan.",
  },
  {
    title: "RETURN",
    url: "https://youtu.be/ADcQu-8R0Ok?si=ftZzB54qyzCDrE1Z",
    desc: "Return merupakan kata kunci instruksi penghentian kendali sub-program yang berfungsi mengembalikan objek nilai hasil kalkulasi komputasi dari dalam fungsi menuju baris pemanggil utama.",
  },
  {
    title: "EVENT",
    url: "https://youtu.be/j_9ekoGXHco?si=9EIWiFQn9EMTAAEG",
    desc: "Event mendefinisikan sebuah sinyal indikator aksi terdeteksi yang dipicu oleh aktivitas pengguna maupun otomatisasi sistem internal untuk merangsang jalannya fungsi responsif program.",
  },
  {
    title: "CLICK",
    url: "https://youtu.be/j_9ekoGXHco?si=9EIWiFQn9EMTAAEG",
    desc: "Click merupakan sub-kategori aksi interaksi antarmuka yang merepresentasikan operasi penekanan dan pelepasan sensor tombol perangkat tetikus di atas koordinat elemen grafis web.",
  },
  {
    title: "DOM",
    url: "https://youtu.be/j_9ekoGXHco?si=9EIWiFQn9EMTAAEG",
    desc: "DOM (Document Object Model) merupakan arsitektur antarmuka pemrograman aplikasi (API) yang merepresentasikan struktur dokumen halaman web sebagai struktur pohon objek dinamis.",
  },
  {
    title: "SELECTOR",
    url: "https://youtu.be/j_9ekoGXHco?si=9EIWiFQn9EMTAAEG",
    desc: "Selector merupakan kueri instruksi pencarian yang diterapkan JavaScript untuk melacak, mengidentifikasi, dan mengambil referensi node objek elemen HTML berdasarkan pemetaan aturan CSS.",
  },
  {
    title: "DEBUG",
    url: "https://youtu.be/yLuPhCHZuYM?si=XF4Gue2e5NMELmz4",
    desc: "Debugging merupakan metodologi analisis terstruktur penanganan perangkat lunak yang diaplikasikan untuk melacak, mengisolasi, mendiagnosis, dan memusnahkan galat atau error kode program.",
  },
  {
    title: "ERROR",
    url: "https://youtu.be/QW8BN-NHY7M?si=7k8ni_w7TFAmsAi_",
    desc: "Error mendefinisikan kondisi kegagalan instruksi kode program (Anomali) yang disebabkan oleh pelanggaran tata bahasa penulisan sintaksis, kerusakan logika dasar, atau interferensi runtime.",
  },
  {
    title: "SYNTAX",
    url: "https://youtu.be/R5Rdo3L4twk?si=AhYqsKDdMTQjYVxU",
    desc: "Syntax (Sintaksis) merupakan standarisasi konvensi, regulasi formal, dan tata bahasa gramatikal baku yang wajib dipatuhi dalam penulisan baris instruksi agar dapat dipahami oleh interpreter.",
  },
  {
    title: "LOGIC",
    url: "https://youtu.be/EIUJ5P2kIfk?si=0tOEe_7SAOrQmKDR",
    desc: "Logic merepresentasikan kerangka penafsiran alur berpikir logis, runtut, dan rasional yang melandasi perancangan urutan instruksi program komputer untuk mencapai hasil valid bebas konflik logika.",
  },
  {
    title: "ALGORITHM",
    url: "https://youtu.be/uqVJc9lLknA?si=rYuzs6wGwc5HFKjw",
    desc: "Algoritma merupakan sekumpulan urutan langkah-langkah instruksi komputasi terhingga yang disusun secara sistematis, logis, dan matematis untuk menyelesaikan suatu problematika manipulasi data.",
  },
  {
    title: "FLOWCHART",
    url: "https://youtu.be/B1q2q3aDnRY?si=N2t1K0TqXCZg4LhA",
    desc: "Flowchart (Diagram Alir) merepresentasikan skema perancangan sistem visual formal yang memetakan tahapan operasional program dan percabangan keputusan logika menggunakan simbol geometris baku.",
  },
];

function extractID(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function selectVideo(index) {
  const v = videos[index];
  const id = extractID(v.url);

  if (id) {
    document.getElementById("videoPlayer").src =
      `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&origin=${window.location.origin}`;
    document.getElementById("vTitle").innerText = v.title;
    document.getElementById("vDesc").innerText = v.desc;

    // Visual feedback buat playlist
    document
      .querySelectorAll(".video-item")
      .forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".video-item")[index].classList.add("active");
  }
}

const list = document.getElementById("playlist");
videos.forEach((v, i) => {
  const id = extractID(v.url);
  const thumb = `https://img.youtube.com/vi/${id}/0.jpg`;

  list.innerHTML += `
        <div class="video-item" onclick="selectVideo(${i})">
            <img src="${thumb}" class="thumb-mini" />
            <div class="title-mini">${v.title}</div>
        </div>
    `;
});

// Play video pertama otomatis
selectVideo(0);
