import * as React from "react";

import { TimelineMax } from "gsap";
import { Img } from "./img/Img";

import './AniManual.scss';
export class AniManual extends React.Component
{   
    private rouletteFirst: any[] = [];
    private rouletteSecond: any[] = [];
    private arm: any = null;
    private signX: any = null;
    private signO: any = null;
    private timeLine = new TimelineMax({repeat: -1, repeatDelay: 1});

    public componentDidMount(): void 
    {
        this.timeLine
            .set(this.rouletteSecond, {y:-144})
            .staggerFrom(this.rouletteFirst, 0.3, {y:-72}, 0.1)
            .staggerTo(this.rouletteFirst, 0.3, {y:0}, 0)
            .to(this.arm, 0.1, {rotation: '+=45', transformOrigin:"right top"})
            .to(this.arm, 0.1, {rotation: '-=45', transformOrigin:"right top"})
            .to(this.signX, 0.1, {opacity: 1})
            .staggerTo(this.rouletteFirst, 0.3, {y:72}, 0.1, "+=1")
            .to(this.signX, 0.2, {opacity: 0})
            .staggerTo(this.rouletteSecond, 0.3, {y:-72}, 0.1, "+=0.5")
            .to(this.arm, 0.1, {rotation: '+=45', transformOrigin:"right top"})
            .to(this.arm, 0.1, {rotation: '-=45', transformOrigin:"right top"})
            .to(this.signO, 0.1, {opacity: 1})
            .staggerTo(this.rouletteSecond, 0.3, {y:0}, 0.1, "+=1.5")
            .to(this.signO, 0.2, {opacity: 0});
    }

    public render(): JSX.Element 
    {
        return (
            <div className="manual-animation-contianer">
                <div className="roulette-container">
                    <div className="roulette-box">
                        <div className="char-box"
                            ref={i => this.rouletteFirst[0] = i}>
                            <Img bodocImg="char-job-1"/>
                        </div>
                        <div className="char-box"
                            ref={i => this.rouletteSecond[0] = i}>
                            <Img bodocImg="char-job-2"/>
                        </div>
                    </div>
                    <div className="roulette-box">
                        <h3 ref={i => this.rouletteFirst[1] = i}>A보험사</h3>
                        <h3 ref={i => this.rouletteSecond[1] = i}>B보험사</h3>
                    </div>
                    <div className="roulette-box">
                        <h3 ref={i => this.rouletteFirst[2] = i}>암보험</h3>
                        <h3 ref={i => this.rouletteSecond[2] = i}>3대질병</h3>
                    </div>
                </div>

                <div className="ox-container">
                    <div className="char-ox-box">
                        <Img bodocImg="char-ox"/>
                    </div>
                    {this._ox_char_arm()}
                    <div className="ox-sign-box"
                        ref={i => this.signX = i}>
                        <Img bodocImg="ox-sign-x"/>
                    </div>
                    <div className="ox-sign-box"
                        ref={i => this.signO = i}>
                        <Img bodocImg="ox-sign-o"/>
                    </div>
                </div>
            </div>
        );
    }

    private _ox_char_arm = () => {
        return (
        <svg className="ox-char-arm" 
            height="10" width="32"
            ref={i => this.arm = i}>
            <line fill="none" 
                stroke="#333333" 
                strokeWidth="3" 
                strokeLinecap="round" strokeLinejoin="round" 
                strokeMiterlimit="10" 
                x1="2" y1="8" x2="28" y2="2"/>
        </svg>)
    }
}