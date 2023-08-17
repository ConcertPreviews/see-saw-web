import { Inter } from 'next/font/google';

import { GlobalStyle } from '@/styles/GlobalStyle';
// import './globals.css';
import StyledComponentsRegistry from '@/utils/libs/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'see-saw',
  description: 'Seat Preview by see-saw',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
