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
                            A single high dose (10 mg/kg) of liposomal amphoteriicn B <span className="underline">plus</span> 14 days of flucytosine (100 mg/kg per day divided into four 
                            doses per day) <span className="underline">plus</span> fluconazole (1200 mg daily for adults, 12 mg/kg per day for children and adolesnces up to a maximum of 
                            800 mg daily). (<a className="underline text-blue-600 hover:text-blue-800" href="https://www.nejm.org/doi/10.1056/NEJMoa2111904?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed">Ambition Trial</a>). 
                        </li>
                    </ul>
                    <span className="underline">Alternatives:</span>
                    <ul className="ml-8 list-disc"> 
                        <li>
                            <span className="font-bold">If liposomal amphotericin B unavailable - </span>One week of amphotericin B deoxycholate (1 mg/kg per day) <span className="underline">plus</span> flucytosine 
                            (100 mg/kg per day, divided into four doses per day) <span className="underline font-bolt">followed by</span> one week of fluconazole 
                            (1200 mg daily for adults, 12 mg/kg per day for children and adolescents up to a maximum of 800 mg daily).
                        </li>
                        <li>
                            <span className="font-bold">If no amphotericin B formulations available - </span>Two weeks of fluconazole (1200 mg daily for adults, 12 mg/kg per day
                            for children and adolescents up to a maximum of 800 mg daily) <span className="underline">plus</span> flucytosine (100 mg/kg per day, divided into four doses per day).
                        </li>
                        <li>
                            <span className="font-bold">If flucytosine unavailable - </span>Two weeks of liposomal amphotericin (3-4 mg/kg per day) <span className="underline">plus</span> fluconazole
                            (1200 mg daily, 12 mg/kg per day for children and adolescents up to a maximum of 800 mg daily). 
                        </li>
                        <li>
                            <span className="font-bold">If liposomal amphotericin B and flucytosine unavailable - </span>Two weeks of amphotericin deoxycholate (1 mg/kg/day) <span className="underline">plus</span> fluconazole (1200mg daily for adults, 12 mg/kg/day for children and adolescents 
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
                        Fluconazole (800mg daily for adults, 6-12 mg/kg/day for children and adolescents up to a maximum of 800mg daily) for eight weeks following induction therapy.
                    </li>
                </ul>
            </div>
            <h2 className="text-lg mt-4 font-bold text-left tracking-tight text-gray-900">
                Maintenance Therapy:
            </h2>
            <div className="ml-8 text-base text-left tracking-tight text-gray-900">
                <ul className="list-disc">
                    <li>
                        Fluconazole (200mg daily for adults, 6 mg/kg/day for children and adolescents up to a maximum of 800mg daily) following consolidation therapy, continuing until 
                        immune reconstitution (CD4 {`>`} 200 cells/mm<sup>3</sup>).
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
//TODO: Add treatment of relapse info from WHO guidelines
    )
}

export default Treatment;