import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Wesley Tzeng · Finance PhD Candidate",
      template: "%s · Wesley Tzeng",
    },
    description:
      "Academic website of Wesley Tzeng, Finance PhD candidate at National Chengchi University.",
    authors: [{ name: "Wesley Tzeng" }],
    icons: {
      icon: "/avatar.jpg",
      shortcut: "/avatar.jpg",
    },
    openGraph: {
      title: "Wesley Tzeng · Finance PhD Candidate",
      description:
        "Research in asset pricing, macro-finance, behavioral finance, and machine learning.",
      type: "website",
      images: [
        {
          url: new URL("/og-dark.png", metadataBase),
          width: 1536,
          height: 1024,
          alt: "Wesley Tzeng — Finance PhD Candidate",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wesley Tzeng · Finance PhD Candidate",
      description:
        "Research in asset pricing, macro-finance, behavioral finance, and machine learning.",
      images: [new URL("/og-dark.png", metadataBase)],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
