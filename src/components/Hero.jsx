import { useSelector } from "react-redux"


const Hero = () => {
    
    const { hero } = useSelector (state => state.hero);
    
    return (
        <div>
            <h1>Hero</h1>

            <p>Nombre: {hero.firstName}</p>
            <p>Email: {hero.email}</p>
        </div>
    )
}

export default Hero;