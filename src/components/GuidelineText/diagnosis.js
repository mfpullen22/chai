import React from "react";

function Diagnosis(){
    return (
        <div>
            <h2 className="text-lg font-bold text-left tracking-tight text-gray-900">
                Settings with ready access to, and no contraindications for, lumbar puncture:
            </h2>
            <p className="ml-8 text-base text-left tracking-tight text-gray-900">
                If both access to a cryptococcal antigen assay (either lateral flow assay or latex agglutination assay)
                and rapid results (less than 24 hours) are available, lumbar puncture with rapid CSF cryptococcal antigen 
                assay is the preferred diagnostic approach.
            </p>
            <p className="ml-8 mt-4 text-base text-left tracking-tight text-gray-900">
                If access to a cryptococcal antigen assay is not available and/o rapid ersults are not available, lumbar puncture
                with CSF India ink test is teh preferred diagnostic approach.
            </p>
            <h2 className="mt-4 text-lg font-bold text-left tracking-tight text-gray-900">
                Settings without immediate access to lumbar puncture, or when lumbar puncture is clinically containdicated:
            </h2>
            <p className="ml-8 text-base text-left tracking-tight text-gray-900">
                If both access to a cryptococcal antigen assay and rapid results (less than 24 hours) are available, the preferred
                diagnostic approaches ae rapid serum, plasma, or whole-blood cryptococcal antigen assays.
            </p>
            <p className="ml-8 mt-4 text-base text-left tracking-tight text-gray-900">
                If a cryptococcal antigen assay is not available and/or rapid access to esults is not ensured, patient should be promptly
                referred to center where further investigation and treatment is possible, as appropriate.
            </p>
        </div>

    )
}

export default Diagnosis;

