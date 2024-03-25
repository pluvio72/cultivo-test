import { Button as MUIButton, styled } from '@mui/material'

const Button = styled(MUIButton)({
  backgroundColor: '#FFFFFF',
  color: '#008096',
  textTransform: 'none',
  transition: '0.2',
  '&:hover': {
    backgroundColor: '#E1F8FB',
  },
})

export default Button
