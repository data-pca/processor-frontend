import { ReactNode } from "react";
import '@/styles/globals.css';

type Props = Readonly<{
    children: ReactNode;
}>;

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head/>
            <body>
                <main>{children}</main>
            </body>
            </html>
    );
}
