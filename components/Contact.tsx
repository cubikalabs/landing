import ContactForm from "./ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-xl mb-8">Ready to build your custom solution? Let's talk!</p>
        <ContactForm />
      </div>
    </section>
  )
}

