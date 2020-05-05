import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { QuantityMixin } from './Quantity';

export interface Distance extends Schema.Quantity, RdfResource {
}

export function DistanceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DistanceClass extends QuantityMixin(Resource) implements Distance {
  }
  return DistanceClass
}

class DistanceImpl extends DistanceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Distance>) {
    super(arg, init)
    this.types.add(schema.Distance)
  }

  static readonly __mixins: Mixin[] = [DistanceMixin, QuantityMixin];
}
DistanceMixin.appliesTo = schema.Distance
DistanceMixin.Class = DistanceImpl
