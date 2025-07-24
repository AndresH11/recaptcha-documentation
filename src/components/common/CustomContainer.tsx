interface CustomContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function CustomContainer({
  className,
  children,
}: CustomContainerProps) {
  return (
    <div className={`bg-customBlack shadow rounded-xl ${className || ""}`}>
      {children}
    </div>
  );
}
