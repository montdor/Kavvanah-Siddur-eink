import type { Metadata,Viewport } from 'next';
import './globals.css';
import './mudita-eink.css';
export const metadata:Metadata={title:'Kavvanah · Your daily siddur',description:'Your multilingual siddur, Jewish calendar, prayer times, Jerusalem compass, and complete Tanakh. Read in Hebrew, with transliteration and translation layers, on any screen.'};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#152443'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;}
