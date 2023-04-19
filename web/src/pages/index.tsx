import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/components/responsive-app-bar'
import { Box, Divider } from '@mui/material'
import SideAppBar from '@/components/side-app-bar'
import BetsCarousel from '@/components/bets-carousel'
import Footer from '@/components/footer'
import EventsTable from '@/components/events-table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Box bgcolor={'secondary.main'}>
        <ResponsiveAppBar />
        <Box display={'flex'}>
          <SideAppBar />
          <Box display={'flex'} flexDirection={'column'} width={'100%'} p={1}>
            <BetsCarousel />
            <EventsTable />
            <Divider />
            <EventsTable />
            <Divider />
            <EventsTable />
            <Divider />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
