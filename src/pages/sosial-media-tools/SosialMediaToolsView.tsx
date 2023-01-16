import { TextField } from '@mui/material'
import React from 'react'
import { Button, FormGroup, SectionTools, Upgrade } from '../../components'

const SosialMediaToolsView = () => {
    return (
        <SectionTools title="Social Media Post Captions" image="/content/3.svg">
            <form>
                <FormGroup title='Product/Brand Name'>
                    <TextField placeholder='Design Resources' />
                </FormGroup>
                <FormGroup title='Enter your email description'>
                    <TextField
                        placeholder='Tell us about your Product'
                        multiline
                        rows={5}
                    />
                </FormGroup>
                <Button fullWidth>Write for me 👉</Button>
                <Upgrade />
            </form>
        </SectionTools>
    )
}

export default SosialMediaToolsView