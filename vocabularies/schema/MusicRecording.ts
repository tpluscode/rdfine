import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MusicRecording extends Schema.CreativeWork, RdfResource {
  byArtist: Schema.MusicGroup | Schema.Person;
  duration: Schema.Duration;
  inAlbum: Schema.MusicAlbum;
  inPlaylist: Schema.MusicPlaylist;
  isrcCode: string;
  recordingOf: Schema.MusicComposition;
}

export default function MusicRecordingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicRecordingClass extends CreativeWorkMixin(Resource) implements MusicRecording {
    @property.resource()
    byArtist!: Schema.MusicGroup | Schema.Person;
    @property.resource()
    duration!: Schema.Duration;
    @property.resource()
    inAlbum!: Schema.MusicAlbum;
    @property.resource()
    inPlaylist!: Schema.MusicPlaylist;
    @property.literal()
    isrcCode!: string;
    @property.resource()
    recordingOf!: Schema.MusicComposition;
  }
  return MusicRecordingClass
}

class MusicRecordingImpl extends MusicRecordingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicRecording>) {
    super(arg, init)
    this.types.add(schema.MusicRecording)
  }
}
MusicRecordingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicRecording)
MusicRecordingMixin.Class = MusicRecordingImpl
