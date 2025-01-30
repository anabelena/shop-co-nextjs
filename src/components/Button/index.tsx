type  ButtonProps = {
    type?:'transparent'|'black'|'white'|'rounded'; 
    color?:string;  
    text:string;         
    onClick?:()=>void;    
    fullWidth?:boolean;   
    fullHeight?:boolean; 
}

const Button = ({ type = 'transparent', color , text, onClick, fullWidth,fullHeight }:ButtonProps) => {
    
    const baseStyles =
      'flex items-center justify-center rounded-[62px] font-bold text-sm cursor-pointer transition duration-300';
  
    const stylesByType = {
      transparent: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
      white: 'bg-white text-black hover:bg-black hover:text-white border border-white',
      black: 'bg-black text-white hover:bg-white hover:text-black border border-black',
      rounded:'rounded-full'
    };

    const widthStyles = fullWidth ? 'w-full' : 'tablet:w-[218px]'
  
    const heightStyles = fullHeight ? 'h-full' : 'h-[52px]'


    return (
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className= {type != 'rounded' ? `${baseStyles} ${stylesByType[type]} ${widthStyles} ${heightStyles}` : `${stylesByType[type]}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  