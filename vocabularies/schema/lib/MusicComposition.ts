import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface MusicComposition<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  composer: Schema.Organization<D> | Schema.Person<D> | undefined;
  firstPerformance: Schema.Event<D> | undefined;
  includedComposition: Schema.MusicComposition<D> | undefined;
  iswcCode: string | undefined;
  lyricist: Schema.Person<D> | undefined;
  lyrics: Schema.CreativeWork<D> | undefined;
  musicalKey: string | undefined;
  musicArrangement: Schema.MusicComposition<D> | undefined;
  musicCompositionForm: string | undefined;
  recordedAs: Schema.MusicRecording<D> | undefined;
}

export function MusicCompositionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MusicComposition> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MusicCompositionClass extends CreativeWorkMixin(Resource) implements Partial<MusicComposition> {
    @rdfine.property.resource()
    composer: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    firstPerformance: Schema.Event | undefined;
    @rdfine.property.resource()
    includedComposition: Schema.MusicComposition | undefined;
    @rdfine.property.literal()
    iswcCode: string | undefined;
    @rdfine.property.resource()
    lyricist: Schema.Person | undefined;
    @rdfine.property.resource()
    lyrics: Schema.CreativeWork | undefined;
    @rdfine.property.literal()
    musicalKey: string | undefined;
    @rdfine.property.resource()
    musicArrangement: Schema.MusicComposition | undefined;
    @rdfine.property.literal()
    musicCompositionForm: string | undefined;
    @rdfine.property.resource()
    recordedAs: Schema.MusicRecording | undefined;
  }
  return MusicCompositionClass
}

class MusicCompositionImpl extends MusicCompositionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicComposition>) {
    super(arg, init)
    this.types.add(schema.MusicComposition)
  }

  static readonly __mixins: Mixin[] = [MusicCompositionMixin, CreativeWorkMixin];
}
MusicCompositionMixin.appliesTo = schema.MusicComposition
MusicCompositionMixin.Class = MusicCompositionImpl

export const fromPointer = createFactory<MusicComposition>([CreativeWorkMixin, MusicCompositionMixin], { types: [schema.MusicComposition] });
