import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  OnSitePickup: schema.OnSitePickup as NamedNode<'http://schema.org/OnSitePickup'>,
};

export type DeliveryMethod =
  NamedNode<'http://schema.org/OnSitePickup'>;
