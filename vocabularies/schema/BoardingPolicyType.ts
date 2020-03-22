import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type BoardingPolicyType = NamedNode;

export default {
  GroupBoardingPolicy: schema.GroupBoardingPolicy,
  ZoneBoardingPolicy: schema.ZoneBoardingPolicy,
};
