import * as React from "react";

// import { AniManual } from "./AniManual";
// import { LoadingAnalysis } from "./LoadingAnalysis";
// import { AniBug } from "./AniBug";
// import { AniVirus } from "./AniVirus";
// import { AniHold } from "./AniHold";
// import { AniStudy } from "./AniStudy";
import { AniClaim } from "./AniClaim";
import './Hello.scss';


export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> 
{   
    public render(): JSX.Element {
        return (
            <div className="test-container">
                <div className="top-container">
                    <div className="title">
                        <h1>청구</h1>
                        <h3>핸드폰으로 쉽게, 병원비 돌려받는 간편청구</h3>
                    </div>
                    <AniClaim />
                    <div className="input-container">
                        <input placeholder="감기"></input>
                        <p>청구할 내용을 입력해보세요</p>
                    </div>
                    
                    {/* <AniStudy /> */}
                    {/* <LoadingAnalysis />
                    <AniManual /> */}
                    {/* <AniHold />
                    <AniBug />
                    <AniVirus /> */}
                </div>
                <div className="bottom-container">
                    <button>간편청구 바로가기</button>
                </div>
            </div>
        )
    }
}