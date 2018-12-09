import * as React from "react";
import classes from './Layout.scss';

export interface ILayoutProps  { 
   children: React.ReactNode
}

const layout = (props: ILayoutProps) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;