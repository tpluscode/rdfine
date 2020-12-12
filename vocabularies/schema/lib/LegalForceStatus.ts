import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  InForce: schema.InForce as NamedNode<'http://schema.org/InForce'>,
  NotInForce: schema.NotInForce as NamedNode<'http://schema.org/NotInForce'>,
  PartiallyInForce: schema.PartiallyInForce as NamedNode<'http://schema.org/PartiallyInForce'>,
};

export type LegalForceStatus =
  NamedNode<'http://schema.org/InForce'>
  | NamedNode<'http://schema.org/NotInForce'>
  | NamedNode<'http://schema.org/PartiallyInForce'>;
