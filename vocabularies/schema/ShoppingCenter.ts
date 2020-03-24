import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface ShoppingCenter extends Schema.LocalBusiness, RdfResource {
}

export default function ShoppingCenterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ShoppingCenterClass extends LocalBusinessMixin(Resource) implements ShoppingCenter {
  }
  return ShoppingCenterClass
}

class ShoppingCenterImpl extends ShoppingCenterMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ShoppingCenter)
  }
}
ShoppingCenterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ShoppingCenter)
ShoppingCenterMixin.Class = ShoppingCenterImpl
