/**
 * Déclaration du state initial
 */
const initialState = {
    posts: [],
    events: []
}

/**
 * 
 * @param {*} state => objet
 * @param {*} action => object
 */

 
function handleContent(state = initialState, action){
        let nextState //Déclaration de la variable qui représente la modification du state initial
        switch (action.type){
            
            case 'UPDATE_CONTENT':
            if(state.event != action.value.events || state.posts != action.value.posts){
                if(state.posts != action.value.posts){

                    nextState = {
                        ...state,
                        posts: action.value.posts
                    }
                }
                if(state.event != action.value.events){

                    nextState = {
                        ...state,
                        events: action.value.events
                    }
                }
            }
            return nextState || state

            default:
                return state // Si pas de changement détecté, on retourn le state initial
        }
}

export default handleContent