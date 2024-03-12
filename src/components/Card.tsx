import React, {useState} from 'react';
import { Card as CardClass } from '../constants/card';
import './Card.scss';
import classNames from 'classnames';

function Card(props: { card: CardClass, selected?: boolean, onSelect?: (card: CardClass) => void, onDeselect?: (card: CardClass) => void, }) {
    const { card, card: {baseCard} , selected = false, onSelect, onDeselect } = props;
    const [ hoverPos, setHoverPos ] = useState<{x: number, y: number}|undefined>(undefined);
    const [ dragPos, setDragPos ] = useState<{x: number, y: number}|undefined>(undefined);
    const [ mouseDown, setMouseDown ] = useState<boolean>(false);
    const [ isDragging, setIsDragging ] = useState<boolean>(false);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const targetRect = e.currentTarget.getBoundingClientRect();
        setHoverPos({
            x: e.clientX - targetRect.left,
            y: e.clientY - targetRect.top,
        });
    }

    function onMouseLeave() {
        setHoverPos(undefined);
    }

    function onDragStart(e: React.DragEvent<HTMLDivElement>) {
        e.dataTransfer.setData("text/json", JSON.stringify(card));
        e.dataTransfer.setDragImage(new Image(), 0, 0);
        setIsDragging(true);
    }

    function onDragEnd() {
        setIsDragging(false);
    }

    function onClick() {
        if (!selected && typeof onSelect === 'function') {
            onSelect(card);
        } else if (selected && typeof onDeselect === 'function') {
            onDeselect(card);
        }
    }

    return (
        <div className="container">
            <div className={
                classNames({
                    'card': true,
                    [`card-color-${baseCard.color}`]: true,
                })}
                style={{
                    transform: `scale(${selected ? 1.15 : mouseDown ? 1.07 : hoverPos ? 1.1 : 1.0}) rotate3d(${isDragging ? 0 : ((hoverPos?.y ?? 100) - 100) / 100}, ${isDragging ? 0 : -((hoverPos?.x ?? 75) - 75) / 75}, 0, 20deg)`,
                    boxShadow: `${-10 * ((hoverPos?.x ?? 75) - 75) / 75}px ${-10 * ((hoverPos?.y ?? 100) - 100) / 100}px ${hoverPos ? 10 : 0}px rgba(0, 0, 0, 0.25)`,
                    zIndex: hoverPos ? 3 : selected ? 2 : 1,
                }}
                draggable={true}
                onClick={onClick}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            >
                <div className="top-left">
                    <div className="suit-rank">
                        <span>{baseCard.rank}</span>
                        <span>{baseCard.suit}</span>
                    </div>
                </div>

                <div className="bottom-right">
                    <div className="suit-rank">
                        <span>{baseCard.suit}</span>
                        <span>{baseCard.rank}</span>
                    </div>
                </div>

                <div className="pattern">
                    <span>{baseCard.pattern}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;
