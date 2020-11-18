import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface MusicStore<ID extends ResourceNode = ResourceNode> extends Schema.Store<ID>, RdfResource<ID> {
}

export function MusicStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicStoreClass extends StoreMixin(Resource) implements MusicStore {
  }
  return MusicStoreClass
}

class MusicStoreImpl extends MusicStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicStore>) {
    super(arg, init)
    this.types.add(schema.MusicStore)
  }

  static readonly __mixins: Mixin[] = [MusicStoreMixin, StoreMixin];
}
MusicStoreMixin.appliesTo = schema.MusicStore
MusicStoreMixin.Class = MusicStoreImpl
