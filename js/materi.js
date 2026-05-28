const materi = [
  // 0 - 5 (LOGIKA DASAR)
  {
    title: "IF",
    desc: "IF merupakan struktur kontrol kondisional fundamental dalam pemrograman yang berfungsi untuk menguji suatu ekspresi logika. Jika hasil evaluasi ekspresi tersebut bernilai benar (True), maka sistem akan mengeksekusi blok instruksi kode spesifik yang berada di dalamnya; jika tidak, blok tersebut akan dilewati.",
    example: "if (nilai > 75) {\n  console.log('Lulus');\n}",
  },
  {
    title: "ELSE",
    desc: "ELSE merupakan komponen percabangan sekunder yang melengkapi struktur kendali aliran program kondisional. Instruksi di dalam blok ELSE akan dieksekusi secara otomatis oleh mesin komputasi sebagai rencana cadangan (fallback mechanism) hanya apabila seluruh parameter pengujian pada instruksi IF utama menghasilkan nilai salah (False).",
    example:
      "if (nilai > 75) {\n  console.log('Lulus');\n} else {\n  console.log('Tidak Lulus');\n}",
  },
  {
    title: "ELSE IF",
    desc: "ELSE IF digunakan untuk menstrukturkan beberapa tahapan pengujian kondisi secara berurutan dan berlapis (multi-conditional branching). Dengan memanfaatkan struktur ini, arsitektur program dapat melakukan evaluasi terhadap berbagai alternatif keputusan secara sekuensial sebelum menetapkan keputusan eksekusi yang paling valid.",
    example:
      "if (nilai > 90) {\n  grade='A';\n} else if (nilai > 75) {\n  grade='B';\n}",
  },
  {
    title: "BOOLEAN",
    desc: "Boolean merupakan tipe data logika dasar dalam ilmu komputer yang mengadopsi prinsip aljabar Boolean. Tipe data ini bertindak sebagai fondasi pengambilan keputusan logika dalam sistem biner, karena variabel yang dideklarasikan dengan tipe ini hanya diizinkan memiliki salah satu dari dua entitas nilai mutlak, yaitu True atau False.",
    example: "let status = true;",
  },
  {
    title: "TRUE",
    desc: "TRUE merupakan representasi nilai logika Boolean mutlak yang menyatakan bahwa suatu parameter ekspresi perbandingan, kalkulasi logika, atau prasyarat kondisional yang diuji oleh sistem komputer berada dalam keadaan benar, tepat, valid, atau terpenuhi secara sempurna.",
    example: "if (true) {\n  console.log('Benar');\n}",
  },
  {
    title: "FALSE",
    desc: "FALSE merupakan entitas nilai logika Boolean yang menunjukkan keadaan di mana sebuah ekspresi perbandingan, pengujian relasional, atau parameter kondisional yang dievaluasi dalam alur program tidak memenuhi kriteria hukum pemenuhan syarat, sehingga menghasilkan nilai salah atau tidak valid.",
    example: "if (false) {\n  console.log('Tidak dijalankan');\n}",
  },

  // 6 - 11 (TIPE DATA)
  {
    title: "STRING",
    desc: "String merupakan tipe data non-primitif yang merepresentasikan urutan atau rangkaian karakter alfanumerik, simbol khusus, dan teks secara linier. Dalam penulisan sintaksis kode program, tipe data ini diidentifikasi melalui pembungkusan karakter menggunakan tanda kutip guna membedakannya dari instruksi sistem.",
    example: "let nama = 'Fida';",
  },
  {
    title: "INTEGER",
    desc: "Integer adalah tipe data numerik fundamental yang dialokasikan khusus oleh arsitektur memori komputer untuk menyimpan dan memproses representasi nilai bilangan bulat, baik dalam rentang kuantitas positif maupun negatif, tanpa melibatkan komponen pecahan atau angka desimal.",
    example: "let umur = 20;",
  },
  {
    title: "FLOAT",
    desc: "Float merepresentasikan tipe data numerik berbasis titik mengambang (floating-point) yang digunakan secara spesifik dalam kalkulasi matematika tingkat lanjut. Tipe data ini mampu menampung nilai numerik yang memiliki komponen pecahan desimal atau angka di belakang koma dengan tingkat presisi tertentu.",
    example: "let nilai = 87.5;",
  },
  {
    title: "CHAR",
    desc: "Char (Character) merupakan tipe data primitif berukuran terbatas yang dialokasikan khusus untuk menyimpan satu unit simbol tekstual tunggal, angka tunggal, ataupun kode kontrol. Karakter tunggal ini dipetakan secara digital di dalam memori berdasarkan standardisasi arsitektur pengodean ASCII atau Unicode.",
    example: "let huruf = 'A';",
  },
  {
    title: "ARRAY",
    desc: "Array adalah struktur data linier kontigu yang berfungsi untuk menyimpan kumpulan elemen atau sekumpulan data homogen (bertipe sejenis) di dalam satu variabel terintegrasi. Setiap elemen data yang tersimpan di dalam Array diorganisasikan secara berurutan dan dapat diakses secara instan menggunakan basis indeks numerik.",
    example: "let angka = [1,2,3];",
  },
  {
    title: "OBJECT",
    desc: "Object merepresentasikan entitas struktur data kompleks non-linier dalam pemrograman berorientasi objek yang mengorganisasikan kumpulan data abstrak. Data di dalamnya disusun dalam format pasangan kunci dan nilai (key-value pairs) yang digunakan untuk memetakan karakteristik dari suatu entitas dunia nyata.",
    example: "let siswa = {nama:'Fida', umur:20};",
  },

  // 12 - 14 (VARIABEL)
  {
    title: "VARIABLE",
    desc: "Variable merupakan sebuah nama pengenal (identifier) abstrak yang merujuk pada alokasi memori fisik tertentu di dalam komputer. Komponen ini berfungsi sebagai wadah penyimpanan dinamis yang memungkinkan nilai data di dalamnya untuk disimpan, diperbarui, dan dimanipulasi sepanjang siklus eksekusi program.",
    example: "let nama = 'Andi';",
  },
  {
    title: "CONST",
    desc: "Const (Constant) merupakan instruksi deklarasi pengenal atau variabel yang bersifat imutabel (tidak dapat diubah). Sekali nilai data diinisialisasikan ke dalam variabel CONST di awal program, maka alokasi memori tersebut dikunci secara permanen dan nilainya tidak dapat dimodifikasi oleh instruksi kode lain.",
    example: "const phi = 3.14;",
  },
  {
    title: "LET",
    desc: "Let merupakan kata kunci deklarasi variabel modern yang menerapkan regulasi ruang lingkup blok (block-scoped). Kata kunci ini mengizinkan nilai data di dalam variabel untuk diperbarui secara dinamis, namun memberikan proteksi tinggi dari risiko interferensi variabel global (variable bleeding) pada memori.",
    example: "let nilai = 10;",
  },

  // 15 - 22 (OPERATOR)
  {
    title: "OPERATOR",
    desc: "Operator merepresentasikan simbol atau instruksi khusus komputasi yang diaplikasikan untuk melaksanakan pemrosesan data. Operator bertindak sebagai jembatan instruksi untuk mengeksekusi kalkulasi aritmatika matematika, manipulasi karakter string, maupun operasi perbandingan logika nilai terhadap operan.",
    example: "let hasil = 5 + 3;",
  },
  {
    title: "==",
    desc: "Operator kesetaraan abstrak (Loose Equality) berfungsi untuk mengevaluasi kesamaan nilai kuantitas antara dua operan. Operator ini memiliki toleransi tipe data karena sistem akan melakukan konversi tipe data otomatis secara implisit (type coercion) sebelum membandingkan nilai akhir kedua objek.",
    example: "if (a == b) {\n  console.log('Sama');\n}",
  },
  {
    title: "===",
    desc: "Operator kesetaraan identik atau kuat (Strict Equality) digunakan untuk melakukan validasi komparasi secara absolut antara dua operan. Hasil evaluasi hanya akan dinyatakan bernilai benar jika dan hanya jika kedua operan yang dibandingkan memiliki kuantitas nilai yang sama sekaligus rumpun tipe data yang identik.",
    example: "if (a === b) {\n  console.log('Sama persis');\n}",
  },
  {
    title: "!=",
    desc: "Operator ketidaksamaan abstrak (Loose Inequality) merupakan instrumen perbandingan relasional yang digunakan untuk memverifikasi apakah dua buah objek operan memiliki nilai kuantitas yang berbeda, tanpa memedulikan batas perbedaan rumpun tipe data dari kedua operan tersebut.",
    example: "if (a != b) {\n  console.log('Tidak sama');\n}",
  },
  {
    title: ">",
    desc: "Operator relasional 'Lebih Besar Dari' merupakan simbol perbandingan matematis yang mengevaluasi parameter numerik untuk membuktikan kesahihan kondisi, apakah objek operan yang menempati sisi kiri memiliki kuantitas nilai yang lebih tinggi (superior) dibandingkan objek di sisi kanan.",
    example: "if (a > b) {\n  console.log('Lebih besar');\n}",
  },
  {
    title: "<",
    desc: "Operator relasional 'Lebih Kecil Dari' merupakan simbol komparasi numerik yang digunakan untuk mengevaluasi parameter relasi antar operan, guna membuktikan secara logis apakah entitas nilai yang berada di sisi kiri memiliki kuantitas yang lebih rendah di bawah ambang batas nilai operan sisi kanan.",
    example: "if (a < b) {\n  console.log('Lebih kecil');\n}",
  },
  {
    title: ">=",
    desc: "Operator perbandingan relasional majemuk yang mengevaluasi parameter numerik untuk memvalidasi apakah kuantitas data di sisi kiri memenuhi kriteria hukum kesetaraan, yaitu bernilai lebih besar atau minimal memiliki nilai yang menyamai ambang batas kuantitas nilai dari operan di sisi kanan.",
    example: "if (a >= b) {\n  console.log('>=');\n}",
  },
  {
    title: "<=",
    desc: "Operator perbandingan relasional majemuk yang mengevaluasi parameter numerik untuk memvalidasi apakah kuantitas data di sisi kiri memenuhi kriteria hukum kesetaraan, yaitu bernilai lebih kecil atau maksimal hanya menyamai ambang batas kuantitas nilai dari operan di sisi kanan.",
    example: "if (a <= b) {\n  console.log('<=');\n}",
  },

  // 23 - 25 (LOGIKA)
  {
    title: "&&",
    desc: "Operator logika AND (Konjungsi) merupakan instrumen pengujian logika majemuk yang mengevaluasi validitas dari beberapa ekspresi Boolean. Output akhir dari operator logika AND ini hanya akan dinyatakan valid atau benar (True) jika seluruh komponen kondisi yang diuji di dalam sistem bernilai benar.",
    example: "if (a>5 && b<10) {\n  console.log('Valid');\n}",
  },
  {
    title: "||",
    desc: "Operator logika OR (Disjungsi) merupakan instrumen pengujian logika majemuk yang mengevaluasi parameter multi-kondisi. Status kebenaran mutlak (True) pada akhir evaluasi akan dicapai secara instan apabila salah satu atau seluruh ekspresi logika yang diuji terbukti valid oleh sistem.",
    example: "if (a>5 || b<10) {\n  console.log('Valid');\n}",
  },
  {
    title: "!",
    desc: "Operator logika NOT (Inversi atau Negasi) merupakan operator uner yang diimplementasikan secara spesifik untuk melakukan pembalikan status nilai Boolean secara mutlak. Operator ini merekonstruksi atau memutarbalikkan nilai kebenaran logika dari True menjadi False, dan sebaliknya.",
    example: "if (!status) {\n  console.log('False');\n}",
  },

  // 26 - 28 (INPUT OUTPUT)
  {
    title: "INPUT",
    desc: "Input mendefinisikan sebuah subsistem penangkapan dan penerimaan data yang berfungsi untuk mengalirkan parameter data mentah dari pengguna (user) menuju ke dalam arsitektur memori program, sehingga data tersebut siap dieksekusi oleh algoritma pemrosesan.",
    example: "let nama = prompt('Masukkan nama');",
  },
  {
    title: "OUTPUT",
    desc: "Output merupakan instruksi akhir dari pemrosesan sistem komputer yang bertugas untuk merender, menyajikan, dan mentransformasikan representasi data hasil kalkulasi algoritma internal menjadi bentuk informasi visual yang dapat dipahami oleh pengguna melalui media antarmuka.",
    example: "console.log('Hello');",
  },
  {
    title: "PRINT",
    desc: "Print merupakan instruksi spesifik dalam penanganan antarmuka dokumen objek yang digunakan untuk mencetak, menampilkan, atau merender representasi karakter teks secara langsung ke dalam area viewport dokumen tampilan aktif yang sedang diakses pengguna.",
    example: "document.write('Halo');",
  },

  // 29 - 32 (LOOP)
  {
    title: "LOOP",
    desc: "Loop (Perulangan) merupakan arsitektur kontrol repetisi dalam pemrograman yang memberikan perintah berulang bagi program komputer. Struktur ini berfungsi untuk mengeksekusi sekumpulan baris instruksi kode yang sama secara iteratif selama parameter kondisi terminasi belum tercapai.",
    example: "for(let i=0;i<5;i++){\n console.log(i);\n}",
  },
  {
    title: "FOR",
    desc: "FOR merepresentasikan blok kontrol perulangan terhitung (counted loop) yang siklus energinya diatur secara matematis dan presisi. Iterasi dikendalikan secara mutlak melalui tiga parameter utama yang wajib dideklarasikan, yaitu inisialisasi variabel pencacah, batas terminasi logika, dan mutasi nilai iterasi.",
    example: "for(let i=1;i<=5;i++){\n console.log(i);\n}",
  },
  {
    title: "WHILE",
    desc: "WHILE mendefinisikan arsitektur kontrol perulangan tak terhitung (uncounted loop) yang mengevaluasi kondisi terminasi di awal siklus. Program akan terus-menerus menjalankan blok instruksi kode internal secara kontinu selama prasyarat kondisi logika yang diuji di awal masih bernilai benar (True).",
    example: "while(x<5){\n x++;\n}",
  },
  {
    title: "DO WHILE",
    desc: "DO WHILE merupakan variasi arsitektur kontrol repetisi yang melakukan pembalikan urutan evaluasi kondisi. Struktur ini memberikan jaminan penuh bagi program untuk mengeksekusi baris instruksi internal minimal sebanyak satu kali di awal sebelum sistem melakukan pengujian terhadap parameter logika terminasi perulangan.",
    example: "do{\n x++;\n}while(x<5);",
  },

  // 33 - 36 (ARRAY LANJUT)
  {
    title: "INDEX",
    desc: "Index merepresentasikan indikator penanda posisi urutan numerik linier berbasis nol (zero-based positioning) yang tersimpan di dalam memori komputer. Indeks ini bertindak sebagai alamat penunjuk unik untuk mengakses, mengisolasi, atau memanipulasi elemen data spesifik di dalam struktur Array.",
    example: "console.log(arr[0]);",
  },
  {
    title: "LENGTH",
    desc: "Length merupakan properti refleksi internal dari struktur data kolektif yang dievaluasi secara dinamis oleh sistem. Properti ini bertindak sebagai alat kalkulasi otomatis untuk menghitung dan mengembalikan nilai total kuantitas elemen data di dalam Array atau panjang barisan karakter di dalam String.",
    example: "arr.length;",
  },
  {
    title: "PUSH",
    desc: "Push adalah metode mutasi destruktif bawaan dari objek Array yang diimplementasikan untuk melakukan perluasan kapasitas penyimpanan. Metode ini bekerja dengan cara menginjeksikan atau menyisipkan satu atau beberapa elemen data baru secara langsung ke posisi indeks paling akhir dari Array.",
    example: "arr.push(5);",
  },
  {
    title: "POP",
    desc: "Pop merupakan fungsi manipulasi array internal yang bertugas melaksanakan operasi reduksi elemen. Metode ini bekerja dengan cara mengekstraksi, memutuskan, serta menghapus entitas elemen data tunggal yang menempati indeks posisi terakhir di dalam struktur data Array.",
    example: "arr.pop();",
  },

  // 37 - 39 (FUNCTION)
  {
    title: "FUNCTION",
    desc: "Function (Fungsi) merupakan sub-program berupa blok kode mandiri terisolasi yang dienkapsulasi untuk memproses tugas spesifik tertentu. Penerapan fungsi mendukung implementasi kode modular (reusability) sehingga baris kode program dapat dipanggil ulang dari bagian mana pun secara efisien.",
    example: "function sapa(){\n console.log('Halo');\n}",
  },
  {
    title: "PARAMETER",
    desc: "Parameter merepresentasikan variabel penampung formal (placeholder) yang dideklarasikan pada bagian kepala cetak biru fungsi. Variabel ini dialokasikan khusus untuk menangkap dan menyalurkan suplai nilai argumen eksternal menuju ke dalam internal sub-program saat fungsi tersebut dijalankan.",
    example: "function tambah(a,b){\n return a+b;\n}",
  },
  {
    title: "RETURN",
    desc: "Return merupakan kata kunci instruksi pemutusan kendali sub-program yang memegang peran vital dalam komunikasi antar blok kode. Fungsi utamanya adalah menghentikan jalannya operasi internal fungsi sekaligus mengembalikan objek nilai hasil kalkulasi komputasi menuju ke baris pemanggil utama.",
    example: "return hasil;",
  },

  // 40 - 43 (WEB DASAR)
  {
    title: "EVENT",
    desc: "Event mendefinisikan sebuah sinyal indikator pendeteksi interaksi atau kejadian spesifik yang dipicu oleh aktivitas eksternal pengguna maupun otomatisasi sistem internal komputer. Kemunculan sinyal ini berfungsi untuk merangsang jalannya fungsi-fungsi responsif (event handler) pada program.",
    example: "button.onclick = function(){\n alert('Klik');\n}",
  },
  {
    title: "CLICK",
    desc: "Click merupakan sub-kategori spesifik dari mekanisme interaksi antarmuka pengguna berbasis peranti penunjuk. Aksi ini merepresentasikan proses terpadu antara penekanan dan pelepasan sensor tombol perangkat tetikus (mouse button) tepat di atas koordinat elemen grafis web.",
    example: "element.addEventListener('click', ()=>{});",
  },
  {
    title: "DOM",
    desc: "DOM (Document Object Model) merupakan arsitektur antarmuka pemrograman aplikasi (API) berorientasi objek yang memetakan seluruh komponen halaman situs. DOM mentransformasikan dokumen HTML menjadi struktur pohon objek dinamis (node tree) agar jeroannya dapat dimanipulasi secara interaktif menggunakan program JavaScript.",
    example: "document.getElementById('id');",
  },
  {
    title: "SELECTOR",
    desc: "Selector merupakan kueri instruksi pemindaian yang diimplementasikan mesin JavaScript untuk melacak referensi node objek. Sistem akan memindai pohon dokumen HTML secara menyeluruh, lalu mengambil elemen target berdasarkan kriteria kecocokan aturan penamaan id, class, ataupun tag CSS.",
    example: "document.querySelector('.class');",
  },

  // 44 - 49 (DEBUG & KONSEP)
  {
    title: "DEBUG",
    desc: "Debugging merupakan suatu metodologi analisis dan pengujian perangkat lunak terstruktur yang diaplikasikan secara sistematis dalam siklus pengembangan program. Fokus utamanya adalah melacak keberadaan galat, mengisolasi anomali sistem, mendiagnosis kerusakan, serta memusnahkan kutu (*bug*) kode program.",
    example: "console.log('cek');",
  },
  {
    title: "ERROR",
    desc: "Error mendefinisikan kondisi anomali berupa kegagalan pemrosesan instruksi di dalam program komputer. Kondisi kerusakan operasional runtime ini umumnya dipicu oleh adanya pelanggaran tata bahasa penulisan sintaksis, cacat logika algoritma internal, ataupun interferensi alokasi memori komputer.",
    example: "SyntaxError: missing ;",
  },
  {
    title: "SYNTAX",
    desc: "Syntax (Sintaksis) merupakan standarisasi hukum konvensi, regulasi formal, dan tata bahasa gramatikal baku yang mengikat cara penulisan baris instruksi program. Kepatuhan terhadap sintaksis bersifat mutlak agar kode yang ditulis dapat lolos proses parsing dan diterjemahkan secara valid oleh interpreter.",
    example: "if(x>5){...}",
  },
  {
    title: "LOGIC",
    desc: "Logic merepresentasikan kerangka penafsiran alur pemikiran yang logis, matematis, dan rasional yang melandasi perancangan urutan instruksi komputer. Penerapan logika yang tepat menjadi penentu utama agar program mampu menghasilkan output komputasi yang valid, konsisten, serta bebas dari galat kontradiktif.",
    example: "input → proses → output",
  },
  {
    title: "ALGORITHM",
    desc: "Algoritma merupakan cetak biru berupa sekumpulan urutan langkah komputasi terhingga yang disusun secara sistematis, kronologis, dan matematis. Algoritma bertindak sebagai fondasi pemecahan masalah (problem solving) untuk mentransformasikan data mentah masukan menjadi keluaran informasi yang valid.",
    example: "1. input\n2. proses\n3. output",
  },
  {
    title: "FLOWCHART",
    desc: "Flowchart (Diagram Alir) merepresentasikan skema perancangan sistem visual formal yang memetakan tahapan operasional dan logika pemrosesan data. Dengan menggunakan bentuk simbol geometris standar baku, diagram ini memvisualisasikan alur perpindahan data dan instruksi kontrol program dari awal hingga akhir.",
    example: "Start → Process → End",
  },
];

// Bridge / Fungsi jembatan untuk mengisi data array ke dalam elemen modal HTML
window.fillModalData = function (i) {
  if (materi[i]) {
    document.getElementById("materiTitle").innerText = materi[i].title;
    document.getElementById("materiDesc").innerText = materi[i].desc;
    document.getElementById("materiExample").innerText = materi[i].example;
  }
};
