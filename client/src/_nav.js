import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChevronDoubleRight } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Algo',
  },
  {
    component: CNavItem,
    name: 'Buy and Hold Google',
    to: '/algo',
    icon: <CIcon icon={cilChevronDoubleRight} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Buy and Hold GME',
    to: '/algo2',
    icon: <CIcon icon={cilChevronDoubleRight} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Simple spread',
    to: '/algo3',
    icon: <CIcon icon={cilChevronDoubleRight} customClassName="nav-icon" />,
  },
]

export default _nav
