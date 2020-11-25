import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface SelfStorage<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
}

export function SelfStorageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SelfStorageClass extends LocalBusinessMixin(Resource) implements SelfStorage {
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
