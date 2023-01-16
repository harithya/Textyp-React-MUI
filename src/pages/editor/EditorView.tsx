import { Grid, MenuItem, Box, TextField, styled, Chip, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { Button, Card, FormGroup, Section } from '../../components'
import MUIRichTextEditor from 'mui-rte'

const chipData = ['😊 Friendly', '💎 Luxury', '😁 Relaxed', '💼 Professional', '👣 Adventurous', '💡 Witty', '🧠 Persuasive', '💪 Bold', '🤗 Empathetic']

const EditorView = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Section title="Long-From Editor">
            <Grid container spacing={3} alignItems="stretch" flexDirection={isMobile ? 'column-reverse' : 'row'}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <FormGroup title="Chose Use Case">
                            <TextField select value=" " >
                                <MenuItem value=" ">Blog Idea</MenuItem>
                                <MenuItem value="#">Pilih</MenuItem>
                            </TextField>
                        </FormGroup>
                        <FormGroup title="Product/Brand Name">
                            <TextField placeholder="Product/Brand Name" />
                        </FormGroup>
                        <FormGroup title="Product Description">
                            <TextField
                                multiline
                                minRows={4}
                                placeholder="Whether you’re looking for a UX role with a global company or a smaller team, the UX Jobs Board is worth checking." />
                        </FormGroup>
                        <FormGroup title='Select Tone'>
                            <BadgeContainer>
                                {chipData.map((data, index) =>
                                    <StyledChip
                                        color={index == 3 ? 'primary' : 'default'}
                                        key={index}
                                        label={data}
                                    />)}
                            </BadgeContainer>
                        </FormGroup>
                        <Button fullWidth>Write for me 👉</Button>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card sxContent={{
                        padding: 0, minHeight: {
                            xs: 400
                        }
                    }}>
                        <MUIRichTextEditor
                            label="👋 Hello Thomas! You can edit the generated or copied text here..."
                            

                        />
                    </Card>
                </Grid>
            </Grid>
        </Section >
    )
}

const BadgeContainer = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    gap: 8
})

const StyledChip = styled(Chip)({
    borderRadius: 10
})
export default EditorView