import React from "react";
import Button from "./Button";
import {
  FaLinkedin,
  FaEnvelope,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full font-mono">
        <h1 className="text-3xl lg:text-7xl font-thin mb-4">Available on</h1>
        <div className="flex flex-wrap justify-bewteen gap-4 w-full">
          <Link href={"mailto:halleluya.mulugeta@gmail.com"} className="cursor-pointer">
            <Button className="flex justify-center items-center align-middle gap-1 cursor-pointer">
              <FaEnvelope size={20} style={{ verticalAlign: "middle" }} />
              <span className="hidden sm:inline">Mail</span>
            </Button>
          </Link>

          <Link href={"https://linkedin.com/in/halleluya-mulugeta"} target="blank" className="cursor-pointer">
            <Button className="flex justify-center items-center align-middle gap-1 cursor-pointer">
              <FaLinkedin size={20} style={{ verticalAlign: "middle" }} />
              <span className="hidden sm:inline">LinkedIn</span>
            </Button>
          </Link>

          <Link href={"https://t.me/hallemulugeta"} target="blank" className="cursor-pointer">
            <Button className="flex justify-center items-center align-middle gap-1 cursor-pointer">
              <FaTelegram size={20} style={{ verticalAlign: "middle" }} />
              <span className="hidden sm:inline">Telegram</span>
            </Button>
          </Link>

          <Link href={"https://github.com/halleygz"} target="blank" className="cursor-pointer">
            <Button className="hidden lg:flex justify-center items-center align-middle gap-1 cursor-pointer">
              <FaGithub size={20} style={{ verticalAlign: "middle" }} />
              <span className="hidden sm:inline">Github</span>
            </Button>
          </Link>
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
