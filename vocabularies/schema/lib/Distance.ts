import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { QuantityMixin } from './Quantity.js';

export interface Distance<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Quantity<D>, RdfResource<D> {
}

export function DistanceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Distance> & RdfResourceCore> & Base {
  @namespace(schema)
  class DistanceClass extends QuantityMixin(Resource) implements Partial<Distance> {
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

export const fromPointer = createFactory<Distance>([QuantityMixin, DistanceMixin], { types: [schema.Distance] });
