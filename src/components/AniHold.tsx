import * as React from "react";

import './AniHold.scss';
export class AniHold extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <div className="hold-ani-box">
                <svg height="72" width="72">
                    <path className="st0" d="M31.6,39.2c0-2.5,2-4.4,4.4-4.4s4.4,2,4.4,4.4c0,3.4-4.4,3.4-4.4,6.6"/>
                    <g>
                        <polyline className="st1" points="6.9,61.2 21.4,36 36,10.8"/>
                        <polyline className="st2" points="65.1,61.2 36,61.2 6.9,61.2"/>
                        <polyline className="st3" points="36,10.8 50.6,36 65.1,61.2"/>
                    </g>
                    <circle className="st4" cx="36" cy="51.1" r="2"/>
                </svg>
            </div>
        )
    }
}