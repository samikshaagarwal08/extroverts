"use client";

import Image from "next/image";

interface InviteCodeStepProps {
    inviteCode: string;
    onInviteCodeChange: (value: string) => void;
    onSignUp: () => void;
    onBack: () => void;
}

export default function InviteCodeStep({
    inviteCode,
    onInviteCodeChange,
    onSignUp,
    onBack,
}: InviteCodeStepProps) {
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
                        Got an invite code?
                    </h1>

                    <p className="mt-4 text-base leading-6 text-white/70">
                        If you have one, enter it below. Otherwise,
                        you can skip this step.
                    </p>

                    <div className="mt-10">
                        <label className="mb-3 block text-sm">
                            INVITE CODE
                        </label>

                        <input
                            type="text"
                            value={inviteCode}
                            onChange={(e) =>
                                onInviteCodeChange(e.target.value)
                            }
                            placeholder="INVITE CODE (OPTIONAL)"
                            maxLength={30}
                            className="h-16 w-full rounded-xl border border-white/30 bg-transparent px-5 text-lg uppercase outline-none placeholder:text-white/20 focus:border-white"
                        />
                    </div>
                </div>

                <div className="mt-auto pb-10">
                    <button
                        type="button"
                        onClick={onSignUp}
                        className="h-12 w-full rounded-xl bg-white text-lg font-semibold text-black"
                    >
                        SIGN UP
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