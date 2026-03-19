import { AppLayout } from "@/components/layout/AppLayout";
import { Shield, Users, Building2, Database, Activity, Settings, Lock, Server, GitBranch, Cpu } from "lucide-react";

const systemCards = [
  { title: "Users & Roles", desc: "Manage 247 users across 4 role types", icon: Users, stat: "247 active" },
  { title: "Locations", desc: "60+ XPS franchise locations configured", icon: Building2, stat: "63 locations" },
  { title: "Database", desc: "PostgreSQL cluster health and metrics", icon: Database, stat: "99.9% uptime" },
  { title: "Security", desc: "RBAC policies, audit trails, and compliance", icon: Lock, stat: "All clear" },
  { title: "AI Factory", desc: "xps-ai-factory model status and endpoints", icon: Cpu, stat: "3 models" },
  { title: "Deployments", desc: "Railway + GitHub deployment pipeline", icon: Server, stat: "v2.4.1" },
  { title: "Repositories", desc: "GitHub sync for xps-scraper, open-agent-builder", icon: GitBranch, stat: "4 repos" },
  { title: "Activity Log", desc: "System-wide audit and event logging", icon: Activity, stat: "12.4K events" },
];

const auditLog = [
  { user: "Admin", action: "Updated RBAC policy for Manager role", time: "2 min ago" },
  { user: "System", action: "Auto-deployed v2.4.1 from main branch", time: "1 hour ago" },
  { user: "Admin", action: "Added new location: Nashville, TN", time: "3 hours ago" },
  { user: "System", action: "AI model fine-tuning completed", time: "Yesterday" },
  { user: "Admin", action: "Updated email templates for Southeast region", time: "Yesterday" },
];

const AdminPage = () => (
  <AppLayout title="Admin">
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Admin Control Plane</h2>
        <p className="text-sm text-muted-foreground">System administration, security, and infrastructure management</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {systemCards.map((card) => (
          <div key={card.title} className="bg-gradient-card border border-border rounded-xl p-5 hover:border-gold transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <card.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs text-primary font-medium">{card.stat}</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{card.title}</h3>
            <p className="text-xs text-muted-foreground">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Audit Log */}
      <div className="bg-gradient-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Recent Audit Log</h3>
        <div className="space-y-3">
          {auditLog.map((entry, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${entry.user === "System" ? "bg-blue-500/10 text-blue-400" : "bg-primary/10 text-primary"}`}>{entry.user}</span>
                <span className="text-sm text-foreground">{entry.action}</span>
              </div>
              <span className="text-xs text-muted-foreground shrink-0 ml-4">{entry.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AppLayout>
);

export default AdminPage;
