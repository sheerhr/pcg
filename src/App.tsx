import './App.css'
import { useRef, useEffect } from 'react'
import { Ion, Viewer } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

function App() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<Viewer | null>(null)

  Ion.defaultAccessToken = 
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNzU1M2Y2ZC03YmYwLTRmNDMtODMzNS0wNzRhNzI0MGUyMjciLCJpZCI6MzMzNDcxLCJpYXQiOjE3NTU2Mjg3NjJ9.guMlkKo5DoTHCEqvLZYFvzt57ND8cra6b-cPhkHEbao';

  useEffect(() => {
    if (cesiumContainerRef.current) {
      viewerRef.current = new Viewer(cesiumContainerRef.current);
    }
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    }
  }, [])
  
  return (
    <>
      <div ref={cesiumContainerRef} className="w-full h-full">
      </div>
    </>
  )
}

export default App
