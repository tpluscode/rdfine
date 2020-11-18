import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface ComputerStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function ComputerStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComputerStoreClass extends StoreMixin(Resource) implements ComputerStore {
  }
  return ComputerStoreClass
}

class ComputerStoreImpl extends ComputerStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComputerStore>) {
    super(arg, init)
    this.types.add(schema.ComputerStore)
  }

  static readonly __mixins: Mixin[] = [ComputerStoreMixin, StoreMixin];
}
ComputerStoreMixin.appliesTo = schema.ComputerStore
ComputerStoreMixin.Class = ComputerStoreImpl
