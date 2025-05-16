import Header from '@/component/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import Footer from '@/component/Footer';
import { Toaster } from 'react-hot-toast';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Blog Du Lịch',
  description: 'Kể chuyện qua những cung đường...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='vi'>
      <body className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
        <Toaster
          position='top-right'
          reverseOrder={false}
          toastOptions={{
            className: '',
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
