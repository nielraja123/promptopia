import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className=" w-full items-center">
      <div className="mt-5">
        <div className="items-center px-10 pt-6 gap-10">
          <div className="flex gap-2 flex-center">
            <Image
              src="/assets/images/logo.svg"
              alt="Promptopia Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="logo_text"> Promptopia</p>
          </div>
          <h5 className="pb-10 mt-5">
            Made with ♥ by Andre Nathaniel Adipraja
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Footer;
