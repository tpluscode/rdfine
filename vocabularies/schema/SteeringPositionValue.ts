import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type SteeringPositionValue = NamedNode;

export default {
  LeftHandDriving: schema.LeftHandDriving,
  RightHandDriving: schema.RightHandDriving,
};
