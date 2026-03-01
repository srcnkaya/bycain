import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    text: 'We learn your business goals, audience, and what success looks like.',
    icon: Search,
  },
  {
    title: 'Design Direction',
    text: 'We define layout, style, and messaging aligned with your brand.',
    icon: PenTool,
  },
  {
    title: 'Build & Review',
    text: 'We develop the site, optimize for speed, and refine based on feedback.',
    icon: Code2,
  },
  {
    title: 'Launch & Support',
    text: 'We publish your website and provide support for smooth operation.',
    icon: Rocket,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 px-4 md:px-8 lg:px-20 bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-luxury-platinum/80 max-w-2xl mx-auto text-base sm:text-lg">
            A clear process built for speed, quality, and predictable delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="bg-luxury-charcoal border border-luxury-gray rounded-2xl p-6">
                <div className="text-luxury-slate mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-sm text-luxury-platinum/60 mb-1">Step {index + 1}</p>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-luxury-platinum/75 text-sm leading-relaxed">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
