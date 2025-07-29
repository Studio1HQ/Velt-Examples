import Link from "next/link";

interface LinkRowProps {
  label: string;
  value: string;
  href: string;
}

export default function LinkRow({ label, value, href }: LinkRowProps) {
  return (
    <div className="flex justify-between text-sm text-gray-700">
      <span>{label}</span>
      <Link href={href} className="text-blue-600 hover:underline">
        {value} →
      </Link>
    </div>
  );
}
