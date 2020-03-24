import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface Winery extends Schema.FoodEstablishment, RdfResource {
}

export default function WineryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WineryClass extends FoodEstablishmentMixin(Resource) implements Winery {
  }
  return WineryClass
}

class WineryImpl extends WineryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Winery>) {
    super(arg)
    this.types.add(schema.Winery)
    initializeProperties(this, init)
  }
}
WineryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Winery)
WineryMixin.Class = WineryImpl
