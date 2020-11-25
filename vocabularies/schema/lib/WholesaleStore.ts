import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface WholesaleStore<ID extends ResourceNode = ResourceNode> extends Schema.Store<ID>, RdfResource<ID> {
}

export function WholesaleStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WholesaleStoreClass extends StoreMixin(Resource) implements WholesaleStore {
  }
  return WholesaleStoreClass
}

class WholesaleStoreImpl extends WholesaleStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WholesaleStore>) {
    super(arg, init)
    this.types.add(schema.WholesaleStore)
  }

  static readonly __mixins: Mixin[] = [WholesaleStoreMixin, StoreMixin];
}
WholesaleStoreMixin.appliesTo = schema.WholesaleStore
WholesaleStoreMixin.Class = WholesaleStoreImpl
