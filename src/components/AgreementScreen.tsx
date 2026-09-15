"use client";

interface AgreementScreenProps {
    onAccept: () => void;
    onOpenTerms: () => void;
}

export default function AgreementScreen({
    onAccept,
    onOpenTerms,
}: AgreementScreenProps) {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-8">
                <div className="pt-20">
                    <div
                        aria-label="Extroverts"
                        className="font-serif text-[76px] font-bold leading-none"
                    >
                        E
                    </div>
                </div>

                <section className="mt-35">
                    <p className="text-[26px] font-bold uppercase leading-normal tracking-[-0.02em]">
                        BY USING THIS APP, YOU&apos;RE AGREEING TO KEEP THINGS FUN, SAFE,
                        AND RESPECTFUL... AND ALSO AGREEING TO OUR TERMS AND CONDITIONS.
                        POLITENESS IS A MUST—TREAT OTHERS HOW YOU&apos;D WANT TO BE
                        TREATED. EVERYONE HERE IS LOOKING FOR REASONS TO{" "}
                        <span className="text-[#b14cff]">PARTY</span>, SO BRING YOUR BEST
                        VIBE AND EXPECT THE SAME FROM OTHERS. LET&apos;S PARTY RESPONSIBLY
                        AND MAKE EVERY EXPERIENCE A GREAT ONE!
                    </p>
                </section>

                {/* Bottom actions */}
                <div className="mt-auto pb-16">
                    <p className="mb-7 text-[18px] text-white/55">
                        To proceed, accept{" "}
                        <button
                            type="button"
                            onClick={onOpenTerms}
                            className="text-white underline underline-offset-2 transition-opacity hover:opacity-70"
                        >
                            Terms and Conditions
                        </button>
                    </p>

                    <button
                        type="button"
                        onClick={onAccept}
                        className="h-12 w-full rounded-[14px] bg-white text-[21px] font-semibold text-black transition-transform hover:scale-[1.01] active:scale-[0.99]"
                    >
                        ACCEPT
                    </button>
                </div>
            </div>
        </main>
    );
}