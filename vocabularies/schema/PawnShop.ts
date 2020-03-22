import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PawnShop)
  }
}
PawnShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PawnShop)
PawnShopMixin.Class = PawnShopImpl
