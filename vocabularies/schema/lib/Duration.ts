import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { QuantityMixin } from './Quantity.js';

export interface Duration<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Quantity<D>, rdfine.RdfResource<D> {
}

export function DurationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Duration & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DurationClass extends QuantityMixin(Resource) {
  }
  return DurationClass as any
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

export const fromPointer = createFactory<Duration>([QuantityMixin, DurationMixin], { types: [schema.Duration] });
