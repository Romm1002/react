const Button = ({redirection, download, content}) => {
    return ( 
        <a href={redirection} download={download} target="_blank" rel="noreferrer">{content}</a>
     );
}
 
export default Button;
