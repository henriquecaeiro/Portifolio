import React,{useState} from "react"
import "./Portifolio.css"
import Menu from "./Menu"

const Portifolio = () =>{
    const [items,setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updateItems = Menu.filter((curElem)=>{
            return curElem.category === categoryItem;
        })

        setItems(updateItems);
    }



    return(
        <div className="work container section" id="portifolio">
            <h2 className="section__title">Projetos Recentes</h2>
            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Tudo</span>
                <span className="work__item" onClick={() => filterItem("Back-End")}>Back-End</span>
                <span className="work__item" onClick={() => filterItem("Front-End")}>Front-End</span>
                <span className="work__item" onClick={() => filterItem("Em andamento")}>Em andamento</span>
            </div>

            <div className="work__container grid">
                {items.map((elem)=>{
                    const {id, image, title, category, link} = elem;

                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href={link} target="_blank" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portifolio