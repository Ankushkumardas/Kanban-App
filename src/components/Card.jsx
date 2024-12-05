import React from 'react'
import Dragindicator from './Dragindicator'
import { motion } from "framer-motion"
function Card({ title, id, column, handleDragStart }) {
    return (
        //draggable is an html property that lest you to 
        <>
            <Dragindicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="p-3 border rounded cursor-grab border-neutral-700 bg-neutral-800 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};

export default Card
