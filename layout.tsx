import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bhavana Gutta | AI & Full-Stack Developer',
  description: 'Portfolio of Bhavana Gutta: AI Researcher, Full-Stack Developer, and Machine Learning Engineer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
