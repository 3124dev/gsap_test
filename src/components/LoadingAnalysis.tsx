import * as React from "react";

import { TimelineMax } from "gsap";
import { Img } from "./img/Img";

import './LoadingAnalysis.scss';
export class LoadingAnalysis extends React.Component
{
    private timeLine = new TimelineMax({repeat: -1, repeatDelay: 1});

    // REFERENCES 
    private charBody: any = null;
    private charPen: any = null;
    private charNote: any = null;
    private charLight: any = null;

    public componentDidMount(): void
    {
        this.playAnimation();
    }

    public render(): JSX.Element
    {
        return (
            <div className="loading-analysis-container">
                <div className="char-analysis-body-box"
                    ref={i => this.charBody = i}>
                    <Img bodocImg="char-analysis-body" />
                </div>
                <div className="char-analysis-note-box"
                    ref={i => this.charNote = i}>
                    <Img bodocImg="char-analysis-note" />
                </div>
                <div className="char-analysis-pen-box"
                    ref={i => this.charPen = i}>
                    <Img bodocImg="char-analysis-pen" />
                </div>
                <div className="char-analysis-light-box"
                    ref={i => this.charLight = i}>
                    <Img bodocImg="char-analysis-light" />
                </div>
            </div>
        )
    }

    private playAnimation(): void
    {
        this.timeLine
            .set(this.charBody, {y:0, x:0, transformOrigin:"50% 50%"})
            .set(this.charPen, {y:0, x:0, opacity: 0, transformOrigin:"28px 28px"})
            .set(this.charNote, {y:0, x:0, transformOrigin:"50% 50%"})
            .set(this.charLight, {scale: 0, opacity: 0, transformOrigin:"50% 50%"})
            .to(this.charNote, 0.2, {opacity: 1 , x:'+=8', y:'-=4', rotation: '-=10'}, "+=1")
            .to(this.charLight, 0.3, {scale: 1.5, opacity: 1})
            .to(this.charLight, 0.1, {scale: 0, opacity: 0})
            .to(this.charPen, 0.1, {opacity: 1 , rotation: '+=25'})
            .to(this.charPen, 0.1, {rotation: '-=35'}, "+=0.1")
            .to(this.charPen, 0.1, {rotation: '+=20'})
            .to(this.charPen, 0.1, {rotation: '-=20'})
            .to(this.charPen, 0.1, {rotation: '+=20'})
            .to(this.charPen, 0.2, {rotation: '-=20'})
            .to(this.charPen, 0.2, {rotation: '+=20'})
            .to(this.charNote, 0.2, {x: 0, y: 0, rotation: '+=10'})
            .to(this.charPen, 0.1, {rotation: '-=20'})
            .to(this.charPen, 0.1, {opacity: 0 , rotation: '-=15'})
    }
}