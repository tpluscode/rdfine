import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface SelfStorage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function SelfStorageMixin<Base extends Constructor>(Resource: Base): Constructor<SelfStorage> & Base {
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
