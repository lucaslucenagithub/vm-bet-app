import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/components/responsive-app-bar'
import SideBar from '@/components/sidecard'
import { Box } from '@mui/material'
import SideAppBar from '@/components/side-app-bar'
import BetsCarousel from '@/components/bets-carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Box height={'100vh'} bgcolor={'secondary.main'}>
        <ResponsiveAppBar />
        <Box display={'flex'} height={'100%'}>
          <SideAppBar />
          <BetsCarousel />
        </Box>
      </Box>
    </>
  )
}
