import {virtualStore} from "~/static/virtualStore";

const cardWithNum = (foodList  , cardList) => {
  let res = [];
  for( let i = 0 ; i < foodList.length ; i++) {
    for( let j =0 ; j < cardList.length ; j++) {
      if( foodList[i].id === cardList[j].id) {
        foodList[i].num = cardList[j].num;
        res.push(foodList[i]);
      }
    }
  }
  return res;
}

export const state = () => {
  return {
      foods: virtualStore,
      filtered: [],
      card: [],
      totalPrice: 0
  }
}

export const getters = {
  getFoods( state ){
    return state.foods;
  },

  getFiltered ( state) {
    return state.filtered;
  },

  getCard ( state ) {
    return state.card;
  },

  getTotal( state) {
    return state.totalPrice;
  }
}


export const mutations = {
  SET_FOODS ( state , payload) {
      state.filtered = [...state.foods.filter( (item) =>{
        if(payload.toLowerCase() === 'all') {
          return state.foods;
        } else {
          return item.category.toLowerCase() === payload.toLowerCase();
        }

      })]

  },

  ADD_CARD ( state , food) {

    if(state.card.length !== 0) {
      let found = false ;
      for( let i =0 ; i < state.card.length; i++) {

        if(state.card[i].id === food.id && state.card[i].num !==food.num) {
          state.card[i].num = food.num;
        }

        if(state.card[i].id === food.id) {
          found = true;
          break
        }
      }

      if(!found) {
        state.card.push(food);
      }

    } else {
      state.card.push(food);
    }
  },

  TOTAL_PRICE (state , payload) {
    state.totalPrice = 0 ;
    let temp = [];
    if(state.card.length !== 0) {
      temp = cardWithNum( state.foods , state.card );
      for(let i = 0 ; i < temp.length ; i++) {
        state.totalPrice += (temp[i].price * temp[i].num);
      }
    }
  },

  REMOVE_ITEM(state , food) {
    let itemIndex;
    for( let i =0 ; i < state.card.length ; i ++){
      if(state.card[i].id === food.id) {
        itemIndex = i;
      }
    }
    state.card.splice(itemIndex , 1);
    food.num = 1;
    let temp2 = cardWithNum(state.foods , state.card);
    state.totalPrice = 0;
    for(let i=0; i < temp2.length; i++) {
      state.totalPrice += (temp2[i].price * temp2[i].num);
    }
  },
}

export const actions = {

}
