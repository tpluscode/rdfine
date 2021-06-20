import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface Store<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function StoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Store> & RdfResourceCore> & Base {
  @namespace(schema)
  class StoreClass extends LocalBusinessMixin(Resource) implements Partial<Store> {
  }
  return StoreClass
}

class StoreImpl extends StoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Store>) {
    super(arg, init)
    this.types.add(schema.Store)
  }

  static readonly __mixins: Mixin[] = [StoreMixin, LocalBusinessMixin];
}
StoreMixin.appliesTo = schema.Store
StoreMixin.Class = StoreImpl

export const fromPointer = createFactory<Store>([LocalBusinessMixin, StoreMixin], { types: [schema.Store] });
