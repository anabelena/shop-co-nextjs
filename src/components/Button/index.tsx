type  ButtonProps = {
    type?:'transparent'|'black'; //tipos permitidos para type
    text:string; //texto que se mostrara en el boton
    onClick?:()=>void; //funcion para manejar evento click
}

const Button = ({ type = 'transparent', text, onClick }:ButtonProps) => {

    const baseStyles =
      'flex items-center justify-center rounded-[62px] font-bold text-sm cursor-pointer transition duration-300';
  
    const stylesByType = {
      transparent: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
      black: 'bg-black text-white hover:bg-white hover:text-black border border-black',
    };
  
    const responsiveStyles = 'h-[52px] w-full tablet:w-[218px]';
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${stylesByType[type]} ${responsiveStyles}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  