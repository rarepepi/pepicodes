// @ts-ignore:next-line

import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div
      className="flex justify-center p-8 space-x-8 w-full sticky
    inset-x-0
    bottom-0"
    >
      <Fade>
        <div className="flex justify-start ">
          <p className="text-gray-400 text-sm">
            Built from scratch by Pepi.{" "}
            <span>
              <a
                href="https://github.com/rarepepi/pepicodes"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github text-xl ml-2 mb-6" />
              </a>
            </span>
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
