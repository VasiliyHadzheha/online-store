import { stat } from "fs"
import { act } from "react-dom/test-utils";
import { contentSortArray } from "../constants"

const defaultState = {
  filters: {
    byValue: {
      manufacturer: '',
      camerasNumber: 0,
      colors: '',
      isPopular: false,
    },
    byRange: {
      mobilesLeft: 0,
      releaseDate: 0
    },
    search: {
      searchBar: '',
      sort: contentSortArray[0]
    }
  }
}

export function reducer(state = defaultState, action: any) {
  const newState = JSON.parse(JSON.stringify(state));
  console.log(action, newState)

  switch (action.type) {

    case 'SEARCH_TEXT': {
      newState.filters.search.searchBar = action.payload
      return newState
    }
    case 'CHANGE_COLOR': {
      newState.filters.byValue.colors = action.payload
      return newState
    }
    case 'CAMERAS': {
      newState.filters.byValue.camerasNumber = action.payload
      return newState
    }
    case 'MANUFACTURER': {
      newState.filters.byValue.manufacturer = action.payload
      return newState
    }
    // case 'POPULAR_FLAG': {
    //   newState.filters.byValue.isPopular = action.payload
    //   return newState
    // }
    case 'RESET': {
      return defaultState
    }
    
    default: 
      return state
  }
}