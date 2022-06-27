import { schema } from './namespace';

const values = {
  GroupBoardingPolicy: schema.GroupBoardingPolicy,
  ZoneBoardingPolicy: schema.ZoneBoardingPolicy,
};

export type BoardingPolicyType = typeof values[keyof typeof values];

export default values;
