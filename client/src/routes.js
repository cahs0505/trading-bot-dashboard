import React from 'react'

const Algo = React.lazy(() => import('./views/algo/Algo'))
const Algo2 = React.lazy(() => import('./views/algo/Algo2'))
const Algo3 = React.lazy(() => import('./views/algo/Algo3'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/algo', name: 'algo', element: Algo },
  { path: '/algo2', name: 'algo', element: Algo2 },
  { path: '/algo3', name: 'algo', element: Algo3 },
]

export default routes
