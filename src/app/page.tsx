"use client";

import { useState } from "react";

import LandingScreen from "@/components/LandingScreen";
import AgreementScreen from "@/components/AgreementScreen";
import TermsModal from "@/components/TermsModal";
import EmailStep from "@/components/signup/EmailStep";
import OTPStep from "@/components/signup/OTPStep";
import UsernameStep from "@/components/signup/UsernameStep";
import AgeStep from "@/components/signup/AgeStep";
import SuccessScreen from "@/components/SuccessScreen";
import InviteCodeStep from "@/components/signup/InviteCodeStep";
import PronounsStep from "@/components/signup/PronounsStep";

type Screen =
  | "landing"
  | "agreement"
  | "email"
  | "otp"
  | "username"
  | "age"
  | "pronouns"
  | "invite"
  | "success";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [termsOpen, setTermsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [newsletter, setNewsletter] = useState(false);

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

  if (screen === "otp") {
    return (
      <OTPStep
        email={email}
        otp={otp}
        onOtpChange={setOtp}
        onVerify={() => {
          setScreen("username");
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


  if (screen === "username") {
    return (
      <UsernameStep
        username={username}
        onUsernameChange={setUsername}
        onNext={() => setScreen("age")}
        onBack={() => console.log("Back")}
      />
    );
  }

  if (screen === "age") {
    return (
      <AgeStep
        age={age}
        onAgeChange={setAge}
        onNext={() => setScreen("pronouns")}
        onBack={() => setScreen("username")}
      />
    );
  }

  if (screen === "pronouns") {
    return (
      <PronounsStep
        pronouns={pronouns}
        onPronounsChange={setPronouns}
        onNext={() => setScreen("invite")}
        onBack={() => setScreen("age")}
      />
    );
  }

  if (screen === "invite") {
    return (
      <InviteCodeStep
        inviteCode={inviteCode}
        onInviteCodeChange={setInviteCode}
        onSignUp={() => setScreen("success")}
        onBack={() => setScreen("pronouns")}
      />
    );
  }


  return (
    <SuccessScreen
      onRedirect={() => {
        window.location.href = "https://extroverts.app/";
      }}
    />
  );
}