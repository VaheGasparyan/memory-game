import {defalutUrl, newCards, uuid} from "../img";
import {useState, useEffect} from "react";
import './cards.css'

function random(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

function Cards() {
    const [cards, setCards] = useState(random(newCards));
    const [disable, setDisable] = useState(false);
    const [point, setPoint] = useState(0);
    const [clickedItem, setClickedItem] = useState([]);

    const handleRestart = () => {
        const newCards = cards.map(item => {
            if(item.show && item.clicked) {
                item.show = false;
                item.clicked = false
            }

            return item;
        });


        setCards(random(newCards));
        setDisable(false);
        setPoint(0);
        setClickedItem([]);
    }

    const handleClick = (id) => {
        if(!disable) {
            const newCard = cards.map(item => {
                if(item.id === id && !item.clicked) {
                    item.show = !item.show;
                    item.clicked = true;
                    setClickedItem(clickedItem.concat(item));
                }
    
                return item;
            });
            
            setCards(newCard)
        }
    }

    useEffect(() => {
        if(clickedItem.length === 2) {
            setDisable(true);

            if(clickedItem[0].url === clickedItem[1].url) {
                setPoint(point + 1);
                setDisable(false);
                setClickedItem([]);
            } else {
                setTimeout(() => {
                    const newCards = cards.map(item => {
                        if(item.id === clickedItem[0].id || item.id === clickedItem[1].id ) {
                            item.show = !item.show;
                            item.clicked = false;
                        }

                        return item;
                    });

                    setCards(newCards);
                    setDisable(false);
                    setClickedItem([]);
                }, 1000)
            }
        }
    }, [cards])

    return (
        <>
            <div className='wrap'>
               <div className="btns">
                    <button onClick={handleRestart}>Restart</button>
               </div>

               <div className="point">
                <h1>Unit: {point}</h1>
               </div>

               <div className="game_card">
                    {cards.map((item, index) => {
                        return (
                            <div onClick={(e) => handleClick(e.target.id)} id={item.id} key={index} className="card">
                                <img id={item.id} src={item.show ? item.url : defalutUrl} alt={item.url} />
                            </div>
                        )
                    })}
               </div>
            </div>
        </>
    )
}

export default Cards