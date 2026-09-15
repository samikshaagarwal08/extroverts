"use client";

import AgreementScreen from "@/components/AgreementScreen";
import LandingScreen from "@/components/LandingScreen";
import TermsModal from "@/components/TermsModal";
import { useState } from "react";


type Screen = "landing" | "agreement" | "email";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [termsOpen, setTermsOpen] = useState(false);

  if (screen === "landing") {
    return (
      <LandingScreen
        onContinue={() => {
          setScreen("agreement");
        }}
      />
    );
  }

  if (screen === "agreement") {
    return (
      <>
        <AgreementScreen
          onAccept={() => {
            setScreen("email");
          }}
          onOpenTerms={() => {
            setTermsOpen(true);
          }}
        />

        <TermsModal
          open={termsOpen}
          onOpenChange={setTermsOpen}
        />
      </>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <p>Email screen coming next...</p>
    </main>
  );
}