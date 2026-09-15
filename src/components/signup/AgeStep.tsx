"use client";

import { useState } from "react";

interface AgeStepProps {
    age: string;
    onAgeChange: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function AgeStep({
    age,
    onAgeChange,
    onNext,
    onBack,
}: AgeStepProps) {
    const [error, setError] = useState("");

    const handleAgeChange = (value: string) => {
        const numbersOnly = value.replace(/\D/g, "");

        onAgeChange(numbersOnly);

        if (error) {
            setError("");
        }
    };

    const handleNext = () => {
        const numericAge = Number(age);

        if (!age) {
            setError("Age is required");
            return;
        }

        if (numericAge < 18) {
            setError("You must be at least 18 years old");
            return;
        }

        setError("");
        onNext();
    };

    return (
        <main className="min-h-screen bg-black px-8 text-white">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col">
                <div className="flex items-center justify-between pt-10">
                    <div className="text-6xl font-serif font-bold">
                        E
                    </div>

                    <span className="text-sm font-bold">
                        GETTING READY
                    </span>
                </div>

                <div className="mt-28">
                    <h1 className="text-3xl font-bold">
                        How many years have you been partying?
                    </h1>

                    <div className="mt-10">
                        <label className="mb-3 block text-sm">
                            AGE
                        </label>

                        <input
                            type="text"
                            inputMode="numeric"
                            value={age}
                            onChange={(e) =>
                                handleAgeChange(e.target.value)
                            }
                            placeholder="AGE"
                            className={`h-16 w-full rounded-xl border bg-transparent px-5 text-lg outline-none ${error
                                    ? "border-red-500"
                                    : "border-white/30 focus:border-white"
                                }`}
                        />

                        {error && (
                            <p className="mt-2 text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        <p className="mt-5 text-base leading-6 text-white/70">
                            We need your age to verify you&apos;re eligible
                            and help others know who they&apos;re connecting
                            with.
                        </p>
                    </div>
                </div>

                <div className="mt-auto pb-10">
                    <button
                        onClick={handleNext}
                        disabled={!age}
                        className="h-16 w-full rounded-xl bg-white text-lg font-semibold text-black disabled:text-gray-400"
                    >
                        NEXT
                    </button>

                    <button
                        onClick={onBack}
                        className="mt-5 h-16 w-full rounded-xl border border-white text-lg font-semibold"
                    >
                        BACK
                    </button>
                </div>
            </div>
        </main>
    );
}