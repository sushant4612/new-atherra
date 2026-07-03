import Image from "next/image";

export function BrandMark({ dark }: { dark?: boolean }) {
  return (
    <span className={`brand-lockup${dark ? " dark" : ""}`}>
      <Image
        src="/logo-icon.png"
        alt=""
        width={40}
        height={40}
        className="brand-icon"
        priority
      />
      <span className="brand-divider" aria-hidden="true" />
      <span className="brand-wordmark">
        Mahadik <span className="amp">&amp;</span> Company
      </span>
    </span>
  );
}
