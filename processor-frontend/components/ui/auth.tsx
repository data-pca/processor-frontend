"use client";

interface Props {
    footerText?: React.ReactNode | string;
    showLogo?: boolean;
    heading?: string;
    loading?: boolean;
}

export default function AuthContainer(props: React.PropsWithChildren<Props>) {
    return (
    <>
        <div>
            <h1> Auth container </h1>
        </div>
    </>
    )
}