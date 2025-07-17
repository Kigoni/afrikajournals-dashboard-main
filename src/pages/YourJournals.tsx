import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  ExternalLink,
  Filter,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for user's journals
const mockJournals = [
  {
    id: "1",
    title: "African Medical Research Journal",
    platform: "OJS",
    country: "Nigeria",
    publisher: "University of Lagos Medical Press",
    status: "approved",
    language: "English",
    thematicArea: "Medicine",
    issn: "2589-1234",
    submittedDate: "2024-01-15",
    views: 1247,
    link: "https://example.com/journal1"
  },
  {
    id: "2",
    title: "Engineering Solutions Africa",
    platform: "DSpace",
    country: "Kenya",
    publisher: "Nairobi Engineering Institute",
    status: "pending",
    language: "English",
    thematicArea: "Engineering",
    issn: "2589-5678",
    submittedDate: "2024-02-20",
    views: 856,
    link: "https://example.com/journal2"
  },
  {
    id: "3",
    title: "Agricultural Innovation Review",
    platform: "AJOL",
    country: "Ghana",
    publisher: "West Africa Agricultural Society",
    status: "approved",
    language: "English",
    thematicArea: "Agriculture",
    issn: "2589-9012",
    submittedDate: "2024-01-08",
    views: 2103,
    link: "https://example.com/journal3"
  },
  {
    id: "4",
    title: "Revue Africaine de Philosophie",
    platform: "OJS",
    country: "Senegal",
    publisher: "Université de Dakar",
    status: "rejected",
    language: "French",
    thematicArea: "Philosophy",
    issn: "2589-3456",
    submittedDate: "2024-02-01",
    views: 234,
    link: "https://example.com/journal4"
  }
];

export default function YourJournals() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredJournals = mockJournals.filter(journal => {
    const matchesSearch = journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         journal.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         journal.thematicArea.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || journal.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-accent border-accent bg-accent/10";
      case "pending":
        return "text-yellow-600 border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20";
      case "rejected":
        return "text-destructive border-destructive bg-destructive/10";
      default:
        return "text-muted-foreground border-border";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "pending":
        return "Under Review";
      case "rejected":
        return "Needs Revision";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 shadow-elegant">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Your Journals</h1>
              <p className="text-xl opacity-90">Manage your journal submissions and track their status</p>
            </div>
          </div>
          <Button
  asChild
  variant="secondary"
  size="lg"
  className="shadow-elegant whitespace-nowrap"
>
            <Link to="/submit-journal">
              <Plus className="mr-2 h-5 w-5" />
              Add Journal
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search journals by title, publisher, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Status Filter */}
            <div className="flex flex-wrap items-center gap-2 justify-start lg:justify-end pt-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-input bg-background px-3 py-2 rounded-md text-sm"
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Under Review</option>
                <option value="rejected">Needs Revision</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-accent">
              {mockJournals.filter(j => j.status === "approved").length}
            </div>
            <p className="text-sm text-muted-foreground">Approved Journals</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">
              {mockJournals.filter(j => j.status === "pending").length}
            </div>
            <p className="text-sm text-muted-foreground">Under Review</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">
              {mockJournals.reduce((sum, j) => sum + j.views, 0).toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Total Views</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">
              {mockJournals.length}
            </div>
            <p className="text-sm text-muted-foreground">Total Journals</p>
          </CardContent>
        </Card>
      </div>

      {/* Journal List */}
      {filteredJournals.length === 0 ? (
        <Card className="shadow-card">
          <CardContent className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {mockJournals.length === 0 ? "No Journals Yet" : "No Matching Journals"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {mockJournals.length === 0 
                ? "Start building your academic portfolio by adding your first journal."
                : "Try adjusting your search or filter criteria."
              }
            </p>
            {mockJournals.length === 0 && (
              <Button asChild variant="hero" size="lg" className="shadow-glow">
                <Link to="/submit-journal">
                  <Plus className="mr-2 h-5 w-5" />
                  Add Your First Journal
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredJournals.map((journal) => (
            <Card key={journal.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  {/* Journal Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{journal.title}</h3>
                      <Badge variant="outline" className={getStatusColor(journal.status)}>
                        {getStatusText(journal.status)}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><span className="font-medium">Publisher:</span> {journal.publisher}</p>
                      <p><span className="font-medium">Platform:</span> {journal.platform} • <span className="font-medium">Country:</span> {journal.country}</p>
                      <p><span className="font-medium">Theme:</span> {journal.thematicArea} • <span className="font-medium">Language:</span> {journal.language}</p>
                      {journal.issn && <p><span className="font-medium">ISSN:</span> {journal.issn}</p>}
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Submitted: {new Date(journal.submittedDate).toLocaleDateString()}</span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {journal.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 justify-start lg:justify-end pt-2">
                    {journal.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={journal.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Visit
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive-foreground hover:bg-destructive">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}