"use client";

import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface PronounsStepProps {
    pronouns: string;
    onPronounsChange: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

const pronounOptions = [
    "He/Him",
    "She/Her",
    "They/Them",
    "Prefer not to say",
];

export default function PronounsStep({
    pronouns,
    onPronounsChange,
    onNext,
    onBack,
}: PronounsStepProps) {
    const [error, setError] = useState("");

    const handleNext = () => {
        if (!pronouns) {
            setError("Please select your pronouns");
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
                        What are your pronouns?
                    </h1>

                    <div className="mt-10">
                        <label className="mb-3 block text-sm">
                            PRONOUNS
                        </label>

                        <Select
                            value={pronouns}
                            onValueChange={(value: any) => {
                                onPronounsChange(value);
                                setError("");
                            }}
                        >
                            <SelectTrigger
                                className={`h-16! w-full rounded-xl border bg-transparent px-5 text-lg text-white shadow-none focus:ring-0 focus:ring-offset-0 ${error ? "border-red-500" : "border-white/30"} `}
                            >
                                <SelectValue placeholder="SELECT PRONOUNS" />
                            </SelectTrigger>

                            <SelectContent className="border-white/20 bg-[#171717] text-white">
                                {pronounOptions.map((option) => (
                                    <SelectItem
                                        key={option}
                                        value={option}
                                        className="cursor-pointer text-base focus:bg-white focus:text-black"
                                    >
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

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
                        disabled={!pronouns}
                        className="h-12 w-full rounded-xl bg-white text-lg font-semibold text-black disabled:text-gray-400"
                    >
                        NEXT
                    </button>

                    <button
                        type="button"
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