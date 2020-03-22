import * as React from 'react';
import { TimelineMax, Power1 } from 'gsap';

import './AniClaim.scss';

export class AniClaim extends React.Component
{
  private charTimeLine = new TimelineMax({repeat: -1});
  private receiptTimeLine = new TimelineMax({repeat: -1});
  private coinTimeLine01 = new TimelineMax({repeat: -1});
  private coinTimeLine02 = new TimelineMax({repeat: -1});
  private charFront: any = null;
  private charSide: any = null;
  // private charArm: any = null;
  private hammer: any = null;
  private receipt: any = null;
  private coin: any = null;

  public componentDidMount(): void 
  {
    this.charTimeLine
      .set(this.hammer, {opacity: '0', rotation: '0', x:43, y:-10, transformOrigin:"left bottom"})
      .set(this.charSide, {display: "none"})
      .set(this.charFront, {delay: 2, display: "inline-block"}) // 2
      .to(this.charFront, 0, {display: "none"})
      .to(this.charSide, 0, {display: "inline-block"})
      .set(this.hammer, {opacity: '1', rotation: '+90'})
      .to(this.hammer, 0.2, {rotation: '-=180'})  // 2.2
      .to(this.hammer, 0.6, {rotation: '-=10'})   // 2.8
      .to(this.hammer, 0.1, {rotation: '+=140'})  // 2.9
      .to(this.hammer, 0.2, {rotation: '-=120'})  // 3.1
      .to(this.hammer, 0.1, {rotation: '+=150'})  // 3.2
      .to(this.hammer, 0.2, {rotation: '+=0'})   // 3.4
      .to(this.charFront, 0, {display: "inline-block"})
      .to([this.charSide, this.hammer], 0, {display: "none"})
      .to(this.charSide, 2, {}); // 5.4
    
    this.receiptTimeLine
      .set(this.receipt, {x: 0, y: -10, opacity: 0, transformOrigin:"center center"})
      .to(this.receipt, 0.8, { opacity: 1, y: '+=20'})
      .to(this.receipt, 0.1, { y: '+=5'})
      .to(this.receipt, 0.1, {})  // 1
      .to(this.receipt, 0.1, { y: '+=5'})
      .to(this.receipt, 0.2, {})
      .to(this.receipt, 0.2, { y: '+=10'}) // 1.5
      .to(this.receipt, 1.4, {}) // 2.9
      .to(this.receipt, 0.2, { y: '+=15'}) // 3.1
      .to(this.receipt, 0.1, {}) // 3.2
      .to(this.receipt, 0.2, { y: '+=30'}) // 3.4
      .to(this.receipt, 0, { opacity: 0 })
      .to(this.receipt, 2, { }); // 5.4

    this.coinTimeLine01
      .set(this.coin, { opacity: 0, x: -50, y: 30})
      .to(this.coin, 0.5, { delay: 3.1, ease: Power1.easeOut, opacity: 1, y: '-=150'}) // 3.6
      .to(this.coin, 0.5, { ease: Power1.easeIn, y: '+=150', opacity: 0 }) // 4.1
      .to(this.coin, 1.3, {}) // 5.4
    
    this.coinTimeLine02
      .set(this.coin, { transformOrigin:"center center" })
      .to(this.coin, 1, { delay: 3.1, ease: Power1.easeOut, rotationY: '+=900', x:'+=100'}) // 4.1
      .to(this.coin, 1.3, {}) // 5.4
    
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
        <div
          ref={ref => this.receipt = ref}
          className="receipt">
          {this.receiptComp()}
        </div>
        <div
          ref={ref => this.coin = ref}
          className="coin">
          {this.coinComp()}
        </div>
      </div>
    )
  }

  private claimCharFront = () => {
    return (
      <svg height="95" width="72" >
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
      <svg height="95" width="72" >
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

  private receiptComp = () => {
    return (
      <svg height="75" width="67">
        <rect className="cls-1" x="1.5" y="1.5" width="64" height="72" />
        <rect className="cls-2" x="9.14" y="29.59" width="49.45" height="2.91" />
        <rect className="cls-2" x="9.14" y="41.23" width="49.45" height="2.91" />
        <rect className="cls-2" x="9.14" y="52.86" width="49.45" height="2.91" />
        <path className="cls-3" d="M14.2,10.8h6.33v1.66H18.45a4.25,4.25,0,0,0,.06.71A3.32,3.32,0,0,0,21,15.62l-1.1,1.6a4.67,4.67,0,0,1-2.5-2.14,4.26,4.26,0,0,1-2.73,2.38l-1-1.62a3.39,3.39,0,0,0,2.6-2.63,6.32,6.32,0,0,0,.06-.75H14.2Zm1.25,10.82V17.87H17.5V20h6.29v1.6Zm6.14-3V10.09h2.07v8.57Z" />
        <path className="cls-3" d="M35,16.36a30.47,30.47,0,0,1-5.37.4c-.35,0-.73,0-1.06,0V11h5.29v1.57H30.59v2.56h.28a22.23,22.23,0,0,0,3.94-.28ZM29.7,21.58V17.67h2.07V20h6.05v1.59Zm7.87-6.77v3.75H35.5V10.09h2.07v3.05H39v1.67Z" />
        <path className="cls-3" d="M48.78,19.36a5.94,5.94,0,0,1-2.48-2.79,5.56,5.56,0,0,1-2.59,3.05L42.45,18c2.1-1.07,2.8-2.88,2.8-5.5V11h2.06V12.5c0,2.57.67,4.31,2.66,5.25Zm1.87,2.52V15.75H48.7V14h1.95V10.09h2.07V21.88Z" />
      </svg>
    );
  }

  private coinComp = () => {
    return (
      <svg height="32" width="32">
        <path className="cls-1" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z" />
        <circle className="cls-2" cx="16" cy="16" r="13.38" />
        <path className="cls-1" d="M23.56,12.8h-.43l.43-1.6a1.06,1.06,0,1,0-2-.58l-.58,2h-3.2L17,10.47a1.08,1.08,0,0,0-2,0l-.73,2.18h-3.2l-.58-2a1.06,1.06,0,1,0-2,.58l.43,1.6H8.44A1.15,1.15,0,0,0,7.27,14a1.08,1.08,0,0,0,1.17,1.17h1l1.9,7.12a1.54,1.54,0,0,0,1,.88,1.08,1.08,0,0,0,1-.73l2.47-7.27h.44l2.47,7.27a1.1,1.1,0,0,0,1,.73h0a1.06,1.06,0,0,0,1-.88l1.89-7.12h1A1.15,1.15,0,0,0,24.87,14,1.27,1.27,0,0,0,23.56,12.8ZM12.51,18,11.64,15h1.89Zm7,0-1-3.06h1.89Z" />
      </svg>
    )
  }
}