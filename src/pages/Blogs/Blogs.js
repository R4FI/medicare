import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Blog.css';
import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper';
const Blogs = () => {
SwiperCore.use([EffectCoverflow,Pagination]);  
    return (
        <div>
            <div className="mt-5">
              <h1 className="text-center">I am blogs</h1>  
              <Swiper effect={'coverflow'} 
            grabCursor={true} centeredSlides={true}
            slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            }} pagination={true} className="mySwiper mt-5">
  <SwiperSlide className="slideborder">
      <h1>Corona Virus</h1>
      <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
Most people infected with the virus will experience mild to moderate respiratory illness and recover without
requiring special treatment. However, some will become seriously ill and require medical attention. Older people
and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, 
or cancer are more likely to develop serious illness. 
The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads.
Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.</p>
  </SwiperSlide>
  <SwiperSlide className="slideborder">
  <h1>Vaccine Covid-19</h1>
  <p>Equitable access to safe and effective vaccines is critical to ending the COVID-19 pandemic, so it is hugely encouraging to see so many vaccines proving and going into development. WHO is working tirelessly with partners to develop, manufacture and deploy safe and effective vaccines. 

Safe and effective vaccines are a game-changing tool: but for the foreseeable future we must continue wearing masks, cleaning our hands, ensuring good ventilation indoors, physically distancing and avoiding crowds. 

Being vaccinated does not mean that we can throw caution to the wind and put ourselves and others at risk, particularly because research is still ongoing into how much vaccines protect not only against disease but also against infection and transmission.</p>
  </SwiperSlide>
  <SwiperSlide className="slideborder">
      <h1>Omicron</h1>
      <p>This variant has a large number of mutations, some of which are concerning. Preliminary evidence suggests an increased risk of reinfection with this variant, as compared to other VOCs. The number of cases of this variant appears to be increasing in almost all provinces in South Africa. Current SARS-CoV-2 PCR diagnostics continue to detect this variant. Several labs have indicated that for one widely used PCR test, one of the three target genes is not detected (called S gene dropout or S gene target failure) and this test can therefore be used as marker for this variant, pending sequencing confirmation. Using this approach, this variant has been detected at faster rates than previous surges in infection, suggesting that this variant may have a growth advantage.</p>
  </SwiperSlide>
  <SwiperSlide className="slideborder">
      <h1>Safety</h1>
      <p>The risks of getting COVID-19 are higher in crowded and inadequately ventilated spaces where infected people spend long periods of time together in close proximity.

Outbreaks have been reported in places where people have gather, often in crowded indoor settings and where they talk loudly, shout, breathe heavily or sing such as restaurants, choir practices, fitness classes, nightclubs, offices and places of worship.
Get vaccinated as soon as it’s your turn and follow local guidance on vaccination.
</p>
      
      </SwiperSlide>
  <SwiperSlide className="slideborder">
      <h1>Booster Dose</h1>
      <p>Most people will be offered a booster dose of the Pfizer/BioNTech vaccine or Moderna vaccine.

      This means your booster dose may be different from the vaccines you had for your 1st and 2nd doses.

     Some people may be offered a booster dose of the Oxford/AstraZeneca vaccine if they cannot have the Pfizer/BioNTech or Moderna vaccine.</p>
  </SwiperSlide>
 
  </Swiper>
            </div>
            
        </div>
    );
};

export default Blogs;