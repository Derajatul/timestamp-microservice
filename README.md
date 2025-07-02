# Timestamp Microservice API

Sebuah microservice API untuk konversi timestamp yang dibangun dengan Node.js dan Express.js. Project ini merupakan salah satu tantangan dari freeCodeCamp Backend Development and APIs.

## 📋 Deskripsi

API ini menyediakan layanan untuk mengkonversi timestamp antara format Unix timestamp dan UTC string. Pengguna dapat mengirim tanggal dalam berbagai format dan mendapatkan respons dalam bentuk JSON yang berisi Unix timestamp dan UTC string.

## 🚀 Fitur

- ✅ Konversi tanggal ke Unix timestamp dan UTC string
- ✅ Support untuk berbagai format input tanggal
- ✅ Endpoint untuk mendapatkan timestamp saat ini
- ✅ Validasi input tanggal
- ✅ CORS enabled untuk testing remote
- ✅ Struktur MVC (Model-View-Controller) yang terorganisir

## 🏗️ Struktur Project

```
boilerplate-project-timestamp/
├── controllers/
│   ├── homeController.js       # Controller untuk halaman utama
│   └── timestampController.js  # Controller untuk logic timestamp
├── routes/
│   └── routes.js              # Definisi semua routes
├── views/
│   └── index.html             # Halaman utama
├── public/
│   └── style.css              # File CSS
├── index.js                   # Entry point aplikasi
├── package.json               # Dependencies dan scripts
└── README.md                  # Dokumentasi project
```

## 🔧 Instalasi

1. **Clone repository:**

   ```bash
   git clone https://github.com/freeCodeCamp/boilerplate-project-timestamp.git
   cd boilerplate-project-timestamp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Jalankan aplikasi:**

   ```bash
   npm start
   ```

4. **Buka browser dan akses:**
   ```
   http://localhost:3000
   ```

## 📡 API Endpoints

### 1. Home Page

- **GET** `/`
- **Deskripsi:** Menampilkan halaman utama dengan dokumentasi API
- **Response:** HTML page

### 2. Current Timestamp

- **GET** `/api`
- **Deskripsi:** Mendapatkan timestamp saat ini
- **Response:**
  ```json
  {
    "unix": 1672531200000,
    "utc": "Sun, 01 Jan 2023 00:00:00 GMT"
  }
  ```

### 3. Convert Timestamp

- **GET** `/api/:date`
- **Deskripsi:** Mengkonversi tanggal yang diberikan ke Unix timestamp dan UTC string
- **Parameter:**
  - `date`: Tanggal dalam format Unix timestamp (milliseconds) atau date string yang valid

#### Contoh Penggunaan:

**Unix timestamp input:**

```
GET /api/1451001600000
```

**Response:**

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

**Date string input:**

```
GET /api/2015-12-25
```

**Response:**

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

**Invalid date input:**

```
GET /api/invalid-date
```

**Response:**

```json
{
  "unix": null,
  "utc": null
}
```

### 4. Hello API (Test Endpoint)

- **GET** `/api/hello`
- **Deskripsi:** Endpoint untuk testing API
- **Response:**
  ```json
  {
    "greeting": "hello API"
  }
  ```

## 🧪 Testing

Anda dapat menguji API menggunakan berbagai tools:

### Menggunakan Browser

Buka URL berikut di browser:

- `http://localhost:3000/api/2015-12-25`
- `http://localhost:3000/api/1451001600000`
- `http://localhost:3000/api`

### Menggunakan cURL

```bash
# Test current timestamp
curl http://localhost:3000/api

# Test dengan date string
curl http://localhost:3000/api/2015-12-25

# Test dengan Unix timestamp
curl http://localhost:3000/api/1451001600000

# Test dengan invalid date
curl http://localhost:3000/api/invalid-date
```

### Menggunakan Postman

1. Buat request baru dengan method GET
2. Masukkan URL: `http://localhost:3000/api/2015-12-25`
3. Klik Send
4. Lihat response dalam format JSON

## 📦 Dependencies

- **express**: Web framework untuk Node.js
- **cors**: Middleware untuk Cross-Origin Resource Sharing

## 🏃‍♂️ Scripts

- `npm start`: Menjalankan aplikasi dalam mode production

## 🌐 Environment Variables

- `PORT`: Port untuk menjalankan server (default: 3000)

Contoh penggunaan:

```bash
PORT=8080 npm start
```

## 🔄 Format Input yang Didukung

API ini mendukung berbagai format input tanggal:

1. **Unix Timestamp (milliseconds):**

   - `1451001600000`

2. **Date Strings:**

   - `2015-12-25`
   - `Dec 25, 2015`
   - `December 25, 2015`
   - `25 Dec 2015`

3. **ISO Date Format:**
   - `2015-12-25T00:00:00.000Z`

## ⚠️ Error Handling

Jika input tanggal tidak valid, API akan mengembalikan:

```json
{
  "unix": null,
  "utc": null
}
```

## 🤝 Contributing

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Project ini menggunakan [MIT License](LICENSE).

## 👨‍💻 Author

- **freeCodeCamp** - [freeCodeCamp.org](https://www.freecodecamp.org/)

## 🔗 Links

- [freeCodeCamp](https://www.freecodecamp.org/)
- [Backend Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [Original Repository](https://github.com/freeCodeCamp/boilerplate-project-timestamp)

---

**Happy Coding! 🚀**
