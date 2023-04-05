import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface GardenStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function GardenStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GardenStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class GardenStoreClass extends StoreMixin(Resource) implements Partial<GardenStore> {
  }
  return GardenStoreClass
}

class GardenStoreImpl extends GardenStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GardenStore>) {
    super(arg, init)
    this.types.add(schema.GardenStore)
  }

  static readonly __mixins: Mixin[] = [GardenStoreMixin, StoreMixin];
}
GardenStoreMixin.appliesTo = schema.GardenStore
GardenStoreMixin.Class = GardenStoreImpl

export const fromPointer = createFactory<GardenStore>([StoreMixin, GardenStoreMixin], { types: [schema.GardenStore] });
