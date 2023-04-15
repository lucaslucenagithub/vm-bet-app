import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/components/responsive-app-bar'
import SideBar from '@/components/sidecard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
    </>
  )
}
