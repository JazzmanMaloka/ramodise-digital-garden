import { Plus, BarChart3, Zap, FolderGit2 } from "lucide-react";

const plans = [
  { name: "Add more self-hosted apps", icon: Plus },
  { name: "Expand monitoring capabilities", icon: BarChart3 },
  { name: "Improve automations", icon: Zap },
  { name: "Host personal projects", icon: FolderGit2 },
];

export function FuturePlansList() {
  return (
    <div className="space-y-3">
      {plans.map((plan) => (
        <div key={plan.name} className="flex items-center gap-3 text-foreground/80">
          <plan.icon className="w-4 h-4 text-primary/60" />
          <span>{plan.name}</span>
        </div>
      ))}
    </div>
  );
}
