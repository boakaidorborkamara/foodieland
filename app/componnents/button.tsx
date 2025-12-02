import React from "react"

type ButtonProp={
    children?:React.ReactNode,
    className?:string
}

export function Button ({children, className}:ButtonProp) {
  return (
    {children}
  );
}