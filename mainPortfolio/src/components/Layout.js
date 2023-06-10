import React from 'react'

const Layout = ({children, className=""}) => {
    return (
        <div className = {`flex flex-row w-full h-full z-0 bg-light p-32 dark:bg-dark xl:p-24 l:p-16 md:p-12 sm:p-8 ${className}`}>
            {children}
        </div>
    )
}

export default Layout