import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          {/* Copyright  */}
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5 cursor-default">
            <p className="opacity-70">Copyright, CM</p>
          </div>
          {/* Terms  */}
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                Privacy Policy
              </p>
              <p className="text-p5 transition-all duration-500 hover:text-p1">
                Terms of Use
              </p>
            </div>
          {/* social media  */}
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10">
            {socials.map(({ id, icon, url, title }) => (
              <li key={id}>
                <a href={url} className="social-icon" target="_blank" >
                  <img src={icon} alt={title} className="size-1/3 object-contain" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
