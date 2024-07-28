import React, {useRef, useState} from 'react'
import { BContainer, PExit, BBg, BleftContainer, BleftBg, BleftLink1, BleftLink2, PopupCurr, PopupCurrBg, 
         PopupCurrLink1, PopupCurrLink1Text, PopupCurrLink2, PopupCurrLink2Text, PopupCurrLink3,
         PopupCurrLink3Text, PopupTextBg, PopupText, PopupTitleBg, PopupTitleText, BleftLink1Img, BleftLink2Img, BlinkContainer
} from './PopUpElements';

function PopUp(props) {
   
  
  

  
  
  
  
  
 

    return (props.trigger) ? (
                 <BContainer  >
                      
                          <PExit className='close-btn' onClick={() => props.setTrigger(false)}  ></PExit>
                            <BBg>
                            <BleftContainer>
                                <BleftBg/>
                                <BlinkContainer>
                                <BleftLink1Img/>
                                <BleftLink1>

                                </BleftLink1>
                                <BleftLink2Img/>
                                <BleftLink2>

                                </BleftLink2>
                                </BlinkContainer>
                            </BleftContainer>
                            <PopupCurr>
                                <PopupCurrBg/>
                                <PopupCurrLink1>
                                    <PopupCurrLink1Text>

                                    </PopupCurrLink1Text>
                                </PopupCurrLink1>
                                <PopupCurrLink2>
                                    <PopupCurrLink2Text>
                                        
                                    </PopupCurrLink2Text>
                                </PopupCurrLink2>
                                <PopupCurrLink3>
                                    <PopupCurrLink3Text>
                                        
                                    </PopupCurrLink3Text>
                                </PopupCurrLink3>
                            </PopupCurr>
                            <PopupTextBg>
                                <PopupText>

                                </PopupText>
                            </PopupTextBg>
                            <PopupTitleBg>
                                <PopupTitleText>

                                </PopupTitleText>
                            </PopupTitleBg>
                            
                            </BBg>

      

                  </BContainer>
        
    ) : "";
}

export default PopUp;