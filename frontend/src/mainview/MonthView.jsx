import React from 'react'

import React, { Fragment } from 'react'
import MonthViewBox from './month-view-box'
import { useDateStore } from '@/lib/store';

const MonthView = () => {
    const { twoDMonthArray } = useDateStore();
    return (
        <section className='grid grid-cols-7 grid-rows-5 lg:h-[100vh]'>
        {twoDMonthArray.map((row, i) => (
            <Fragment key={i}>
            {row.map((day, index) => (
                <MonthViewBox key={index} day={day} rowIndex={i} />
            ))}
            </Fragment>
        ))}
        </section>
    )
}

export default MonthView