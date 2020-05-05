import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface Winery extends Schema.FoodEstablishment, RdfResource {
}

export function WineryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WineryClass extends FoodEstablishmentMixin(Resource) implements Winery {
  }
  return WineryClass
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
