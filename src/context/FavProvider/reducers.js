export default function(state, action) {
  
    
    switch (action.type) {
        case 'ADD_FAV':
        const { fav } = action.payload;
        const isAlreadyAdded = state.favList.find(item => item.id === fav.id);

        if (isAlreadyAdded) {
          // Eğer veri zaten eklenmişse hata döndür
          return state;
        }

          const newList = [...state.favList, fav];
          return { ...state, favList: newList };

      case 'REMOVE_FAV':
        const { id } = action.payload;

        const updatedList = state.favList.filter(item => item.id !== id); 

      return { ...state, favList: updatedList };

      case 'ADD_APPLY' :

      const {app} = action.payload
      const isAlreadyAddeds = state.applyList.find(item => item.id === app.id);
      if (isAlreadyAddeds) {
        return state;
      }
      
      const newAppList = [...state.applyList,app];
      return {...state,applyList:newAppList}

    case 'REMOVE_APPLY':
    const {appid} = action.payload;
    const updatedLists = state.applyList.filter(item => item.id !== appid); 
    return {...state,applyList:updatedLists}
      default:
        return state;
    }
  }
  