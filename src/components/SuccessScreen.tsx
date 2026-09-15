"use client";

import Image from "next/image";
import { useEffect } from "react";

interface SuccessScreenProps {
    onRedirect: () => void;
}

export default function SuccessScreen({
    onRedirect,
}: SuccessScreenProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onRedirect();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onRedirect]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-8 text-white">
            <div className="text-center">
                <div>
                    <Image
                        src="/images/logo.png"
                        alt="Extroverts"
                        width={70}
                        height={70}
                        priority
                        className="h-auto w-16"
                    />
                </div>

                <h1 className="mt-10 text-3xl font-bold">
                    LOGGED IN SUCCESSFULLY
                </h1>

                <p className="mt-4 text-white/50">
                    Redirecting you...
                </p>
            </div>
        </main>
    );
}