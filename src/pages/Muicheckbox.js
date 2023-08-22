import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'

const Muicheckbox = () => {
    const [TnC, setTnC] = useState(false)

    const handlechange = () => {
        setTnC(!TnC)
    }
    console.log(TnC)

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="accept terms and conditions"
                    control={<Checkbox
                        checked={TnC}
                        onChange={handlechange}
                    />}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>
                        skills
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label="accept terms and conditions"
                            control={<Checkbox
                                checked={TnC}
                                onChange={handlechange}
                            />}
                        />

                        <FormControlLabel
                            label="accept terms and conditions"
                            control={<Checkbox
                                checked={TnC}
                                onChange={handlechange}
                            />}
                        />

                        <FormControlLabel
                            label="accept terms and conditions"
                            control={<Checkbox
                                checked={TnC}
                                onChange={handlechange}
                            />}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Muicheckbox