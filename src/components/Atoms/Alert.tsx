import React from 'react'
import styled from 'styled-components'
import { borderradius, size } from "../tokens";

const Alert = styled.div`
    background: rgba(255,255,255,0.2);
    border-radius: ${borderradius.small};
    padding: ${size.half} ${size.double};
`

export default Alert
