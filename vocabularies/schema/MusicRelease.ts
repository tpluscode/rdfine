import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import MusicPlaylistMixin from './MusicPlaylist';

export interface MusicRelease extends Schema.MusicPlaylist, RdfResource {
  catalogNumber: string;
  creditedTo: Schema.Organization | Schema.Person;
  duration: Schema.Duration;
  musicReleaseFormat: Schema.MusicReleaseFormatType;
  recordLabel: Schema.Organization;
  releaseOf: Schema.MusicAlbum;
}

export default function MusicReleaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicReleaseClass extends MusicPlaylistMixin(Resource) implements MusicRelease {
    @property.literal()
    catalogNumber!: string;
    @property.resource()
    creditedTo!: Schema.Organization | Schema.Person;
    @property.resource()
    duration!: Schema.Duration;
    @property()
    musicReleaseFormat!: Schema.MusicReleaseFormatType;
    @property.resource()
    recordLabel!: Schema.Organization;
    @property.resource()
    releaseOf!: Schema.MusicAlbum;
  }
  return MusicReleaseClass
}

class MusicReleaseImpl extends MusicReleaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicRelease>) {
    super(arg, init)
    this.types.add(schema.MusicRelease)
  }
}
MusicReleaseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicRelease)
MusicReleaseMixin.Class = MusicReleaseImpl
