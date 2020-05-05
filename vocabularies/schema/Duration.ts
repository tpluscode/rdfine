import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { QuantityMixin } from './Quantity';

export interface Duration extends Schema.Quantity, RdfResource {
}

export function DurationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DurationClass extends QuantityMixin(Resource) implements Duration {
  }
  return DurationClass
}

class DurationImpl extends DurationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Duration>) {
    super(arg, init)
    this.types.add(schema.Duration)
  }

  static readonly __mixins: Mixin[] = [DurationMixin, QuantityMixin];
}
DurationMixin.appliesTo = schema.Duration
DurationMixin.Class = DurationImpl
