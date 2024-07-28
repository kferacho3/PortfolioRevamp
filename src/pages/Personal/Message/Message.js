import React, {useState, useEffect} from 'react';

import { MessageContainer, MessageR1, MessageR2, MessageText, MessageIcon} from './MessageElements';
import PopUp from './PopUp';
//import main from '../../images/email.svg'

const Message = ({ toggle}) => {

    const [buttonPopup, setButtonPopup] = useState(false);


    return (
        <>
        
                      
            
        <MessageContainer>
        <MessageR1 />
        <MessageR2 onClick={() => setButtonPopup(true)}/>
        <MessageText>CONTACT US!</MessageText>

        </MessageContainer>
        <PopUp trigger ={buttonPopup} setTrigger = {setButtonPopup}>
        </PopUp>
        </>
    );
};

export default Message;