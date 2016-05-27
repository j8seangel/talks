import {INIT, LOADING, DETAIL} from '../constants';
import axios from '../axios.jsx';

export function init() {
    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });

        axios.get('repositories')
          .then(function (response) {
            dispatch({
                type: INIT,
                payload:{
                    repositories: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
    };

}

export function getDetail(id) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});
        // $.get('https://api.github.com/repositories/' + id).then(function(data) {
        //     dispatch({
        //         type: DETAIL,
        //         payload: {
        //             detail: data
        //         }
        //     });
        //     dispatch({type: LOADING, payload: false});
        // });
    }
};
