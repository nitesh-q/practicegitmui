import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material';

const TextFieldp = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='name' size='large' variant='outlined' />
                <TextField label='name' size='large' variant='filled' />
                <TextField label='name' size='large' variant='standard' />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='name' size='large' variant='outlined' color='secondary' />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Input' required />
                <TextField label='Input' required helperText="do not share it" />
                <TextField label='Password' type='password' required helperText="do not share it" />
                <TextField label='Input' inputProps={{ readOnly: true }} />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='amount'
                    InputProps={{ startAdornment:( <InputAdornment position='start'>$</InputAdornment>), }}
                />
                <TextField label='weigth'
                    InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment>, }}

                />
              
            </Stack>


        </Stack>
    )
}

export default TextFieldp