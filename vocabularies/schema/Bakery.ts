import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface Bakery extends Schema.FoodEstablishment, RdfResource {
}

export function BakeryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BakeryClass extends FoodEstablishmentMixin(Resource) implements Bakery {
  }
  return BakeryClass
}

class BakeryImpl extends BakeryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Bakery>) {
    super(arg, init)
    this.types.add(schema.Bakery)
  }

  static readonly __mixins: Mixin[] = [BakeryMixin, FoodEstablishmentMixin];
}
BakeryMixin.appliesTo = schema.Bakery
BakeryMixin.Class = BakeryImpl
