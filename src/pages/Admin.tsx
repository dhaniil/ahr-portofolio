import { ProjectForm } from "@/components/admin/ProjectForm";
import { useToast } from "@/components/ui/use-toast";
import { addProject } from "@/lib/db-utils";
import type { Project } from "@/lib/mongodb";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (data: Omit<Project, '_id'>) => {
    try {
      await addProject(data);
      toast({
        title: "Success",
        description: "Project added successfully",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add project",
        variant: "destructive",
      });
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Add New Project</h2>
          <ProjectForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Admin;