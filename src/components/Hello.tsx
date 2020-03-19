import * as React from "react";

// import { AniManual } from "./AniManual";
// import { LoadingAnalysis } from "./LoadingAnalysis";
import { AniBug } from "./AniBug";
import { AniVirus } from "./AniVirus";
import { AniHold } from "./AniHold";
import { AniStudy } from "./AniStudy";
import { AniClaim } from "./AniClaim";


export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> 
{   
    public render(): JSX.Element {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <AniClaim />
                <AniStudy />
                {/* <LoadingAnalysis />
                <AniManual /> */}
                <AniHold />
                <AniBug />
                <AniVirus />
            </div>
        )
    }
}