// @ts-ignore:next-line

import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <div
      className="flex justify-center p-8 space-x-8 w-full sticky
    inset-x-0
    bottom-0"
    >
      <Fade>
        <div className="flex justify-start ">
          <p className="text-gray-400 text-sm">Built by Pepi.</p>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
