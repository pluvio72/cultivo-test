import { Box, Card, Typography, useMediaQuery } from '@mui/material'
import Button from '../Button'

export default function BannerTemplate({
  buttonText,
  image,
  body,
  header,
  onClickActionButton,
}: Props) {
  const shouldBeVertical = useMediaQuery('(max-width:960px)')

  return (
    <Card
      style={{
        minWidth: '300px',
        maxWidth: '1250px',
        borderRadius: '8px',
        display: 'flex',
      }}
    >
      <Box display='flex' flexDirection={shouldBeVertical ? 'column' : 'row'}>
        <Box
          position={'relative'}
          p='20px'
          pt='30px'
          pb='15px'
          style={{
            backgroundImage: `url('/${image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minWidth: '373px',
          }}
        >
          {header(shouldBeVertical)}
        </Box>
        <Box
          p={'20px'}
          display='flex'
          flexDirection={shouldBeVertical ? 'column' : 'row'}
          color='white'
          style={{
            backgroundColor: '#003E49',
          }}
        >
          {body(shouldBeVertical)}
          <Box display='flex' justifyContent='center'>
            <Button
              style={{
                width: shouldBeVertical ? '100%' : 248,
                height: 48,
              }}
              variant='contained'
              onClick={onClickActionButton}
            >
              <Typography fontSize='16px' mt={'5px'}>
                {buttonText}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

interface Props {
  buttonText: string
  image: string
  header: (shouldBeVertical: boolean) => JSX.Element
  body: (shouldBeVertical: boolean) => JSX.Element
  onClickActionButton: () => void
}
