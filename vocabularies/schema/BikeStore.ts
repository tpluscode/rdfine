import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface BikeStore extends Schema.Store, RdfResource {
}

export function BikeStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BikeStoreClass extends StoreMixin(Resource) implements BikeStore {
  }
  return BikeStoreClass
}

class BikeStoreImpl extends BikeStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BikeStore>) {
    super(arg, init)
    this.types.add(schema.BikeStore)
  }

  static readonly __mixins: Mixin[] = [BikeStoreMixin, StoreMixin];
}
BikeStoreMixin.appliesTo = schema.BikeStore
BikeStoreMixin.Class = BikeStoreImpl
