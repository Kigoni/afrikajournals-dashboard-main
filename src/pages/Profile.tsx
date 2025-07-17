import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  MapPin, 
  Building, 
  BookOpen, 
  Award,
  Edit,
  Shield
} from "lucide-react";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 shadow-elegant">
        <div className="flex items-center space-x-3">
          <User className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-xl opacity-90">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and contact information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Dr. Amina" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Kone" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="amina.kone@university.edu.gh" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input id="institution" defaultValue="University of Ghana" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position/Title</Label>
                  <Input id="position" defaultValue="Professor of Medicine" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="Ghana" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Accra" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  rows={4}
                  defaultValue="Dr. Amina Kone is a distinguished Professor of Medicine at the University of Ghana, specializing in tropical diseases and public health. She has published over 50 peer-reviewed articles and serves as an editorial board member for several medical journals."
                />
              </div>

              <Button variant="hero" className="shadow-glow">
                <Edit className="mr-2 h-4 w-4" />
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Research Interests */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Research Interests</CardTitle>
              <CardDescription>
                Your areas of expertise and research focus.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Tropical Medicine</Badge>
                <Badge variant="secondary">Public Health</Badge>
                <Badge variant="secondary">Infectious Diseases</Badge>
                <Badge variant="secondary">Epidemiology</Badge>
                <Badge variant="secondary">Healthcare Policy</Badge>
                <Badge variant="secondary">Medical Education</Badge>
              </div>
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Interests
              </Button>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription>
                Manage your account security settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
                  <p className="font-medium">Password</p>
                  <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                </div>
                <Button variant="outline"  className="w-full sm:w-auto">Change Password</Button>
              </div>
              
              <Separator />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                <Shield className="mr-2 h-4 w-4" />
                  Enable 2FA
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Overview */}
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <User className="h-10 w-10 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr. Amina Kone</h3>
                  <p className="text-muted-foreground">Professor of Medicine</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>University of Ghana</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Accra, Ghana</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>amina.kone@university.edu.gh</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Stats */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Activity Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span className="text-sm">Journals Submitted</span>
                </div>
                <Badge variant="outline">3</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-sm">Articles Published</span>
                </div>
                <Badge variant="outline">12</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-accent" />
                  <span className="text-sm">Profile Views</span>
                </div>
                <Badge variant="outline">1,247</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Download Profile
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Export Data
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive-foreground hover:bg-destructive">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}