// react component: main design for all the pages!
import  ter1  from '../../assets/ternurines-pics/ter1.jpeg'
import  ter2  from '../../assets/ternurines-pics/ter2.jpeg'

export const MainDesign = () => {
    return (
        <div className="first-div">
            <header className="first-header">
                <img className="ter1" src={ter1} alt='Ternurin painting.'></img>
                <h1>Planning our date!</h1>
                <img className="ter2" src={ter2} alt='Ternurin with a custome.'></img>
            </header>
        </div>
    )
}