import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MusicPlaylist extends Schema.CreativeWork, RdfResource {
  numTracks: number;
  track: Schema.ItemList | Schema.MusicRecording;
  tracks: Schema.MusicRecording;
}

export default function MusicPlaylistMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicPlaylistClass extends CreativeWorkMixin(Resource) implements MusicPlaylist {
    @property.literal({ type: Number })
    numTracks!: number;
    @property.resource()
    track!: Schema.ItemList | Schema.MusicRecording;
    @property.resource()
    tracks!: Schema.MusicRecording;
  }
  return MusicPlaylistClass
}

class MusicPlaylistImpl extends MusicPlaylistMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MusicPlaylist)
  }
}
MusicPlaylistMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicPlaylist)
MusicPlaylistMixin.Class = MusicPlaylistImpl
