import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import RoutesConfig from './routes'
import Header from './components/Header'

// 延迟加载，运行，按需加载
// 当切换到这个路由后 加载 lazy


function App() {

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
    </div>
  )
}

export default App
