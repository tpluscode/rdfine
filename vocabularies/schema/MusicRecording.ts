import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MusicRecording)
  }
}
MusicRecordingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicRecording)
MusicRecordingMixin.Class = MusicRecordingImpl
