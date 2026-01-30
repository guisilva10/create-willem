import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/providers/query-client-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "./_components/ui/sonner";

export const metadata: Metadata = {
  title: "Create Willem",
  description: "The boilerplate for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
