import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  privacy: z.boolean().refine(value => value === true, {
    message: "You must agree to the privacy policy"
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false
    }
  });
  
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your server
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#1e293b] relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0f172a] to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
            <p className="text-xl text-gray-300">
              Ready to transform your business with sustainable AI-powered IT solutions? Get in touch today!
            </p>
          </div>
          
          <div className="bg-[#0f172a] rounded-xl shadow-lg p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Your name" 
                            className="px-4 py-3 rounded-md bg-[#1e293b] border border-gray-700 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="you@example.com" 
                            className="px-4 py-3 rounded-md bg-[#1e293b] border border-gray-700 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="IT Services Inquiry" 
                          className="px-4 py-3 rounded-md bg-[#1e293b] border border-gray-700 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5} 
                          placeholder="Describe your business needs and how we can help with AI-powered IT solutions..." 
                          className="px-4 py-3 rounded-md bg-[#1e293b] border border-gray-700 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                          className="mt-1 h-4 w-4 text-[#10b981] border-gray-700 rounded focus:ring-[#10b981]" 
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-300">
                          I agree to the processing of my data according to the <a href="#" className="text-[#10b981] hover:underline">Privacy Policy</a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-gray-400 mb-4 md:mb-0 text-center md:text-left">
                    We'll analyze your needs and provide a sustainable IT solution
                  </p>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-md transition-colors w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
