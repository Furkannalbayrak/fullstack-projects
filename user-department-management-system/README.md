# 📝 Kullanıcı ve Departman Yönetim Sistemi

Bu proje; şirket veya organizasyonlar için geliştirilmiş, departman ve personel yönetimini sağlayan kapsamlı bir web uygulamasıdır. PERN yığını (PostgreSQL, Express, React, Node.js) kullanılarak geliştirilmiştir. Kullanıcıların departmanlara göre organize edilebildiği, detaylı filtreleme ve yönetim işlemlerinin yapılabildiği full-stack bir projedir.

## 🚀 Özellikler

* **Departman Yönetimi:** Yeni departman oluşturma, mevcut departmanları listeleme, güncelleme ve silme işlemleri.
* **Kullanıcı (Personel) Yönetimi:** Sisteme yeni kullanıcı ekleme, bilgilerini güncelleme ve silme yeteneği.
* **Gelişmiş Filtreleme:** Kullanıcıları **İsim** veya **ID** bazlı arama ve filtreleme özellikleri.
* **Responsive (Duyarlı) Tasarım:** **Tailwind CSS** sayesinde tüm cihazlarda uyumlu ve modern arayüz.
* **Modüler Yapı:** Departman ve kullanıcı işlemleri için ayrılmış özel bileşen mimarisi.

## 🛠️ Teknoloji Yığını

Projede güncel ve endüstri standardı teknolojiler kullanılmıştır.

### Frontend (Ön Yüz)
* **React (Vite):** Hızlı ve modüler kullanıcı arayüzü geliştirmek için.
* **Tailwind CSS:** Hızlı, esnek ve modern stil işlemleri için.
* **Axios:** Backend API ile veri alışverişi sağlamak için.
* **React Router DOM:** Sayfalar ve paneller arası yönlendirme (Routing) için.

### Backend (Arka Yüz)
* **Node.js & Express:** RESTful API yapısını kurmak ve sunucu işlemlerini yönetmek için.
* **Router Yapısı:** Kodun okunabilirliğini artırmak için ayrıştırılmış rota (route) yönetimi.
* **Dotenv:** Veritabanı bağlantı bilgileri gibi hassas verileri yönetmek için.

### Veritabanı
* **PostgreSQL:** İlişkisel veri yapısını (Kullanıcı-Departman ilişkisi) tutan güçlü veritabanı.
* **pg (node-postgres):** Node.js üzerinden veritabanı sorgularını çalıştırmak için kullanılan sürücü.

## 📂 Proje Yapısı

Proje, **backend** ve **frontent** olmak üzere iki ana klasörden oluşan düzenli bir mimariye sahiptir.

```text
user-department-management-system/
├── backend/
│   ├── routes/
│   │   ├── departments.js        # Departman API rotaları
│   │   └── users.js              # Kullanıcı API rotaları
│   ├── database.js               # Veritabanı bağlantı ayarları
│   ├── server.js                 # Ana sunucu dosyası
│   └── .env                      # Backend çevre değişkenleri
│
├── frontent/
│   ├── public/
│   ├── src/
│   │   ├── components/           # Genel sayfa bileşenleri
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Panel.jsx
│   │   ├── departmentPanelComponents/ # Departman CRUD bileşenleri
│   │   │   ├── AddDepartment.jsx
│   │   │   ├── ListDepartment.jsx
│   │   │   └── ...
│   │   ├── userPanelComponents/       # Kullanıcı CRUD bileşenleri
│   │   │   ├── AddUser.jsx
│   │   │   ├── UpdateUser.jsx
│   │   │   └── ...
│   │   ├── filterComponents/          # Arama ve filtreleme bileşenleri
│   │   │   ├── AllUsers.jsx
│   │   │   ├── IdUsers.jsx
│   │   │   └── NameUsers.jsx
│   │   ├── config/
│   │   │   ├── RouterConfig.jsx  # Yönlendirme yapılandırması
│   │   ├── App.jsx               # Ana uygulama bileşeni
│   │   └── main.jsx              # React giriş noktası
│   ├── tailwind.config.js        # CSS yapılandırması
│   └── vite.config.js            # Vite yapılandırması
│
└── README.md
```

## 📜 License
Bu proje MIT lisansı altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz.

