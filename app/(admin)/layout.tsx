import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity CMS Reddit",
  description: "reddit clone created by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
