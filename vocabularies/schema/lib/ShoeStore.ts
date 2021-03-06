import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface ShoeStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function ShoeStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ShoeStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class ShoeStoreClass extends StoreMixin(Resource) implements Partial<ShoeStore> {
  }
  return ShoeStoreClass
}

class ShoeStoreImpl extends ShoeStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShoeStore>) {
    super(arg, init)
    this.types.add(schema.ShoeStore)
  }

  static readonly __mixins: Mixin[] = [ShoeStoreMixin, StoreMixin];
}
ShoeStoreMixin.appliesTo = schema.ShoeStore
ShoeStoreMixin.Class = ShoeStoreImpl

export const fromPointer = createFactory<ShoeStore>([StoreMixin, ShoeStoreMixin], { types: [schema.ShoeStore] });
