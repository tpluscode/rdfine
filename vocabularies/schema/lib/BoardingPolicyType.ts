import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  GroupBoardingPolicy: schema.GroupBoardingPolicy as NamedNode<'http://schema.org/GroupBoardingPolicy'>,
  ZoneBoardingPolicy: schema.ZoneBoardingPolicy as NamedNode<'http://schema.org/ZoneBoardingPolicy'>,
};

export type BoardingPolicyType =
  NamedNode<'http://schema.org/GroupBoardingPolicy'>
  | NamedNode<'http://schema.org/ZoneBoardingPolicy'>;
