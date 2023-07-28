import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface Distillery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, rdfine.RdfResource<D> {
}

export function DistilleryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Distillery & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DistilleryClass extends FoodEstablishmentMixin(Resource) {
  }
  return DistilleryClass as any
}

class DistilleryImpl extends DistilleryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Distillery>) {
    super(arg, init)
    this.types.add(schema.Distillery)
  }

  static readonly __mixins: Mixin[] = [DistilleryMixin, FoodEstablishmentMixin];
}
DistilleryMixin.appliesTo = schema.Distillery
DistilleryMixin.Class = DistilleryImpl

export const fromPointer = createFactory<Distillery>([FoodEstablishmentMixin, DistilleryMixin], { types: [schema.Distillery] });
