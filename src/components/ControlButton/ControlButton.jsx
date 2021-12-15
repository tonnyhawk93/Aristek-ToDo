import './ControlButton.scss'
const ControlButton = ({image, cb}) => {
    return (
        <div className = "ControlButton" onClick={cb}>
            <img src={image} alt=""/>
        </div>
    )
}
export default ControlButton;