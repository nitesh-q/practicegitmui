import React, { useState } from 'react'
import {
    Button, Stack, IconButton, ButtonGroup,
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormatBold } from '@mui/icons-material';
import { FormatItalic } from '@mui/icons-material';
import { FormatUnderlined } from '@mui/icons-material';

const ButtonPractice = () => {
    const [format,setFormat]=useState([])
    
    
    const handlechange = () => {
      return (
        setFormat()
      )
    }
    
    return (
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <Button variant='text'>here</Button>
                    <Button variant='contained'>here</Button>
                    <Button variant='outlined'>here</Button>
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary' >here</Button>
                    <Button variant='contained' color='secondary' >here</Button>
                    <Button variant='contained' color='error' >here</Button>
                    <Button variant='contained' color='warning' >here</Button>
                    <Button variant='contained' color='info' >here</Button>
                    <Button variant='contained' color='success' >here</Button>
                </Stack>

                <Stack spacing={2} display='block' direction='row'>
                    <Button variant='contained' color='primary' size='small'>here</Button>
                    <Button variant='contained' color='primary' size='medium'>here</Button>
                    <Button variant='contained' color='primary' size='large'>here</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary' startIcon={<SendIcon />}
                        disableElevation>here</Button>
                    <Button variant='contained' color='primary' endIcon={<SendIcon />}
                        disableRipple
                        onClick={() => { console.log("jai bheem") }}
                    >here</Button>
                    <IconButton>
                        <SendIcon color='success' />
                    </IconButton>
                </Stack>

                <Stack direction="row">
                    <ButtonGroup variant='contained' color='secondary'
                        orientation='vertical'
                    >
                        <Button  >left</Button>
                        <Button  >center</Button>
                        <Button  >right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction="row">
                    <ToggleButtonGroup aria-label='text formatting' value={format} onChange={handlechange}>
                        <ToggleButton value='bold' aria-label='bold'><FormatBold /></ToggleButton>
                        <ToggleButton value='italic' aria-label='italic' ><FormatItalic /></ToggleButton>
                        <ToggleButton value='underlined' aria-label='underlined' ><FormatUnderlined /></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

            </Stack>
        </div>
    )
}

export default ButtonPractice