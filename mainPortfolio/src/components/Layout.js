import React from 'react'

const Layout = ({children, className=""}) => {
    return (
        <div className = {`flex flex-row w-full h-full z-0 bg-light p-32 dark:bg-dark ${className}`}>
            {children}
        </div>
    )
}

export default Layout