import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MusicPlaylistMixin } from './MusicPlaylist';

export interface MusicAlbum extends Schema.MusicPlaylist, RdfResource {
  albumProductionType: Schema.MusicAlbumProductionType | undefined;
  albumRelease: Schema.MusicRelease | undefined;
  albumReleaseType: Schema.MusicAlbumReleaseType | undefined;
  byArtist: Schema.MusicGroup | Schema.Person | undefined;
}

export function MusicAlbumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicAlbumClass extends MusicPlaylistMixin(Resource) implements MusicAlbum {
    @property()
    albumProductionType: Schema.MusicAlbumProductionType | undefined;
    @property.resource()
    albumRelease: Schema.MusicRelease | undefined;
    @property()
    albumReleaseType: Schema.MusicAlbumReleaseType | undefined;
    @property.resource()
    byArtist: Schema.MusicGroup | Schema.Person | undefined;
  }
  return MusicAlbumClass
}

class MusicAlbumImpl extends MusicAlbumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicAlbum>) {
    super(arg, init)
    this.types.add(schema.MusicAlbum)
  }

  static readonly __mixins: Mixin[] = [MusicAlbumMixin, MusicPlaylistMixin];
}
MusicAlbumMixin.appliesTo = schema.MusicAlbum
MusicAlbumMixin.Class = MusicAlbumImpl
