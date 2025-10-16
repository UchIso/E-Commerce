import React from 'react'
import Container from '@mui/material/Container';

function MainContainer({children}) {
    return (
        <Container maxWidth='Err' className='MainContainer'>
            {children}
        </Container>
    )
}

export default MainContainer