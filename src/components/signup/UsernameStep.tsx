"use client";

import Image from "next/image";
import { useState } from "react";

interface UsernameStepProps {
    username: string;
    onUsernameChange: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function UsernameStep({
    username,
    onUsernameChange,
    onNext,
    onBack,
}: UsernameStepProps) {
    const [error, setError] = useState("");

    const handleNext = () => {
        const value = username.trim();

        if (!value) {
            setError("Username is required");
            return;
        }

        if (value.length < 6) {
            setError("Username must be at least 6 characters");
            return;
        }

        setError("");
        onNext();
    };

    return (
        <main className="min-h-screen bg-black px-8 text-white">
            <div className="mx-auto flex min-h-screen max-w-xl flex-col">
                <div className="flex items-center justify-between pt-10">
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

                    <span className="text-sm font-bold">
                        GETTING READY
                    </span>
                </div>

                <div className="mt-28">
                    <h1 className="text-3xl font-bold">
                        Create a username that fits your vibe!
                    </h1>

                    <div className="mt-10">
                        <label className="mb-3 block text-sm">
                            USERNAME
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => {
                                onUsernameChange(e.target.value);

                                if (error) {
                                    setError("");
                                }
                            }}
                            placeholder="USERNAME"
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
                            All your Superlatives and Invites will come your
                            way with this name, so make it unforgettable!
                        </p>
                    </div>
                </div>

                <div className="mt-auto pb-10">
                    <button
                        onClick={handleNext}
                        disabled={!username.trim()}
                        className="h-12 w-full rounded-xl bg-white text-lg font-semibold text-black disabled:text-gray-400"
                    >
                        NEXT
                    </button>

                    <button
                        onClick={onBack}
                        className="mt-5 h-12 w-full rounded-xl border border-white text-lg font-semibold"
                    >
                        BACK
                    </button>
                </div>
            </div>
        </main>
    );
}