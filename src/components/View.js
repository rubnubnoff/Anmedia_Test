import React from 'react';
import ipad from '../icons/ipad.png';


export const View = ({ activeBodyIcon, activeFaceIcon, activeRangeValue }) => {
    let iconClass = 'view__icon junior';
    if (activeRangeValue.length > 21) iconClass = 'view__icon middle';
    if (activeRangeValue.length > 27) iconClass = 'view__icon senior';
    const arr = activeRangeValue.map((item, index) => {
        return <span 
                    key={`${item}${index}`}
                    className = { iconClass }
                >{item}</span>
    });
    return(
        <section className='view'>
            <div className='view__icons'>{arr}</div>
            <div className='view__guy'>
                <img className='body' src = { activeBodyIcon } alt = 'body'/>
                <img className='face' src = { activeFaceIcon } alt = 'face'/>
                <img src = { ipad } alt = 'ipad'/>
            </div>
        </section>
    );
};