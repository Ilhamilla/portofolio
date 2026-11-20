# Portofolio Personal — Ilham Faza Loka

Website portofolio statis modern berbasis **HTML5**, **CSS3**, dan **Vanilla JavaScript** dengan Dark Mode sebagai tema default (dilengkapi toggle Light Mode). Dirancang tanpa file `.php` atau build step sehingga siap langsung di-deploy gratis ke **GitHub Pages** maupun **Cloudflare Pages**.

---

## Struktur Folder

```text
.
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── img/
    │   ├── profile-placeholder.svg
    │   └── profile.jpg                  <-- Tambahkan foto profil Anda di sini
    └── docs/
        └── CV_Ilham_Faza_Loka.pdf       <-- Tambahkan file CV PDF Anda di sini
```

---

## Kustomisasi Sebelum Deploy

1. **Foto Profil:** Simpan foto Anda dengan nama `profile.jpg` di folder `assets/img/profile.jpg`. Selama file belum tersedia, website otomatis menampilkan `profile-placeholder.svg`.
2. **File CV:** Simpan file CV Anda di `assets/docs/CV_Ilham_Faza_Loka.pdf` agar tombol **Download CV** berfungsi langsung.
3. **Tautan LinkedIn & GitHub:** Buka `index.html`, cari bagian tombol LinkedIn dan GitHub pada section `#contact`, lalu ganti `href="#"` dengan URL profil Anda.

---

## Panduan Hosting Gratis

### Opsi 1: GitHub Pages

1. Buat repository baru di GitHub (misalnya `portfolio` atau `<username>.github.io`).
2. Upload atau push seluruh isi folder ini ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. Buka **Settings → Pages** di repository GitHub Anda.
4. Pada **Source**, pilih **Deploy from a branch**, lalu pilih branch `main` dan folder `/ (root)`, kemudian klik **Save**.
5. Website akan aktif dalam beberapa menit di `https://<username>.github.io/<repo>/`.

#### Custom Domain di GitHub Pages
1. Di halaman **Settings → Pages → Custom domain**, masukkan domain Anda (contoh: `ilhamfazaloka.com` atau `www.ilhamfazaloka.com`) lalu klik **Save** (aktifkan juga **Enforce HTTPS** setelah DNS aktif).
2. Pada panel DNS registrar domain Anda (Niagahoster, Namecheap, Cloudflare, dll.), tambahkan record berikut:
   - **Untuk Apex Domain (`domainanda.com`):** buat 4 **A Record** mengarah ke IP GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Untuk Subdomain (`www.domainanda.com`):** buat **CNAME Record**:
     - Name/Host: `www`
     - Target/Value: `<username>.github.io`

---

### Opsi 2: Cloudflare Pages

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com/) → pilih **Workers & Pages → Create → Pages → Connect to Git**.
2. Pilih repository GitHub Anda.
3. Pada pengaturan build:
   - **Framework preset:** `None`
   - **Build command:** *(kosongkan)*
   - **Build output directory:** `/` *(atau `.`)*
4. Klik **Save and Deploy**. Website langsung online dengan URL `*.pages.dev` dan SSL otomatis.

#### Custom Domain di Cloudflare Pages
1. Buka project Cloudflare Pages Anda → tab **Custom domains → Set up a custom domain**.
2. Masukkan domain Anda (misalnya `ilhamfazaloka.com` atau `portfolio.ilhamfazaloka.com`).
3. Jika DNS domain Anda sudah dikelola di Cloudflare, Cloudflare akan otomatis membuatkan record CNAME ke `<project>.pages.dev` beserta sertifikat SSL/TLS.
4. Jika DNS dikelola di luar Cloudflare, tambahkan **CNAME Record** pada registrar Anda:
   - Name/Host: `www` (atau `@` jika registrar mendukung CNAME flattening/ALIAS)
   - Target/Value: `<nama-project>.pages.dev`
