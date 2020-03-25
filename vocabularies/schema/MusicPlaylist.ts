import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<MusicPlaylist>) {
    super(arg)
    this.types.add(schema.MusicPlaylist)
    initializeProperties<MusicPlaylist>(this, init)
  }
}
MusicPlaylistMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicPlaylist)
MusicPlaylistMixin.Class = MusicPlaylistImpl
