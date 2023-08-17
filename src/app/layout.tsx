import { Poppins } from 'next/font/google';

import { GlobalStyle } from '@/styles/GlobalStyle';
// import './globals.css';
import StyledComponentsRegistry from '@/utils/libs/registry';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  // variable: '--font-poppins',
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'see-saw',
  description: 'Seat Preview by see-saw',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
