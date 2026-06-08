import './globals.css'
import Header from '@/components/Header' 
import Footer from '@/components/Footer' // <-- Import Footer yang baru dibuat

export const metadata = {
  title: 'Hidayah TV | Jasa Pasang Antena TV Digital, Parabola & Penangkal Petir',
  description: 'Spesialis instalasi antena TV digital, parabola, service antena, dan penangkal petir. Profesional, bergaransi, dikerjakan oleh teknisi ahli area Surabaya & sekitarnya.',

  // TAMBAHKAN BAGIAN INI:
  verification: {
    google: 'wzEV8vjz48aeh4m433Nx0Qt84MkzoM3u0y5m1yQYZMk',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Tambahan flex flex-col min-h-screen agar layout stabil dan footer selalu di bawah */}
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen font-sans">
        
        {/* Header akan selalu muncul di atas di setiap halaman */}
        <Header /> 

        {/* children adalah isi dari page.jsx (halaman yang berubah-ubah) dibungkus main flex-grow */}
        <main className="flex-grow">
          {children} 
        </main>

        {/* Footer akan selalu muncul di bawah di setiap halaman */}
        <Footer />

      </body>
    </html>
  )
}