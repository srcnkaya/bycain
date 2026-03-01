const faqs = [
  {
    question: 'How long does a website project take?',
    answer: 'Most projects are completed in 1 to 4 weeks depending on scope, content readiness, and feedback speed.',
  },
  {
    question: 'What is included in the project?',
    answer: 'Each project includes strategy alignment, custom design, development, responsive optimization, and launch support.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes. Revisions are included during the build phase to make sure the final result matches your business goals.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. We provide maintenance and support options for updates, fixes, and performance improvements after launch.',
  },
  {
    question: 'Can I start with a landing page first?',
    answer: 'Absolutely. A landing page is often the fastest way to launch and validate your offer before scaling.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-20 bg-luxury-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
          <p className="text-luxury-charcoal/70 text-base sm:text-lg">
            Common questions before starting a project.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <article key={item.question} className="border border-luxury-slateLight rounded-2xl p-6 bg-white">
              <h3 className="text-lg font-semibold text-luxury-black mb-2">{item.question}</h3>
              <p className="text-luxury-charcoal/75 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
