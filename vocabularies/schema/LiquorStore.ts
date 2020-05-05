import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface LiquorStore extends Schema.Store, RdfResource {
}

export function LiquorStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiquorStoreClass extends StoreMixin(Resource) implements LiquorStore {
  }
  return LiquorStoreClass
}

class LiquorStoreImpl extends LiquorStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LiquorStore>) {
    super(arg, init)
    this.types.add(schema.LiquorStore)
  }

  static readonly __mixins: Mixin[] = [LiquorStoreMixin, StoreMixin];
}
LiquorStoreMixin.appliesTo = schema.LiquorStore
LiquorStoreMixin.Class = LiquorStoreImpl
