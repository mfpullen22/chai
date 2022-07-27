import React from "react";
import './cryptotable.css';

function CryptoTable() {
    return (
        <div className="overflow-scroll mt-8 flex flex-col">
            <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                 <div className="inline-block min-w-2/3 py-2 align-middle">
                    <div className="shadow-sm ring-1 ring-black ring-opacity-5">
            <table className="min-w-2/3 text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                        <th scope="col" className="py-3 px-6 text-xl" colspan="7">
                        Regional Estimates of Burden of Cryptococcosis
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" className="py-3 px-6">Region</th>
                        <th scope="col" className="py-3 px-6">CrAg-Positive</th>
                        <th scope="col" className="py-3 px-6">Cryptococcal Meningitis</th>
                        <th scope="col" className="py-3 px-6">Cryptococcal Deaths</th>
                        <th scope="col" className="py-3 px-6">% of AIDS Deaths</th>
                        <th scope="col" className="py-3 px-6">
                            <p>Cost of CrAg Screening</p>
                            <p>all with advanced HIV disease</p>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <p>Cost of treating</p>
                            <p>meningitis</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Global
                        </th>
                        <td className="py-4 px-6 text-center">
                            <p>179,000</p>
                            <p>(IQR 133,000 to 219,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>152,000</p>
                            <p>(IQR 111,000 to 185,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>112,000</p>
                            <p>(IQR 79,000 to 134,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>19%</p>
                            <p>(IQR 13% to 24%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $21,700,390
                        </td>
                        <td className="py-4 px-6 text-center">
                            --
                        </td>
                    </tr>
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Eastern & Southern Africa
                        </th>
                        <td class="py-4 px-6 text-center">
                            <p>75,000</p>
                            <p>(IQR 55,000 to 95,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>63,000</p>
                            <p>(IQR 45,000 to 80,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>55,000</p>
                            <p>(IQR 39,000 to 70,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>21%</p>
                            <p>(IQR 15% to 28%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $7,093,380
                        </td>
                        <td className="py-4 px-6 text-center">
                            $66,497,638
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Western & Central Africa
                        </th>
                        <td className="py-4 px-6 text-center">
                            <p>22,000</p>
                            <p>(IQR 19,000 to 26,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>19,000</p>
                            <p>(IQR 16,000 to 22,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>16,000</p>
                            <p>(IQR 13,000 to 19,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>15%</p>
                            <p>(IQR 12% to 18%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $1,762,761
                        </td>
                        <td className="py-4 px-6 text-center">
                            $19,775,598
                        </td>
                    </tr>
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Asia & Pacific
                        </th>
                        <td class="py-4 px-6 text-center">
                            <p>51,000</p>
                            <p>(IQR 42,000 to 60,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>44,000</p>
                            <p>(IQR 35,000 to 51,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>25,000</p>
                            <p>(IQR 21,000 to 30,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>20%</p>
                            <p>(IQR 13% to 22%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $5,541,600
                        </td>
                        <td className="py-4 px-6 text-center">
                            --
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            <p>Eastern Europe</p> 
                            <p>& Central Asia</p>
                        </th>
                        <td className="py-4 px-6 text-center">
                            <p>12,000</p>
                            <p>(IQR 11,000 to 13,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>10,000</p>
                            <p>(IQR 9,000 to 11,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>6,000</p>
                            <p>(IQR 5,000 to 7,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>19%</p>
                            <p>(IQR 17% to 22%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $1,303,900
                        </td>
                        <td className="py-4 px-6 text-center">
                            --
                        </td>
                    </tr>
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Latin America
                        </th>
                        <td class="py-4 px-6 text-center">
                            <p>14,000</p>
                            <p>(IQR 10,000 to 17,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>12,000</p>
                            <p>(IQR 9,000 to 14,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>7,000</p>
                            <p>(IQR 5,000 to 9,000)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>23%</p>
                            <p>(IQR 16% to 30%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $1,282,925
                        </td>
                        <td className="py-4 px-6 text-center">
                            --
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            <p>Western Central Europe</p>
                            <p>& North America</p>
                        </th>
                        <td className="py-4 px-6 text-center">
                            <p>3,000</p>
                            <p>(IQR 2,000 to 4,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>2,000</p>
                            <p>(IQR 1,500 to 3,000)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>1,000</p>
                            <p>(IQR 700 to 1,400)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>8%</p>
                            <p>(IQR 5% to 11%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $1,076,920
                        </td>
                        <td className="py-4 px-6 text-center">
                            $4,874,903
                        </td>
                    </tr>
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Caribbean
                        </th>
                        <td class="py-4 px-6 text-center">
                            <p>2,000</p>
                            <p>(IQR 1,700 to 2,300)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>1,700</p>
                            <p>(IQR 1,400 to 1,900)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>1,000</p>
                            <p>(IQR 800 to 1,100)</p>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <p>19%</p>
                            <p>(IQR 15% to 23%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $184,443
                        </td>
                        <td className="py-4 px-6 text-center">
                            --
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Middle East & North Africa
                        </th>
                        <td className="py-4 px-6 text-center">
                            <p>500</p>
                            <p>(IQR 100 to 600)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>400</p>
                            <p>(IQR 100 to 500)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>200</p>
                            <p>(IQR {`<`}100 to 300)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            <p>3%</p>
                            <p>(IQR 1% to 5%)</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                            $197,432
                        </td>
                        <td className="py-4 px-6 text-center">
                            --
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</div>
</div>
</div>
    )
}

export default CryptoTable;