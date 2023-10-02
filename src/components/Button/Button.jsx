import classNames from "classnames";
import "./Button.scss"

export const Button = ({open, setOpen, id}) => {

 const image = "/assets/icons/arrow.png";

 const className = classNames({
    "image": true,
    "rotate": open === id,
 });
 
 const toggle = () => {

    if (id === open) {
        setOpen();
    } else {
        setOpen(id);
    }

 }

    return (
    <div className="arrow">
        <img src={image} alt="arrow" className={className} onClick={() => toggle()} />
    </div>
  )
}
