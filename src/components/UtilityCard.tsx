import { ReactNode } from "react";

interface UtilityCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const UtilityCard = ({ title, icon, children }: UtilityCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default UtilityCard;