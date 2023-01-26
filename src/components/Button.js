import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ text, path }) => {
    return (
        <>
            <Link to={path}
                className='w-64 h-36 text-2xl ml-8 my-6 bg-green-700 text-white rounded-2xl flex items-center justify-center border border-slate-900 shadow-lg hover:bg-red-900 opacity-80 transition-all'
            >
                {text}
            </Link>
        </>
    )
}
