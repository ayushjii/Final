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
        </SupportStyles>
    );
}