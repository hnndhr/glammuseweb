import '../styles/globals.css';
import {
  Syne,
  Playfair_Display,
  Hanuman,
  Manrope,
  Marck_Script,
  Port_Lligat_Slab,
  Courgette,
  MedievalSharp,
  Inter,
} from 'next/font/google';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const hanuman = Hanuman({ weight: '400', subsets: ['latin'], variable: '--font-hanuman' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const marck = Marck_Script({ weight: '400', subsets: ['latin'], variable: '--font-marck' });
const lligat = Port_Lligat_Slab({ weight: '400', subsets: ['latin'], variable: '--font-lligat' });
const courgette = Courgette({ weight: '400', subsets: ['latin'], variable: '--font-courgette' });
const medieval = MedievalSharp({ weight: '400', subsets: ['latin'], variable: '--font-medieval' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Glammuse',
  description: 'Your personal beauty & fashion assistant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={[
        syne.variable,
        playfair.variable,
        hanuman.variable,
        manrope.variable,
        marck.variable,
        lligat.variable,
        courgette.variable,
        medieval.variable,
        inter.variable,
      ].join(' ')}
    >
      <body>{children}</body>
    </html>
  );
}
