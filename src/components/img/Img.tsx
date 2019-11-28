import * as React from 'react';

import './Img.scss';
export class Img extends React.Component<Img.IProps>
{
    public render(): JSX.Element
    {
        return (
            <div className={"img " + ((this.props.className)? this.props.className : "")}>
                <div className={this.props.bodocImg}></div>
            </div>
        )
    }
}

export namespace Img
{
    export interface IProps
    {
        bodocImg: string,
        className?: string
    }
}