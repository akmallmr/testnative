export default {
  code: "id",
  name: "Bahasa Indonesia",
  alfaType: "Latin",
  auth: {
    alert: {
      desc: "Kode OTP telah dikirim ke email Anda",
      btn: "Tutup"
    },
    tabs: ["Masuk", "Daftar"],
    button: ["Lupa Kata Sandi?", "Masuk", "Daftar", "Kirim", "Periksa", "Ubah"],
    title: [
      "Lupa Kata Sandi",
      "Verifikasi",
      "Ubah Password",
      "Masukan Kode OTP Anda"
    ],
    textInput: {
      username: "Nama Pengguna",
      password: "Kata Sandi",
      repassword: "Ulang Kata Sandi",
      email: "Email",
      otpCode: "Kode OTP"
    },
    error: {
      require: text => `${text} harus diisi`,
      min: (text, limit) => `Dibutuhkan minimal ${limit} karakter`,
      validEmail: () => "format email salah",
      sameValue: text => `${text} tidak sama`,
      incorrect: text => `${text} salah`,
      network: () => `gagal tersambung ke internet`,
      taken: text => `${text} sudah terdaftar`,
      notFound: text => `${text} tidak ditemukan`,
      server: () => `maaf, sedang ada yang salah`
    }
  },
  home: {
    button: ["Putar Video!", "Belajar", "Kuis", "Baca Al-Qur'an", "Hija'iyah"]
  },
  setPopUp: {
    title: ["Pengaturan", "Bahasa"],
    button: [
      "Edit Profil",
      "Tentang Kami",
      "Pengembang",
      "Pendukung",
      "Dukung Kami",
      "Keluar"
    ]
  },
  langPopUp: "Pilih Bahasa",
  editProfile: {
    title: "Edit Profil",
    subTitle: ["Nama Pengguna", "Email"],
    popUpTitle: ["Nama Panjang", "Rubah Password"],
    fullName: "Nama Lengkap",
    password: "Password",
    textInput: {
      firstName: "Nama Depan",
      lastName: "Nama Belakang",
      newPassword: "Password Baru",
      confirmPassword: "Konfirmasi Password"
    },
    submitBtn: "Selesai"
  },
  changeImgPopUp: {
    title: "Pilihan",
    button: ["Ambil Foto", "Pilih dari perpustakaan"]
  },
  learn: {
    title: "Selanjutnya",
    button: ["Putar Video!", "Unduh", "Favorit", "Kuis"]
  },
  practice: {
    button: ["Kirim", "Selanjutnya", "Coba Lagi", "Selesai"],
    error: "Jawabannya lebih dari satu",
    options: ["a.", "b.", "c.", "d."],
    alert: [
      {
        title: "Kuis tidak tersedia!",
        desc: "Subjek ini tidak terdapat kuis apapun"
      },
      {
        title: "Peringatan!",
        desc: "Jawabanmu tidak akan tersimpan, apakah anda yakin ingin keluar?"
      },
      {
        title: "Video tidak tersedia!",
        desc: "Kuis ini tidak mempunyai video"
      }
    ],
    result: {
      title: status => (status ? "Ayo Berusaha Lagi!" : "Selamat!"),
      content: (correct, total) =>
        `Anda mendapatkan ${correct} dari ${total} jawaban yang benar`
    }
  },
  hijaiyahPlay: {
    alert: [
      {
        title: "Peringatan!",
        desc: "Skor anda tidak akan tersimpan, apakah anda yakin ingin keluar?",
        cancleBtn: "Tidak",
        confirmBtn: "Iya"
      }
    ]
  },
  surah: {
    tabs: ["Surat Penuh", "Demi Kata"],
    alert: {
      title: "Peringatan!",
      desc: "Audio akan berhenti, apakah anda yakin ingin keluar?",
      btn: ["Iya", "Tidak"]
    }
  },
  other: ["Pilih Tingkat", "Cari Tingkat", "Pilih Surat", "Cari Surat", "Cari Subjek"],
  iqra: {
    help: {
      hijaiyah: `Hijaiyah atau Abjad Arab adalah ejaan arab dikodifikasi untuk menulis dalam bahasa Arab, ia ditulis dari kanan ke kiri dengan gaya tulis menyambung dan mempunyai 28 huruf.`,
      harakat: [
        `Harokat adalah tanda baca yang ditempatkan pada huruf Arab untuk mempermudah membaca huruf Arab.`,
        `Garis diagonal kecil diletakan\ndi atas huruf bisa dibaca "a".`,
        `Garis diagonal kecil diletakan\ndi bawah huruf bisa dibaca "i".`,
        `Seperti Huruf Wawu kecil diletakan\ndi atas huruf bisa dibaca "u".`
      ],
      tanwin: [
        `Tanwin adalah tanda baca\npada tulisan Arab untuk menyatakan\nbahwa huruf diucapkan diakhiri dengan\nhuruf "nun" mati`,
        `Ini bisa dibaca "-an".`,
        `Ini bisa dibaca "-in".`,
        `Ini bisa dibaca "-un".`
      ]
    }
  },
  play: {
    score: "Skor",
    highScore: "Skor Tertinggi",
    help: {
      hijaiyah1: `Pilih Hijaiyah dari panel\ndi bawah yang serupa dengan diatas.`,
      hijaiyah2: `Pilih Hijaiyah sesuai dengan\napa yang telah kamu dengar.`,
      harokat1: `Pilih Harokat yang benar\nsesuai dengan apa yang telah kamu dengar.`,
      harokat2: `Pilih Hijaiyah dan Harokat\nyang benar sesuai dengan apa\nyang telah kamu dengar.`,
      tanwin1: `Pilih Tanwin yang benar\nsesuai dengan apa yang telah kamu dengar.`,
      tanwin2: `Pilih Hijaiyah dan Tanwin\nnyang benar sesuai dengan apa\nyang telah kamu dengar.`
    }
  },
  errorNetwork: {
    title: "Peringatan!",
    btn: "Muat Ulang",
    desc: `Gagal menghubungkan ke Internet, \nPriksa koneksi anda`
  },
  darjahName: ["Pra Darjah", "Darjah I", "Darjah II", "Darjah III", "Darjah IV", "Darjah V", "Darjah VI"],
  downloadVideo: {
    addToFav: {
      title: "Menambah ke favorit",
      btn: "Tutup",
      desc: `Berhasil Menambahkan ke daftar favorit`
    },
    errAddToFav: {
      title: "Peringatan !",
      btn: "Tutup",
      desc: `Anda telah Menambahkan ke daftar favorit`
    },
    downloading: {
      title: "Sedang Mendownload",
      btn: "Batalkan"
    },
    downloadExist: {
      title: "Peringatan!",
      btn: "Oke",
      desc: `Video ini sudah pernah anda download`
    }
  }
}
