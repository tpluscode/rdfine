import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface PetStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function PetStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PetStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class PetStoreClass extends StoreMixin(Resource) implements Partial<PetStore> {
  }
  return PetStoreClass
}

class PetStoreImpl extends PetStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PetStore>) {
    super(arg, init)
    this.types.add(schema.PetStore)
  }

  static readonly __mixins: Mixin[] = [PetStoreMixin, StoreMixin];
}
PetStoreMixin.appliesTo = schema.PetStore
PetStoreMixin.Class = PetStoreImpl

export const fromPointer = createFactory<PetStore>([StoreMixin, PetStoreMixin], { types: [schema.PetStore] });
