import React from "react";

function Treatment(){
    return (
        <div>
            <h2 className="text-lg font-bold text-left tracking-tight text-gray-900">
                Induction Therapy:
            </h2>
            <div className="ml-8 text-base text-left tracking-tight text-gray-900">
                <span className="underline">Preferred:</span> 
                    <ul className="ml-8 list-disc">
                        <li>
                        One week course of amphotericin B deoxycholate (1 mg/kg/day) <span className="underline">plus</span> flucytosine (100 mg/kg/day, 
                        divided into four doses per day), <span className="underline font-bold">followed by...</span>
                        </li>
                        <li>
                        One week of fluconazole (1200mg/day for adults, 12 mg/kg/day 
                        for children and adolescents, up to a maximum of 800mg daily). Pre-emptive hydration and electrolyte replacement, 
                        as well as toxicity monitoring and management, should be provided to minimize treatment-related adverse effects.
                        </li>
                        <p className="ml-16 mt-2">
                            <span className="underline">Note:</span> Data from the recently published <a className="underline text-blue-600 hover:text-blue-800" href="https://www.nejm.org/doi/10.1056/NEJMoa2111904?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed">Ambition Trial</a> suggests 
                            induction therapy with a single dose of liposomal amphotericin B (10 mg/kg) in combination with 14 days of flucytosine (100 mg/kg/day) and fluconazole (1200 mg/day) is noninferior to the current WHO-preferred therapy 
                            given above, and may be associated with fewer amphotericin-related adverse effects.
                        </p>
                    </ul>
                    <span className="underline">Alternatives:</span>
                    <ul className="ml-8 list-disc"> 
                        <li>
                            Two weeks of fluconazole (1200 mg daily for adults, 12 mg/kd/day for children and adolescents)
                            <span className="underline">plus</span> flucytosine (100 mg/kg/day, divided into four doses per day), <span className="underline font-bold">or...</span>
                        </li>
                        <li>
                            Two weeks amphotericin deoxycholate (1 mg/kg/day) <span className="underline">plus</span> fluconazole (1200mg daily for adults, 12 mg/kg/day for children and adolescents 
                            up to a maximum of 800 mg daily).
                        </li>
                    </ul>
                    <p className="mt-2">
                        Adjunctive corticosteroid therapy during the induction phase is not recommended in HIV-associated cryptococcal meningitis.
                    </p>
            </div>
            <h2 className="text-lg mt-4 font-bold text-left tracking-tight text-gray-900">
                Consolidation Therapy:
            </h2>
            <div className="ml-8 text-base text-left tracking-tight text-gray-900">
                <ul className="list-disc">
                    <li>
                        Fluconazole (800mg daily for adults, 6-12 mg/kg/day for children and adolescents up to a maximum of 800mg daily) for eright weeks following induction therapy.
                    </li>
                </ul>
            </div>
            <h2 className="text-lg mt-4 font-bold text-left tracking-tight text-gray-900">
                Maintenance Therapy:
            </h2>
            <div className="ml-8 text-base text-left tracking-tight text-gray-900">
                <ul className="list-disc">
                    <li>
                        Fluconazole (200mg daily for adults, 6 mg/kg/day for children and adolescents up to a maximum of 800mg daily) for following consolidation therapy.
                    </li>
                </ul>
            </div>
            <div className="mt-4 text-base text-left tracking-tight text-gray-900">
                <h2 className="text-lg font-bold text-left tracking-tight text-gray-900">
                    Timing of ART Initiation:
                </h2>
                <div className="ml-8 text-base text-left tracking-tight text-gray-900">
                    <ul className="list-disc">
                        <li>
                            Immediate ART initiation is not recommended for adults, adolescents, and children living with HIV
                            who have cryptococcal meninigitis due an increase mortality risk related to immune reconstitution.
                        </li>
                        <li>
                            Initiation of ART should be deferred by 4-6 weeks from the initiation of antifungal treatment.                        
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Treatment;