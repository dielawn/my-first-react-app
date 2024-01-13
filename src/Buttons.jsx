import './Buttons.css'

 function Button({ text, color, fontSize, bgColor, className, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px',
        backgroundColor: bgColor,
    }
    return (
        <button
            className={className} 
            style={buttonStyle}
            onClick={() => handleClick('https://www.theodinproject.com')}
        >
                {text}
        </button>
    )
}
const handleButtonClick = (url) => {
    window.open(url, '_blank')
}
Button.defaultProps = {
    text: "Click Me!",
    color:"blue",
    fontSize: 12,
    backgroundColor: "light-blue",
    className: 'button',
    handleClick: handleButtonClick,
}

export function Buttons() {
    
    return (
        <div>
            <Button handleClick={ () => handleButtonClick('https://www.google.com')} />
            <Button className="danger" text="Not this One!" color="black" fontSize={12} />
            <Button handleClick={() => handleButtonClick('https://www.example.com')} text="This should be ok!" color="aqua" bgColor="black" fontSize={20} />
        </div>
    )
}