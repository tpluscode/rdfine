import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface PawnShop extends Schema.Store, RdfResource {
}

export default function PawnShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PawnShopClass extends StoreMixin(Resource) implements PawnShop {
  }
  return PawnShopClass
}

class PawnShopImpl extends PawnShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PawnShop>) {
    super(arg, init)
    this.types.add(schema.PawnShop)
  }
}
PawnShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PawnShop)
PawnShopMixin.Class = PawnShopImpl
