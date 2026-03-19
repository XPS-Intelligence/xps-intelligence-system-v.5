import { AppLayout } from "@/components/layout/AppLayout";
import { BarChart3, TrendingUp, Users, DollarSign, Target, MapPin } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, FunnelChart, Funnel, LabelList } from "recharts";

const monthlyRevenue = [
  { month: "Sep", actual: 380000, target: 400000 }, { month: "Oct", actual: 420000, target: 400000 },
  { month: "Nov", actual: 490000, target: 420000 }, { month: "Dec", actual: 460000, target: 450000 },
  { month: "Jan", actual: 520000, target: 480000 }, { month: "Feb", actual: 580000, target: 500000 },
  { month: "Mar", actual: 610000, target: 520000 },
];

const repPerformance = [
  { name: "Marcus R.", deals: 24, value: 580000 },
  { name: "Sarah K.", deals: 21, value: 520000 },
  { name: "James T.", deals: 19, value: 490000 },
  { name: "Lisa M.", deals: 17, value: 420000 },
  { name: "Tom B.", deals: 15, value: 380000 },
];

const territoryData = [
  { name: "Southeast FL", value: 35, color: "hsl(43, 56%, 54%)" },
  { name: "Central FL", value: 25, color: "hsl(43, 60%, 65%)" },
  { name: "Southwest FL", value: 20, color: "hsl(0, 0%, 55%)" },
  { name: "Northeast FL", value: 12, color: "hsl(0, 0%, 40%)" },
  { name: "Northwest FL", value: 8, color: "hsl(0, 0%, 30%)" },
];

const outreachMetrics = [
  { label: "Emails Sent", value: "4,218", change: "+18%" },
  { label: "Open Rate", value: "34.2%", change: "+2.1%" },
  { label: "Response Rate", value: "12.8%", change: "+3.4%" },
  { label: "Meetings Booked", value: "89", change: "+22%" },
];

const AnalyticsPage = () => (
  <AppLayout title="Analytics">
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Analytics Center</h2>
        <p className="text-sm text-muted-foreground">Executive overview of sales performance and pipeline metrics</p>
      </div>

      {/* Outreach Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {outreachMetrics.map((m) => (
          <div key={m.label} className="bg-gradient-card border border-border rounded-xl p-5">
            <div className="text-xs text-muted-foreground mb-1">{m.label}</div>
            <div className="text-2xl font-bold text-foreground">{m.value}</div>
            <div className="text-xs text-green-400 mt-1">{m.change} vs last month</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Revenue vs Target */}
        <div className="bg-gradient-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-1">Revenue vs Target</h3>
          <p className="text-xs text-muted-foreground mb-4">Monthly actual vs target revenue</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 16%)" />
              <XAxis dataKey="month" tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(0, 0%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
              <Tooltip contentStyle={{ background: "hsl(0, 0%, 9%)", border: "1px solid hsl(0, 0%, 16%)", borderRadius: "8px", fontSize: 12 }} />
              <Bar dataKey="actual" fill="hsl(43, 56%, 54%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="target" fill="hsl(0, 0%, 25%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Territory Distribution */}
        <div className="bg-gradient-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-1">Territory Distribution</h3>
          <p className="text-xs text-muted-foreground mb-4">Lead distribution by territory</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={territoryData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                {territoryData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(0, 0%, 9%)", border: "1px solid hsl(0, 0%, 16%)", borderRadius: "8px", fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {territoryData.map((t) => (
              <div key={t.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ background: t.color }} />
                  <span className="text-muted-foreground">{t.name}</span>
                </div>
                <span className="text-foreground font-medium">{t.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rep Performance */}
      <div className="bg-gradient-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Top Representatives</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["Rep", "Deals Closed", "Total Value", "Avg Deal Size", "Performance"].map((h) => (
                  <th key={h} className="text-left px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {repPerformance.map((rep, i) => (
                <tr key={rep.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{rep.name}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{rep.deals}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-foreground">${(rep.value / 1000).toFixed(0)}K</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">${(rep.value / rep.deals / 1000).toFixed(1)}K</td>
                  <td className="px-4 py-3">
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-gold rounded-full" style={{ width: `${(rep.value / 580000) * 100}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default AnalyticsPage;
