import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  ReimbursementCap: schema.ReimbursementCap as NamedNode<'http://schema.org/ReimbursementCap'>,
  Retail: schema.Retail as NamedNode<'http://schema.org/Retail'>,
  Wholesale: schema.Wholesale as NamedNode<'http://schema.org/Wholesale'>,
};

export type DrugCostCategory = 
  NamedNode<'http://schema.org/ReimbursementCap'>
  | NamedNode<'http://schema.org/Retail'>
  | NamedNode<'http://schema.org/Wholesale'>;
