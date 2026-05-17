import { useState } from "react";
import { MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    try {
      console.log("Form submission:", formData);
      await new Promise((r) => setTimeout(r, 400));

      toast({
        title: "Message received",
        description: "The team has received the inquiry.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try sending the message again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-card scroll-mt-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6 text-balance">
              Contact the facility
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
              Fill out the form below to ask questions about commercial accounts or general facility services.
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-foreground mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs text-foreground font-sans">
                    17th Ave Car and Dog Wash
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    International Avenue<br />
                    Calgary
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 bg-background text-foreground p-6 sm:p-8 md:p-10 rounded-sm border border-border shadow-[0_25px_80px_-50px_rgba(0,0,0,0.18)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="q-name"
                    className="block text-xs text-foreground mb-2 font-sans"
                  >
                    Name
                  </label>
                  <input
                    id="q-name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="q-email"
                    className="block text-xs text-foreground mb-2 font-sans"
                  >
                    Email
                  </label>
                  <input
                    id="q-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="q-subject"
                    className="block text-xs text-foreground mb-2 font-sans"
                  >
                    Subject
                  </label>
                  <input
                    id="q-subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="q-message"
                  className="block text-xs text-foreground mb-2 font-sans"
                >
                  Message
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  rows={4}
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-accent text-accent-foreground px-10 py-4 text-sm font-sans rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.85)]"
              >
                {submitting ? "Sending" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
