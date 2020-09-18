import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicRecording extends Schema.CreativeWork, RdfResource {
  byArtist: Schema.MusicGroup | Schema.Person | undefined;
  duration: Schema.Duration | undefined;
  inAlbum: Schema.MusicAlbum | undefined;
  inPlaylist: Schema.MusicPlaylist | undefined;
  isrcCode: string | undefined;
  recordingOf: Schema.MusicComposition | undefined;
}

export function MusicRecordingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicRecordingClass extends CreativeWorkMixin(Resource) implements MusicRecording {
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
