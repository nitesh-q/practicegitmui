import React, { useState } from 'react'
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
// import { Label } from '@mui/icons-material'

const Muiradiobutton = () => {
    const [value1,setValue1]=useState('')

  
    
     const handlechange = (event) => {
        setValue1(event.target.value)
       
    }
    console.log(value1)
    return (
        <Box>
            <FormControl>
                <FormLabel id="job-experiance-group-label">
                    years of experaince
                </FormLabel>
                <RadioGroup name="job-experiance-group" aria-labelledby="job-experiance-group-label"
                    onChange={handlechange}
                    value={value1}
                    row
                >

                    <FormControlLabel
                        control={<Radio /> }
                        label='0-2'
                        value='0-2'
                    />
                    <FormControlLabel
                        control={<Radio /> }
                        label='3-5'
                        value='3-5'
                    />
                    <FormControlLabel
                        control={<Radio /> }
                        label='6-7'
                        value='6-7'
                    />

                    
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default Muiradiobutton