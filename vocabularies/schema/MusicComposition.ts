import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicComposition extends Schema.CreativeWork, RdfResource {
  composer: Schema.Organization | Schema.Person;
  firstPerformance: Schema.Event;
  includedComposition: Schema.MusicComposition;
  iswcCode: string;
  lyricist: Schema.Person;
  lyrics: Schema.CreativeWork;
  musicalKey: string;
  musicArrangement: Schema.MusicComposition;
  musicCompositionForm: string;
  recordedAs: Schema.MusicRecording;
}

export function MusicCompositionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicCompositionClass extends CreativeWorkMixin(Resource) implements MusicComposition {
    @property.resource()
    composer!: Schema.Organization | Schema.Person;
    @property.resource()
    firstPerformance!: Schema.Event;
    @property.resource()
    includedComposition!: Schema.MusicComposition;
    @property.literal()
    iswcCode!: string;
    @property.resource()
    lyricist!: Schema.Person;
    @property.resource()
    lyrics!: Schema.CreativeWork;
    @property.literal()
    musicalKey!: string;
    @property.resource()
    musicArrangement!: Schema.MusicComposition;
    @property.literal()
    musicCompositionForm!: string;
    @property.resource()
    recordedAs!: Schema.MusicRecording;
  }
  return MusicCompositionClass
}

class MusicCompositionImpl extends MusicCompositionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicComposition>) {
    super(arg, init)
    this.types.add(schema.MusicComposition)
  }
}
MusicCompositionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicComposition)
MusicCompositionMixin.Class = MusicCompositionImpl
