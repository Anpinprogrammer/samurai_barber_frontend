import React from 'react'

const BtnWhatsapp = () => {
  return (
    <a className="fixed w-[60px] h-[60px] bottom-10 right-10 bg-whatsapp text-white rounded-full text-center z-100" target='_blank' href="https://wa.me/3146098819?text=Hola,%20quiero%20agendar%20una%20cita%20para%20cortarme%20el%20cabello.">
        <div className="m-[14px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
        </div>
    </a>
  )
}

export default BtnWhatsapp
