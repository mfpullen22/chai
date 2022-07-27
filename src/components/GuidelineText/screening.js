import React from "react";

function Screening(){
    return (
        <div>
            <p className="text-base text-left tracking-tight text-gray-900">
                Screening for cryptococcal antigen (CrAg) followed by pre-emptive antifungal therapy among those with positive CrAg is 
                recommended before initiating (or re-iniatiting) anti-retroviral therapy (ART) for adults and adolescents living with HIV
                who have a CD4 {`<`} 100 cells/mm<sup>3</sup> and may be considered at a higher threshold of CD4 {`<`} 200 cells/mm<sup>3</sup>.
            </p>
            <p className="ml-8 mt-4 text-base text-left tracking-tight text-gray-900">
                All persons living with HIV with a positive CrAG on screening should be carefully evaluated for signs and symptoms of meningitis. If 
                present, a lumbar puncture should be performed (if feasible) and CSF examined by CrAg (or India Ink, if CrAg assay not available) to rule
                out active cryptococcal disease. India ink has low sensitivity, so negative India ink results should, if at all possible, be confirmed by CSF CrAg or culture.
            </p>
            <p className="mt-4 text-base text-left tracking-tight text-gray-900">
                When CrAg testing is not available. fluconazole primary prophylaxis should be given to adults and adolescents living with HIV who
                have a CD4 {`<`} 100 cells/mm<sup>3</sup> and may be considered at a higher threshold of CD4 {`<`} 200
                cells/mm<sup>3</sup>.
            </p>
            <p className="mt-4 text-base text-left tracking-tight text-gray-900">
                Screening and primary prophylaxis are not recommended in children owing to low incidence of cryptococcal meningitis in this age group, even in high-incidence regions.
            </p>
        </div>
    )
}

export default Screening;