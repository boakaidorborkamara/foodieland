import React, { Children } from "react";

type PillsProp={
    children:React.ReactNode;
    className?:string
}

export function Pills({children, className}:PillsProp) {
  return (
    <div className={`${className} flex gap-5 py-3 px-6 rounded-full`}>
        {children}
    </div>
  );
}