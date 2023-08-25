import React from 'react'
import { Box, Card, CardContent, Typography,CardActions,Button,CardMedia } from '@mui/material'
import Fl from "../image/flowertest.jpg"

const Muicard = () => {
    return (
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140px'
                    image={Fl}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        If you're trying to reset to a specific commit or perform a reset relative to another commit, ensure that you're using the correct notation and that the commit hash or reference is valid in your repository's history. If you can provide more context about what you're trying to achieve, I can offer more specific guidance.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Muicard