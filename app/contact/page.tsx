"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    type: "success", // "success" | "error"
    title: "",
    description: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const showAlert = (
    type: "success" | "error",
    title: string,
    description: string
  ) => {
    setAlertState({
      open: true,
      type,
      title,
      description,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      showAlert(
        "error",
        "Missing Information",
        "Please fill in all fields before submitting."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showAlert(
          "success",
          "Message Sent Successfully!",
          "Thank you for reaching out. We'll get back to you within 24 hours."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        showAlert(
          "error",
          "Failed to Send Message",
          "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      showAlert(
        "error",
        "Connection Error",
        "Unable to send message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-[85rem] mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium tracking-wider opacity-60">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Contact
          </h1>
          <p className="text-lg md:text-xl opacity-60 max-w-2xl">
            Have a question or want to work together? We'd love to hear from
            you. Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="space-y-5">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-60 tracking-wide">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-current border-opacity-20 focus:outline-none focus:border-opacity-100 transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 opacity-60 tracking-wide">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-current border-opacity-20 focus:outline-none focus:border-opacity-100 transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 opacity-60 tracking-wide">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-current border-opacity-20 focus:outline-none focus:border-opacity-100 transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 opacity-60 tracking-wide">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-current border-opacity-20 focus:outline-none focus:border-opacity-100 transition-all resize-none text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group w-full px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send
                className={`w-5 h-5 transition-transform duration-300 ${!isSubmitting &&
                  "group-hover:translate-x-1 group-hover:-translate-y-1"
                  }`}
              />
            </Button>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6 lg:pl-8">
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-start gap-4 p-6 border rounded-2xl transition-all duration-300 hover:border-opacity-100 border-opacity-30">
                  <div className="mt-1">
                    <Mail className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="opacity-60 text-sm mb-3">
                      We'll respond within 24 hours
                    </p>
                    <p className="font-medium">hr@shankham.com</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 border rounded-2xl transition-all duration-300 hover:border-opacity-100 border-opacity-30">
                  <div className="mt-1">
                    <Phone className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="opacity-60 text-sm mb-3">
                      Mon-Fri, 9AM-6PM EST
                    </p>
                    <p className="font-medium">+91 9998581613</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 border rounded-2xl transition-all duration-300 hover:border-opacity-100 border-opacity-30">
                  <div className="mt-1">
                    <MapPin className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                    <p className="font-medium">
                      233, Platinum point sudama chowk opp. CNG Pump. Mota Varachha, Surat, Gujarat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-opacity-20">
              <h4 className="text-sm font-bold tracking-wider opacity-60 mb-4">
                CONNECT WITH US
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Twitter", "LinkedIn", "Discord"].map((platform) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="sm"
                    className="rounded-full transition-all duration-300 hover:scale-105"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Dialog */}
      <AlertDialog
        open={alertState.open}
        onOpenChange={(open) => setAlertState({ ...alertState, open })}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle
              className={
                alertState.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {alertState.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {alertState.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setAlertState({ ...alertState, open: false })}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Contact;
