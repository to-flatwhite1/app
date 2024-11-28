import localFont from 'next/font/local';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className=" bg-black h-[3000px]">{children}</body>
        </html>
    );
}
