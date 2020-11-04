import * as userService from '../services/user';

export default {
    namespace: 'user',
    state: {
        name: '龙泽球',
        loading: false,
        pwd: ''
    },
    effects: {
        *getUserName(
            { payload }: { payload: any },
            { call, put }: { call: any; put: any },
        ) {
            try {
                const response = yield call(userService.getUser);
                yield put({
                    type: 'setName',
                    payload: response,
                });
            } catch (error) {
                console.error(error);
            }
        },
    },
    reducers: {
        setName(state: any, { payload }: { payload: any }) {
            const { name, pwd } = payload;
            return {
                ...state,
                name,
                pwd,
            };
        },
    },
};
