"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/app/lib/schema";
import { supabase } from "@/app/lib/supabase";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    // Inicializa el captcha de Turnstile aquí si es necesario
    // Turnstile.init();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    if (!captchaToken) {
      console.error("Captcha not solved");
      return;
    }

    setIsSubmitting(true);
    try {
      // Envía el token del captcha al servidor para su validación
      const captchaValidationResponse = await fetch("/api/validate-captcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: captchaToken }),
      });

      if (!captchaValidationResponse.ok) {
        throw new Error("Captcha validation failed");
      }

      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          { name: data.name, email: data.email, message: data.message },
        ]);

      if (error) throw error;

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name")}
          className="bg-white text-gray-800"
        />
        {errors.name && (
          <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="bg-white text-gray-800"
        />
        {errors.email && (
          <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...register("message")}
          className="bg-white text-gray-800"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
        onSuccess={(token: string) => setCaptchaToken(token)}
      />
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {submitStatus === "success" && (
        <p className="text-green-300 text-center">
          Thank you for your message. We&apos;ll be in touch soon!
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-300 text-center">
          An error occurred. Please try again later.
        </p>
      )}
    </form>
  );
}
