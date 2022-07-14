import React from "react";

function Monitoring(){
    return (
        <div className="text-base text-left tracking-tight text-gray-900">
            <h2 className="text-lg font-bold text-left tracking-tight text-gray-900">
                Raised Intracranial Pressure:
            </h2>
            <div className="ml-8 text-base text-left tracking-tight text-gray-900">
                <ul className="list-disc">
                    <li>
                        Persons living wit HIV with suspected cryptococcal meningitis should have an initial lumbar puncture
                        and an early repeat lumbar puncture with measurement of CSF opening perssure to assess for raised intracranial 
                        pressure, regardless of whether signs or symptoms of raised intracranial perssure are present.
                    </li>
                    <li>
                        <span className="underline">Management:</span>
                        <p>
                            <li className="ml-8">
                                Therapeutic lumbar puncture to relieve pressure by draining a volume sufficient to reduce CSF
                                pressure to less than 20 cm H<sub>2</sub>O or halving the baseline pressure (if extremely high). Usually, 
                                removal of 20-25ml CSF is enough to reduce opening pressure sufficiently.
                            </li>
                            <li className="ml-8">
                                The frequency of repeat therapeutic lumbar punctures should be determined by the persistence or recurrence
                                of signs or symptoms of raised intracranial pressure. For persons with persistent symptoms of raised intracranial 
                                pressure, repeat daily therapeutic lumbar puncture (with measurement of opening pressure) and CSF drainage, if 
                                required, are recommended until symptoms resolve or opening pressure is normal for at least two days. 
                            </li>
                        </p>                        
                    </li>
                </ul>
            </div>
            <h2 className="mt-4 text-lg font-bold text-left tracking-tight text-gray-900">
                Monitoring Treatment Response:
            </h2>
            <div className="ml-8 text-base text-left tracking-tight text-gray-900">
                <ul className="list-disc">
                    <li>
                        Clinical response (fever, headache, signs or symptoms of raised intracranial pressure) should be assessed daily
                        during the initial two weeks of induction therapy.
                    </li>
                    <li>
                        In persons showing evidence of a sustained clinical response to therapy, it is not advised to perform follow-up lumbar
                        puncture after induction phase to assess antifungal response, or to repeat serum or plasma CrAg.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Monitoring;