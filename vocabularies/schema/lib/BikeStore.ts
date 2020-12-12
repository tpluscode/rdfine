import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface BikeStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function BikeStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BikeStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class BikeStoreClass extends StoreMixin(Resource) implements Partial<BikeStore> {
  }
  return BikeStoreClass
}

class BikeStoreImpl extends BikeStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BikeStore>) {
    super(arg, init)
    this.types.add(schema.BikeStore)
  }

  static readonly __mixins: Mixin[] = [BikeStoreMixin, StoreMixin];
}
BikeStoreMixin.appliesTo = schema.BikeStore
BikeStoreMixin.Class = BikeStoreImpl
