import * as React from "react";

import { TimelineMax } from "gsap";

import './AniStudy.scss';
export class AniStudy extends React.Component
{   
    private timeLine = new TimelineMax({repeat: -1});
    private timeLine02 = new TimelineMax({repeat: -1, repeatDelay: 1});
    private lightning: any = null;
    private charEyes: any = null;

    public componentDidMount(): void 
    {
        this.timeLine
            .set(this.charEyes, {opacity: 0})
            .to(this.charEyes, 0.1, {opacity: 1})
            .to(this.charEyes, 0.1, {opacity: 0})
            .to(this.charEyes, 0.1, {opacity: 1})
            .to(this.charEyes, 0.1, {opacity: 0})
            .to(this.charEyes, 0.1, {opacity: 1})
            .to(this.charEyes, 0.1, {opacity: 0})
            .to(this.charEyes, 0.1, {opacity: 1}, 0.2)
            .to(this.charEyes, 0.1, {opacity: 0})
            .to(this.charEyes, 0.2, {opacity: 1})
            .to(this.charEyes, 0.2, {opacity: 0})
            .to(this.charEyes, 0.1, {opacity: 1})
            .to(this.charEyes, 0.1, {opacity: 0})
            .to(this.charEyes, 0.1, {opacity: 1})
            .to(this.charEyes, 0.1, {opacity: 0})
            .to(this.charEyes, 0.1, {delay: 1, opacity: 1})
            .to(this.charEyes, 0.1, {opacity: 0})

        this.timeLine02
            .set(this.lightning, {transformOrigin:"center bottom", scale: 0.6, opacity: 0})
            .to(this.lightning, 0.2, {scale: 1, opacity: 1})
            .to(this.lightning, 0.2, {scale: 1.2, opacity: 0})
            .set(this.lightning, {scale: 0.6, opacity: 0})
            .to(this.lightning, 0.2, {scale: 1, opacity: 1})
            .to(this.lightning, 0.2, {scale: 1.2, opacity: 0})
    }

    public render(): JSX.Element 
    {
        return (
            <div className="study-animation-contianer">
                <div className="study-lightning">{this.studyLightning()}</div>
                <div className="study-char">{this.studyChar()}</div>
                <div className="char-eyes">{this.studyCharEyes()}</div>
            </div>
        );
    }

    private studyChar = () => {
        return (
        <svg className="study-char" 
            height="90" width="120">
            <line className="st0" x1="60" y1="28.1" x2="60" y2="11"/>
            <line className="st0" x1="34.3" y1="87.3" x2="85.7" y2="87.3"/>
            <path className="st0" d="M104.6,86.5v-14c0-24.5-19.9-44.3-44.6-44.3c-24.6,0-44.6,19.8-44.6,44.3v14"/>
            <circle className="st1" cx="87.3" cy="57.3" r="21.4"/>
            <circle className="st1" cx="32.4" cy="57.3" r="21.4"/>
            <circle className="st2" cx="60" cy="10.2" r="4.3"/>
        </svg>)
    }

    private studyCharEyes = () => {
        return (
        <svg className="study-char" 
            height="90" width="120"
            ref={i => this.charEyes = i}>
            <circle className="st3" cx="87.3" cy="57.3" r="4"/>
            <circle className="st3" cx="32.4" cy="57.3" r="4"/>
        </svg>)
    }

    private studyLightning = () => {
        return (
        <svg className="study-char" 
            height="50" width="120"
            ref={i => this.lightning = i}>
            <path className="st4" d="M54,26.2h6v18l14-24h-8v-16L54,26.2z"/>
            <line className="st4" x1="73.8" y1="46.8" x2="81.4" y2="39.2"/>
            <line className="st4" x1="47.3" y1="34.8" x2="40.7" y2="29.2"/>
        </svg>)
    }
}