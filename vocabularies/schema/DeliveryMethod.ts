import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type DeliveryMethod = NamedNode;

export default {
  OnSitePickup: schema.OnSitePickup,
};
