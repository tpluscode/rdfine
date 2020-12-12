import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface ShoppingCenter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function ShoppingCenterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ShoppingCenter> & RdfResourceCore> & Base {
  @namespace(schema)
  class ShoppingCenterClass extends LocalBusinessMixin(Resource) implements Partial<ShoppingCenter> {
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

export const fromPointer = createFactory<ShoppingCenter>([LocalBusinessMixin, ShoppingCenterMixin], { types: [schema.ShoppingCenter] });
