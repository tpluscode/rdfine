import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface MusicRecording<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  byArtist: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  duration: Schema.Duration<D> | undefined;
  inAlbum: Schema.MusicAlbum<D> | undefined;
  inPlaylist: Schema.MusicPlaylist<D> | undefined;
  isrcCode: string | undefined;
  recordingOf: Schema.MusicComposition<D> | undefined;
}

export function MusicRecordingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MusicRecording> & RdfResourceCore> & Base {
  @namespace(schema)
  class MusicRecordingClass extends CreativeWorkMixin(Resource) implements Partial<MusicRecording> {
    @property.resource()
    byArtist: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    duration: Schema.Duration | undefined;
    @property.resource()
    inAlbum: Schema.MusicAlbum | undefined;
    @property.resource()
    inPlaylist: Schema.MusicPlaylist | undefined;
    @property.literal()
    isrcCode: string | undefined;
    @property.resource()
    recordingOf: Schema.MusicComposition | undefined;
  }
  return MusicRecordingClass
}

class MusicRecordingImpl extends MusicRecordingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicRecording>) {
    super(arg, init)
    this.types.add(schema.MusicRecording)
  }

  static readonly __mixins: Mixin[] = [MusicRecordingMixin, CreativeWorkMixin];
}
MusicRecordingMixin.appliesTo = schema.MusicRecording
MusicRecordingMixin.Class = MusicRecordingImpl

export const fromPointer = createFactory<MusicRecording>([CreativeWorkMixin, MusicRecordingMixin], { types: [schema.MusicRecording] });
