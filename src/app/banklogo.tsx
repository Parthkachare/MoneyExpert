import { useState } from "react";
import { banks } from "./components/banks";

interface BankLogoProps {
  bankName: string;
  size?: number;
  className?: string;
}

export default function BankLogo({
  bankName,
  size = 180,
  className = "",
}: BankLogoProps) {
  const [failed, setFailed] = useState(false);

  const bank = banks.find(
    (item) => item.name.toLowerCase() === bankName.toLowerCase()
  );

  if (!bank || failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center px-4 text-center text-base font-semibold text-foreground ${className}`}
        style={{
          minWidth: size,
        }}
      >
        {bankName}
      </div>
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 ${className}`}
    >
      <div className="flex h-14 w-full items-center justify-center">
        <img
          src={bank.logo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="block h-auto max-h-14 w-auto max-w-[180px] object-contain"
        />
      </div>
      <span className="text-center text-sm font-semibold leading-tight text-foreground sm:text-base">
        {bankName}
      </span>
    </div>
  );
}