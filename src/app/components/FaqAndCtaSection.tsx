'use client';

import { useState } from 'react';


const faqs = [
  'Where are you located?',
  'What do I get for $19?',
  'Are You Open On Sundays?',
  'Clinica is No Insurance Needed!?',
  'How Much is The Office Visit?',
];

const FaqCtaSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      {/* FAQ Section */}
      <div className="py-16 px-6 md:px-24 bg-white text-center">
        <h2 className="text-2xl font-bold mb-2 text-black">Frequently Asked Questions</h2>
        <p className="text-gray mb-8 max-w-xl mx-auto">
          Have questions about your visit? Need health tips? Explore our resources to feel prepared and supported.
        </p>

        <div className="space-y-4 max-w-2xl mx-auto text-left text-black">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md shadow-sm">
              <button
                className="w-full flex justify-between items-center px-4 py-3 font-medium"
                onClick={() => toggleFAQ(index)}
              >
                {faq}
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray">
                  This is a sample answer for: <strong>{faq}</strong>. Replace with real content.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default FaqCtaSection;
