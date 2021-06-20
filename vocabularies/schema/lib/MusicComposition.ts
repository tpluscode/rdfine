import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicComposition<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
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

export function MusicCompositionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MusicComposition> & RdfResourceCore> & Base {
  @namespace(schema)
  class MusicCompositionClass extends CreativeWorkMixin(Resource) implements Partial<MusicComposition> {
    @property.resource()
    composer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    firstPerformance: Schema.Event | undefined;
    @property.resource()
    includedComposition: Schema.MusicComposition | undefined;
    @property.literal()
    iswcCode: string | undefined;
    @property.resource()
    lyricist: Schema.Person | undefined;
    @property.resource()
    lyrics: Schema.CreativeWork | undefined;
    @property.literal()
    musicalKey: string | undefined;
    @property.resource()
    musicArrangement: Schema.MusicComposition | undefined;
    @property.literal()
    musicCompositionForm: string | undefined;
    @property.resource()
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
