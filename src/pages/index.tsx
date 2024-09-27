import {
  Artist,
  Buy,
  Footer,
  Header,
  Hero,
  Location,
  Seo,
  Show,
  Timeline,
} from '@/components'
import ScrollToTop from '@/components/UI/scrollToTop'
import { GetServerSideProps } from 'next'
import { tiketApi } from '@/services'
import { ITicket } from '@/interfaces'
import { useRouter } from 'next/router'

interface HomeProps {
  tickets: ITicket[]
}

export default function Home({ tickets }: HomeProps) {
  const router = useRouter()
  return (
    <>
      <Seo
        title="Trang chủ"
        description="Website chính thức bán vé cho show diễn Captian"
        url={router.pathname}
        image_url="../../public/img_url_seo.png"
      />
      <main>
        <Header />
        <Hero />
        <Show />
        <Artist />
        <Buy tickets={tickets} />
        <Location />
        <Timeline />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await tiketApi.getTikets()
    const tickets = response.context.data || []

    return {
      props: {
        tickets,
      },
    }
  } catch (error) {
    console.error('Error fetching tickets:', error)
    return {
      props: {
        tickets: [],
      },
    }
  }
}
