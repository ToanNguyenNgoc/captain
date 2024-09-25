import { Title } from '@/components/UI/title'
import { ITicket } from '@/interfaces'
import { Container } from '@mui/material'
import style from './style.module.css'
import Ticket from '@/components/home/tickets/components/ticket'

interface BuyProps {
  tickets: ITicket[]
}

export function Buy({ tickets }: BuyProps) {
  const filterTicket = tickets.filter((item) => item.status == true)
  console.log(tickets)
  return (
    <section id="buy" className="left">
      <Container maxWidth="lg">
        <Title
          title="Tickets"
          position="center"
          description="Choose your tickets and enter the quantity."
        />
        <div
          style={filterTicket.length === 1 ? { display: 'flex' } : {}}
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
