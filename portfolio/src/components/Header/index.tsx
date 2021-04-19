import * as React from "react"
import { Link } from "react-router-dom"
import "@/components/css/fonts.css"
import "@/components/css/header.css"
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'
import {
  isSmartphone,
} from '@/functions'
import {
  HamburgerMenu,
  HamburgerMenuContent,
} from '@/components'

const headerContent = [
  {
    link: "/about",
    label: "about"
  },
  {
    link: "/skills",
    label: "skills"
  },
  {
    link: "/work",
    label: "work"
  },
  {
    link: "/contact",
    label: "contact"
  },
]

const { useState } = React

export const Header: React.FC<any> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header>
            <div className={isSmartphone()? 'inner-header sp': 'inner-header'}>
                <h1 className="vertical-center" style={{margin: "0 100px 0 0"}}>
                    <Link
                        to="/"
                        className="square-font site-title">
                        nori
                    </Link>
                </h1>
                <BrowserView style={{
                    display: 'flex',
                    alignItems: 'center',
                    }}>
                {
                    headerContent.map((anElement, idx) => (
                        <Link
                            to={anElement.link}
                            className="header-links"
                            key={idx}>
                            {anElement.label}
                        </Link>
                    ))
                }
                </BrowserView>
                <MobileView>
                    <HamburgerMenu state={isOpen} onClick={handleClick}/>
                </MobileView>
            </div>
            <MobileView>
                <HamburgerMenuContent isOpen={isOpen} contents={headerContent} />
            </MobileView>
        </header>
    )
}