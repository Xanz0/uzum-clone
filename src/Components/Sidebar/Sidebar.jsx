import React from 'react'

import home from '../images/Combined-Shape (1).svg';
import trend from '../images/Path-957-Copy.svg';
import cate from '../images/Combined-Shape (2).svg';
import library from '../images/Combined-Shape (3).svg';
import history from '../images/Combined-Shape (4).svg';
import watch from '../images/Shape (1).svg';
import star from '../images/Star-7.svg';
import like from '../images/Combined-Shape (5).svg';
import music from '../images/Combined-Shape (6).svg';
import games from '../images/Combined-Shape (7).svg';
import more from '../images/Path.svg';
import oval from '../images/Oval.png';

const Sidebar = () => {
  return (
    <section className="saidbar px-9 w-80">
          <ul className='flex flex-col gap-y-6'>
            <li className='flex items-center gap-x-3'><img src={home} /><span className="font-medium text-red-500">Home</span></li>
            <li className='flex items-center gap-x-3'><img src={trend} /><span className="font-medium text-slate-400">Trending</span></li>
            <li className='flex items-center gap-x-3'><img src={cate} /><span className="font-medium text-slate-400">Subscriptions</span></li>
            <li className='flex items-center gap-x-3'><img src={library} /><span className="font-medium text-slate-400">Library</span></li>
            <li className='flex items-center gap-x-3'><img src={history} /><span className="font-medium text-slate-400">History</span></li>
            <li className='flex items-center gap-x-3'><img src={watch} /><span className="font-medium text-slate-400">Watch later</span></li>
            <li className='flex items-center gap-x-3'><img src={star} /><span className="font-medium text-slate-400">Favourites</span></li>
            <li className='flex items-center gap-x-3'><img src={like} /><span className="font-medium text-slate-400">Liked videos</span></li>
            <li className='flex items-center gap-x-3'><img src={music} /><span className="font-medium text-slate-400">Music</span></li>
            <li className='flex items-center gap-x-3'><img src={games} /><span className="font-medium text-slate-400">Games</span></li>
            <li className='flex items-center gap-x-3'><img src={more} /><span className="font-medium text-slate-400">Show more</span></li>
          </ul>
          <div className='subcription mt-14'>
            <h1 className="font-bold mb-8 text-lg">Subscriptions</h1>
            <ul className='flex flex-col gap-y-6'>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Gussie Singleton</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Nora Francis</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Subscriptions</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Belle Briggs</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Eunice Cortez</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Emma Hanson</span></li>
            </ul>
          </div>
        </section>
  )
}

export default Sidebar