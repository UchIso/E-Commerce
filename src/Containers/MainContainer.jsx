import React from 'react'
import Container from '@mui/material/Container';

function MainContainer({children}) {
    console.log(children)
    return (
        <Container>{children}</Container>
    )
}

export default MainContainer