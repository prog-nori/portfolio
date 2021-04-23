import React from 'react'
import './icon.css'

export const MyIcon:React.FC<JSX.IntrinsicElements['div']& {option?: string, src: string}> = ({option='', src}) => {
  const wrapperClasses = ['wrapper']
  const iconClasses = ['icon']
  const pcClassName = 'pc'
  if(option === 'pc') {
    wrapperClasses.push(pcClassName)
    iconClasses.push(pcClassName)
  }

  return (
      <div className={wrapperClasses.join(' ')}>
        <img className={iconClasses.join(' ')} src={src} alt={'icon'} />
      </div>
    )
  }