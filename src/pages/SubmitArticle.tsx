import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for user's journals
const userJournals = [
  { id: "1", title: "African Medical Research Journal", status: "approved" },
  { id: "2", title: "Engineering Solutions Africa", status: "approved" },
  { id: "3", title: "Agricultural Innovation Review", status: "approved" },
];

export default function SubmitArticle() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    authorName: "",
    email: "",
    journalId: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, DOC, or DOCX file.",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 10MB.",
          variant: "destructive"
        });
        return;
      }

      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.authorName || !formData.email || !formData.journalId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedFile) {
      toast({
        title: "Missing File",
        description: "Please upload your article document.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Success simulation
    toast({
      title: "Article Submitted Successfully!",
      description: "Your article has been submitted for review. You'll receive an email confirmation shortly.",
    });

    // Reset form
    setFormData({
      title: "",
      abstract: "",
      authorName: "",
      email: "",
      journalId: ""
    });
    setSelectedFile(null);
    
    // Reset file input
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const selectedJournal = userJournals.find(j => j.id === formData.journalId);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-accent text-accent-foreground rounded-xl p-6 shadow-glow">
        <div className="flex items-center space-x-3">
          <FileText className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold">Submit Article</h1>
            <p className="text-xl opacity-90">Share your research with the African academic community</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Article Submission</CardTitle>
          <CardDescription>
            Submit your research article to one of your approved journals. Fields marked with * are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Article Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Article Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter the complete title of your article"
                required
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file-upload">Upload Document *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 hover:border-accent transition-colors">
                <div className="text-center">
                  {selectedFile ? (
                    <div className="flex items-center justify-center space-x-2 text-accent">
                      <CheckCircle className="h-6 w-6" />
                      <span className="font-medium">{selectedFile.name}</span>
                      <span className="text-sm text-muted-foreground">
                        ({(selectedFile.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PDF, DOC, or DOCX files (max 10MB)
                      </p>
                    </>
                  )}
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    {selectedFile ? "Change File" : "Choose File"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Abstract */}
            <div className="space-y-2">
              <Label htmlFor="abstract">Abstract</Label>
              <Textarea
                id="abstract"
                value={formData.abstract}
                onChange={(e) => handleInputChange("abstract", e.target.value)}
                placeholder="Provide a brief abstract of your article (optional but recommended)..."
                rows={4}
              />
            </div>

            {/* Author Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="authorName">Corresponding Author Name *</Label>
                <Input
                  id="authorName"
                  value={formData.authorName}
                  onChange={(e) => handleInputChange("authorName", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@institution.edu"
                  required
                />
              </div>
            </div>

            {/* Journal Selection */}
            <div className="space-y-2">
              <Label>Submit to Journal *</Label>
              <Select value={formData.journalId} onValueChange={(value) => handleInputChange("journalId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a journal from your list" />
                </SelectTrigger>
                <SelectContent>
                  {userJournals.map((journal) => (
                    <SelectItem key={journal.id} value={journal.id}>
                      <div className="flex items-center space-x-2">
                        <span>{journal.title}</span>
                        {journal.status === "approved" && (
                          <CheckCircle className="h-4 w-4 text-accent" />
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedJournal && (
                <p className="text-sm text-muted-foreground mt-1">
                  Selected: {selectedJournal.title}
                </p>
              )}
              {userJournals.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No journals available. Please submit a journal first.
                </p>
              )}
            </div>

            {/* Guidelines */}
            <Card className="bg-secondary/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ensure your document is properly formatted according to journal standards</li>
                  <li>• Include all co-authors and their affiliations in the document</li>
                  <li>• Verify that your research ethics approvals are included if applicable</li>
                  <li>• Double-check references and citations for accuracy</li>
                  <li>• You will receive an email confirmation upon successful submission</li>
                </ul>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex flex-col-reverse sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0 pt-6">
  <Button
    variant="outline"
    type="button"
    className="w-full sm:w-auto"
  >
    Save as Draft
  </Button>
  <Button
    variant="accent"
    type="submit"
    className="w-full sm:w-auto shadow-glow"
    disabled={userJournals.length === 0}
  >
    <FileText className="mr-2 h-4 w-4" />
    Submit Article
  </Button>
</div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}