import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface OutletStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function OutletStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OutletStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class OutletStoreClass extends StoreMixin(Resource) implements Partial<OutletStore> {
  }
  return OutletStoreClass
}

class OutletStoreImpl extends OutletStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OutletStore>) {
    super(arg, init)
    this.types.add(schema.OutletStore)
  }

  static readonly __mixins: Mixin[] = [OutletStoreMixin, StoreMixin];
}
OutletStoreMixin.appliesTo = schema.OutletStore
OutletStoreMixin.Class = OutletStoreImpl

export const fromPointer = createFactory<OutletStore>([StoreMixin, OutletStoreMixin], { types: [schema.OutletStore] });
