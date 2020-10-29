export default {
    namespace: 'user',
    state: {
        name: '龙泽球',
        loading: false
    },
    effects: {
    },
    reducers: {
        setName(state: any, { payload }: { payload: any }) {
            return {
                ...state,
                name: 'lzq',
            };
        },
    },
};
