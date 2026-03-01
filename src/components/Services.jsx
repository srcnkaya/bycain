import { Monitor, Rocket, RefreshCcw, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    description: 'Custom websites that present your brand professionally and build trust quickly.',
    icon: Monitor,
  },
  {
    title: 'Landing Pages',
    description: 'Focused pages built to drive inquiries, bookings, and sales with clear conversion paths.',
    icon: Rocket,
  },
  {
    title: 'Redesign & Optimization',
    description: 'Upgrade outdated websites with cleaner UX, faster loading, and stronger messaging.',
    icon: RefreshCcw,
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing updates, fixes, and technical support so your site stays reliable and current.',
    icon: ShieldCheck,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 lg:px-20 bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
          <p className="text-luxury-platinum/80 max-w-2xl mx-auto text-base sm:text-lg">
            Practical web solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="bg-luxury-charcoal border border-luxury-gray hover:border-luxury-slate rounded-2xl p-6 transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-luxury-slate mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-luxury-platinum/75 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
