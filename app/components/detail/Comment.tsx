"use client"

import React from 'react'
import { Review } from './types'
import Avatar from '../general/Avatar'

const Comment = ({ prd }: { prd: Review }) => {
    return (
        <div className='border w-full md:w-1/3 p-2 rounded-lg'>
            <div className="flex items-center gap-1">
                <Avatar image={prd?.user?.image} />
                <div> {prd?.user?.name} </div>
            </div>
            <div className="text-slate-500">{prd.comment} </div>
        </div>
    )
}

export default Comment