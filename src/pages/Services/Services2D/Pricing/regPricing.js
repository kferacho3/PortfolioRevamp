import React from 'react';


 
import { motion } from 'framer-motion';
import { BottomToTop } from '../../../../components/animations/animations';
import "../services.scss";
import {
    B1,
    Boat1, Boat2,
    C1Button,
    C1H1, C1H2,
    C1Head, C1HeadBg,
    C1Text,
    C2Button,
    C2H1, C2H2,
    C2Head,
    C2HeadBg,
    C2Text,
    Column1, Column2,
    PricingContainer, PricingRow, PricingRow2,
    PricingRows
} from './regElements';




const RegPricing = () => {
    const b1 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/Birds1.gif';
    const b2 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/Birds2.gif';
    const b3 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/Birds3.gif';
    const b11 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/Boat1.gif';
    const d1 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/D1.svg';
    const d2 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/D2.svg';
    const d3 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/D3.svg';
    const d4 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/D4.svg';
    const d5 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/D5.svg';
    return (
        
          <PricingContainer >
          
              <motion.div initial={"onscreen"}whileInView={"offscreen"}viewport={{once:true, amount:0.5}}>
                <motion.div variants={BottomToTop} >
                <PricingRows>
                  <PricingRow>
                    <Column1 className='animation1'>
                          <B1 class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${b1})`}}/>
                          <C1HeadBg class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${d1})`}}/>
                          <C1Head>Bronze Design</C1Head>
                          <C1H1>1-3 Pages</C1H1>
                          <C1H2>$1000</C1H2>
                          <C1Text>
                              <p>⌁5 Interior Pages</p>
                              <p>⌁2 Revisions</p>
                              <p>⌁Original Designs</p>
                              

                          </C1Text>
                          <C1Button>Inquire</C1Button>
                      </Column1>
                      <Column1 className='animation2'>
                          <B1 class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${b2})`}}/>
                          <C1HeadBg class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${d2})`}}/>
                          <C1Head>Silver Design</C1Head>
                          <C1H1>4-9 Pages</C1H1>
                          <C1H2>$1800</C1H2>
                          <C1Text>
                              <p>⌁5+ Interior Pages</p>
                              <p>⌁3 Revisions</p>
                              <p>⌁Original Designs</p>
                              

                          </C1Text>
                          <C1Button>Inquire</C1Button>
                      </Column1>
                      <Column1 className='animation3'>
                          <B1 class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${b3})`}}/>
                          <C1HeadBg class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${d3})`}}/>
                          <C1Head>Premium Design</C1Head>
                          <C1H1>10-15 Pages</C1H1>
                          <C1H2>$2250</C1H2>
                          <C1Text>
                              <p>⌁5 Interior Pages</p>
                              <p>⌁3 Revisions</p>
                              <p>⌁Original Designs</p>
                              

                          </C1Text>
                          <C1Button>Inquire</C1Button>
                      </Column1>


                  </PricingRow>



                  <PricingRow2>
                      <Column2 className='animation4'>
                      <Boat1 style = {{ backgroundImage: `url(${b11})`}}/>
                              <C2HeadBg style = {{ backgroundImage: `url(${d4})`}}/>
                              <C2Head>3D Modeling</C2Head>
                              <C2H1>1 Model</C2H1>
                              <C2H2>$50</C2H2>
                              <C2Text>
                                  <p>⌁Blender</p>
                                  <p>⌁2 Revisions</p>
                                  <p>⌁Original Designs</p>
                                  

                              </C2Text>
                              <C2Button>Inquire</C2Button>
                        </Column2>

                        <Column2 className='animation5'>
                        <Boat2 style = {{ backgroundImage: `url(${b11})`}}/>
                              <C2HeadBg style = {{ backgroundImage: `url(${d5})`}}/>
                              <C2Head>Audio Engineering</C2Head>
                              <C2H1>1 Audio Track</C2H1>
                              <C2H2>$50</C2H2>
                              <C2Text>
                                  <p>⌁Logic Pro X</p>
                                  <p>⌁Antares Autotune</p>
                                  <p>⌁Waves Plugins</p>
                                  <p>⌁1 Reviosion</p>
                                  <p>⌁AV Synchronization</p>
                                  

                              </C2Text>
                              <C2Button>Inquire</C2Button>
                        </Column2>


                  </PricingRow2>
                  
                  </PricingRows>
                </motion.div>
              </motion.div>
          </PricingContainer>  
              
        
    )
}

export default RegPricing