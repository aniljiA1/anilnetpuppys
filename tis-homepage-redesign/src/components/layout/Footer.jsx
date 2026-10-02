import { address, email, phone } from "@/data/content";

const links = [["FAQ", "https://tis.edu.in/faq/"], ["Privacy Policy", "https://tis.edu.in/privacy-policy/"], ["Terms & Conditions", "https://tis.edu.in/terms-conditions/"], ["Virtual Tour", "https://tis.edu.in/virtual-tour/"]];

export default function Footer() {
  return (
    <footer className="bg-[#0F2347] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">Tulas International School</p>
          <address className="mt-3 text-sm not-italic text-white/75">{address}</address>
        </div>
        <ul className="space-y-2 text-sm">
          <li><a className="hover:text-[#F5B820]" href={`tel:${phone}`}>Admission Helpline No. {phone}</a></li>
          <li><a className="hover:text-[#F5B820]" href="tel:0135-2699444">Landline No. 0135-2699444</a></li>
          <li><a className="hover:text-[#F5B820]" href={`mailto:${email}`}>{email}</a></li>
        </ul>
        <ul className="space-y-2 text-sm">
          {links.map(([l, h]) => <li key={l}><a className="hover:text-[#F5B820]" href={h}>{l}</a></li>)}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-white/60">Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved</p>
    </footer>
  );
}
