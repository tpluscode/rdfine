import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface HardwareStore<ID extends ResourceNode = ResourceNode> extends Schema.Store<ID>, RdfResource<ID> {
}

export function HardwareStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HardwareStoreClass extends StoreMixin(Resource) implements HardwareStore {
  }
  return HardwareStoreClass
}

class HardwareStoreImpl extends HardwareStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HardwareStore>) {
    super(arg, init)
    this.types.add(schema.HardwareStore)
  }

  static readonly __mixins: Mixin[] = [HardwareStoreMixin, StoreMixin];
}
HardwareStoreMixin.appliesTo = schema.HardwareStore
HardwareStoreMixin.Class = HardwareStoreImpl
