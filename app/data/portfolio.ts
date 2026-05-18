export interface PortfolioItem {
  slug: string;
  title: string;
  role: string;
  period: string;
  description: string;
  image: string;
  fullDescription?: string;
  roleDescription?: string;
  gallery?: string[];
}

export interface PortfolioCategory {
  title: string;
  description: string;
  items: PortfolioItem[];
}

export const categoryData: Record<string, PortfolioCategory> = {
  'pengalaman-organisasi': {
    title: "Pengalaman Organisasi & Kepanitiaan",
    description: "Berikut adalah daftar pengalaman organisasi, kepanitiaan, dan komunitas yang pernah saya ikuti.",
    items: [
      {
        slug: "bulan-bahasa",
        title: "Ketua Pelaksana - Event Bulan Bahasa",
        role: "Ketua Pelaksana (Project Manager)",
        period: "Oktober 2025",
        description: "Memimpin perayaan Bulan Bahasa yang melibatkan seluruh elemen sekolah dengan berbagai perlombaan literasi dan seni.",
        image: "",
        fullDescription: "Event Bulan Bahasa adalah program kerja tahunan terbesar yang diadakan setiap bulan Oktober untuk memperingati Sumpah Pemuda. Acara ini bertujuan untuk meningkatkan literasi dan kecintaan terhadap bahasa serta sastra. Kami menyelenggarakan berbagai kompetisi seperti cipta puisi, pidato, debat, hingga pementasan drama teater. Acara ini dihadiri oleh lebih dari 1000 siswa dan guru.",
        roleDescription: "Sebagai Ketua Pelaksana, saya bertanggung jawab penuh atas keseluruhan acara mulai dari perencanaan konsep, manajemen anggaran, hingga eksekusi di hari H. Saya memimpin tim yang terdiri dari 50 panitia dari berbagai divisi. Tantangan terbesar yang saya hadapi adalah mencari sponsor dan memastikan setiap divisi berkoordinasi dengan baik. Pengalaman ini sangat melatih kemampuan kepemimpinan, komunikasi, dan problem solving saya.",
        gallery: [
          "/organisasi/Bulba.jpg"
        ]
      },
      {
        slug: "ketua-osis",
        title: "Ketua Komunitas - Mokleters",
        role: "Ketua Komunitas",
        period: "2026 - 2027",
        description: "Memimpin lebih dari 90 anggota komunitas untuk merencanakan dan mengeksekusi tujuan yang sudah di impikan bersama. Bertanggung jawab penuh membawa nama baik Supporter Sekolah.",
        image: "/organisasi/Mokleters.jpg",
        fullDescription: "Menjabat sebagai Ketua Komunitas Mokleters adalah pengalaman yang sangat transformatif. Selama masa jabatan, kami berhasil mengelola anggaran sebesar Rp.50jt+ yang terkumpul dari berbagai sumber.",
        roleDescription: "Tugas utama saya adalah mengawasi seluruh departemen, memimpin rapat mingguan, dan menjadi jembatan komunikasi antara siswa dan pihak sekolah (guru & kepala sekolah).",
        gallery: [
          "/organisasi/Mokleters.jpg"
        ]
      },
      {
        slug: "koordinator-event-festival",
        title: "Koordinator Event - Festival Tahunan",
        role: "Koordinator Event (Project Manager)",
        period: "2022",
        description: "Menangani krisis (crisis management) dan berkoordinasi dengan berbagai divisi seperti logistik, acara, dan humas untuk memastikan jalannya acara dengan lancar yang dihadiri 5000+ pengunjung.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
        fullDescription: "Festival Tahunan adalah acara musik dan seni terbesar di kota. Saya dipercaya sebagai koordinator event yang membawahi divisi operasional lapangan. Tantangan terbesar adalah mengatur alur keluar-masuk 5000+ pengunjung dan memastikan keamanan.",
        roleDescription: "Saya bertugas membuat rundown acara, memetakan venue, dan melakukan crisis management jika terjadi hal-hal di luar rencana. Berkoordinasi langsung dengan pihak kepolisian dan tenaga medis.",
        gallery: [
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop"
        ]
      }
    ]
  },
  'frontend-development': {
    title: "Frontend Development",
    description: "Berikut adalah beberapa proyek pengembangan aplikasi berbasis web yang pernah saya buat.",
    items: [
      {
        slug: "ecommerce-lokal",
        title: "Aplikasi E-Commerce Lokal",
        role: "Frontend Developer",
        period: "2025",
        description: "Membuat platform e-commerce menggunakan Next.js, Node.js, dan MongoDB. Dilengkapi dengan fitur integrasi pembayaran lokal untuk memudahkan transaksi UMKM.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        fullDescription: "Platform ini dibangun untuk membantu UMKM lokal memasarkan produk mereka secara online dengan biaya yang minim. Menggunakan Next.js App Router untuk performa SEO yang optimal.",
        roleDescription: "Sebagai Frontend Developer, saya merancang antarmuka yang responsif, mengintegrasikan API dari backend, dan memastikan pengalaman berbelanja pengguna (UX) berjalan dengan lancar dan intuitif.",
        gallery: [
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        slug: "sistem-informasi-sekolah",
        title: "Sistem Informasi Manajemen Sekolah",
        role: "Frontend Developer",
        period: "2024",
        description: "Membangun sistem informasi berbasis web menggunakan React dan Tailwind CSS yang mengotomatisasi absensi dan penilaian dengan antarmuka yang intuitif dan mudah digunakan.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        fullDescription: "Sistem ini membantu guru-guru di sekolah dalam menginput absensi dan nilai rapor secara digital, menggantikan sistem manual berbasi kertas. Terdapat juga dashboard analitik untuk kepala sekolah.",
        roleDescription: "Saya bertugas membangun komponen-komponen UI menggunakan Tailwind CSS dan mengimplementasikan state management menggunakan Redux Toolkit.",
        gallery: [
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
        ]
      }
    ]
  },
  'ui-ux-design': {
    title: "UI/UX Design",
    description: "Berikut adalah beberapa hasil karya perancangan antarmuka dan riset pengguna.",
    items: [
      {
        slug: "redesain-perpustakaan",
        title: "Redesain Aplikasi Perpustakaan",
        role: "UI/UX Designer",
        period: "2023",
        description: "Melakukan riset pengguna, wireframing, hingga prototyping menggunakan Figma untuk merancang ulang antarmuka aplikasi perpustakaan daerah, sehingga mempermudah proses peminjaman.",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
        fullDescription: "Aplikasi perpustakaan daerah sebelumnya memiliki UI yang usang dan sulit dinavigasi. Proyek ini bertujuan untuk meremajakan tampilan dan memperbaiki User Experience terutama dalam proses peminjaman buku.",
        roleDescription: "Melakukan riset kepada 20+ pengunjung perpustakaan, membuat User Persona, menyusun Information Architecture, dan mendesain High-Fidelity Prototype menggunakan Figma.",
        gallery: [
          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop"
        ]
      },
      {
        slug: "aplikasi-kesehatan-mental",
        title: "Desain Aplikasi Kesehatan Mental",
        role: "Product Designer",
        period: "2024",
        description: "Merancang antarmuka untuk aplikasi yang berfokus pada tracking suasana hati dan mediasi dengan pendekatan desain yang menenangkan (calm design).",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
        fullDescription: "Aplikasi kesehatan mental ini bertujuan membantu pengguna melacak mood harian mereka dan menyediakan fitur meditasi terpandu. Kami menggunakan prinsip 'Calm Design' dengan palet warna yang menenangkan.",
        roleDescription: "Sebagai Product Designer, saya merumuskan solusi desain dari awal hingga akhir, melakukan usability testing, dan membuat design system yang konsisten.",
        gallery: [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
        ]
      }
    ]
  }
};
