'use client'

import React, {ReactNode} from "react";
import './Tabs.css'

interface ITabs extends React.HTMLAttributes<HTMLDivElement>{
    isActive: boolean
    children: ReactNode
}

const Tabs: React.FC<ITabs> = ({ isActive, children, ...props }) => {
    return (
        <div className={`utabs ${isActive ? 'active' : ''}`} {...props}>
            {children}
        </div>
    );
};

export default Tabs