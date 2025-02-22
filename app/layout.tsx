import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk  = Space_Grotesk ({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title:'Kumar Saurabh',
	authors: {
		name: "Kumar Saurabh",
	},

	description:
	"Based in India, I'm a FullStack developer passionate about building a modern web application that users love and integratee xcitin features in it.",
	openGraph: {
		title: "Kumar Saurabh",
		description:
			"Based in India, I'm a FullStack developer passionate about building a modern web application that users love and integratee xcitin features in it.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "Kumar Saurabh",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}> 
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
