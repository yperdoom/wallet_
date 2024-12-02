import { Express } from "express"

import { createBank, getBank, updateBank } from "../controllers/bankController";
import { createCard, getCard, updateCard } from "../controllers/cardController";
import { createMovement, getMovement, updateMovement } from "../controllers/movementController";

export default (api: Express) => {
    api.get('/bank', getBank);
    api.post('/bank', createBank);
    api.put('/bank', updateBank);
    
    api.get('/card', getCard);
    api.post('/card', createCard);
    api.put('/card', updateCard);
    
    api.get('/movement', getMovement);
    api.post('/movement', createMovement);
    api.put('/movement', updateMovement);

    return api
}
