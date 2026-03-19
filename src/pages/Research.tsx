import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FlaskConical, Search, Globe, Play, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const jobs = [
  { id: 1, target: "https://acehardware.com", company: "Ace Hardware", status: "completed", results: 42, time: "2 min ago" },
  { id: 2, target: "https://gulfscoastlogistics.com", company: "Gulf Coast Logistics", status: "completed", results: 28, time: "1 hour ago" },
  { id: 3, target: "https://metrofitness.com", company: "Metro Fitness Chain", status: "running", results: 12, time: "Running..." },
  { id: 4, target: "https://palmmedical.org", company: "Palm Medical Center", status: "queued", results: 0, time: "Queued" },
];

const statusIcons: Record<string, { icon: typeof CheckCircle2; cls: string }> = {
  completed: { icon: CheckCircle2, cls: "text-green-400" },
  running: { icon: Clock, cls: "text-primary animate-pulse" },
  queued: { icon: AlertCircle, cls: "text-muted-foreground" },
};

const ResearchPage = () => (
  <AppLayout title="Research Lab">
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Research Lab</h2>
          <p className="text-sm text-muted-foreground">Manual web research and company intelligence discovery</p>
        </div>
      </div>

      {/* New Research */}
      <div className="bg-gradient-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">New Research Job</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          <Input placeholder="Company name" className="bg-card border-border" />
          <Input placeholder="Website URL" className="bg-card border-border" />
          <Input placeholder="Geography (city, state)" className="bg-card border-border" />
          <Button variant="gold"><FlaskConical className="h-4 w-4 mr-1.5" />Start Research</Button>
        </div>
        <p className="text-[10px] text-muted-foreground/60 mt-3">Research uses publicly available web data only. All results are from public sources.</p>
      </div>

      {/* Jobs */}
      <div className="bg-gradient-card border border-border rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Research Jobs</h3>
        <div className="space-y-3">
          {jobs.map((job) => {
            const st = statusIcons[job.status];
            return (
              <div key={job.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <st.icon className={`h-4 w-4 ${st.cls}`} />
                  <div>
                    <div className="text-sm font-medium text-foreground">{job.company}</div>
                    <div className="text-xs text-muted-foreground">{job.target}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-foreground">{job.results} results</div>
                  <div className="text-xs text-muted-foreground">{job.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </AppLayout>
);

export default ResearchPage;
