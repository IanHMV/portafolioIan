import React from 'react'
import Card from '../Card/Card';
import type { CardProps } from '../Card/Card';

export type CardListProps ={
    className?:string;
    cardList:CardProps[];
}

const CardList = ({cardList, className}: CardListProps) => {
  return (
    <div className={`${className ?? ""}`}>
        {cardList.map((card, i)=>(
            <Card key={i} {...card}></Card>
        ))}
    </div>
  )
}

export default CardList