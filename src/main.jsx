import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Store from './components/pages/Store.jsx'
import Mac from './components/pages/Mac.jsx'
import IPad from './components/pages/IPad.jsx'
import IPhone from './components/pages/IPhone.jsx'
import Watch from './components/pages/Watch.jsx'
import AirPods from './components/pages/AirPods.jsx'
import TvHome from './components/pages/TVHome.jsx'
import Entertainment from './components/pages/Entertainment.jsx'
import Accessories from './components/pages/Accessories.jsx'
import Support from './components/pages/Support.jsx'

import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx'
import TermsofUse from './components/pages/TermsofUse.jsx'
import SalesPolicy from './components/pages/SalesPolicy.jsx'
import Legal from './components/pages/Legal.jsx'
import SiteMap from './components/pages/SiteMap.jsx'

import Switch from './components/pages/Switch.jsx'
import Specs from './components/pages/Specs.jsx'
import Iphone16Pro from './components/pages/Iphone16Pro.jsx'

import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  { path: '/', element: <App /> },
  { path: '/store', element: <Store /> },
  { path: '/mac', element: <Mac /> },
  { path: '/ipad', element: <IPad /> },
  { path: '/iphone', element: <IPhone /> },
  { path: '/watch', element: <Watch /> },
  { path: '/airpods', element: <AirPods /> },
  { path: '/tv-home', element: <TvHome /> },
  { path: '/entertainment', element: <Entertainment /> },
  { path: '/accessories', element: <Accessories /> },
  { path: '/support', element: <Support /> },

  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-of-use', element: <TermsofUse /> },
  { path: '/sales-policy', element: <SalesPolicy /> },
  { path: '/legal', element: <Legal /> },
  { path: '/site-map', element: <SiteMap /> },

  { path: '/switch', element: <Switch /> },
  { path: '/specs', element: <Specs /> },
  { path: '/iphone-16-pro', element: <Iphone16Pro /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
