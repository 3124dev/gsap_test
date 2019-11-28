import * as React from "react";
import { TimelineMax } from "gsap";

import './AniVirus.scss';
export class AniVirus extends React.Component
{
    private timeLine = new TimelineMax({repeat: -1, repeatDelay: 2});

    private virusBody: any = null;
    private leftEye: any = null;
    private rightEye: any = null;
    private mouse: any = null;

    public componentDidMount(): void
    {
        this.playAnimation();
    }

    public render(): JSX.Element
    {
        return (
            <div className="virus-box">
                <svg ref={ref => this.virusBody = ref}
                    height="48" width="48">
                    <g>
                        <circle className="st01" cx="24" cy="24" r="15"/>
                        <line className="st01" x1="9" y1="24" x2="5.5" y2="24"/>
                        <line className="st01" x1="42.5" y1="24" x2="36" y2="24"/>
                        <line className="st01" x1="24" y1="36" x2="24" y2="42.5"/>
                        <line className="st01" x1="24" y1="5.5" x2="24" y2="9"/>
                        <line className="st01" x1="34.6" y1="34.6" x2="37.1" y2="37.1"/>
                        <line className="st01" x1="10.9" y1="10.9" x2="13.4" y2="13.4"/>
                        <line className="st01" x1="34.6" y1="13.4" x2="37.1" y2="10.9"/>
                        <line className="st01" x1="10.9" y1="37.1" x2="13.4" y2="34.6"/>
                    </g>
                </svg>
                {this._eye_left()}
                {this._eye_right()}
                {this._mouse()}
            </div>
        )
    }

    private _eye_left = () => {
        return (
            <svg className="left-eye"
                ref={ref => this.leftEye = ref}
                width="5.5" height="5.5">
                <line className="st01" x1="1.5" y1="1.5" x2="4" y2="4"/>
            </svg>
        )
    }

    private _eye_right = () => {
        return (
            <svg className="right-eye"
                ref={ref => this.rightEye = ref}
                width="5.5" height="5.5">
                <line className="st01" x1="1.5" y1="4" x2="4" y2="1.5"/>
            </svg>
        )
    }

    private _mouse = () => {
        return (
            <svg className="mouse"
                ref={ref => this.mouse = ref}
                width="3" height="3">
                <circle className="st02" cx="1.5" cy="1.5" r="1.5"/>
            </svg>
        )
    }

    private playAnimation(): void
    {
        this.timeLine
            .to(this.virusBody, 0.1, {scale: 0.95}, "+=1")
            .to(this.virusBody, 0.1, {scale: 1})
            .to(this.leftEye, 0.1, {y: '-=2'})
            .to(this.rightEye, 0.1, {y: '-=2'})
            .to(this.mouse, 0.1, {scale: 1.5})
            .to(this.leftEye, 0.1, {y: '+=2'})
            .to(this.rightEye, 0.1, {y: '+=2'})
            .to(this.virusBody, 0.1, {scale: 0.95})
            .to(this.virusBody, 0.1, {scale: 1})
            .to(this.mouse, 0.1, {x: '+=1'})
            .to(this.mouse, 0.1, {x: '-=2'})
            .to(this.mouse, 0.1, {x: '+=1'})
            .to(this.mouse, 0.1, {x: '-=1'})
            .to(this.mouse, 0.1, {x: '+=1'})
            .to(this.mouse, 0.1, {scale: 1});
    }
}