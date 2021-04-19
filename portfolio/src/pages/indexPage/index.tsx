import * as React from "react"
import { Layout } from "@/components"
import "@/components/css/index.css"
import {
  isSmartphone,
  isnotSmartphone,
  objectMerge,
  ifThenObjectMerge,
}from "@/functions"
import {
  BrowserView,
  MobileView,
} from 'react-device-detect'

const flexCenter = ifThenObjectMerge(isSmartphone(), {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}, {
  flexWrap: 'wrap'
})

const wrapper = objectMerge(flexCenter, {
  alignItems: 'streach',
  width: '100%',
  minHeight: '350px',
  background: 'linear-gradient(to bottom, #eaeaea 0%, #fafafa 100%)',
  borderRadius: '30px',
  padding: '15px',
})

const MyIcon = ({src}: {src: string}) => {
  const icon = ifThenObjectMerge(isnotSmartphone(), {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  }, {
    margin: '0 75px 0 0',
  })

  return (
    <div style={flexCenter}>
      <img src={src} style={icon} alt={'icon'} />
    </div>
  )
}

const View = ({children, style}: any) => {
  return (
    <div style={objectMerge(flexCenter, style)}>{children}</div>
  )
}

const Introduction = ({name, job}: any) => {
  return (
    <View style={{
      flexDirection: 'column',
      height: 'auto'
    }}>
      <BrowserView style={{...flexCenter, alignItems: 'streach', flexDirection: 'column'}}>
        <span style={{
          lineHeight: 1.5,
          fontSize: '56px',
          fontWeight: 700,
        }}>{name}</span>
        <span style={{
          lineHeight: 1.5,
          fontSize: '30px',
          fontWeight: 'normal',
          }}>{job}</span>
      </BrowserView>
      <MobileView style={flexCenter}>
        <span style={{
          lineHeight: 1.5,
          fontSize: '40px',
          fontWeight: 700
          }}>{name}</span>
        <span style={{
          lineHeight: 1.5,
          fontSize: '20px',
          fontWeight: 'normal',
          }}>{job}</span>
      </MobileView>
    </View>
  )
}

export const IndexPage: React.FC<any> = () => {
    const Photo = ''
    return (
    <Layout>
        <div style={wrapper}>
            <MyIcon src={'https://avatars.githubusercontent.com/u/79630762?v=4'} />
            <Introduction name="Noriki KISHI" job="An University Student"/>
        </div>
    </Layout>
)}