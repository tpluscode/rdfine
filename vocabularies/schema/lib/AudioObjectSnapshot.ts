import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudioObjectMixin } from './AudioObject';

export interface AudioObjectSnapshot<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AudioObject<D>, RdfResource<D> {
}

export function AudioObjectSnapshotMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AudioObjectSnapshot> & RdfResourceCore> & Base {
  @namespace(schema)
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
