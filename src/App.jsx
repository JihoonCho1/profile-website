import { useState } from 'react'

import './App.css'
import Header from './component/Header.jsx'
import ProfileBanner from './component/Profile-banner.jsx'
import WorkStyleBanner from './component/ToggleWorkBanner.jsx'

function App() {
  return (
    <div className="main-wrapper">
      <div className="header-wrapper">
        <Header className="header-nav" />
      </div>

      <ProfileBanner />
      <WorkStyleBanner />
    
    </div>
  )
}

export default App
