import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Education } from "@/lib/mongodb";

interface EducationFormProps {
  education?: Education;
  onSubmit: (data: Omit<Education, '_id'>) => void;
}

export const EducationForm = ({ education, onSubmit }: EducationFormProps) => {
  const [institution, setInstitution] = useState(education?.institution || "");
  const [degree, setDegree] = useState(education?.degree || "");
  const [field, setField] = useState(education?.field || "");
  const [startDate, setStartDate] = useState(education?.startDate || "");
  const [endDate, setEndDate] = useState(education?.endDate || "");
  const [description, setDescription] = useState(education?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      institution,
      degree,
      field,
      startDate,
      endDate,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="institution">Institution</Label>
        <Input
          id="institution"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="degree">Degree</Label>
        <Input
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="field">Field of Study</Label>
        <Input
          id="field"
          value={field}
          onChange={(e) => setField(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="endDate">End Date</Label>
        <Input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        {education ? "Update Education" : "Add Education"}
      </Button>
    </form>
  );
};