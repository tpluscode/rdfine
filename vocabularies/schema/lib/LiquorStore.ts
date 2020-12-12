import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface LiquorStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function LiquorStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LiquorStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class LiquorStoreClass extends StoreMixin(Resource) implements Partial<LiquorStore> {
  }
  return LiquorStoreClass
}

class LiquorStoreImpl extends LiquorStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LiquorStore>) {
    super(arg, init)
    this.types.add(schema.LiquorStore)
  }

  static readonly __mixins: Mixin[] = [LiquorStoreMixin, StoreMixin];
}
LiquorStoreMixin.appliesTo = schema.LiquorStore
LiquorStoreMixin.Class = LiquorStoreImpl
