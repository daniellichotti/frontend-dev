import './App.css'
import { WhatsappLogoIcon, InstagramLogoIcon, EnvelopeOpenIcon } from "@phosphor-icons/react";


export function App() {


  return (
    <div className="container">
      <img style={{ borderRadius: '100%' }} src="https://randomuser.me/api/portraits/lego/6.jpg" alt="" />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
        <WhatsappLogoIcon size={32} weight="thin" />
        <p>6666-6666</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
        <InstagramLogoIcon size={32} weight="thin" />
        <p>@moisesinho</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
        <EnvelopeOpenIcon size={32} weight="thin" />
        <p>moisesinho@yahoo.com</p>
      </div>
    </div>
  )
}
