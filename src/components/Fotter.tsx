import { footerLinks } from '../data';

const Footer = () => {
  return (
    <footer className="mt-20 bg-black-dark">
      <div className="container px-4 sm:px-0">
        <div className="grid grid-cols-1 gap-8 pt-16 pb-10 text-white sm:grid-cols-6">
          <img src="/logo-white.svg" className="" alt="Dukaan Logo" />
          {footerLinks.map((links, idx) => (
            <div key={idx} className="flex sm:justify-end">
              <div className="flex flex-col">
                {links.map((link) => (
                  <a key={link.label} href={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col flex-wrap justify-center border-t border-black-light py-6 text-sm text-white sm:flex-row sm:justify-between">
          <span>Dukaan {new Date().getFullYear()}, All rights reserved.</span>
          <div className="flex">
            <span>Made in</span>
            <img
              src="/images/indian-flag.png"
              alt="indian flag"
              className="ml-2 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
