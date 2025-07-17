import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const recentUploads = [
  {
    id: "j1",
    type: "journal",
    title: "African Medical Research Journal",
    category: "Medicine • Nigeria",
    status: "approved",
  },
  {
    id: "a1",
    type: "article",
    title: "Sustainable Farming Practices",
    category: "Agriculture • Ghana",
    status: "pending",
  },
  {
    id: "j2",
    type: "journal",
    title: "Engineering Solutions Africa",
    category: "Engineering • Kenya",
    status: "pending",
  },
  {
    id: "a2",
    type: "article",
    title: "Cultural Identity in Post-Colonial Africa",
    category: "Philosophy • Senegal",
    status: "approved",
  },
];

function getStatusBadge(status: string) {
  switch (status) {
    case "approved":
      return (
        <Badge variant="outline" className="text-accent border-accent">
          Approved
        </Badge>
      );
    case "pending":
      return (
        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
          Pending
        </Badge>
      );
    case "rejected":
      return (
        <Badge variant="outline" className="text-destructive border-destructive">
          Rejected
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="text-muted-foreground border-border">
          {status}
        </Badge>
      );
  }
}

export default function Dashboard() {
  const [filter, setFilter] = useState<"all" | "journal" | "article">("all");

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 shadow-glow">
        <h1 className="text-4xl font-bold mb-4">Welcome to Afrika Journals Portal</h1>
        <p className="text-xl opacity-90 mb-6">
          Your gateway to African academic publishing and research collaboration
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="secondary" size="lg" className="shadow-elegant">
            <Link to="/submit-journal">
              <BookOpen className="mr-2 h-5 w-5" />
              Submit Journal
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground text-black hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-elegant"
          >
            <Link to="/submit-article">
              <FileText className="mr-2 h-5 w-5" />
              Submit Article
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Journals</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles Submitted</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>
        <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+7 new connections</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your academic submissions and profile
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/submit-journal">
                <BookOpen className="mr-2 h-4 w-4" />
                Add New Journal
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/journals">
                <BookOpen className="mr-2 h-4 w-4" />
                View Your Journals
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/submit-article">
                <FileText className="mr-2 h-4 w-4" />
                Submit Article
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/articles">
                <FileText className="mr-2 h-4 w-4" />
                View Your Articles
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Uploads */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
            <CardDescription>Journals and Articles you've recently submitted</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Filter */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">Filter:</span>
              <Button
                size="sm"
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button
                size="sm"
                variant={filter === "journal" ? "default" : "outline"}
                onClick={() => setFilter("journal")}
              >
                Journals
              </Button>
              <Button
                size="sm"
                variant={filter === "article" ? "default" : "outline"}
                onClick={() => setFilter("article")}
              >
                Articles
              </Button>
            </div>
            {/* Upload List */}
            {recentUploads
              .filter((item) => filter === "all" || item.type === filter)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  {getStatusBadge(item.status)}
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
