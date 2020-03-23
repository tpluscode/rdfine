import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PerformingGroupMixin from './PerformingGroup';

export interface MusicGroup extends Schema.PerformingGroup, RdfResource {
  album: Schema.MusicAlbum;
  albums: Schema.MusicAlbum;
  genre: string | string;
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
    genre!: string | string;
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MusicGroup)
  }
}
MusicGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicGroup)
MusicGroupMixin.Class = MusicGroupImpl
