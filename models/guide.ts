export default {
    namespace: 'guide',
    state: {
        loading: false,
    },
    effects: {
        *getGuide(
            _: any,
            { call, put, take }: { call: any; put: any, take: any },
        ) {
            try {
                yield put({
                    type: 'setLoading',
                    payload: true,
                });
            } catch (error) {
                console.error(error);
            }
        },
    },
    reducers: {
        setLoading(state: any, { payload }: { payload: any }) {
            return {
                ...state,
                loading: payload
            };
        },
    },
};
