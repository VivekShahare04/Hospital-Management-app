import React from "react";
import aboutImg from "../../assert/images/about.png";
import aboutCardImg from "../../assert/images/about-card.png";

const About = () => {
return (
    <section>
      <div className="container">
         <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row"> 
         {/*=====about img=====*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
               <img src={aboutImg} alt="" />
                  <div className="absolute z-20 bottom-4 w-[200px] md: w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                     <img src={aboutCardImg} alt="" />
                  </div>
            </div>

            {/*=====about content====*/}
              <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2"> 
                <h2 className="heading">Proud to be one of the Nations Best</h2> 
                  <p className="text__para">
                    
For three decades consecutively, the Indian News & World Report has consistently acknowledged our hospital as one of the premier public healthcare institutions nationwide, proudly ranking us as the foremost in Maharashtra.
                       
                  </p>
                  
                  <p className="text__para mt-[30px]">
                  Every day, we endeavor to deliver our utmost, prioritizing patient care above all else. Rather than dwelling on past achievements, our focus remains steadfast on the opportunities to enhance tomorrow's care. Our commitment: delivering excellence.
                </p>
                <button className="btn"> Learn More</button>
             
            </div>
          </div>
        </div>
    </section>
  );
};
export default About;
