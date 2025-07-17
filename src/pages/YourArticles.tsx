import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Plus,
  Search,
  Edit,
  Trash2,
  ExternalLink,
  Filter,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const mockArticles = [
  {
    id: "a1",
    title: "Advances in African Climate Research",
    journal: "African Environmental Studies",
    author: "Dr. Jane Doe",
    status: "approved",
    submittedDate: "2024-03-11",
    views: 541,
    link: "https://example.com/article1"
  },
  {
    id: "a2",
    title: "Sustainable Farming Practices",
    journal: "Agricultural Innovation Review",
    author: "John Mwangi",
    status: "pending",
    submittedDate: "2024-04-05",
    views: 289,
    link: "https://example.com/article2"
  },
  {
    id: "a3",
    title: "Cultural Identity in Post-Colonial Africa",
    journal: "Revue Africaine de Philosophie",
    author: "Fatima Diop",
    status: "rejected",
    submittedDate: "2024-02-18",
    views: 135,
    link: "https://example.com/article3"
  }
];

export default function YourArticles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || article.status === statusFilter;
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
      <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 shadow-elegant">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Your Articles</h1>
              <p className="text-xl opacity-90">Track and manage your submitted articles</p>
            </div>
          </div>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="shadow-elegant whitespace-nowrap"
          >
            <Link to="/submit-article">
              <Plus className="mr-2 h-5 w-5" />
              Add Article
            </Link>
          </Button>
        </div>
      </div>

      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

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

      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    <Badge variant="outline" className={getStatusColor(article.status)}>
                      {getStatusText(article.status)}
                    </Badge>
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><span className="font-medium">Author:</span> {article.author}</p>
                    <p><span className="font-medium">Journal:</span> {article.journal}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Submitted: {new Date(article.submittedDate).toLocaleDateString()}</span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views.toLocaleString()} views
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 justify-start lg:justify-end pt-2">
                  {article.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
}
