import { schema } from './namespace';

const values = {
  Female: schema.Female,
  Male: schema.Male,
};

export type GenderType = typeof values[keyof typeof values];

export default values;
