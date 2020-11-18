import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface PetStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function PetStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PetStoreClass extends StoreMixin(Resource) implements PetStore {
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
