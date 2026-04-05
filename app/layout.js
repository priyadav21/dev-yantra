import "./globals.css";

export const metadata = {
  title: "DevYantra",
  description: "Hacker.io Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}