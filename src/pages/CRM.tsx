import { AppLayout } from "@/components/layout/AppLayout";
import { Users, Building2, Mail, Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CRMPage = () => (
  <AppLayout title="CRM">
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">CRM Dashboard</h2>
        <p className="text-sm text-muted-foreground">Customer relationship management and pipeline overview</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Contacts", value: "1,842", icon: Users },
          { label: "Companies", value: "647", icon: Building2 },
          { label: "Active Deals", value: "234", icon: Star },
          { label: "Pipeline Value", value: "$8.4M", icon: MapPin },
        ].map((m) => (
          <div key={m.label} className="bg-gradient-card border border-border rounded-xl p-5">
            <m.icon className="h-4 w-4 text-primary mb-2" />
            <div className="text-2xl font-bold text-foreground">{m.value}</div>
            <div className="text-xs text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Pipeline Stages</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { stage: "New", count: 42, value: "$840K" },
            { stage: "Contacted", count: 38, value: "$720K" },
            { stage: "Qualified", count: 31, value: "$1.2M" },
            { stage: "Proposal", count: 24, value: "$2.1M" },
            { stage: "Negotiation", count: 12, value: "$1.8M" },
            { stage: "Closed Won", count: 87, value: "$1.7M" },
          ].map((s) => (
            <div key={s.stage} className="min-w-[150px] bg-accent/50 border border-border rounded-lg p-4 text-center">
              <div className="text-xs text-muted-foreground mb-1">{s.stage}</div>
              <div className="text-lg font-bold text-foreground">{s.count}</div>
              <div className="text-xs text-primary">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AppLayout>
);

export default CRMPage;
