import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Certificate } from "@/lib/mongodb";

interface CertificateFormProps {
  certificate?: Certificate;
  onSubmit: (data: Omit<Certificate, '_id'>) => void;
}

export const CertificateForm = ({ certificate, onSubmit }: CertificateFormProps) => {
  const [title, setTitle] = useState(certificate?.title || "");
  const [issuer, setIssuer] = useState(certificate?.issuer || "");
  const [date, setDate] = useState(certificate?.date || "");
  const [imageUrl, setImageUrl] = useState(certificate?.imageUrl || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      issuer,
      date,
      imageUrl,
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
        <Label htmlFor="issuer">Issuer</Label>
        <Input
          id="issuer"
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="imageUrl">Certificate Image URL</Label>
        <Input
          id="imageUrl"
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        {certificate ? "Update Certificate" : "Add Certificate"}
      </Button>
    </form>
  );
};