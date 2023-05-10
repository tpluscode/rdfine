import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { MediaObjectMixin } from './MediaObject.js';

export interface AmpStory<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.MediaObject<D>, rdfine.RdfResource<D> {
}

export function AmpStoryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AmpStory> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AmpStoryClass extends MediaObjectMixin(CreativeWorkMixin(Resource)) implements Partial<AmpStory> {
  }
  return AmpStoryClass
}

class AmpStoryImpl extends AmpStoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AmpStory>) {
    super(arg, init)
    this.types.add(schema.AmpStory)
  }

  static readonly __mixins: Mixin[] = [AmpStoryMixin, CreativeWorkMixin, MediaObjectMixin];
}
AmpStoryMixin.appliesTo = schema.AmpStory
AmpStoryMixin.Class = AmpStoryImpl

export const fromPointer = createFactory<AmpStory>([MediaObjectMixin, CreativeWorkMixin, AmpStoryMixin], { types: [schema.AmpStory] });
