type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-200 p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {subtitle && (
        <p className="text-neutral-500 mt-2">{subtitle}</p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  );
}