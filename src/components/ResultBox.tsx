import { ReactNode } from "react";

interface ResultBoxProps {
  children: ReactNode;
  variant?: "primary" | "success" | "warning";
}

const ResultBox = ({ children, variant = "primary" }: ResultBoxProps) => {
  const variants = {
    primary: "bg-accent/50 border-primary/20 text-primary",
    success: "bg-success/10 border-success/20 text-success",
    warning: "bg-destructive/10 border-destructive/20 text-destructive",
  };

  return (
    <div className={`mt-4 p-4 rounded-xl border-2 ${variants[variant]} font-medium text-center transition-all duration-300`}>
      {children}
    </div>
  );
};

export default ResultBox;