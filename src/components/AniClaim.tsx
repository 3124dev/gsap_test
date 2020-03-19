import * as React from 'react';
import { TimelineMax } from 'gsap';

import './AniClaim.scss';

export class AniClaim extends React.Component
{
  private charTimeLine01 = new TimelineMax({repeat: -1});
  private charFront: any = null;
  private charSide: any = null;
  // private charArm: any = null;
  private hammer: any = null;

  public componentDidMount(): void 
  {
    this.charTimeLine01
      .set(this.hammer, {opacity: '0', rotation: '0', x:43, y:-10, transformOrigin:"left bottom"})
      .set(this.charSide, {display: "none"})
      .set(this.charFront, {delay: 2, display: "block"})
      .to(this.charFront, 0, {display: "none"})
      .to(this.charSide, 0, {display: "block"})
      .set(this.hammer, {opacity: '1', rotation: '+90'})
      .to(this.hammer, 0.2, {rotation: '-=180'})
      .to(this.hammer, 1, {rotation: '-=10'})
      .to(this.hammer, 0.1, {rotation: '+=180'})
      .to(this.hammer, 0.2, {rotation: '-=140'})
      .to(this.hammer, 0.1, {rotation: '+=150'})
      .to(this.hammer, 0.2, {rotation: '-=150'});
      // .set([this.charArm, this.hammer], {transformOrigin:"center top"})
      // .set(this.hammer, {opacity: '1', transformOrigin:"center center"})
      
  }
  public render(): JSX.Element
  {
    return (
      <div className="claim-animation-container">
        <div 
          ref={ref => this.charFront = ref}
          className="claim-char-front">
          {this.claimCharFront()}
        </div>
        <div 
          ref={ref => this.charSide = ref}
          className="claim-char-side">
          {this.claimCharSide()}
        </div>
        <div 
          ref={ref => this.hammer = ref}
          className="hammer">
          {this.hammerComp()}
        </div>
      </div>
    )
  }

  private claimCharFront = () => {
    return (
      <svg height="95" width="72" className="claim-char-front">
        <ellipse className="cls-1" cx="35.98" cy="90.88" rx="26.12" ry="4.12" />
        <line className="cls-2" x1="42.86" y1="72.86" x2="39.63" y2="90.14" />
        <line className="cls-2" x1="29.8" y1="72.86" x2="33.02" y2="90.14" />
        <rect className="cls-3" x="10.82" y="36.78" width="50.87" height="8.25" />
        <path className="cls-4" d="M36.26,2C20.45,2,7.52,14.65,7.52,30.18v8.94H65V30.18C65,14.51,52.21,2,36.26,2Z"/>
        <path className="cls-5" d="M36.26,2a27.4,27.4,0,0,0-4.68.41A28.34,28.34,0,0,1,55.64,30.18v8.94h9.21V30.18C65,14.51,52.21,2,36.26,2Z"/>
        <path className="cls-2" d="M36.26,2C20.45,2,7.52,14.65,7.52,30.18v8.94H65V30.18C65,14.51,52.21,2,36.26,2Z"/>
        <path className="cls-4" d="M36.26,74.73C52.07,74.73,65,62.08,65,46.54V44.62H7.52v1.92C7.52,62.08,20.45,74.73,36.26,74.73Z"/>
        <path className="cls-5" d="M55.5,44.62c-1.65,14-13.74,23.65-28.59,23.65a27.86,27.86,0,0,1-11.69-2.48,28.83,28.83,0,0,0,21,8.94C52.07,74.73,65,62.08,65,46.54V44.62Z"/>
        <path className="cls-2" d="M36.26,74.73C52.07,74.73,65,62.08,65,46.54V44.62H7.52v1.92C7.52,62.08,20.45,74.73,36.26,74.73Z"/>
        <circle className="cls-6" cx="52.89" cy="20.42" r="13.75" />
        <path className="cls-5" d="M43.68,20.7h4.68A4.64,4.64,0,0,1,53,16V11.35A9.45,9.45,0,0,0,43.68,20.7Z"/>
        <circle className="cls-6" cx="18.66" cy="20.42" r="13.75" />
        <path className="cls-5" d="M9.45,20.7h4.67A4.64,4.64,0,0,1,18.8,16V11.35A9.45,9.45,0,0,0,9.45,20.7Z"/>
        <line className="cls-2" x1="5.74" y1="46.13" x2="8.1" y2="70.68" />
        <line className="cls-2" x1="67.09" y1="46.13" x2="64.73" y2="70.68" />
      </svg>
    );
  }

  private claimCharSide = () => {
    return (
      <svg height="95" width="72" className="claim-char-side">
        <ellipse className="cls-1" cx="35.98" cy="90.88" rx="26.12" ry="4.12" />
        <line className="cls-2" x1="42.86" y1="72.86" x2="39.63" y2="90.14" />
        <line className="cls-2" x1="29.8" y1="72.86" x2="33.02" y2="90.14" />
        <rect className="cls-3" x="10.82" y="36.78" width="50.87" height="8.25" />
        <path className="cls-4" d="M36.26,2C52.07,2,65,14.65,65,30.18v8.94H7.52V30.18C7.52,14.51,20.31,2,36.26,2Z"/>
        <path className="cls-5" d="M36.26,2a27.29,27.29,0,0,1,4.67.41A28.34,28.34,0,0,0,16.87,30.18v8.94H7.66V30.18C7.52,14.51,20.31,2,36.26,2Z"/>
        <path className="cls-2" d="M36.26,2C20.45,2,7.52,14.65,7.52,30.18v8.94H65V30.18C65,14.51,52.21,2,36.26,2Z"/>
        <path className="cls-4" d="M36.26,74.73c-15.81,0-28.74-12.65-28.74-28.19V44.62H65v1.92C65,62.08,52.07,74.73,36.26,74.73Z"/>
        <path className="cls-5" d="M17,44.62c1.65,14,13.75,23.65,28.6,23.65a27.82,27.82,0,0,0,11.68-2.48,28.8,28.8,0,0,1-21,8.94c-15.81,0-28.74-12.65-28.74-28.19V44.62Z"/>
        <path className="cls-2" d="M36.26,74.73C52.07,74.73,65,62.08,65,46.54V44.62H7.52v1.92C7.52,62.08,20.45,74.73,36.26,74.73Z"/>
        <circle className="cls-6" cx="52.89" cy="20.42" r="13.75" />
        <path className="cls-5" d="M62.1,20.7H57.43A4.64,4.64,0,0,0,52.75,16V11.35A9.45,9.45,0,0,1,62.1,20.7Z"/>
        {/* <line className="cls-2" ref={ref => this.charArm = ref } x1="36" y1="44" x2="36" y2="68" /> */}
      </svg>
    );
  }

  private hammerComp = () => {
    return (
      <svg height="67" width="54">
        <path className="cls-1" d="M20.85,29.7,17.6,33,14.34,29.7,11.09,33,7.47,29.34,3.86,33s-1.81-9-1.81-14.83v-.36C2.05,12,3.86,1.5,3.86,1.5L7.47,5.12,11.09,1.5l3.25,3.25L17.6,1.5l3.25,3.25h12.3L36.4,1.5l3.26,3.25L42.91,1.5l3.62,3.62L50.14,1.5S52,12,52,17.77v.36C52,23.92,50.14,33,50.14,33l-3.61-3.62L42.91,33,39.66,29.7,36.4,33,33.15,29.7Z"/>
        <path className="cls-2" d="M24.47,29.34v34a2.17,2.17,0,0,0,2.17,2.17h.72a2.17,2.17,0,0,0,2.17-2.17v-34Z"/>
        <path className="cls-3" d="M44.36,23.56,41.1,20.3l-3.25,3.26L34.59,20.3H22.3l-3.25,3.26L15.79,20.3l-3.25,3.26L8.92,19.94,5.31,23.56,2.13,20.38A112.07,112.07,0,0,0,3.86,33l3.61-3.62L11.09,33l3.25-3.26L17.6,33l3.25-3.26h12.3L36.4,33l3.26-3.26L42.91,33l3.62-3.62L50.14,33s.93-4.64,1.45-9.39h0L48,19.94Z"/>
        <path className="cls-4" d="M18.32,6.23l-2,2a1.8,1.8,0,0,1-2.56,0l-2-2L9.48,8.56a1.8,1.8,0,0,1-2.56,0L5.81,7.46c-.16,1.07-.33,2.32-.5,3.65"/>
        <path className="cls-4" d="M46,8.56,43.63,6.23l-2,2a1.8,1.8,0,0,1-2.56,0l-2-2-2,2"/>
        <path className="cls-5" d="M20.85,29.7,17.6,33,14.34,29.7,11.09,33,7.47,29.34,3.86,33s-1.81-9-1.81-14.83v-.36C2.05,12,3.86,1.5,3.86,1.5L7.47,5.12,11.09,1.5l3.25,3.25L17.6,1.5l3.25,3.25h12.3L36.4,1.5l3.26,3.25L42.91,1.5l3.62,3.62L50.14,1.5S52,12,52,17.77v.36C52,23.92,50.14,33,50.14,33l-3.61-3.62L42.91,33,39.66,29.7,36.4,33,33.15,29.7Z"/>
        <rect className="cls-2" x="21.58" y="1.86" width="10.85" height="27.48" />
        <line className="cls-5" x1="1.68" y1="65.49" x2="25.18" y2="60.49"/>
      </svg>
    )
  }
}