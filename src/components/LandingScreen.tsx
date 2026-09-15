"use client";

interface LandingScreenProps {
    onContinue: () => void;
}

export default function LandingScreen({
    onContinue,
}: LandingScreenProps) {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black">
            <div
                className="absolute inset-x-0 top-0 h-[72vh] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/landing-bg.png')",
                }}
            />

            <div className="absolute inset-x-0 top-0 h-[82vh] bg-linear-to-b from-transparent via-transparent to-black" />

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col">
                <div className="flex justify-center pt-[clamp(8rem,25vh,15rem)]">
                    <div
                        aria-label="Extroverts"
                        className="font-serif text-[82px] font-bold leading-none text-white"
                    >
                        E
                    </div>
                </div>

                <div className="mt-auto px-6 pb-[clamp(2rem,5vh,4rem)] text-center">
                    <p className="text-[20px] font-semibold leading-tight text-white sm:text-[22px]">
                        AN APP ONLY FOR
                    </p>

                    <h1 className="mt-1 text-[42px] font-bold leading-[1.05] tracking-tight text-white sm:text-[48px]">
                        EXTROVERTS
                    </h1>

                    <p className="mx-auto mt-8 max-w-xl text-[17px] font-normal leading-[1.45] text-white sm:text-[18px]">
                        <span className="text-extrovert-warning">Warning:</span>{" "}
                        Entering may lead to spontaneous dancing and unsolicited
                        high-fives!
                    </p>

                    <button
                        type="button"
                        onClick={onContinue}
                        className="mt-7 flex h-12 w-full items-center justify-center rounded-[14px] bg-white px-6 text-[20px] font-semibold text-black transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                    >
                        CONTINUE
                    </button>
                </div>
            </div>
        </main>
    );
}