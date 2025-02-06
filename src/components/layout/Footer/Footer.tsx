import facebook from "/home/facebook.png";
import github from "/home/github.png";
import instagram from "/home/instagram.png";
import twitter from "/home/twitter.png";
import visa from "/home/visa.png";
import mastercard from "/home/mastercard.png";
import paypal from "/home/paypal.png";
import applepay from "/home/applepay.png";
import googlepay from "/home/googlepay.png";

const Footer = () => {
  const companyLinks = [
    { title: 'About', href: '/about' },
    { title: 'Features', href: '/features' },
    { title: 'Works', href: '/works' },
    { title: 'Career', href: '/career' },
  ];

  const helpLinks = [
    { title: 'Customer Support', href: '/support' },
    { title: 'Delivery Details', href: '/delivery' },
    { title: 'Terms & Conditions', href: '/terms' },
    { title: 'Privacy Policy', href: '/privacy' },
  ];

  const faqLinks = [
    { title: 'Account', href: '/account' },
    { title: 'Manage Deliveries', href: '/deliveries' },
    { title: 'Orders', href: '/orders' },
    { title: 'Payments', href: '/payments' },
  ];

  const resourceLinks = [
    { title: 'Free eBooks', href: '/ebooks' },
    { title: 'Development Tutorial', href: '/tutorial' },
    { title: 'How to - Blog', href: '/blog' },
    { title: 'Youtube Playlist', href: '/youtube' },
  ];

  const socialIcons = [
    { icon: twitter, href: "#" },
    { icon: facebook, href: "#" },
    { icon: instagram, href: "#" },
    { icon: github, href: "#" },
  ];

  return (
    <footer className="bg-[#F0F0F0]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 mb-0 md:mb-6 ">
            <h2 className="text-[32px] font-bold font-['Integral_CF'] mb-2 md:mb-6">SHOP.CO</h2>
            <p className="text-[#666666] font-['Satoshi'] text-base mb-2 md:mb-8 max-w-[520px]">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-4 my-0 md:py-4 lg:py-1">
              {socialIcons.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-[#F2F2F2] rounded-full hover:bg-gray-200 transition-colors"
                >
                  <img src={social.icon} alt="" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 col-span-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-medium mb-2 md:mb-6 decoration-skip-ink-none underline-offset-from-font">COMPANY</h3>
              <ul className="space-y-2 lg:space-y-4 md:space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[#666666] hover:text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-normal decoration-skip-ink-none underline-offset-from-font">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-medium mb-2 md:mb-6 decoration-skip-ink-none underline-offset-from-font">HELP</h3>
              <ul className="space-y-2 lg:space-y-4 md:space-y-4">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[#666666] hover:text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-normal decoration-skip-ink-none underline-offset-from-font">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ Links */}
            <div>
              <h3 className="text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-medium mb-2 md:mb-6 decoration-skip-ink-none underline-offset-from-font">FAQ</h3>
              <ul className="space-y-2 lg:space-y-4 md:space-y-4">
                {faqLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[#666666] hover:text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-normal decoration-skip-ink-none underline-offset-from-font">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-medium mb-2 md:mb-6 decoration-skip-ink-none underline-offset-from-font">RESOURCES</h3>
              <ul className="space-y-2 lg:space-y-4 md:space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[#666666] hover:text-black font-['Satoshi'] text-[14px] lg:text-[16px] font-normal decoration-skip-ink-none underline-offset-from-font">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}


        {/* Bottom Bar */}
        <div className="border-t border-[#E8E8E8] pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[#666666] font-['Satoshi'] text-base">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <img src={visa} alt="Visa" className="w-[46.61px] h-[30.03px]" />
            <img src={mastercard} alt="Mastercard" className="w-[46.61px] h-[30.03px]" />
            <img src={paypal} alt="PayPal" className="w-[46.61px] h-[30.03px]" />
            <img src={applepay} alt="Apple Pay" className="w-[46.61px] h-[30.03px]" />
            <img src={googlepay} alt="Google Pay" className="w-[46.61px] h-[30.03px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;