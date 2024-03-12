import {Card, BaseCard} from '../constants/card';

function createCardInstance(baseCard: BaseCard) {
    return new Card(baseCard);
}

export {createCardInstance};