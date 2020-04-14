import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import PerformingGroupMixin from './PerformingGroup';

export interface MusicGroup extends Schema.PerformingGroup, RdfResource {
  album: Schema.MusicAlbum;
  albums: Schema.MusicAlbum;
  genre: string;
  genreTerm: RDF.NamedNode;
  musicGroupMember: Schema.Person;
  track: Schema.ItemList | Schema.MusicRecording;
  tracks: Schema.MusicRecording;
}

export default function MusicGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicGroupClass extends PerformingGroupMixin(Resource) implements MusicGroup {
    @property.resource()
    album!: Schema.MusicAlbum;
    @property.resource()
    albums!: Schema.MusicAlbum;
    @property.literal()
    genre!: string;
    @property({ path: schema.genre })
    genreTerm!: RDF.NamedNode;
    @property.resource()
    musicGroupMember!: Schema.Person;
    @property.resource()
    track!: Schema.ItemList | Schema.MusicRecording;
    @property.resource()
    tracks!: Schema.MusicRecording;
  }
  return MusicGroupClass
}

class MusicGroupImpl extends MusicGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicGroup>) {
    super(arg, init)
    this.types.add(schema.MusicGroup)
  }
}
MusicGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicGroup)
MusicGroupMixin.Class = MusicGroupImpl
