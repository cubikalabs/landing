import { Zap, MessageSquare, Shuffle } from "lucide-react"

export default function Principles() {
  const principles = [
    { icon: Zap, title: "Efficiency", description: "Optimizing processes to deliver precise solutions." },
    { icon: MessageSquare, title: "Clarity", description: "Direct communication and transparent results." },
    { icon: Shuffle, title: "Adaptability", description: "Ability to respond to each client's specific needs." },
  ]

  return (
    <section id="principles" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Principles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center">
              <principle.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

