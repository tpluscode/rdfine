import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type OfferItemCondition = NamedNode;

export default {
  DamagedCondition: schema.DamagedCondition,
  NewCondition: schema.NewCondition,
  RefurbishedCondition: schema.RefurbishedCondition,
  UsedCondition: schema.UsedCondition,
};
