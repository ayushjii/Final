import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const SupportStyles = styled.div`

`

export default function Support(){
    return(
        <SupportStyles>
            <SectionTitle
            subheading='You can'
            heading='Support us'
            />
            <span>VIA</span>
            {/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_JqEusCRnZ3NkgA" async> </script> </form> */}
        </SupportStyles>
    );
}





