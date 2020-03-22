import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import MusicPlaylistMixin from './MusicPlaylist';

export interface MusicAlbum extends Schema.MusicPlaylist, RdfResource {
  albumProductionType: Schema.MusicAlbumProductionType;
  albumRelease: Schema.MusicRelease;
  albumReleaseType: Schema.MusicAlbumReleaseType;
  byArtist: Schema.MusicGroup | Schema.Person;
}

export default function MusicAlbumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicAlbumClass extends MusicPlaylistMixin(Resource) implements MusicAlbum {
    @property()
    albumProductionType!: Schema.MusicAlbumProductionType;
    @property.resource()
    albumRelease!: Schema.MusicRelease;
    @property()
    albumReleaseType!: Schema.MusicAlbumReleaseType;
    @property.resource()
    byArtist!: Schema.MusicGroup | Schema.Person;
  }
  return MusicAlbumClass
}

class MusicAlbumImpl extends MusicAlbumMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MusicAlbum)
  }
}
MusicAlbumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicAlbum)
MusicAlbumMixin.Class = MusicAlbumImpl