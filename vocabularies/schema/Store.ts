import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface Store extends Schema.LocalBusiness, RdfResource {
}

export function StoreMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [StoreMixin, LocalBusinessMixin];
}
StoreMixin.appliesTo = schema.Store
StoreMixin.Class = StoreImpl
