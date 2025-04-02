
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SafeInputs, SafeResults } from "@/utils/calculatorLogic";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface EmailFormProps {
  inputs: SafeInputs;
  results: SafeResults | null;
}

const EmailForm: React.FC<EmailFormProps> = ({ inputs, results }) => {
  const [emailData, setEmailData] = useState({
    recipientEmail: "",
    senderName: "",
    senderEmail: "",
    message: "Please find attached the SAFE Note calculation results as requested.",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the email with the results
    // For now, we'll simulate sending the email
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Email sent successfully!",
        description: `Results have been sent to ${emailData.recipientEmail}`,
      });
      
      // Reset the form
      setEmailData({
        recipientEmail: "",
        senderName: "",
        senderEmail: "",
        message: "Please find attached the SAFE Note calculation results as requested.",
      });
    }, 1500);
  };

  if (!results) {
    return null;
  }

  return (
    <div className="calculator-card">
      <div className="flex items-center mb-6">
        <Mail className="w-6 h-6 text-primary mr-2" />
        <h2 className="text-xl font-semibold text-primary">
          Email Results
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <Label htmlFor="recipientEmail" className="form-label">
              Recipient Email
            </Label>
            <Input
              id="recipientEmail"
              name="recipientEmail"
              type="email"
              value={emailData.recipientEmail}
              onChange={handleChange}
              placeholder="recipient@example.com"
              required
              className="w-full"
            />
          </div>

          <div className="form-control">
            <Label htmlFor="senderName" className="form-label">
              Your Name
            </Label>
            <Input
              id="senderName"
              name="senderName"
              type="text"
              value={emailData.senderName}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="form-control mb-4">
          <Label htmlFor="senderEmail" className="form-label">
            Your Email
          </Label>
          <Input
            id="senderEmail"
            name="senderEmail"
            type="email"
            value={emailData.senderEmail}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full"
          />
        </div>

        <div className="form-control mb-6">
          <Label htmlFor="message" className="form-label">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={emailData.message}
            onChange={handleChange}
            rows={3}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="secondary-button w-full flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <span>Send Results via Email</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
