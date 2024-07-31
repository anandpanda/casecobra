import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={recursive.className}>
				<Navbar />
				<main className="flex flex-col justify-between grainy-light min-h-[calc(100vh-3.5rem-1px)]">
					<Providers>{children}</Providers>
					<Footer />
				</main>

				<Toaster />
			</body>
		</html>
	);
}
