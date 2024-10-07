import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@mui/material'
import style from './style.module.css'
import { Title } from '@/components/UI/title'
import mapboxgl, { Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { KEY_MAPBOX } from '@/constants'
import { useTranslation } from 'react-i18next'

mapboxgl.accessToken = KEY_MAPBOX

const defaultCenter = [106.7010858, 10.7739888] as [number, number]

export function Location() {
  const [map, setMap] = useState<Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation()
  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const initializeMap = () => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current!,
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: defaultCenter,
          zoom: 15,
        })

        map.on('load', () => {
          setMap(map)
          map.resize()
        })

        new mapboxgl.Marker({ color: 'red' })
          .setLngLat(defaultCenter)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div style="color: var(--primary-cl); font-size: 14px; font-weight: bold;" className="popupText">Show in here
              </div>`
            )
          )
          .addTo(map)
      }

      initializeMap()
    }

    return () => {
      if (map) map.remove()
    }
  }, [map])

  return (
    <section id="location" className="right">
      <Container>
        <Title
          title={t('location')}
          position="center"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, minima."
        />
        <div ref={mapContainerRef} className={style.location__map} />
      </Container>
    </section>
  )
}
