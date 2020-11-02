import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  FDAcategoryA: schema.FDAcategoryA as NamedNode<'http://schema.org/FDAcategoryA'>,
  FDAcategoryB: schema.FDAcategoryB as NamedNode<'http://schema.org/FDAcategoryB'>,
  FDAcategoryC: schema.FDAcategoryC as NamedNode<'http://schema.org/FDAcategoryC'>,
  FDAcategoryD: schema.FDAcategoryD as NamedNode<'http://schema.org/FDAcategoryD'>,
  FDAcategoryX: schema.FDAcategoryX as NamedNode<'http://schema.org/FDAcategoryX'>,
  FDAnotEvaluated: schema.FDAnotEvaluated as NamedNode<'http://schema.org/FDAnotEvaluated'>,
};

export type DrugPregnancyCategory =
  NamedNode<'http://schema.org/FDAcategoryA'>
  | NamedNode<'http://schema.org/FDAcategoryB'>
  | NamedNode<'http://schema.org/FDAcategoryC'>
  | NamedNode<'http://schema.org/FDAcategoryD'>
  | NamedNode<'http://schema.org/FDAcategoryX'>
  | NamedNode<'http://schema.org/FDAnotEvaluated'>;
