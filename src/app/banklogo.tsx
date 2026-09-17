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
        className={`flex items-center justify-center rounded-xl bg-muted px-4 text-sm font-semibold text-muted-foreground ${className}`}
        style={{
          minWidth: size,
          minHeight: 70,
        }}
      >
        {bankName}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-white ${className}`}
      style={{
        minWidth: size,
        minHeight: 70,
      }}
    >
      <img
        src={bank.logo}
        alt={bank.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="
          block
          max-h-[58px]
          w-auto
          max-w-[170px]
          object-contain
        "
      />
    </div>
  );
}