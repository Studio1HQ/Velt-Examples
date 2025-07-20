interface StatusPillProps {
  status: "active" | "inactive" | string;
}

export default function StatusPill({ status }: StatusPillProps) {
  const isActive = status.toLowerCase() === "active";
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        isActive
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-500"
      }`}
    >
      {status}
    </span>
  );
}
