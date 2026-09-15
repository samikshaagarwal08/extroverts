"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface OTPStepProps {
    email: string;
    otp: string;
    onOtpChange: (otp: string) => void;
    onVerify: () => void;
    onBack: () => void;
    onResend: () => void;
}

export default function OTPStep({
    email,
    otp,
    onOtpChange,
    onVerify,
    onBack,
    onResend,
}: OTPStepProps) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const digits = Array.from(
        { length: 6 },
        (_, index) => otp[index] ?? "",
    );

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (
        index: number,
        value: string,
    ) => {
        const digit = value.replace(/\D/g, "").slice(-1);

        const nextDigits = [...digits];
        nextDigits[index] = digit;

        const nextOtp = nextDigits.join("");

        onOtpChange(nextOtp);

        if (error) {
            setError("");
        }

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (
            event.key === "Backspace" &&
            !digits[index] &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (
        event: React.ClipboardEvent<HTMLInputElement>,
    ) => {
        event.preventDefault();

        const pastedValue = event.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        if (!pastedValue) {
            return;
        }

        onOtpChange(pastedValue);

        const nextIndex = Math.min(
            pastedValue.length,
            5,
        );

        inputRefs.current[nextIndex]?.focus();
    };

    const handleVerify = async () => {
        if (otp.length !== 6) {
            setError("Please enter the 6-digit OTP.");
            return;
        }

        setError("");
        setIsLoading(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 1000),
        );

        setIsLoading(false);

        onVerify();
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-16">
                <div className="flex justify-center pt-20">
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
                </div>

                <section className="mt-16">
                    <h1 className="text-[20px] font-normal">
                        ENTER OTP
                    </h1>

                    <div className="mt-10 grid grid-cols-6 gap-3">
                        {digits.map((digit, index) => (
                            <input
                                key={index}
                                ref={(element) => {
                                    inputRefs.current[index] = element;
                                }}
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                value={digit}
                                onChange={(event) =>
                                    handleChange(
                                        index,
                                        event.target.value,
                                    )
                                }
                                onKeyDown={(event) =>
                                    handleKeyDown(index, event)
                                }
                                onPaste={handlePaste}
                                aria-label={`OTP digit ${index + 1}`}
                                className="h-12.5 w-full border-b-4 border-white/20 bg-transparent text-center text-[27px] font-semibold text-white outline-none focus:border-white "
                            />
                        ))}
                    </div>

                    {error && (
                        <p className="mt-3 text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    <div className="mt-8 flex justify-end">
                        <button
                            type="button"
                            onClick={onResend}
                            className="text-[16px] text-white/40 transition-colors hover:text-white"
                        >
                            Resend OTP
                        </button>
                    </div>

                    <div className="mt-16 space-y-6">
                        <button
                            type="button"
                            onClick={handleVerify}
                            disabled={isLoading}
                            className="flex h-12 w-full items-center justify-center rounded-[13px] bg-white text-[20px] font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isLoading ? (
                                <span
                                    className="size-6 animate-spin rounded-full border-2 border-black/30 border-t-black"
                                    aria-label="Loading"
                                />
                            ) : (
                                "VERIFY"
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={onBack}
                            className="h-12 w-full rounded-[13px] border border-white bg-transparent text-[20px] font-semibold text-white transition hover:bg-white/10"
                        >
                            GO BACK
                        </button>
                    </div>

                    <p className="mt-8 text-[15px] leading-6 text-white/30">
                        <span className="mr-1">ⓘ</span>
                        A 6-digit OTP has been sent to {email}.
                    </p>
                </section>
            </div>
        </main>
    );
}