"use client";

import { useState } from "react";

interface EmailStepProps {
    email: string;
    newsletter: boolean;
    onEmailChange: (email: string) => void;
    onNewsletterChange: (value: boolean) => void;
    onProceed: () => void;
    onBack: () => void;
}

export default function EmailStep({
    email,
    newsletter,
    onEmailChange,
    onNewsletterChange,
    onProceed,
    onBack,
}: EmailStepProps) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (value: string) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return "Email is required.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(trimmedValue)) {
            return "Please enter a valid email address.";
        }

        return "";
    };

    const handleEmailChange = (value: string) => {
        onEmailChange(value);

        if (error) {
            setError(validateEmail(value));
        }
    };

    const handleProceed = async () => {
        const validationError = validateEmail(email);

        if (validationError) {
            setError(validationError);
            return;
        }

        setError("");
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsLoading(false);
        onProceed();
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-16">
                {/* Logo */}
                <div className="pt-20">
                    <div
                        aria-label="Extroverts"
                        className="font-serif text-[76px] font-bold leading-none"
                    >
                        E
                    </div>
                </div>

                <section className="mt-12">
                    <h1 className="text-[30px] font-semibold leading-tight">
                        Enter your email
                    </h1>

                    <div className="mt-11">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => handleEmailChange(event.target.value)}
                            onBlur={() => setError(validateEmail(email))}
                            placeholder="EMAIL"
                            autoComplete="email"
                            className={`h-12 w-full rounded-[13px] border bg-transparent px-9 text-[19px] text-white outline-none placeholder:text-white/20 focus:border-white/70 ${error ? "border-red-500" : "border-white/30"}`}
                        />

                        {error && (
                            <p className="mt-2 px-1 text-sm text-red-500">
                                {error}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={handleProceed}
                        disabled={isLoading}
                        className="mt-9 flex h-12 w-full items-center justify-center rounded-[13px] bg-white text-[20px] font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? (
                            <span
                                className="h-6 w-6 animate-spin rounded-full border-2 border-black/30 border-t-black"
                                aria-label="Loading"
                            />
                        ) : (
                            "PROCEED"
                        )}
                    </button>

                    <label
                        htmlFor="newsletter"
                        className="mt-7 flex cursor-pointer items-center gap-3"
                    >
                        <input
                            id="newsletter"
                            type="checkbox"
                            checked={newsletter}
                            onChange={(event) =>
                                onNewsletterChange(event.target.checked)
                            }
                            className="size-8 appearance-none rounded-[11px] border border-white/30 bg-transparent checked:bg-white checked:shadow-[inset_0_0_0_9px_black]"
                        />

                        <span className="text-[19px] leading-6 text-white">
                            I&apos;d like to subscribe to your newsletter
                        </span>
                    </label>
                </section>
            </div>
        </main>
    );
}