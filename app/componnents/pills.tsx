import React, { Children } from "react";

type PillsProp={
    children:React.ReactNode;
    className?:string
}

export function Pills({children, className}:PillsProp) {
  return (
    <div className={`${className} flex gap-5`}>
        {children}
    </div>
  );
}