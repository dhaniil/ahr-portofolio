import { useState } from "react";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { CertificateForm } from "@/components/admin/CertificateForm";
import { EducationForm } from "@/components/admin/EducationForm";
import { useToast } from "@/components/ui/use-toast";
import { 
  addProject, updateProject, deleteProject, getProjects,
  addCertificate, updateCertificate, deleteCertificate, getCertificates,
  addEducation, updateEducation, deleteEducation, getEducation
} from "@/lib/db-utils";
import type { Project, Certificate, Education } from "@/lib/mongodb";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, GraduationCap, Award, Code } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);

  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  const { data: certificates = [], isLoading: certificatesLoading } = useQuery({
    queryKey: ['certificates'],
    queryFn: getCertificates,
  });

  const { data: education = [], isLoading: educationLoading } = useQuery({
    queryKey: ['education'],
    queryFn: getEducation,
  });

  const handleProjectSubmit = async (data: Omit<Project, '_id'>) => {
    try {
      if (editingProject?._id) {
        await updateProject(editingProject._id, data);
        toast({
          title: "Success",
          description: "Project updated successfully",
        });
      } else {
        await addProject(data);
        toast({
          title: "Success",
          description: "Project added successfully",
        });
      }
      setEditingProject(null);
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    } catch (error) {
      toast({
        title: "Error",
        description: editingProject ? "Failed to update project" : "Failed to add project",
        variant: "destructive",
      });
    }
  };

  const handleCertificateSubmit = async (data: Omit<Certificate, '_id'>) => {
    try {
      if (editingCertificate?._id) {
        await updateCertificate(editingCertificate._id, data);
        toast({
          title: "Success",
          description: "Certificate updated successfully",
        });
      } else {
        await addCertificate(data);
        toast({
          title: "Success",
          description: "Certificate added successfully",
        });
      }
      setEditingCertificate(null);
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
    } catch (error) {
      toast({
        title: "Error",
        description: editingCertificate ? "Failed to update certificate" : "Failed to add certificate",
        variant: "destructive",
      });
    }
  };

  const handleEducationSubmit = async (data: Omit<Education, '_id'>) => {
    try {
      if (editingEducation?._id) {
        await updateEducation(editingEducation._id, data);
        toast({
          title: "Success",
          description: "Education updated successfully",
        });
      } else {
        await addEducation(data);
        toast({
          title: "Success",
          description: "Education added successfully",
        });
      }
      setEditingEducation(null);
      queryClient.invalidateQueries({ queryKey: ['education'] });
    } catch (error) {
      toast({
        title: "Error",
        description: editingEducation ? "Failed to update education" : "Failed to add education",
        variant: "destructive",
      });
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject(id);
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      });
    }
  };

  const handleDeleteCertificate = async (id: string) => {
    try {
      await deleteCertificate(id);
      toast({
        title: "Success",
        description: "Certificate deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete certificate",
        variant: "destructive",
      });
    }
  };

  const handleDeleteEducation = async (id: string) => {
    try {
      await deleteEducation(id);
      toast({
        title: "Success",
        description: "Education deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['education'] });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete education",
        variant: "destructive",
      });
    }
  };

  if (projectsLoading || certificatesLoading || educationLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <Tabs defaultValue="projects" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">
            <Code className="w-4 h-4 mr-2" />
            Projects
          </TabsTrigger>
          <TabsTrigger value="certificates">
            <Award className="w-4 h-4 mr-2" />
            Certificates
          </TabsTrigger>
          <TabsTrigger value="education">
            <GraduationCap className="w-4 h-4 mr-2" />
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>
            <ProjectForm 
              project={editingProject || undefined} 
              onSubmit={handleProjectSubmit} 
            />
            {editingProject && (
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => setEditingProject(null)}
              >
                Cancel Editing
              </Button>
            )}
          </div>

          <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Manage Projects</h2>
            <div className="space-y-4">
              {projects.map((project: Project) => (
                <div 
                  key={project._id} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingProject(project)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => project._id && handleDeleteProject(project._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="certificates">
          <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {editingCertificate ? "Edit Certificate" : "Add New Certificate"}
            </h2>
            <CertificateForm 
              certificate={editingCertificate || undefined} 
              onSubmit={handleCertificateSubmit} 
            />
            {editingCertificate && (
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => setEditingCertificate(null)}
              >
                Cancel Editing
              </Button>
            )}
          </div>

          <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Manage Certificates</h2>
            <div className="space-y-4">
              {certificates.map((certificate: Certificate) => (
                <div 
                  key={certificate._id} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{certificate.title}</h3>
                    <p className="text-sm text-muted-foreground">{certificate.issuer} - {certificate.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingCertificate(certificate)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => certificate._id && handleDeleteCertificate(certificate._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="education">
          <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {editingEducation ? "Edit Education" : "Add New Education"}
            </h2>
            <EducationForm 
              education={editingEducation || undefined} 
              onSubmit={handleEducationSubmit} 
            />
            {editingEducation && (
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => setEditingEducation(null)}
              >
                Cancel Editing
              </Button>
            )}
          </div>

          <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Manage Education</h2>
            <div className="space-y-4">
              {education.map((edu: Education) => (
                <div 
                  key={edu._id} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} ({edu.startDate} - {edu.endDate || 'Present'})
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingEducation(edu)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => edu._id && handleDeleteEducation(edu._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;