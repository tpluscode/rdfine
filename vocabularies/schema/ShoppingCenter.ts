import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface ShoppingCenter extends Schema.LocalBusiness, RdfResource {
}

export function ShoppingCenterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ShoppingCenterClass extends LocalBusinessMixin(Resource) implements ShoppingCenter {
  }
  return ShoppingCenterClass
}

class ShoppingCenterImpl extends ShoppingCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShoppingCenter>) {
    super(arg, init)
    this.types.add(schema.ShoppingCenter)
  }

  static readonly __mixins: Mixin[] = [ShoppingCenterMixin, LocalBusinessMixin];
}
ShoppingCenterMixin.appliesTo = schema.ShoppingCenter
ShoppingCenterMixin.Class = ShoppingCenterImpl
