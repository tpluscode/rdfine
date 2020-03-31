import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface Store extends Schema.LocalBusiness, RdfResource {
}

export default function StoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class StoreClass extends LocalBusinessMixin(Resource) implements Store {
  }
  return StoreClass
}

class StoreImpl extends StoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Store>) {
    super(arg, init)
    this.types.add(schema.Store)
  }
}
StoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Store)
StoreMixin.Class = StoreImpl
