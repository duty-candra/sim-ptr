// Konfigurasi SIM-PTR (mode GitHub: data terenkripsi disimpan di repositori ini).
window.SIMPTR_CONFIG = {
  mode: "github",        // "github" = login + data terenkripsi; kosongkan untuk mode demo lokal
  repo: "",              // kosong = dideteksi otomatis dari alamat situs (pemilik/nama-repositori)
  file: "data.enc.json", // nama berkas data terenkripsi
  branch: "main",
  izinkanDemo: false,    // true = tombol Demo (data contoh) tetap tampil
  userBolehUnduh: true   // true = akun Pengguna boleh mengunduh CSV dan laporan
};
