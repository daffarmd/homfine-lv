interface SocialButtonProps {
  type?: "button" | "link";   // default button
  href?: string;              // dipakai kalau type = link
  ariaLabel: string;          // label untuk screen reader
  icon: string;               // path ke icon
  labelName?: string;         // teks yang muncul
  onClick?: () => void;       // handler kalau type=button
}

interface SocialLoginProps {
  children: React.ReactNode;
}

export function SocialButton({
  type = "button",
  href,
  ariaLabel,
  icon,
  labelName,
  onClick,
}: SocialButtonProps) {
  const className =
    "flex items-center justify-center border border-gray-300 rounded-xl py-2.5 text-gray-600 text-sm hover:bg-gray-100 hover:border-[#1F6B4A] transition-all duration-300 mb-6";

  if (type === "link" && href) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        <img src={icon} alt={`${ariaLabel} icon`} className="h-5 w-5" />
        {labelName && <span className="ml-2">{labelName}</span>}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className} aria-label={ariaLabel}>
      <img src={icon} alt={`${ariaLabel} icon`} className="h-5 w-5" />
      {labelName && <span className="ml-2">{labelName}</span>}
    </button>
  );
}

export function SocialLogin({ children }: SocialLoginProps) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}
