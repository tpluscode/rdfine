import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  NonprofitANBI: schema.NonprofitANBI as NamedNode<'http://schema.org/NonprofitANBI'>,
  NonprofitSBBI: schema.NonprofitSBBI as NamedNode<'http://schema.org/NonprofitSBBI'>,
};

export type NLNonprofitType =
  NamedNode<'http://schema.org/NonprofitANBI'>
  | NamedNode<'http://schema.org/NonprofitSBBI'>;
