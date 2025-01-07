import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tag, X } from "lucide-react";
import type { Project } from "@/lib/mongodb";

const PREDEFINED_TAGS = [
  "Frontend",
  "Backend",
  "SaaS",
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "Express",
  "Next.js",
  "Tailwind CSS",
  "API",
  "Full Stack",
];

interface ProjectFormProps {
  project?: Project;
  onSubmit: (data: Omit<Project, '_id'>) => void;
}

export const ProjectForm = ({ project, onSubmit }: ProjectFormProps) => {
  const [title, setTitle] = useState(project?.title || "");
  const [description, setDescription] = useState(project?.description || "");
  const [imageUrl, setImageUrl] = useState(project?.imageUrl || "");
  const [demoUrl, setDemoUrl] = useState(project?.demoUrl || "");
  const [githubUrl, setGithubUrl] = useState(project?.githubUrl || "");
  const [tags, setTags] = useState<string[]>(project?.tags || []);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = (tagToAdd: string) => {
    if (tagToAdd && !tags.includes(tagToAdd)) {
      setTags([...tags, tagToAdd]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      imageUrl,
      demoUrl,
      githubUrl,
      tags,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="demoUrl">Demo URL</Label>
        <Input
          id="demoUrl"
          type="url"
          value={demoUrl}
          onChange={(e) => setDemoUrl(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="githubUrl">GitHub Repository URL</Label>
        <Input
          id="githubUrl"
          type="url"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
        />
      </div>

      <div>
        <Label>Predefined Tags</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {PREDEFINED_TAGS.map((tag) => (
            <Button
              key={tag}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleAddTag(tag)}
              className={tags.includes(tag) ? "opacity-50" : ""}
              disabled={tags.includes(tag)}
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="tags">Custom Tags</Label>
        <div className="flex gap-2">
          <Input
            id="tags"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add a custom tag"
          />
          <Button type="button" onClick={() => handleAddTag(newTag)}>
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
            >
              <Tag className="w-3 h-3" />
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="ml-1 hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full">
        {project ? "Update Project" : "Add Project"}
      </Button>
    </form>
  );
};