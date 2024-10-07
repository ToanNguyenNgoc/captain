import React, { useState } from 'react'
import { Button, useMediaQuery } from '@mui/material'
import { OrderForm } from '@/components/home/tickets/components/form'
import { COUNT_DOWN } from '@/constants'
import { useIsExpired } from '@/hooks'
import { ITicket } from '@/interfaces'
import { formatDate, formatMoney, formatTime } from '@/utils'
import styles from './style.module.css'
import Image from 'next/image'

interface TicketProps {
  ticket: ITicket
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const IS_MB = useMediaQuery('(max-width:1023px)')
  const isExpired = useIsExpired(COUNT_DOWN)

  const [open, setOpen] = useState(false)
  const [selectedTickets, setSelectedTickets] = useState<number[]>([])

  const openDialog = (newOpen: boolean) => () => {
    setOpen(newOpen)
    setSelectedTickets([ticket.id])
  }

  return (
    <div className={styles.ticketContainer}>
      <div className={styles.ticket}>
        <div className={styles.ticketTitle}>{ticket.title}</div>
        <hr className={styles.line} />
        <div className={styles.ticketDetail}>
          {ticket.image_url && (
            <div className={styles.ticketImg}>
              <Image
                src={ticket?.image_url}
                alt={`ticket-${ticket?.id}`}
                width={500}
                height={300}
              />
            </div>
          )}
          <div>
            <span>Price</span>:&nbsp; {formatMoney(ticket.price)}
          </div>
          <div>
            <span>Time</span>: {formatTime(COUNT_DOWN)}
          </div>
          <div className={styles.ticketContent}>
            <span>Address</span>: {ticket.content}
          </div>
        </div>
        <div className={styles.ticketRip}>
          <div className={styles.circleLeft}></div>
          <div className={styles.ripLine}></div>
          <div className={styles.circleRight}></div>
        </div>
        <div className={styles.ticketSubDetail}>
          <div className={styles.ticketDate}>{formatDate(COUNT_DOWN)}</div>
          <Button
            style={isExpired ? { pointerEvents: 'none' } : {}}
            size={IS_MB ? 'small' : 'large'}
            variant="contained"
            color="secondary"
            disabled={isExpired}
            onClick={openDialog(true)}
          >
            {isExpired ? 'Expired' : 'Buy Now'}
          </Button>
        </div>
      </div>
      <div className={styles.ticketShadow}></div>
      <OrderForm
        selectedTickets={selectedTickets}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default Ticket
