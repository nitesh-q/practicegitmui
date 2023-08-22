import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const MuiSelect = () => {
    const [country, setcountry] = useState('')

    const handlechange = (event) => {
        setcountry(event.target.value)
        
    }
    console.log(country)
    return (
        <Box width='300px'>
            <TextField label="select country" select value={country}
                onChange={handlechange} fullwidth
            >
                <MenuItem value='IN' >india</MenuItem>
                <MenuItem value='US' >usa</MenuItem>
                <MenuItem value='AU' >australiya</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect