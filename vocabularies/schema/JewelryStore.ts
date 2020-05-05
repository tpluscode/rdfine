import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface JewelryStore extends Schema.Store, RdfResource {
}

export function JewelryStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class JewelryStoreClass extends StoreMixin(Resource) implements JewelryStore {
  }
  return JewelryStoreClass
}

class JewelryStoreImpl extends JewelryStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JewelryStore>) {
    super(arg, init)
    this.types.add(schema.JewelryStore)
  }

  static readonly __mixins: Mixin[] = [JewelryStoreMixin, StoreMixin];
}
JewelryStoreMixin.appliesTo = schema.JewelryStore
JewelryStoreMixin.Class = JewelryStoreImpl
