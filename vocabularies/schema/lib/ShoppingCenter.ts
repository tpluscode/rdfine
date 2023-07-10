import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface ShoppingCenter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function ShoppingCenterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ShoppingCenter & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ShoppingCenterClass extends LocalBusinessMixin(Resource) {
  }
  return ShoppingCenterClass as any
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

export const fromPointer = createFactory<ShoppingCenter>([LocalBusinessMixin, ShoppingCenterMixin], { types: [schema.ShoppingCenter] });
