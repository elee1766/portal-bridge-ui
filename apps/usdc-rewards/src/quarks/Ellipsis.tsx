export type EllipsisProps = {
  width: number;
  height: number;
  marginTop: number;
  marginLeft: number;
  children?: JSX.Element[] | JSX.Element
};


export const Ellipsis = ({
  width, height, marginTop, marginLeft, children
}:EllipsisProps) => {
  return (<div style={{
    width,
    height,
    borderColor: "rgb(255, 255, 255, 0.25)",
    borderWidth: "0.5px",
    borderStyle: "solid",
    borderRadius: "50%",
    marginTop: marginTop,
    marginLeft: marginLeft,
    }}>
    {children}
  </div>)
}

export default Ellipsis
