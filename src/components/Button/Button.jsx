import "./Button.scss"

export const Button = ({open, setOpen, id}) => {

 const image = "/assets/icons/arrow.png";

 const className = ["image", open === id ? "rotate" : ""].join(" ");
 
 const toggle = (event) => {

    console.log(event)
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
