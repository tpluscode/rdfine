import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  LeftHandDriving: schema.LeftHandDriving as NamedNode<'http://schema.org/LeftHandDriving'>,
  RightHandDriving: schema.RightHandDriving as NamedNode<'http://schema.org/RightHandDriving'>,
};

export type SteeringPositionValue = 
  NamedNode<'http://schema.org/LeftHandDriving'>
  | NamedNode<'http://schema.org/RightHandDriving'>;
