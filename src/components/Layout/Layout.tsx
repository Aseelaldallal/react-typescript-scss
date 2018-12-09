import * as React from "react";

export interface ILayoutProps  { 
   children: React.ReactNode
}

const layout = (props: ILayoutProps) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
);

export default layout;