import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
    title: "Food For Kiss",
    description: "Закажите еду у своего друга или партнёра за поцелуи и другие ценности!",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="ru">
            <body>
                <Header/>
                {children}
                <div className={'background'} style={{background: 'url("/background.jpg")', backgroundSize: 'cover'}}/>
            </body>
        </html>
    );
}
