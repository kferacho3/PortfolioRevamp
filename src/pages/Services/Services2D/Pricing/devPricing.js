
import React from 'react';
 
import { motion } from 'framer-motion';
import { TopToBottom } from '../../../../components/animations/animations';
import "../services.scss";
import {
    C1Button,
    C1H1, C1H2,
    C1Head,
    C1HeadBg,
    C1Text,
    C2Button,
    C2H1, C2H2,
    C2Head,
    C2HeadBg,
    C2Text,
    C3Button,
    C3H1, C3H2,
    C3Head,
    C3HeadBg,
    C3Text,
    Column1,
    Column2, Column3,
    P1, P2, P3,
    PricingContainer, PricingRow
} from './devElements';



const DevPricing = () => {
    const c1 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/CS1.svg';
    const c2 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/CS2.svg';
    const c3 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/CS3.svg';
    const p1 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/PS1.gif';
    const p2 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/PS2.gif';
    const p3 = 'https://racho-devs.s3.us-east-2.amazonaws.com/services/images/sevices2D/PS3.gif';


    return (
        
            <PricingContainer>
                
                <motion.div  initial={"onscreen"} whileInView={"offscreen"} viewport={{once:true, amount:0.5}}>
                <motion.div variants={TopToBottom} >
                

                        <PricingRow>

                         <Column1 className='animation1'>
                         <P1 class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${p1})`}}/>
                         <C1HeadBg class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${c1})`}}/>
                         <C1Head>Bronze</C1Head>
                       
                         <C1H1>1-3 Pages</C1H1>
                         <C1H2>$2000</C1H2>
                         <C1Text>
                            <p>⌁5 Interior Pages</p>
                            <p>⌁Unlimited Revisions</p>
                            <p>⌁Original Designs</p>
                            <p>⌁SEO</p>
                            <p>⌁Image Gallery</p>
                            <p>⌁Forms</p>

                         </C1Text>
                         <C1Button>Inquire</C1Button>
                         

                         </Column1>


                         <Column2 className='animation2'>
                         <P2 class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${p2})`}}/>
                         <C2HeadBg class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${c2})`}}/>
                         <C2Head>Silver</C2Head>
                       
                         <C2H1>4-9 Pages</C2H1>
                         <C2H2>$3000</C2H2>
                         <C2Text>
                            <p>⌁5+ Interior Pages</p>
                            <p>⌁Unlimited Revisions</p>
                            <p>⌁Original Designs</p>
                            <p>⌁SEO</p>
                            <p>⌁Image Gallery</p>
                            <p>⌁Forms</p>
                            <p>⌁Backend Support</p>
                       

                         </C2Text>
                         <C2Button>Inquire</C2Button>

                         </Column2>


                         <Column3 className='animation3'>

                         <P3 class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${p3})`}}/>
                         <C3HeadBg class="lazyload" loading ="lazy" style = {{ backgroundImage: `url(${c3})`}}/>
                         <C3Head>Premium</C3Head>
                       
                         <C3H1>10-15 Pages</C3H1>
                         <C3H2>$4000</C3H2>
                         <C3Text>
                            <p>⌁5 Interior Pages</p>
                            <p>⌁Unlimited Revisions</p>
                            <p>⌁Original Designs</p>
                            <p>⌁SEO</p>
                            <p>⌁Image Gallery</p>
                            <p>⌁Forms</p>
                            <p>⌁Backend Support</p>
                            <p>⌁User Authentication</p>

                         </C3Text>
                         <C3Button>Inquire</C3Button>
                    
                         </Column3>
                               
                            
                          


                         




                        </PricingRow>




                            
                </motion.div>
                </motion.div>
            </PricingContainer>  
              
        
    )
}

export default DevPricing

