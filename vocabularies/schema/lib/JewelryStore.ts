import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface JewelryStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function JewelryStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JewelryStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class JewelryStoreClass extends StoreMixin(Resource) implements Partial<JewelryStore> {
  }
  return JewelryStoreClass
}

class JewelryStoreImpl extends JewelryStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JewelryStore>) {
    super(arg, init)
    this.types.add(schema.JewelryStore)
  }

  static readonly __mixins: Mixin[] = [JewelryStoreMixin, StoreMixin];
}
JewelryStoreMixin.appliesTo = schema.JewelryStore
JewelryStoreMixin.Class = JewelryStoreImpl

export const fromPointer = createFactory<JewelryStore>([StoreMixin, JewelryStoreMixin], { types: [schema.JewelryStore] });
