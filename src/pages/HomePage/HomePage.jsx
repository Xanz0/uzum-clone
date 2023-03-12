import React from 'react'
import cardImg from '../images/Cover.png';
import cardImg2 from '../images/Cover (1).png';
import titleImg from '../images/Oval.png';
import leftBtn from '../images/Left.svg';
import rightBtn from '../images/Right.svg';

const HomePage = () => {
  return (
    <section className="cards overflow-hidden">
          <div className='cards-title flex justify-between items-center mb-8 pr-20'>
            <div className='flex justify-between items-center gap-x-5'>
              <img src={titleImg} />
              <h1 className='text-2xl font-medium'>Dollie Blair</h1>
            </div>
            <div className='flex justify-between items-center gap-x-2'>
              <img src={leftBtn} />
              <img src={rightBtn} />
            </div>
          </div>
          <ul className='flex gap-x-10'>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
          </ul>

          <div className='cards-title flex justify-between items-center mt-8 mb-8 pr-20'>
            <h1 className='text-2xl font-medium'>Recommended</h1>
            <div className='flex justify-between items-center gap-x-2'>
              <img src={leftBtn} />
              <img src={rightBtn} />
            </div>
          </div>
          <ul className='flex gap-x-10 my-12'>
            <li className="relative">
              <img src={cardImg2} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">Dude You Re Getting A Telescope</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>34k views  ·  5 months ago</span>
                <span className='text-xs text-right text-slate-400'>Gussie French</span>
              </div>
            </li>
            <li className="relative">
              <img src={cardImg2} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">Dude You Re Getting A Telescope</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>34k views  ·  5 months ago</span>
                <span className='text-xs text-right text-slate-400'>Gussie French</span>
              </div>
            </li>
            <li className="relative">
              <img src={cardImg2} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">Dude You Re Getting A Telescope</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>34k views  ·  5 months ago</span>
                <span className='text-xs text-right text-slate-400'>Gussie French</span>
              </div>
            </li>


          </ul>

          <div className='cards-title flex justify-between items-center mb-8 pr-20'>
            <div className='flex justify-between items-center gap-x-5'>
              <img src={titleImg} />
              <h1 className='text-2xl font-medium'>Food & Drink</h1>
            </div>
            <div className='flex justify-between items-center gap-x-2'>
              <img src={leftBtn} />
              <img src={rightBtn} />
            </div>
          </div>
          <ul className='flex gap-x-10'>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-20 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-2">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
          </ul>
        </section>
  )
}

export default HomePage