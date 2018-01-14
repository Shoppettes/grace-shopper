/**
 * ACTION TYPES
 */
const SET_CHOSEN_CATEGORY = 'SET_CHOSEN_CATEGORY'

/**
 * INITIAL STATE
 */
const defaultChosenCategory = {}

/**
 * ACTION CREATORS
 */
export const setChosenCategory = chosenCategory => ({type: SET_CHOSEN_CATEGORY, chosenCategory})

/**
 * REDUCER
 */
export default function (state = defaultChosenCategory, action) {
  switch (action.type) {
    case SET_CHOSEN_CATEGORY:
      return action.chosenCategory
    default:
      return state
  }
}
