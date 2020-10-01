import React from 'react'
import {Footer,FooterText,FooterLink} from './styles'

export default function FooterComponent() {
    return (
        <Footer>
            <FooterText>
                Coded by <FooterLink href="https://github.com/dg0397" target = '_blank' rel="noopener noreferrer">DG0397</FooterLink>
            </FooterText>
        </Footer>
    )
}
