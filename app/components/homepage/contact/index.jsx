// @flow strict

import { personalData } from "@/utils/data/personal-data";

function ContactSection() {
  return (
    <section id="contact" className="py-12 text-white">
      
      <h2 className="text-2xl font-bold mb-6">Contact</h2>

      {/* SIMPLE CONTACT INFO */}
      <div className="flex flex-col gap-2 text-lg">
        <p>Email: {personalData.email}</p>
        <p>Phone: {personalData.phone}</p>
      </div>

    </section>
  );
}

export default ContactSection;