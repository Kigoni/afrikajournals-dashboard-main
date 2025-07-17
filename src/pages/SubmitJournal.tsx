// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { BookOpen, Plus, X } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const platforms = ["OJS", "DSpace", "AJOL", "Drupal", "WordPress", "Other"];

// const africanCountries = [
//   "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", 
//   "Cape Verde", "Central African Republic", "Chad", "Comoros", "Congo", "Democratic Republic of Congo",
//   "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon",
//   "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho",
//   "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco",
//   "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal",
//   "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
//   "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
// ];

// const languages = ["English", "French", "Arabic", "Portuguese", "Swahili", "Amharic", "Hausa", "Other"];

// const thematicAreas = [
//   "Medicine", "Engineering", "Education", "Agriculture", "Environmental Science", "Economics",
//   "Social Sciences", "Law", "Public Health", "Computer Science", "Mathematics", "Physics",
//   "Chemistry", "Biology", "Geography", "History", "Literature", "Psychology", "Philosophy", "Other"
// ];

// const journalTypes = [
//   "Medicine and Health Journal", "Science and Technology Journal", "Social Sciences Journal",
//   "Humanities Journal", "Business and Economics Journal", "Law Journal", "Education Journal", "Other"
// ];

// export default function SubmitJournal() {
//   const { toast } = useToast();
//   const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     platform: "",
//     publisher: "",
//     language: "",
//     thematicArea: "",
//     issn: "",
//     link: "",
//     africanIndexMedicus: "",
//     journalType: "",
//     abstract: ""
//   });

//   const handleCountryAdd = (country: string) => {
//     if (!selectedCountries.includes(country)) {
//       setSelectedCountries([...selectedCountries, country]);
//     }
//   };

//   const handleCountryRemove = (country: string) => {
//     setSelectedCountries(selectedCountries.filter(c => c !== country));
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.title || !formData.platform || !formData.publisher) {
//       toast({
//         title: "Missing Information",
//         description: "Please fill in all required fields.",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (selectedCountries.length === 0) {
//       toast({
//         title: "Missing Information",
//         description: "Please select at least one country.",
//         variant: "destructive"
//       });
//       return;
//     }

//     // Success simulation
//     toast({
//       title: "Journal Submitted Successfully!",
//       description: "Your journal submission is now under review. You'll be notified once it's processed.",
//     });

//     // Reset form
//     setFormData({
//       title: "",
//       platform: "",
//       publisher: "",
//       language: "",
//       thematicArea: "",
//       issn: "",
//       link: "",
//       africanIndexMedicus: "",
//       journalType: "",
//       abstract: ""
//     });
//     setSelectedCountries([]);
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-8">
//       {/* Header */}
//       <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 shadow-elegant">
//         <div className="flex items-center space-x-3">
//           <BookOpen className="h-8 w-8" />
//           <div>
//             <h1 className="text-3xl font-bold">Submit New Journal</h1>
//             <p className="text-xl opacity-90">Add your journal to the African academic network</p>
//           </div>
//         </div>
//       </div>

//       {/* Form */}
//       <Card className="shadow-card">
//         <CardHeader>
//           <CardTitle>Journal Information</CardTitle>
//           <CardDescription>
//             Please provide detailed information about your journal. Fields marked with * are required.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Journal Title */}
//             <div className="space-y-2">
//               <Label htmlFor="title">Journal Title *</Label>
//               <Input
//                 id="title"
//                 value={formData.title}
//                 onChange={(e) => handleInputChange("title", e.target.value)}
//                 placeholder="Enter the full journal title"
//                 required
//               />
//             </div>

//             {/* Platform */}
//             <div className="space-y-2">
//               <Label>Platform *</Label>
//               <Select value={formData.platform} onValueChange={(value) => handleInputChange("platform", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select the journal platform" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {platforms.map((platform) => (
//                     <SelectItem key={platform} value={platform}>
//                       {platform}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Countries */}
//             <div className="space-y-2">
//               <Label>Countries *</Label>
//               <Select onValueChange={handleCountryAdd}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select African countries" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {africanCountries
//                     .filter(country => !selectedCountries.includes(country))
//                     .map((country) => (
//                       <SelectItem key={country} value={country}>
//                         {country}
//                       </SelectItem>
//                     ))}
//                 </SelectContent>
//               </Select>
//               {selectedCountries.length > 0 && (
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {selectedCountries.map((country) => (
//                     <Badge key={country} variant="secondary" className="px-3 py-1">
//                       {country}
//                       <button
//                         type="button"
//                         onClick={() => handleCountryRemove(country)}
//                         className="ml-2 hover:text-destructive"
//                       >
//                         <X className="h-3 w-3" />
//                       </button>
//                     </Badge>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Publisher */}
//             <div className="space-y-2">
//               <Label htmlFor="publisher">Publisher's Name *</Label>
//               <Input
//                 id="publisher"
//                 value={formData.publisher}
//                 onChange={(e) => handleInputChange("publisher", e.target.value)}
//                 placeholder="Enter the publisher's name"
//                 required
//               />
//             </div>

//             {/* Language & Thematic Area */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label>Language</Label>
//                 <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select language" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {languages.map((language) => (
//                       <SelectItem key={language} value={language}>
//                         {language}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label>Thematic Area</Label>
//                 <Select value={formData.thematicArea} onValueChange={(value) => handleInputChange("thematicArea", value)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select thematic area" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {thematicAreas.map((area) => (
//                       <SelectItem key={area} value={area}>
//                         {area}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* ISSN & Link */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="issn">ISSN Number</Label>
//                 <Input
//                   id="issn"
//                   value={formData.issn}
//                   onChange={(e) => handleInputChange("issn", e.target.value)}
//                   placeholder="e.g., 1234-5678"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="link">Journal URL</Label>
//                 <Input
//                   id="link"
//                   type="url"
//                   value={formData.link}
//                   onChange={(e) => handleInputChange("link", e.target.value)}
//                   placeholder="https://yourjournal.com"
//                 />
//               </div>
//             </div>

//             {/* African Index Medicus & Journal Type */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="africanIndexMedicus">African Index Medicus ID (Optional)</Label>
//                 <Input
//                   id="africanIndexMedicus"
//                   value={formData.africanIndexMedicus}
//                   onChange={(e) => handleInputChange("africanIndexMedicus", e.target.value)}
//                   placeholder="Enter AIM identifier"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label>Journal Type</Label>
//                 <Select value={formData.journalType} onValueChange={(value) => handleInputChange("journalType", value)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select journal type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {journalTypes.map((type) => (
//                       <SelectItem key={type} value={type}>
//                         {type}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* Abstract */}
//             <div className="space-y-2">
//               <Label htmlFor="abstract">Journal Abstract/Description</Label>
//               <Textarea
//                 id="abstract"
//                 value={formData.abstract}
//                 onChange={(e) => handleInputChange("abstract", e.target.value)}
//                 placeholder="Provide a brief description of the journal's scope, aims, and focus areas..."
//                 rows={4}
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="flex flex-col-reverse sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0 pt-6">
//   <Button
//     variant="outline"
//     type="button"
//     className="w-full sm:w-auto"
//   >
//     Save as Draft
//   </Button>
//   <Button
//     variant="hero"
//     type="submit"
//     className="w-full sm:w-auto shadow-glow"
//   >
//     <Plus className="mr-2 h-4 w-4" />
//     Add Journal
//   </Button>
// </div>


//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const platforms = ["OJS", "DSpace", "AJOL", "Drupal", "WordPress", "Other"];
const africanCountries = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon",
  "Cape Verde", "Central African Republic", "Chad", "Comoros", "Congo", "Democratic Republic of Congo",
  "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon",
  "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho",
  "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco",
  "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal",
  "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
  "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];
const languages = ["English", "French", "Arabic", "Portuguese", "Swahili", "Amharic", "Hausa", "Other"];
const thematicAreas = [
  "Medicine", "Engineering", "Education", "Agriculture", "Environmental Science", "Economics",
  "Social Sciences", "Law", "Public Health", "Computer Science", "Mathematics", "Physics",
  "Chemistry", "Biology", "Geography", "History", "Literature", "Psychology", "Philosophy", "Other"
];
const journalTypes = [
  "Medicine and Health Journal", "Science and Technology Journal", "Social Sciences Journal",
  "Humanities Journal", "Business and Economics Journal", "Law Journal", "Education Journal", "Other"
];

export default function SubmitJournal() {
  const { toast } = useToast();
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    publisher: "",
    language: "",
    thematicArea: "",
    issn: "",
    link: "",
    africanIndexMedicus: "",
    journalType: "",
    abstract: ""
  });

  const handleCountryAdd = (country: string) => {
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleCountryRemove = (country: string) => {
    setSelectedCountries(selectedCountries.filter(c => c !== country));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.platform || !formData.publisher) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    if (selectedCountries.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please select at least one country.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('https://backend.afrikajournals.org/journal_api/api/journalcreate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': '6S7myFLVHf05SE1RRiV2rnLZbjXn77EweNew8UMiCWiEehYJznA3Y6DGEKaOCxbC'
        },
        body: JSON.stringify({
          journal_title: formData.title,
          platform: formData.platform,
          publisher: formData.publisher,
          language: formData.language,
          thematic_area: formData.thematicArea,
          issn: formData.issn,
          link: formData.link,
          african_index_medicus: formData.africanIndexMedicus,
          journal_type: formData.journalType,
          abstract: formData.abstract,
          countries: selectedCountries
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Success message
      toast({
        title: "Journal Submitted Successfully!",
        description: "Your journal submission is now under review. You'll be notified once it's processed.",
      });

      // Reset form
      setFormData({
        title: "",
        platform: "",
        publisher: "",
        language: "",
        thematicArea: "",
        issn: "",
        link: "",
        africanIndexMedicus: "",
        journalType: "",
        abstract: ""
      });
      setSelectedCountries([]);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your journal. Please try again later.",
        variant: "destructive"
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 shadow-elegant">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold">Submit New Journal</h1>
            <p className="text-xl opacity-90">Add your journal to the African academic network</p>
          </div>
        </div>
      </div>
      {/* Form */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Journal Information</CardTitle>
          <CardDescription>
            Please provide detailed information about your journal. Fields marked with * are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Journal Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Journal Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter the full journal title"
                required
              />
            </div>
            {/* Platform */}
            <div className="space-y-2">
              <Label>Platform *</Label>
              <Select value={formData.platform} onValueChange={(value) => handleInputChange("platform", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select the journal platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform} value={platform}>
                      {platform}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Countries */}
            <div className="space-y-2">
              <Label>Countries *</Label>
              <Select onValueChange={handleCountryAdd}>
                <SelectTrigger>
                  <SelectValue placeholder="Select African countries" />
                </SelectTrigger>
                <SelectContent>
                  {africanCountries
                    .filter(country => !selectedCountries.includes(country))
                    .map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {selectedCountries.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedCountries.map((country) => (
                    <Badge key={country} variant="secondary" className="px-3 py-1">
                      {country}
                      <button
                        type="button"
                        onClick={() => handleCountryRemove(country)}
                        className="ml-2 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            {/* Publisher */}
            <div className="space-y-2">
              <Label htmlFor="publisher">Publisher's Name *</Label>
              <Input
                id="publisher"
                value={formData.publisher}
                onChange={(e) => handleInputChange("publisher", e.target.value)}
                placeholder="Enter the publisher's name"
                required
              />
            </div>
            {/* Language & Thematic Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Thematic Area</Label>
                <Select value={formData.thematicArea} onValueChange={(value) => handleInputChange("thematicArea", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select thematic area" />
                  </SelectTrigger>
                  <SelectContent>
                    {thematicAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* ISSN & Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="issn">ISSN Number</Label>
                <Input
                  id="issn"
                  value={formData.issn}
                  onChange={(e) => handleInputChange("issn", e.target.value)}
                  placeholder="e.g., 1234-5678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">Journal URL</Label>
                <Input
                  id="link"
                  type="url"
                  value={formData.link}
                  onChange={(e) => handleInputChange("link", e.target.value)}
                  placeholder="https://yourjournal.com"
                />
              </div>
            </div>
            {/* African Index Medicus & Journal Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="africanIndexMedicus">African Index Medicus ID (Optional)</Label>
                <Input
                  id="africanIndexMedicus"
                  value={formData.africanIndexMedicus}
                  onChange={(e) => handleInputChange("africanIndexMedicus", e.target.value)}
                  placeholder="Enter AIM identifier"
                />
              </div>
              <div className="space-y-2">
                <Label>Journal Type</Label>
                <Select value={formData.journalType} onValueChange={(value) => handleInputChange("journalType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select journal type" />
                  </SelectTrigger>
                  <SelectContent>
                    {journalTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Abstract */}
            <div className="space-y-2">
              <Label htmlFor="abstract">Journal Abstract/Description</Label>
              <Textarea
                id="abstract"
                value={formData.abstract}
                onChange={(e) => handleInputChange("abstract", e.target.value)}
                placeholder="Provide a brief description of the journal's scope, aims, and focus areas..."
                rows={4}
              />
            </div>
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
                variant="hero"
                type="submit"
                className="w-full sm:w-auto shadow-glow"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Journal
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
