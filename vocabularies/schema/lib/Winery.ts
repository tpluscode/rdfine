import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface Winery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, rdfine.RdfResource<D> {
}

export function WineryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Winery & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WineryClass extends FoodEstablishmentMixin(Resource) {
  }
  return WineryClass as any
}

class WineryImpl extends WineryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Winery>) {
    super(arg, init)
    this.types.add(schema.Winery)
  }

  static readonly __mixins: Mixin[] = [WineryMixin, FoodEstablishmentMixin];
}
WineryMixin.appliesTo = schema.Winery
WineryMixin.Class = WineryImpl

export const fromPointer = createFactory<Winery>([FoodEstablishmentMixin, WineryMixin], { types: [schema.Winery] });
