import { useState } from "react";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { useToast } from "@/components/ui/use-toast";
import { addProject, updateProject, deleteProject, getProjects } from "@/lib/db-utils";
import type { Project } from "@/lib/mongodb";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  const handleSubmit = async (data: Omit<Project, '_id'>) => {
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
      console.error("Error handling project:", error);
    }
  };

  const handleDelete = async (id: string) => {
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
      console.error("Error deleting project:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">
            {editingProject ? "Edit Project" : "Add New Project"}
          </h2>
          <ProjectForm 
            project={editingProject || undefined} 
            onSubmit={handleSubmit} 
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
                    onClick={() => project._id && handleDelete(project._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;