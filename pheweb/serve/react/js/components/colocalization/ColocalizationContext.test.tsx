/* eslint-env jest */
import { createParameter , ColocalizationParameter } from "./ColocalizationContext";

test('get search results : trivial', () => {
    const parameter : ColocalizationParameter = createParameter("");
    expect(parameter).toBe(undefined)
});

test('get search results : trivial', () => {
    const parameter : ColocalizationParameter | undefined = createParameter("");
    expect(parameter).toBe(undefined)
});


