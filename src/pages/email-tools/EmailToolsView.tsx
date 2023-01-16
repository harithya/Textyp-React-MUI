import { TextField } from '@mui/material'
import React from 'react'
import { Button, FormGroup, SectionTools, Upgrade } from '../../components'

const EmailToolsView = () => {
    return (
        <SectionTools title="Create Angel Investor Email Pitch" image="/content/4.svg">
            <form>
                <FormGroup title='Tell us about your Product'>
                    <TextField
                        placeholder='Tell us about your Product'
                    />
                </FormGroup>
                <FormGroup title='Tell us about your Product'>
                    <TextField
                        placeholder='Enter your email description'
                        multiline
                        rows={5}
                    />
                </FormGroup>
                <FormGroup title='Tone of voice'>
                    <TextField
                        placeholder='Tell us about your Product'
                    />
                </FormGroup>
                <Button fullWidth>Write for me 👉</Button>
                <Upgrade />
            </form>
        </SectionTools>
    )
}

export default EmailToolsView