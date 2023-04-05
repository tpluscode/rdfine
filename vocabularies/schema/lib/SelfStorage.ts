import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface SelfStorage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function SelfStorageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SelfStorage> & RdfResourceCore> & Base {
  @namespace(schema)
  class SelfStorageClass extends LocalBusinessMixin(Resource) implements Partial<SelfStorage> {
  }
  return SelfStorageClass
}

class SelfStorageImpl extends SelfStorageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SelfStorage>) {
    super(arg, init)
    this.types.add(schema.SelfStorage)
  }

  static readonly __mixins: Mixin[] = [SelfStorageMixin, LocalBusinessMixin];
}
SelfStorageMixin.appliesTo = schema.SelfStorage
SelfStorageMixin.Class = SelfStorageImpl

export const fromPointer = createFactory<SelfStorage>([LocalBusinessMixin, SelfStorageMixin], { types: [schema.SelfStorage] });
