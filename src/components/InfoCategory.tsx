import { ReactNode } from "react";

interface InfoCategoryProps {
  icon: string;
  title: string;
  priority: "high" | "medium" | "low";
  items: Array<{
    text: string;
    timing?: string;
  }>;
}

const priorityClasses = {
  high: "priority-high-border",
  medium: "priority-medium-border", 
  low: "priority-low-border"
};

export const InfoCategory = ({ icon, title, priority, items }: InfoCategoryProps) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm transition-all duration-300
      border-2 border-primary/50 bg-card/80 hover:bg-card/90
      hover:shadow-lg hover:-translate-y-1 hover:border-primary/80
      ${priorityClasses[priority]}
      group
    `}>
      {/* Hover light effect */}
      <div className="absolute inset-0 -translate-x-full transition-transform duration-500 
                      bg-gradient-to-r from-transparent via-primary/10 to-transparent 
                      group-hover:translate-x-full" />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-8 h-8 mr-3 
                          bg-primary text-primary-foreground rounded-full font-bold text-sm">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        </div>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start justify-between py-2 
                                     border-b border-primary/20 last:border-b-0
                                     transition-all duration-200 hover:text-primary/90 hover:pl-2">
              <span className="text-card-foreground/90">{item.text}</span>
              {item.timing && (
                <span className="text-xs text-muted-foreground ml-4 whitespace-nowrap">
                  {item.timing}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};