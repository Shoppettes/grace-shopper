/**
 * ACTION TYPES
 */
const SET_CHOSEN_CATEGORY = 'SET_CHOSEN_CATEGORY'
const CLEAR_CHOSEN_CATEGORY = 'CLEAR_CHOSEN_CATEGORY'

/**
 * INITIAL STATE
 */
const defaultChosenCategory = {}

/**
 * ACTION CREATORS
 */
export const setChosenCategory = chosenCategory => ({type: SET_CHOSEN_CATEGORY, chosenCategory})
export const clearChosenCategory = () => ({type: CLEAR_CHOSEN_CATEGORY})

/**
 * REDUCER
 */
export default function (state = defaultChosenCategory, action) {
  switch (action.type) {
    case SET_CHOSEN_CATEGORY:
      return action.chosenCategory
    case CLEAR_CHOSEN_CATEGORY:
      return null
    default:
      return state
  }
}
