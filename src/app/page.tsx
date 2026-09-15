"use client";

import { useState } from "react";

import LandingScreen from "@/components/LandingScreen";
import AgreementScreen from "@/components/AgreementScreen";
import TermsModal from "@/components/TermsModal";
import EmailStep from "@/components/signup/EmailStep";
import OTPStep from "@/components/signup/OTPStep";

type Screen =
  | "landing"
  | "agreement"
  | "email"
  | "otp";

export default function Home() {
  const [screen, setScreen] =
    useState<Screen>("landing");

  const [termsOpen, setTermsOpen] =
    useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newsletter, setNewsletter] =
    useState(false);

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

  if (screen === "email") {
    return (
      <EmailStep
        email={email}
        newsletter={newsletter}
        onEmailChange={setEmail}
        onNewsletterChange={setNewsletter}
        onProceed={() => {
          setScreen("otp");
        }}
        onBack={() => {
          setScreen("agreement");
        }}
      />
    );
  }

  return (
    <OTPStep
      email={email}
      otp={otp}
      onOtpChange={setOtp}
      onVerify={() => {
        console.log("OTP verified");
      }}
      onBack={() => {
        setScreen("email");
      }}
      onResend={() => {
        console.log("OTP resent");
      }}
    />
  );
}