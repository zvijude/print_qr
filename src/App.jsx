'use client'

import { useRef } from 'react'

import Qr from 'react-qr-code'
import { useReactToPrint } from 'react-to-print'

export default function App() {
  const ref = useRef()
  const handlePrint = useReactToPrint({ content: () => ref.current })

  function printIds() {
    handlePrint()
  }

  return (
    <div className="my-8">
      <button onClick={printIds}>
        <h1>הדפס</h1>
      </button>

      <div id="printFrame" style={{ display: 'none' }}>
        <div id="content" ref={ref} dir="rtl">
          <div
            style={{
              width: '50cm',
              height: '50cm',
              margin: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Qr
              value={`https://roi-app.vercel.app/qr/3/2`}
              style={{ width: '30cm', height: '30cm', margin: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
