import React from 'react'
import './Dashboard.css'
import NavBar from '../NavBar/NavBar'
import Carousel from './Carousel'
const slides = [{
    path: "../assets/1-month.jpg",
    id: 1
},
{
    path: "../assets/6-month.jpg",
    id: 6
},
{
    path: "../assets/12-month.jpg",
    id: 12
}
];
const Dashboard = () => {

    return (
        <>
            <NavBar items={[
                { title: "Explore", path: "../assets/Explore.svg" },
                { title: "Help", path: "../assets/Help.svg" }
            ]} />
            <div className='dashboard select-none py-10'>
                <div className='flex flex-col w-2/3'>
                    <p className='text-white p-10' style={{ fontFamily: "Inter, sans-serif", fontSize: '5vw', fontWeight: 800 }}>Generate the best Insurance Quote for your Life.</p>
                    <div className=' flex justify-center'>
                        <div className='bg-white w-96 m-5 p-5  rounded-3xl border border-black' >
                            <Carousel slides={slides} />
                        </div>
                    </div>
                    <div id='Generate-btn' className='cursor-pointing'>
                        Continue to generate Quote
                    </div>

                </div>
            </div>
            <div className='m-14'>
                <p className='MainTitle'>Know More about Health Insurance</p>
                <p className='titles'>Health Insurance</p>
                <li>Health insurance provides financial protection against unexpected medical expenses.</li>
                <li>It typically covers a range of healthcare services, including doctor visits, hospital stays, surgeries, and prescription drugs.</li>
                <li>Health insurance plans vary in coverage and cost, with options for individuals, families, and employer-sponsored plans.</li>
                <li>Many health insurance plans offer preventive care services at no extra cost, such as vaccinations and screenings.</li>
                <li>Health insurance may include coverage for mental health services, substance abuse treatment, and rehabilitation.</li>
                <li>Some plans offer additional benefits like vision and dental coverage, though these may require separate premiums.</li>
                <li>Health insurance helps individuals access necessary medical care without facing significant financial burdens.</li>
                <li>It can provide peace of mind knowing that you're protected in case of unexpected illnesses or accidents./</li>
                <li>Health insurance premiums can be paid monthly, quarterly, or annually, depending on the plan.</li>
                <li>Deductibles, copayments, and coinsurance are common features of health insurance plans, affecting out-of-pocket costs.</li>
                <li>Health insurance networks determine which doctors, hospitals, and other healthcare providers are covered under the plan.</li>
                <li>Open enrollment periods, typically once a year, allow individuals to sign up for or change health insurance plans.</li>
                <li>Certain life events, such as marriage, childbirth, or job loss, may qualify individuals for a special enrollment period outside of the annual open enrollment.</li>
                <li>Government-sponsored programs like Medicaid and Medicare provide health insurance coverage to eligible populations.</li>
                <li>Health insurance regulations and requirements vary by country, state/province, and insurance provider.</li>
                <p className='titles'>Key benefits of having health insurance</p>
                <li>Financial Protection: Health insurance provides financial coverage for medical expenses, shielding individuals from high healthcare costs during emergencies or illnesses.</li>
                <li>Access to Quality Healthcare: Having health insurance ensures access to a network of healthcare providers, enabling individuals to receive timely and necessary medical treatment.</li>
                <li>Preventive Care Services: Many health insurance plans offer coverage for preventive care services such as vaccinations, screenings, and annual check-ups, promoting early detection and disease prevention.</li>
                <li>Prescription Drug Coverage: Health insurance plans often include coverage for prescription medications, making essential drugs more affordable for individuals with chronic conditions or acute illnesses.</li>
                <li>Peace of Mind: Health insurance offers peace of mind, knowing that you and your family are financially protected against unforeseen medical expenses and emergencies.</li>
                <li>Reduced Out-of-Pocket Costs: With health insurance, individuals typically pay lower out-of-pocket costs for medical services, including deductibles, copayments, and coinsurance, making healthcare more affordable.</li>
                <li>Comprehensive Coverage Options: Health insurance plans come with various coverage options, including hospitalization, surgeries, specialist visits, maternity care, mental health services, and more, catering to diverse healthcare needs.</li>
                <li>Coverage for Pre-existing Conditions: Health insurance plans cannot deny coverage or charge higher premiums based on pre-existing health conditions, ensuring access to essential healthcare services for individuals with chronic illnesses.</li>
                <li>Protection During Life Changes: Health insurance provides stability and protection during significant life changes such as job loss, retirement, marriage, or the birth of a child, offering continuous access to healthcare coverage.</li>
                <li>Tax Benefits: In many countries, individuals may qualify for tax benefits or subsidies when purchasing health insurance, reducing the overall cost of coverage and making it more affordable.</li>
                <li>Access to Specialized Care: Health insurance often covers specialized medical treatments and procedures, enabling individuals to seek care from experts in various fields of medicine without financial constraints.</li>
                <li>Coverage for Emergency Services: Health insurance plans typically include coverage for emergency medical services and hospitalizations, ensuring prompt and adequate care during unforeseen emergencies or accidents.</li>
                <li>Mental Health and Substance Abuse Treatment: Many health insurance plans offer coverage for mental health services, counseling, and substance abuse treatment, supporting holistic well-being and recovery.</li>
                <li>Family Coverage: Health insurance plans often extend coverage to family members, including spouses, children, and dependents, ensuring comprehensive healthcare protection for the entire family unit.</li>
                <li>Compliance with Healthcare Regulations: Having health insurance helps individuals comply with healthcare regulations and mandates, avoiding potential penalties or fines associated with being uninsured in certain jurisdictions.</li>
            </div>
        </>
    )
}
export default Dashboard
