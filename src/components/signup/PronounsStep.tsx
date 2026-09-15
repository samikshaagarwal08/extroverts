"use client";

import { useState } from "react";

interface PronounsStepProps {
    pronouns: string;
    onPronounsChange: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function PronounsStep({
    pronouns,
    onPronounsChange,
    onNext,
    onBack,
}: PronounsStepProps) {
    const [error, setError] = useState("");

    const handleNext = () => {
        if (!pronouns.trim()) {
            setError("Please enter your pronouns");
            return;
        }

        setError("");
        onNext();
    };

    return (
        <main className="min-h-screen bg-black px-8 text-white">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col">
                {/* Header */}
                <div className="flex items-center justify-between pt-10">
                    <div className="font-serif text-6xl font-bold">
                        E
                    </div>

                    <span className="text-sm font-bold">
                        GETTING READY
                    </span>
                </div>

                <div className="mt-28">
                    <h1 className="text-3xl font-bold">
                        What are your pronouns?
                    </h1>

                    <div className="mt-10">
                        <label className="mb-3 block text-sm">
                            PRONOUNS
                        </label>

                        <input
                            type="text"
                            value={pronouns}
                            onChange={(e) => {
                                onPronounsChange(e.target.value);

                                if (error) {
                                    setError("");
                                }
                            }}
                            onBlur={() => {
                                if (!pronouns.trim()) {
                                    setError("Please enter your pronouns");
                                }
                            }}
                            placeholder="PRONOUNS"
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
                            Let others know how you&apos;d like to be
                            addressed.
                        </p>
                    </div>
                </div>

                <div className="mt-auto pb-10">
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={!pronouns.trim()}
                        className="h-16 w-full rounded-xl bg-white text-lg font-semibold text-black disabled:text-gray-400"
                    >
                        NEXT
                    </button>

                    <button
                        type="button"
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