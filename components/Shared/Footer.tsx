import React from "react";
import Button from "./Button";
import {
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full font-mono">
        <h1 className="text-3xl lg:text-7xl font-thin mb-4">Available on</h1>
        <div className="flex flex-wrap justify-bewteen gap-4 w-full">
          <Button className="flex justify-center items-center align-middle gap-1">
            <FaEnvelope size={20} style={{ verticalAlign: "middle" }} />
            <span className="hidden sm:inline">Mail</span>
          </Button>
          <Button className="flex justify-center items-center align-middle gap-1">
            <FaLinkedin size={20} style={{ verticalAlign: "middle" }} />
            <span className="hidden sm:inline">LinkedIn</span>
          </Button>
          <Button className="flex justify-center items-center align-middle gap-1">
            <FaXTwitter size={20} style={{ verticalAlign: "middle" }} />
            <span className="hidden sm:inline"> X(Twitter)</span>
          </Button>
          <Button className="flex justify-center items-center align-middle gap-1">
            <FaTelegram size={20} style={{ verticalAlign: "middle" }} />
            <span className="hidden sm:inline">Telegram</span>
          </Button>
          <Button className="hidden lg:flex justify-center items-center align-middle gap-1">
            <FaGithub size={20} style={{ verticalAlign: "middle" }} />
            <span className="hidden sm:inline">Github</span>
          </Button>
        </div>
        <p className="font-mono mt-4 mb-8">feel free to connect</p>
      </div>
      <div className="w-full flex items-center justify-center text-center">
        <p className="text-center font-mono">© Halleluya Mulugeta</p>
      </div>
    </>
  );
};

export default Footer;
