import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  DamagedCondition: schema.DamagedCondition as NamedNode<'http://schema.org/DamagedCondition'>,
  NewCondition: schema.NewCondition as NamedNode<'http://schema.org/NewCondition'>,
  RefurbishedCondition: schema.RefurbishedCondition as NamedNode<'http://schema.org/RefurbishedCondition'>,
  UsedCondition: schema.UsedCondition as NamedNode<'http://schema.org/UsedCondition'>,
};

export type OfferItemCondition = 
  NamedNode<'http://schema.org/DamagedCondition'>
  | NamedNode<'http://schema.org/NewCondition'>
  | NamedNode<'http://schema.org/RefurbishedCondition'>
  | NamedNode<'http://schema.org/UsedCondition'>;
