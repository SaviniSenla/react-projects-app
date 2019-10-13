export const createProject = (project) => {
    return (dispatch, getState,{getFirestore}) => {
        const  firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'Savini',
            authorLastName : 'hemachandra',
            authorID : '12345',
            timestamp:'12'
        }).then(() => {dispatch({type: 'CREATE_PROJECT'})}).catch((err) => {dispatch({type: 'CREATE_PROJECT_ERROR'},err)})

    }

};