import React from "react";
import Cryptococcus from "../images/cryptococcus.jpg";

const stats = [
    { label: "Global Cases, Annually", value: '220,000+' },
    { label: 'Global Deaths, Annually', value: '181,000+' },
    { label: 'Percent of HIV-related Deaths in Africa', value: '15-20%' },
    { label: '1-year Mortality in Resource-Limited Settings', value: '70%' },
  ]

function Intro(){
    return (
        <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Global Repercussions
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={Cryptococcus}
                      alt="Cryptococcus-positive blood sample"
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Cryptococcal meningitis is the most common cause of adult meninigitis in high prevalence of HIV populations 
                  and causes 15-20% of HIV-related deaths globally, with the highest incidence occuring in sub-Saharan Africa.
                  Despite this significant disease burden, it remains a neglected disease.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  This repository is a central source of epidemiologic data, as well as guidelines for diagnosis and management, 
                  related to Cryptococcal meningitis. By sharing this data in an open-source, easily-accessible manner, we hope to
                  improve outcomes in areas with a high incidence of Cryptococcal meningitis, as well as serving as a high yield resource
                  for clinicians managing these patients in any setting.
                </p>
              </div>
            <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                ))}
                </dl>
             </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Intro;