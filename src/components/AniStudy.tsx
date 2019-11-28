import * as React from "react";

import { TimelineMax } from "gsap";

import './AniStudy.scss';
export class AniStudy extends React.Component
{   
    private charTimeLine01 = new TimelineMax();
    private charTimeLine02 = new TimelineMax({repeat: -1});
    private bgTimeLine01 = new TimelineMax();
    private bgTimeLine02 = new TimelineMax();
    private charStick: any = null;
    private charArm: any = null;
    private bestPaper: any = null;
    private bestTitle: any = null;
    private paper: any[] = [];

    public componentDidMount(): void 
    {
        this.charTimeLine01
            .set(this.charStick, {delay: 2, rotation: '-=45', transformOrigin:"right top"})
            .to(this.charArm, 0, {opacity: 0})
            .to(this.charStick, 0.2, {opacity: 1, rotation: '+=80'})
            .to(this.charStick, 0.1, {opacity: 1, rotation: '-=25'})

        this.charTimeLine02
            .set(this.charStick, {delay: 3, opacity: 1, transformOrigin:"right top"})
            .to(this.charStick, 0.1, {delay: 1, opacity: 1, rotation: '+=5', scaleX: 0.9})
            .to(this.charStick, 0.1, {opacity: 1, rotation: '-=5', scaleX: 1})
            .to(this.charStick, 0.1, {opacity: 1, rotation: '+=5', scaleX: 0.9})
            .to(this.charStick, 0.1, {opacity: 1, rotation: '-=5', scaleX: 1})
            

        this.bgTimeLine01
            .set(this.paper, {transformOrigin:"center center"})
            .staggerTo(this.paper, 0.5, {x: 140, opacity: 1}, 0.1)
            .staggerTo(this.paper, 0, {opacity: 0}, 0);

        this.bgTimeLine02
            .to(this.bestPaper, 0.25, {delay: 2, x: 70, opacity: 1})
            .to(this.bestTitle, 0.3, {delay: 0.2, y: -10, opacity: 1})
    }

    public render(): JSX.Element 
    {
        return (
            <div className="study-animation-contianer">
                <div className="study-char">{this.studyChar()}</div>
                <div className="study-bg">{this.studyBg()}</div>
                <div className="best-title"
                    ref={ref => this.bestTitle = ref}>
                    <div className="crown"></div>
                    <p>Best</p>
                </div>
            </div>
        );
    }

    private studyChar = () => {
        return (
        <svg height="140" width="140">
            <g className="charArm"
                ref={ref => this.charArm = ref }>
                <polygon className="arm" points="63.4,89.6 57.4,89.6 53.4,80.1 55.4,70.6 61.4,70.6 "/>
            </g>
            <g className="charStick"
                ref={ref => this.charStick = ref }>
                <line className="stick" x1="37.9" y1="74.5" x2="13" y2="75.1"/>
                <line className="st1" x1="35.9" y1="74.4" x2="45.9" y2="75"/>
                <polyline className="st2" points="58.2,71.3 43,72.4 43.8,84.3 61.8,83.1"/>
            </g>
            <g key="body">
                <rect x="62.4" y="59.1" className="st3" width="56" height="10"/>
                <path className="st4" d="M90.4,102.1c17.1,0,31-13.6,31-30.4v-3.6h-62v3.6C59.4,88.5,73.3,102.1,90.4,102.1z"/>
                <path className="st5" d="M111.3,68.1c-1.7,15.2-14.8,27-30.8,27c-4.5,0-8.8-0.9-12.6-2.6c5.7,5.9,13.7,9.6,22.6,9.6
                    c17.1,0,31-13.6,31-30.4v-3.6H111.3z"/>
                <path className="st4" d="M90.4,22.1c-17.1,0-31,13.6-31,30.4v9.6h62v-9.6C121.4,35.7,107.6,22.1,90.4,22.1z"/>
                <path className="st5" d="M90.4,22.1c-1.7,0-3.4,0.1-5,0.4c14.7,2.3,26,14.9,26,30v9.6h10v-9.6C121.4,35.7,107.6,22.1,90.4,22.1z"/>
                <line className="st6" x1="100.4" y1="97.1" x2="100.4" y2="117.1"/>
                <line className="st6" x1="80.4" y1="97.1" x2="80.4" y2="117.1"/>
                <path className="st7" d="M90.4,22.1c-17.1,0-31,13.6-31,30.4v9.6h62v-9.6C121.4,35.7,107.6,22.1,90.4,22.1z"/>
                <path className="st7" d="M90.4,102.1c17.1,0,31-13.6,31-30.4v-3.6h-62v3.6C59.4,88.5,73.3,102.1,90.4,102.1z"/>
                <polyline className="st8" points="58.2,81.6 61.4,105.1 86.4,105.1 86.4,75.1 75.4,68.1 58.4,68.1 57.5,71.3 	"/>
                <path className="st8" d="M126.7,82.3l-4.2-14.2v0h-17l-11,7v30h26V89.8l2-0.2C125.6,88.8,127.5,85.5,126.7,82.3z"/>
                <circle className="st8" cx="108.4" cy="42.1" r="15"/>
                <g>
                    <path className="st5" d="M98.4,42.4h5c0-2.8,2.2-5,5-5v-5C102.9,32.4,98.4,36.9,98.4,42.4z"/>
                </g>
                <circle className="st8" cx="71.4" cy="42.1" r="15"/>
                <g>
                    <path className="st5" d="M61.4,42.4h5c0-2.8,2.2-5,5-5v-5C65.9,32.4,61.4,36.9,61.4,42.4z"/>
                </g>
                <rect x="100.4" y="86.1" className="st9" width="14" height="12"/>
                <line className="st7" x1="120.4" y1="98.1" x2="120.4" y2="82.8"/>
            </g>
        </svg>)
    }

    private studyBg = () => {
        let element: JSX.Element[] = [];
        for (let i=0; i<20; i++)
        {
            element.push(<rect className="paper"
                                key={i}
                                ref={ref => this.paper[i] = ref }
                                x="2" y="2" width="48" height="62"/>)
        }

        return (
        <svg className="study-bg" 
            height="72" width="200">
            {element}
            <rect className="paper"
                ref={ref => this.bestPaper = ref }
                x="2" y="2" width="48" height="62"/>
        </svg>)
    }
}