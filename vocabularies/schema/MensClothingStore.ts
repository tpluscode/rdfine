import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface MensClothingStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function MensClothingStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MensClothingStoreClass extends StoreMixin(Resource) implements MensClothingStore {
  }
  return MensClothingStoreClass
}

class MensClothingStoreImpl extends MensClothingStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MensClothingStore>) {
    super(arg, init)
    this.types.add(schema.MensClothingStore)
  }

  static readonly __mixins: Mixin[] = [MensClothingStoreMixin, StoreMixin];
}
MensClothingStoreMixin.appliesTo = schema.MensClothingStore
MensClothingStoreMixin.Class = MensClothingStoreImpl
