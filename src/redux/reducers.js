import { TEST_PROP } from "./constants";

const testProp = (state = null, action) => {
    switch (action.type) {
        case TEST_PROP: 
            return action.payload;
        default:
            return state;
    }
}

const allreducers = {
    testProp
}

export default allreducers;