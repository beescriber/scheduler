import { TEST_PROP } from "./constants";

export const updateTestProp = ( data) => ({
    type: TEST_PROP,
    payload: data
});