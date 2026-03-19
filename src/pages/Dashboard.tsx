import { AppLayout } from "@/components/layout/AppLayout";
import { motion } from "framer-motion";
import {
  TrendingUp, Users, FileText, Target, ArrowUpRight, ArrowDownRight,
  BarChart3, DollarSign, Phone, Mail, Calendar, Brain
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const kpis = [
  { label: "Active Leads", value: "2,847", change: "+12.4%", up: true, icon: Users },
  { label: "Pipeline Value", value: "$4.2M", change: "+8.7%", up: true, icon: DollarSign },
  { label: "Proposals Sent", value: "342", change: "+23.1%", up: true, icon: FileText },
  { label: "Close Rate", value: "34.2%", change: "-1.3%", up: false, icon: Target },
];

const revenueData = [
  { month: "Jul", value: 320000 }, { month: "Aug", value: 380000 }, { month: "Sep", value: 350000 },
  { month: "Oct", value: 420000 }, { month: "Nov", value: 490000 }, { month: "Dec", value: 460000 },
  { month: "Jan", value: 520000 }, { month: "Feb", value: 580000 }, { month: "Mar", value: 610000 },
];

const pipelineData = [
  { name: "Prospecting", value: 420, color: "hsl(43, 56%, 54%)" },
  { name: "Qualified", value: 310, color: "hsl(43, 60%, 65%)" },
  { name: "Proposal", value: 180, color: "hsl(0, 0%, 55%)" },
  { name: "Negotiation", value: 90, color: "hsl(0, 0%, 40%)" },
  { name: "Closed Won", value: 140, color: "hsl(142, 50%, 45%)" },
];

const recentLeads = [
  { company: "Ace Hardware Distribution", vertical: "Retail", score: 92, stage: "Proposal", value: "$45K" },
  { company: "Tampa Bay Brewing Co.", vertical: "Food & Bev", score: 87, stage: "Qualified", value: "$28K" },
  { company: "Sunshine Auto Group", vertical: "Automotive", score: 84, stage: "Prospecting", value: "$62K" },
  { company: "Gulf Coast Logistics", vertical: "Warehouse", score: 78, stage: "Negotiation", value: "$120K" },
  { company: "Palm Medical Center", vertical: "Healthcare", score: 76, stage: "Qualified", value: "$85K" },
];

const activities = [
  { icon: Phone, text: "Call with Gulf Coast Logistics", time: "2h ago", type: "call" },
  { icon: Mail, text: "Follow-up sent to Ace Hardware", time: "3h ago", type: "email" },
  { icon: FileText, text: "Proposal created for Tampa Bay Brewing", time: "5h ago", type: "proposal" },
  { icon: Calendar, text: "Demo scheduled with Palm Medical", time: "Yesterday", type: "meeting" },
  { icon: Brain, text: "AI generated competitor brief", time: "Yesterday", type: "ai" },
];

const Dashboard = () => (
  <AppLayout title="Dashboard">
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Good morning, Marcus</h2>
        <p className="text-sm text-muted-foreground">Here's your sales intelligence briefing for today.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-gradient-card border border-border rounded-xl p-5 hover:border-gold transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <kpi.icon className="h-4 w-4 text-primary" />
              </div>
              <span className={`flex items-center gap-0.5 text-xs font-medium ${kpi.up ? "text-green-400" : "text-red-400"}`}>
                {kpi.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {kpi.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{kpi.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-gradient-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Revenue Pipeline</h3>
              <p className="text-xs text-muted-foreground">Monthly pipeline value trend</p>
            </div>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(43, 56%, 54%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(43, 56%, 54%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 16%)" />
              <XAxis dataKey="month" tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip contentStyle={{ background: "hsl(0, 0%, 9%)", border: "1px solid hsl(0, 0%, 16%)", borderRadius: "8px", fontSize: 12 }} />
              <Area type="monotone" dataKey="value" stroke="hsl(43, 56%, 54%)" fill="url(#goldGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pipeline Pie */}
        <div className="bg-gradient-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-1">Pipeline Stages</h3>
          <p className="text-xs text-muted-foreground mb-4">Lead distribution by stage</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={pipelineData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value">
                {pipelineData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {pipelineData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ background: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-foreground font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Recent Leads */}
        <div className="bg-gradient-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Top Leads</h3>
          <div className="space-y-3">
            {recentLeads.map((lead) => (
              <div key={lead.company} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">{lead.company}</div>
                  <div className="text-xs text-muted-foreground">{lead.vertical} · {lead.stage}</div>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <div className="text-sm font-semibold text-foreground">{lead.value}</div>
                  <div className="text-xs text-primary">Score: {lead.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-gradient-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                  <a.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-foreground">{a.text}</div>
                  <div className="text-xs text-muted-foreground">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default Dashboard;
