export default {
  code: "ms",
  name: "Malay",
  alfaType: "Latin",
  auth: {
    alert: {
      desc: "Kod OTP telah dihantar ke emel anda",
      btn: "Tutup"
    },
    tabs: ["Masuk", "Daftar"],
    button: [
      "Lupa Kata Laluan?",
      "Masuk",
      "Daftar",
      "Hantar",
      "Sahkan",
      "Ubah"
    ],
    title: [
      "Lupa Kata Laluan",
      "Pengesahan",
      "Ubah Kata Laluan",
      "Masukan Kod OTP Anda"
    ],
    textInput: {
      username: "Nama Pengguna",
      password: "Kata Laluan",
      repassword: "Ulang Kata Laluan",
      email: "Emel",
      otpCode: "Kod OTP"
    },
    error: {
      require: text => `${text} mesti diisi`,
      min: (text, limit) => `Minimum ${limit} huruf diperlukan`,
      validEmail: () => "format emel tidak betul",
      sameValue: text => `${text} tidak sama`,
      incorrect: text => `${text} tidak betul`,
      network: () => `gagal menyambung ke internet`,
      taken: text => `${text} telah didaftarkan`,
      notFound: text => `${text} tidak dijumpai`,
      server: () => `maaf, ada yang salah`
    }
  },
  home: {
    button: ["Mainkan Video!", "Belajar", "Kuiz", "Baca Al-Qur'an", "Hija'iyah"]
  },
  setPopUp: {
    title: ["Tetapan", "Bahasa"],
    button: [
      "Tukar profil",
      "Tentang Kami",
      "Pemaju",
      "Penyokong",
      "Sokong Kami",
      "Keluar"
    ]
  },
  langPopUp: "Pilih Bahasa",
  editProfile: {
    title: "Sunting Profil",
    subTitle: ["Nama Pengguna", "Emel"],
    popUpTitle: ["Nama Penuh", "Tukar Kata Laluan"],
    fullName: "Nama Penuh",
    password: "Kata Laluan",
    textInput: {
      firstName: "Nama Pertama",
      lastName: "Nama Terakhir",
      newPassword: "Kata Laluan Baharu",
      confirmPassword: "Sahkan Kata Laluan"
    },
    submitBtn: "Selesai"
  },
  changeImgPopUp: {
    title: "Pilihan",
    button: ["Ambil Foto", "Pilih dari pustaka"]
  },
  learn: {
    title: "Seterusnya",
    button: ["Mainkan Video!", "Muat Turun", "Kegemaran", "Kuiz"]
  },
  practice: {
    button: ["Hantar", "Seterusnya", "Cuba Lagi", "Selesai"],
    error: "Jawapannya lebih daripada satu",
    options: ["a.", "b.", "c.", "d."],
    alert: [
      {
        title: "Kuiz tidak tersedia!",
        desc: "Subjek ini tidak mempunyai sebarang kuiz"
      },
      {
        title: "Amaran!",
        desc:
          "Jawapan anda tidak akan disimpan, adakah anda pasti ingin berhenti?"
      },
      {
        title: "Video tidak tersedia!",
        desc: "Kuiz ini tidak mempunyai Video"
      }
    ],
    result: {
      title: status => (status ? "Mari cuba lagi!" : "Tahniah!"),
      content: (correct, total) =>
        `Anda mendapatkan ${correct} dari ${total} jawapan yang betul`
    }
  },
  hijaiyahPlay: {
    alert: [
      {
        title: "Amaran!",
        desc:
          "Skor anda tidak akan disimpan, adakah anda pasti ingin berhenti?",
        cancleBtn: "Tidak",
        confirmBtn: "Ya"
      }
    ]
  },
  surah: {
    tabs: ["Surah Penuh", "Dengan kata"],
    alert: {
      title: "Amaran!",
      desc: "Audio akan berhenti, adakah anda pasti ingin keluar?",
      btn: ["Ya", "Tidak"]
    }
  },
  other: ["Pilih Tahap", "Cari Tahap", "Pilih Surah", "Cari Surah", "Cari Subjek"],
  iqra: {
    help: {
      hijaiyah: `Hijaiyah atau abjad Arab adalah ejaan bahasa Arab yang dikodifikasikan untuk menulis dalam bahasa Arab, ia ditulis dari kanan ke kiri dengan gaya sambungan tertulis dan mempunyai 28 huruf.`,
      harakat: [
        `Harakat adalah tanda baca yang ditempatkan pada huruf Arab untuk mempermudah membaca huruf Arab.`,
        `Garis pepenjuru kecil diletakkan\ndi atas huruf boleh dibaca "a".`,
        `Garis pepenjuru kecil diletakkan\ndi bawah huruf boleh dibaca "i".`,
        `Seperti Huruf Wawu kecil diletakkan\ndi atas huruf boleh dibaca "u".`
      ],
      tanwin: [
        `Tanwin adalah tanda baca\ndalam bahasa Arab untuk menyatakan\nbahawa huruf diucapkan yang berakhir dengan\nhuruf "nun" mati.`,
        `Ini boleh dibaca "-an".`,
        `Ini boleh dibaca "-in".`,
        `Ini boleh dibaca "-un".`
      ]
    }
  },
  play: {
    score: "Skor",
    highScore: "Skor Tertinggi",
    help: {
      hijaiyah1: `Pilih Hijaiyah dari \n di bawah panel yang serupa dengan yang di atas.`,
      hijaiyah2: `Pilih Hijaiyah mengikut\napa yang anda dengar.`,
      harokat1: `Pilih Harokat yang benar\nkepada apa yang telah\nanda dengar.`,
      harokat2: `Pilih Hijaiyah dan Harokat\nyang adalah benar sesuai dengan\napa yang telah anda dengar.`,
      tanwin1: `Pilih Tanwin yang betul-betul\nepadan dengan apa yang\ntelah anda dengar.`,
      tanwin2: `Pilih Hijaiyah dan Tanwin\nbetul sesuai dengan apa yang\ntelah anda dengar.`
    }
  },
  errorNetwork: {
    title: "Amaran!",
    btn: "Muat Ulang",
    desc: `Gagal menyambung ke Internet, \nMenyemak sambungan anda`
  },
  darjahName: ["Darjah Pra", "Darjah I", "Darjah II", "Darjah III", "Darjah IV", "Darjah V", "Darjah VI"],
  downloadVideo: {
    addToFav: {
      title: "Tambah ke kegemaran",
      btn: "Tutup",
      desc: `Berjaya ditambah ke senarai kegemaran`
    },
    errAddToFav: {
      title: "Amaran !",
      btn: "Tutup",
      desc: `Anda telah menambah senarai kegemaran`
    },
    downloading: {
      title: "Memuat turun",
      btn: "Batalkan"
    },
    downloadExist: {
      title: "Amaran!",
      btn: "OK",
      desc: `Anda telah memuat turun video ini`
    }
  }
}
