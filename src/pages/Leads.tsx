import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, UserSearch, Building2, MapPin, Star } from "lucide-react";

const leads = [
  { id: 1, company: "Ace Hardware Distribution", contact: "Robert Chen", email: "robert@acehw.com", vertical: "Retail", location: "Tampa, FL", score: 92, stage: "Proposal", value: "$45,000", rating: 4.6, reviews: 128 },
  { id: 2, company: "Tampa Bay Brewing Co.", contact: "Sarah Mills", email: "sarah@tbbrewing.com", vertical: "Food & Bev", location: "St. Petersburg, FL", score: 87, stage: "Qualified", value: "$28,000", rating: 4.8, reviews: 89 },
  { id: 3, company: "Sunshine Auto Group", contact: "Mike Torres", email: "mike@sunshineauto.com", vertical: "Automotive", location: "Orlando, FL", score: 84, stage: "Prospecting", value: "$62,000", rating: 4.2, reviews: 256 },
  { id: 4, company: "Gulf Coast Logistics", contact: "Diana Patel", email: "diana@gulfcoast.com", vertical: "Warehouse", location: "Jacksonville, FL", score: 78, stage: "Negotiation", value: "$120,000", rating: 4.4, reviews: 67 },
  { id: 5, company: "Palm Medical Center", contact: "Dr. James Liu", email: "jliu@palmmed.org", vertical: "Healthcare", location: "Miami, FL", score: 76, stage: "Qualified", value: "$85,000", rating: 4.7, reviews: 312 },
  { id: 6, company: "Metro Fitness Chain", contact: "Lisa Wang", email: "lisa@metrofit.com", vertical: "Fitness", location: "Fort Lauderdale, FL", score: 71, stage: "Prospecting", value: "$34,000", rating: 4.1, reviews: 145 },
  { id: 7, company: "Coastal Warehousing Inc.", contact: "Tom Bradley", email: "tom@coastalwh.com", vertical: "Warehouse", location: "Clearwater, FL", score: 69, stage: "Prospecting", value: "$95,000", rating: 3.9, reviews: 42 },
  { id: 8, company: "Seminole School District", contact: "Jennifer Adams", email: "jadams@seminoleschools.edu", vertical: "Education", location: "Sanford, FL", score: 65, stage: "Qualified", value: "$150,000", rating: 4.3, reviews: 78 },
];

const stageBadge = (stage: string) => {
  const colors: Record<string, string> = {
    Prospecting: "bg-muted text-muted-foreground",
    Qualified: "bg-blue-500/10 text-blue-400",
    Proposal: "bg-primary/10 text-primary",
    Negotiation: "bg-orange-500/10 text-orange-400",
  };
  return colors[stage] || "bg-muted text-muted-foreground";
};

const LeadsPage = () => (
  <AppLayout title="Leads">
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Lead Intelligence</h2>
          <p className="text-sm text-muted-foreground">{leads.length} active leads across all territories</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Filter className="h-3.5 w-3.5 mr-1.5" />Filter</Button>
          <Button variant="gold" size="sm"><Plus className="h-3.5 w-3.5 mr-1.5" />Add Lead</Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search leads by company, contact, or vertical..." className="pl-9 bg-card border-border" />
      </div>

      {/* Table */}
      <div className="bg-gradient-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["Company", "Contact", "Vertical", "Location", "Score", "Stage", "Value"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors cursor-pointer">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{lead.company}</div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          {lead.rating} ({lead.reviews})
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-foreground">{lead.contact}</div>
                    <div className="text-xs text-muted-foreground">{lead.email}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{lead.vertical}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />{lead.location}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-bold text-primary">{lead.score}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${stageBadge(lead.stage)}`}>{lead.stage}</span>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-foreground">{lead.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AppLayout>
);

export default LeadsPage;
