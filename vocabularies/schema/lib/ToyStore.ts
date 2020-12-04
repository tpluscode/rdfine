import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface ToyStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function ToyStoreMixin<Base extends Constructor>(Resource: Base): Constructor<ToyStore> & Base {
  @namespace(schema)
  class ToyStoreClass extends StoreMixin(Resource) implements ToyStore {
  }
  return ToyStoreClass
}

class ToyStoreImpl extends ToyStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ToyStore>) {
    super(arg, init)
    this.types.add(schema.ToyStore)
  }

  static readonly __mixins: Mixin[] = [ToyStoreMixin, StoreMixin];
}
ToyStoreMixin.appliesTo = schema.ToyStore
ToyStoreMixin.Class = ToyStoreImpl
