type  ButtonProps = {
    type?:'transparent'|'black'|'white';  //tipos permitidos para type
    text:string;          //button TEXT
    onClick?:()=>void;    //Function to handle OnClick event
    fullWidth?:boolean;   //fullwidth by default is false
    fullHeight?:boolean;  //fullheight by default is false
}

const Button = ({ type = 'transparent', text, onClick, fullWidth,fullHeight }:ButtonProps) => {

    const baseStyles =
      'flex items-center justify-center rounded-[62px] font-bold text-sm cursor-pointer transition duration-300';
  
    const stylesByType = {
      transparent: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
      white: 'bg-white text-black hover:bg-black hover:text-white border border-white',
      black: 'bg-black text-white hover:bg-white hover:text-black border border-black',
      
    };

    const widthStyles = fullWidth ? 'w-full' : 'tablet:w-[218px]'
  
    const heightStyles = fullHeight ? 'h-full' : 'h-[52px]'
  
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${stylesByType[type]} ${widthStyles} ${heightStyles}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  