import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface BikeStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function BikeStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BikeStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class BikeStoreClass extends StoreMixin(Resource) implements Partial<BikeStore> {
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

export const fromPointer = createFactory<BikeStore>([StoreMixin, BikeStoreMixin], { types: [schema.BikeStore] });
