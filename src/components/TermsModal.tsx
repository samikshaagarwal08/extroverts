"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TermsModal({
  open,
  onOpenChange,
}: TermsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl! rounded-t-[28px] rounded-b-none border-0 bg-black p-0 text-white shadow-none sm:bottom-10 sm:top-auto sm:translate-y-0 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom"
      >
        <DialogHeader className="px-7 pt-7">
          <DialogTitle className="text-left text-2xl font-bold">
            Terms & Conditions
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[65vh] overflow-y-auto px-7 pb-8">
          <div className="space-y-5 text-sm leading-6 text-white/75">
            <p>
              Welcome to Extroverts! Please take a moment to read these to ensure a safe and enjoyable experience for everyone:
            </p>
            <ul>
              <li>
                <strong>Respect and Kindness:</strong>Treat everyone with respect ano courtesy. Personal boundaries must be respected at all times.
              </li>
              <li>
                <strong>Personal Contributions: </strong> Each attendee is responsible for their own expenses (food, drinks, etc.).
              </li>
              <li>
                <strong>App's Responsibility:</strong> The app connects people, we do not interfere between personal interactions or relations during the event.
              </li>
              <li>
                <strong>Zero Tolerance for Harassment: </strong> Any form of harassment (verbal, physical, or sexual) is not tolerated. Respectful behavior is essential.
              </li>
              <li>
                <strong>Sexual Conduct:</strong> All interactions must be consensual and respectful of personal boundaries.
              </li>
              <li>
                <strong>Safety First: </strong> Prioritize your safety and well-being. If you feel unsafe, leave or seek assistance.
              </li>
              <li>
                <strong>Alcohol & Substances:</strong> Drink responsibly and look out for one another.
              </li>
              <li>
                <strong>No Unapproved Recordings:</strong> Respect privacy-no recordings without consent.
              </li>
              <li>
                <strong>Right to Leave:</strong> You can leave or disconnect at any time if you feel uncomfortable.
              </li>
            </ul>
            <p>
              Thank you for helping us maintain a fun, respectful environment for everyone!

            </p>

          </div>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="mt-8 h-14 w-full rounded-[14px] bg-white text-base font-semibold text-black transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            CLOSE
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}