import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';
import { StoreMixin } from './Store.js';

export interface AutoPartsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, Schema.Store<D>, rdfine.RdfResource<D> {
}

export function AutoPartsStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AutoPartsStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AutoPartsStoreClass extends StoreMixin(AutomotiveBusinessMixin(Resource)) implements Partial<AutoPartsStore> {
  }
  return AutoPartsStoreClass
}

class AutoPartsStoreImpl extends AutoPartsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoPartsStore>) {
    super(arg, init)
    this.types.add(schema.AutoPartsStore)
  }

  static readonly __mixins: Mixin[] = [AutoPartsStoreMixin, AutomotiveBusinessMixin, StoreMixin];
}
AutoPartsStoreMixin.appliesTo = schema.AutoPartsStore
AutoPartsStoreMixin.Class = AutoPartsStoreImpl

export const fromPointer = createFactory<AutoPartsStore>([StoreMixin, AutomotiveBusinessMixin, AutoPartsStoreMixin], { types: [schema.AutoPartsStore] });
