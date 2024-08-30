import React from 'react';
import Card from './card';


const providers = [
  {
    title: "Life Insurance Corporation of India (LIC)",
    description: "LIC is one of the oldest and most trusted insurance providers in India, offering a wide range of life insurance products. Known for its extensive network and government backing.",
    website: "https://www.licindia.in/",
    rating: 4.5
  },
  {
    title: "HDFC Life Insurance",
    description: "HDFC Life is a leading private life insurance company in India, known for its innovative products and customer service. Offers a variety of life insurance plans including term, endowment, and ULIPs.",
    website: "https://www.hdfclife.com/",
    rating: 4.4
  },
  {
    title: "ICICI Prudential Life Insurance",
    description: "ICICI Prudential Life Insurance offers a comprehensive range of life insurance products. Known for its strong digital presence and wide range of policies catering to various needs.",
    website: "https://www.iciciprulife.com/",
    rating: 4.3
  },
  {
    title: "Max Life Insurance",
    description: "Max Life provides a range of life insurance products including term, whole life, and investment plans. Known for its customer-centric approach and strong financial stability.",
    website: "https://www.maxlifeinsurance.com/",
    rating: 4.2
  },
  {
    title: "Bajaj Allianz General Insurance",
    description: "Bajaj Allianz offers a variety of general insurance products including health, motor, and property insurance. Known for its customer service and wide range of offerings.",
    website: "https://www.bajajallianz.com/",
    rating: 4.1
  },
  {
    title: "Star Health & Allied Insurance",
    description: "Star Health specializes in health insurance products and is known for its extensive network of hospitals and customer-friendly policies.",
    website: "https://www.starhealth.in/",
    rating: 4.0
  },
  {
    title: "Tata AIG General Insurance",
    description: "Tata AIG offers a wide range of general insurance products including motor, travel, and health insurance. Known for its reliability and customer service.",
    website: "https://www.tataaig.com/",
    rating: 4.0
  },
  {
    title: "New India Assurance",
    description: "New India Assurance is a government-owned general insurance company providing a variety of insurance products including health, motor, and property insurance.",
    website: "https://newindia.co.in/",
    rating: 3.9
  },
  {
    title: "Reliance General Insurance",
    description: "Reliance General offers a range of general insurance products including health, motor, and home insurance. Known for its extensive branch network and digital services.",
    website: "https://www.reliancegeneral.co.in/",
    rating: 3.8
  },
  {
    title: "HDFC Ergo General Insurance",
    description: "HDFC Ergo provides a wide range of general insurance products such as health, motor, and travel insurance. Known for its innovative solutions and customer-centric approach.",
    website: "https://www.hdfcergo.com/",
    rating: 3.7
  }
];


const Explore = () => {
  return (
    <>
      <div className='p-10'>
        <p className='text-4xl mb-6' style={{ fontFamily: "Inter, sans-serif" }}>Top Insurance Providers</p>
        <Card providers={providers} />
      </div>
    </>
  );
};

export default Explore;
