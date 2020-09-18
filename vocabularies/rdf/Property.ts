import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '.';

export interface Property extends RdfResource {
}

export function PropertyMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [PropertyMixin];
}
PropertyMixin.appliesTo = rdf.Property
PropertyMixin.Class = PropertyImpl
