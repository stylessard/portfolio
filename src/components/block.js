import React from 'react'
import BlockStyles from './block.module.css'

const Block = ({ title, children }) => {
    return (
        <div className={BlockStyles.block}>
            <h2>{title}</h2>
            <div className={BlockStyles.blockList}>
                {children}
            </div>
        </div>
    )
}

export default Block