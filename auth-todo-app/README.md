# 📝 Full Stack Auth Todo Uygulaması

Bu proje; modern, güvenli ve mobil uyumlu bir Yapılacaklar Listesi (Todo) uygulamasıdır. PERN yığını (PostgreSQL, Express, React, Node.js) kullanılarak geliştirilmiştir. Kullanıcıların kayıt olabildiği, güvenli bir şekilde giriş yapabildiği ve günlük görevlerini yönetebildiği tam kapsamlı bir full-stack projesidir.

## 🚀 Özellikler

* **Kullanıcı Kimlik Doğrulama (Auth):** **JWT (JSON Web Tokens)** ve **Bcrypt** kullanılarak geliştirilmiş güvenli kayıt ve giriş sistemi. Parolalar veritabanında şifrelenmiş olarak saklanır.
* **Görev Yönetimi:** Kullanıcılar kendi görevlerini ekleyebilir, okuyabilir, güncelleyebilir ve silebilir (CRUD işlemleri).
* **Responsive (Duyarlı) Tasarım:** **Tailwind CSS** sayesinde hem mobilde hem de masaüstünde kusursuz görünüm.
* **Korumalı Rotalar (Protected Routes):** Giriş yapmamış kullanıcıların yönetim paneline erişmesi engellenir.
* **Modern Durum Yönetimi:** React Hooks kullanılarak verimli veri akışı sağlanır.

## 🛠️ Teknoloji Yığını

Projede güncel ve endüstri standardı teknolojiler kullanılmıştır.

### Frontend (Ön Yüz)
* **React (Vite):** Hızlı ve interaktif kullanıcı arayüzü geliştirmek için.
* **Tailwind CSS:** Hızlı, esnek ve modern stil işlemleri için.
* **Axios:** Backend API ile haberleşmek ve HTTP istekleri atmak için.
* **React Router DOM:** Sayfalar arası hızlı geçiş (Routing) için.
* **React Icons:** Arayüzü zenginleştiren ikon seti için.

### Backend (Arka Yüz)
* **Node.js & Express:** Güçlü ve ölçeklenebilir sunucu mimarisi.
* **JWT (JSON Web Token):** Güvenli oturum yönetimi ve kimlik doğrulama için.
* **Bcrypt:** Parolaların güvenli bir şekilde hashlenerek saklanması için.
* **Dotenv:** Hassas verileri (API anahtarları vb.) yönetmek için.

### Veritabanı
* **PostgreSQL:** Kullanıcı ve görev verilerini tutan, güvenilir ve güçlü ilişkisel veritabanı.
* **pg (node-postgres):** Node.js uygulaması ile PostgreSQL veritabanı arasındaki iletişimi sağlayan sürücü..

## 📂 Proje Yapısı

Proje, **backend** ve **frontend** olmak üzere iki ana klasörden oluşan temiz bir mimariye sahiptir.

```text
auth-todo-app/
├── backend/
│   ├── middleware/
│   │   └── authenticateToken.js  # JWT doğrulama ara katmanı
│   ├── database.js               # Veritabanı bağlantı ayarları
│   ├── server.js                 # Ana sunucu dosyası
│   ├── login.js                  # Giriş işlemleri
│   ├── register.js               # Kayıt işlemleri
│   └── .env                      # Backend çevre değişkenleri
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/           # Sayfa bileşenleri
│   │   │   ├── AuthForm.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── config/
│   │   │   └── RouterConfig.jsx  # Yönlendirme yapılandırması
│   │   ├── App.jsx               # Ana uygulama bileşeni
│   │   └── main.jsx              # React giriş noktası
│   ├── tailwind.config.js        # CSS yapılandırması
│   └── vite.config.js            # Vite yapılandırması
│
└── README.md

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### 1. Projeyi Klonlayın
```bash
git clone [https://github.com/KULLANICI_ADINIZ/auth-todo-app.git](https://github.com/KULLANICI_ADINIZ/auth-todo-app.git)
cd auth-todo-app