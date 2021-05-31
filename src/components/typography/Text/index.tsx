type TextProps = {
  size: number
  children: string
}
 
const Text = ({ size, children }: TextProps) => {
  return (  
    <p style={{ fontSize: size + 'px' }}>{children}</p>
  );
}
 
export default Text;