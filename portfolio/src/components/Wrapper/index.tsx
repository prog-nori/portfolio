import * as React from "react"

export const Wrapper: React.FC<any> = ({children}: any) => (
    <div style={{
        maxWidth: 1000,
        margin: '45px auto 0 auto',
        padding: '0 15px'
    }}>
        {children}
    </div>
)