import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'The AI timeline — AI, in order',
 description:'The breakthroughs, strange moments and public arguments that shaped AI. A simple, sourced timeline from the early ideas to September 2026.',
 metadataBase:new URL('https://aicompletetimeline.vercel.app'),
 openGraph:{title:'The AI timeline',description:'From machines that recognise cats to machines that do research. The moments that got us here.',type:'website'},
 icons:{icon:'/favicon.svg'}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
