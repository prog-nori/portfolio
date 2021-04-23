import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router'
import {
  Layout,
  // Card,
  CardWithImage,
  CardWrapper,
  BreadcrumbList,
} from "@/components"
import { getThumbnails } from '@/functions'

type ResultProps = {
  title: string
  link: string
}

export const WorkPage:React.FC = () => {
  const [work, setWork] = useState([])
  const location = useLocation()

  useEffect(() => {
    console.log(location.pathname)
    getThumbnails().then(res => {
      const arr: ResultProps & any = []
      arr.concat(res)
      res.map(item => arr.push(item))
      setWork(arr)
    })
  }, [])

  return (
  <Layout>
    <BreadcrumbList />
      <CardWrapper>
        {
          work.map((item: ResultProps, idx) => (
            <CardWithImage title={item.title} link={item.link} key={idx}/>
          ))
        }
      </CardWrapper>
  </Layout>
)}