interface TextRowProps {
  label: string;
  value?: string;
}

export default function TextRow({ label, value = "—" }: TextRowProps) {
  return (
    <div className="flex justify-between text-sm text-gray-700 dark:text-white/70">
      <span>{label}</span>
      <span className="text-gray-900 dark:text-white/70">{value}</span>
    </div>
  );
}
