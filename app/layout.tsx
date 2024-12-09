import './globals.css';
import Sidebar from '../components/Sidebar/Sidebar';

export const metadata = {
  title: 'Bookshop Management',
  description: 'Business management system for bookshops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-64 p-8 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
