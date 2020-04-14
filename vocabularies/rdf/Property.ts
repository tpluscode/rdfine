import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdf from '.';

export interface Property extends RdfResource {
}

export default function PropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class PropertyClass extends Resource implements Property {
  }
  return PropertyClass
}

class PropertyImpl extends PropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Property>) {
    super(arg, init)
    this.types.add(rdf.Property)
  }
}
PropertyMixin.shouldApply = (r: RdfResource) => r.types.has(rdf.Property)
PropertyMixin.Class = PropertyImpl
