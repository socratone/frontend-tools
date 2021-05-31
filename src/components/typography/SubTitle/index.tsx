type SubTitleProps = {
  size?: number
  depth?: number
  weight?: number
  children: string
}
 
const SubTitle = ({ size = 16, depth = 1, weight = 600, children }: SubTitleProps) => {
  if (depth === 3) {
    return <h4 style={{ fontSize: size + 'px', fontWeight: weight }}>{children}</h4>
  } else if (depth === 2) {
    return (  
      <h3 style={{ fontSize: size + 'px', fontWeight: weight }}>{children}</h3>
    );
  } else {
    return (  
      <h2 style={{ fontSize: size + 'px', fontWeight: weight }}>{children}</h2>
    );
  }
}
 
export default SubTitle;