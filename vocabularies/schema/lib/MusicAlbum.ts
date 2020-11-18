import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MusicPlaylistMixin } from './MusicPlaylist';

export interface MusicAlbum<ID extends ResourceNode = ResourceNode> extends Schema.MusicPlaylist<ID>, RdfResource<ID> {
  albumProductionType: Schema.MusicAlbumProductionType | undefined;
  albumRelease: Schema.MusicRelease<SiblingNode<ID>> | undefined;
  albumReleaseType: Schema.MusicAlbumReleaseType | undefined;
  byArtist: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
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
