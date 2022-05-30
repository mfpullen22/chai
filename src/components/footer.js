import React from "react";
import CHAI from "../images/CHAI.png";
import UNITAID from "../images/UNITAID.png";
import UMN from "../images/UMN.png";

function Footer(){
    return (
        <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3">
          <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
            <img className="h-24" src={CHAI} alt="CHAI Logo" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
            <img className="h-24" src={UMN} alt="UMN Logo" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
            <img className="h-24" src={UNITAID} alt="UNITAID Logo" />
          </div>
        </div>
            <p className="mt-8 text-center text-base text-gray-400">
                A collaboration between the University of Minnesota and the Clinton Health Access Initiative.
                The development of this website has been funded by Unitaid with support from CHAI through the Unitaid-CHAI Optimal project. Learn more about the Unitaid-CHAI collaboration <a href="https://unitaid.org/project/stopping-preventable-deaths-among-people-with-advanced-hiv-disease/#en"><u>here.</u></a>
            </p>
            <p className="text-center text-base text-gray-400">
                Created by <a href="https://experts.umn.edu/en/persons/matthew-f-pullen"><u>Matthew F. Pullen MD</u></a>
            </p>
        </div>
      </footer>
    )
}
//Needs UNITAID logo
//Needs HIV Policy Lab logo

export default Footer;