import "./globals.css";
import ProgressBarProvider from "./components/ProgressBarProvider";

export const metadata = {
  title: "DevYantra",
  description: "Hacker.io Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProgressBarProvider>
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}