import React from 'react'
import Container from '@mui/material/Container';

function MainContainer({children}) {
    return (
        <Container maxWidth='xl' className='MainContainer'>
            {children}
        </Container>
    )
}

export default MainContainer