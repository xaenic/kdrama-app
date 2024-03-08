import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Nexus - KDrama Streaming App",
  description:
    "Discover a world of captivating Korean dramas with K-Drama Nexus. Stream your favorite shows seamlessly, indulge in thrilling plots, heartwarming romances, and immerse yourself in the vibrant culture of South Korea. Start your binge-watching journey today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
