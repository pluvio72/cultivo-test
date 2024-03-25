import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const ExampleBannerHeader = () => (
  <>
    <Image src={'/TestIcon.png'} alt='icon' width='52' height='57' />
    <Typography fontWeight='light' fontSize='16px' style={{ color: 'white' }}>
      Next step
    </Typography>
    <Typography fontWeight='light' fontSize='24px' style={{ color: 'white' }}>
      Expert Report
    </Typography>
  </>
)

export const ExampleBannerBodyUnsubmitted = (shouldBeVertical: boolean) => (
  <Box
    display='flex'
    flexDirection='column'
    mb={shouldBeVertical ? '14px' : '0'}
    mr={shouldBeVertical ? '0' : '8px'}
  >
    <Typography fontWeight='light'>
      Please get in touch if you would like an expert report for this site.
      Benefits include:
      <Box pl='24px' pt={'8px'}>
        <ul>
          <li>Key insights from our expert team</li>
          <li>An in-depth analysis of the site</li>
          <li>Recommendations of next steps to take</li>
        </ul>
      </Box>
    </Typography>
  </Box>
)

export const ExampleBannerBodySubmitted = (shouldBeVertical: boolean) => (
  <Box
    display='flex'
    flexDirection='column'
    mb={shouldBeVertical ? '14px' : '0'}
    mr={shouldBeVertical ? '0' : '8px'}
  >
    <Typography fontWeight='light'>
      We received your messge. Please feel free to get in touch again if you
      would like to include any further details or ask any other questions. We
      are eager to assist you.
    </Typography>
  </Box>
)

export const ExampleBannerImage = 'TestImage.png'
