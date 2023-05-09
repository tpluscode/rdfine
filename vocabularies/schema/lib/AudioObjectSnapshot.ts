import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AudioObjectMixin } from './AudioObject.js';

export interface AudioObjectSnapshot<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AudioObject<D>, rdfine.RdfResource<D> {
}

export function AudioObjectSnapshotMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AudioObjectSnapshot> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AudioObjectSnapshotClass extends AudioObjectMixin(Resource) implements Partial<AudioObjectSnapshot> {
  }
  return AudioObjectSnapshotClass
}

class AudioObjectSnapshotImpl extends AudioObjectSnapshotMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AudioObjectSnapshot>) {
    super(arg, init)
    this.types.add(schema.AudioObjectSnapshot)
  }

  static readonly __mixins: Mixin[] = [AudioObjectSnapshotMixin, AudioObjectMixin];
}
AudioObjectSnapshotMixin.appliesTo = schema.AudioObjectSnapshot
AudioObjectSnapshotMixin.Class = AudioObjectSnapshotImpl

export const fromPointer = createFactory<AudioObjectSnapshot>([AudioObjectMixin, AudioObjectSnapshotMixin], { types: [schema.AudioObjectSnapshot] });
