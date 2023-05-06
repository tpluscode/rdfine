import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface Brewery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function BreweryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Brewery> & RdfResourceCore> & Base {
  @namespace(schema)
  class BreweryClass extends FoodEstablishmentMixin(Resource) implements Partial<Brewery> {
  }
  return BreweryClass
}

class BreweryImpl extends BreweryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Brewery>) {
    super(arg, init)
    this.types.add(schema.Brewery)
  }

  static readonly __mixins: Mixin[] = [BreweryMixin, FoodEstablishmentMixin];
}
BreweryMixin.appliesTo = schema.Brewery
BreweryMixin.Class = BreweryImpl

export const fromPointer = createFactory<Brewery>([FoodEstablishmentMixin, BreweryMixin], { types: [schema.Brewery] });
