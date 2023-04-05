import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface Bakery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function BakeryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Bakery> & RdfResourceCore> & Base {
  @namespace(schema)
  class BakeryClass extends FoodEstablishmentMixin(Resource) implements Partial<Bakery> {
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

export const fromPointer = createFactory<Bakery>([FoodEstablishmentMixin, BakeryMixin], { types: [schema.Bakery] });
