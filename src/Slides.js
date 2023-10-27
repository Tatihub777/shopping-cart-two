import './App.css';
import { useState } from 'react';
import { SlidesData } from './SlidesData';


function Slides() {
    
    const [add, setAdd] = useState(0);

    const {id, product, image, price} = SlidesData[add];

    const nextItem = () => {
        setAdd((add => {
          add ++;
          if(add >SlidesData.length - 1) {
            add = 0;
          }
          return add;
        }))
        }
        
        const prevItem = () => {
          setAdd((add => {
            add --;
            if(add<0) {
              return SlidesData.length -1
            }
            return add;
          }))
        }

return(
        <div>
            <div>
                <h2>Frequently bought together</h2>
            </div>

            <div className='container'>
        
        <div className='slides_container'>
          
          <div className='slidesItems'>
            <div className='slidesItems__style' key={id}>
                
            <img src={image} alt='slides slideshow' width='400px'/>
          <h3>{price} £</h3>
          <p>{product}</p>
          </div>
          <div className='slides__btn'>
            <button onClick={prevItem} className='btn'>PREV</button>
            <button onClick={nextItem} className='btn'>NEXT</button>
          </div>
          </div>

        </div>
      </div>
    </div>
)
}

export default Slides;