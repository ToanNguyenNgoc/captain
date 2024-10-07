import { Title } from '@/components/UI/title'
import { ITicket } from '@/interfaces'
import { Container } from '@mui/material'
import style from './style.module.css'
import Ticket from '@/components/home/tickets/components/ticket'
import { useTranslation } from 'react-i18next'

interface BuyProps {
  tickets: ITicket[]
}

export function Buy({ tickets }: BuyProps) {
  const filterTicket = tickets.filter((item) => item.status == true)
  // console.log(filterTicket)
  const { t } = useTranslation()
  return (
    <section id="buy" className="left">
      <Container maxWidth="lg">
        <Title
          title={t('ticket')}
          position="center"
          description={t('chooseYourTickets')}
        />
        <div
          style={filterTicket.length > 1 ? { display: 'flex' } : {}}
          className={style.tiket__list}
        >
          {filterTicket.map((ticket: ITicket) => (
            <Ticket ticket={ticket} key={ticket.id} />
          ))}
        </div>
      </Container>
    </section>
  )
}
