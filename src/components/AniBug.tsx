import * as React from "react";
import { TimelineMax } from "gsap";

import './AniBug.scss';
export class AniBug extends React.Component
{
    private timeLine = new TimelineMax({repeat: -1, repeatDelay: 2});

    private legsLeft: any[] = [];
    private legsRight: any[] = [];
    private bugBody: any = null;

    public componentDidMount(): void
    {
        this.playAnimation();
    }

    public render(): JSX.Element
    {
        return (
            <div className="bug-box">
                <svg
                    ref={ref => this.bugBody = ref}
                    height="48" width="48">
                    <g>
                        <line className="st01" x1="16" y1="8" x2="18.8" y2="10.8"/>
                        <line className="st01" x1="29.2" y1="10.9" x2="32" y2="8.1"/>
                        <line className="st01" x1="21" y1="22" x2="27" y2="22"/>
                        <line className="st01" x1="21" y1="30" x2="27" y2="30"/>
                        <path className="st01" d="M14,21c0-5.5,4.5-10,10-10s10,4.5,10,10v10c0,5.5-4.5,10-10,10s-10-4.5-10-10V21z"/>
                    </g>
                </svg>
                {this._legs_left(3)}
                {this._legs_right(3)}
            </div>
        )
    }

    private _legs_left = (idx: number) => {
        let legs: JSX.Element[] = [];

        for(let i=0; i<idx; i++)
        {
            legs.push(
                <svg className={`bug-legs left-leg${i}`}
                    key={`l${i}`}
                    ref={ref => this.legsLeft[i] = ref}
                    width="8" height="3">
                    <line className="st01" x1="1.5" y1="1.5" x2="6.5" y2="1.5"/>
                </svg>
            )
        }
        return legs;
    }

    private _legs_right = (idx: number) => {
        let legs: JSX.Element[] = [];

        for(let i=0; i<idx; i++)
        {
            legs.push(
                <svg className={`bug-legs right-leg${i}`}
                    key={`r${i}`}
                    ref={ref => this.legsRight[i] = ref}
                    width="8" height="3">
                    <line className="st01" x1="1.5" y1="1.5" x2="6.5" y2="1.5"/>
                </svg>
            )
        }
        return legs;
    }

    private playAnimation(): void
    {
        this.timeLine
            .staggerTo(this.legsLeft, 0, {transformOrigin:"right bottom"}, 0)
            .staggerTo(this.legsRight, 0, {transformOrigin:"left top"}, 0)
            .to(this.bugBody, 0.1, {scale: 0.95})
            .to(this.bugBody, 0.1, {scale: 1})
            .to(this.bugBody, 0.1, {scale: 0.95})
            .to(this.bugBody, 0.1, {scale: 1})
            .to(this.legsLeft[0], 0.3, {rotation: '-=15'})
            .to(this.legsRight[2], 0.3, {rotation: '-=15'})
            .to(this.legsLeft[1], 0.3, {scaleX: 0.8})
            .to(this.legsRight[1], 0.3, {scaleX: 0.8})
            .to(this.legsLeft[2], 0.3, {rotation: '-=15'})
            .to(this.legsRight[0], 0.3, {rotation: '-=15'})
            .to(this.bugBody, 0.1, {scale: 0.95})
            .to(this.bugBody, 0.1, {scale: 1})
            .to(this.legsLeft[0], 0.3, {rotation: '+=15'})
            .to(this.legsRight[2], 0.3, {rotation: '+=15'})
            .to(this.legsLeft[1], 0.3, {scaleX: 1})
            .to(this.legsRight[1], 0.3, {scaleX: 1})
            .to(this.legsLeft[2], 0.3, {rotation: '+=15'})
            .to(this.legsRight[0], 0.3, {rotation: '+=15'});
    }
}