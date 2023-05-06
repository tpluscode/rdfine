import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface AmpStory<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function AmpStoryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AmpStory> & RdfResourceCore> & Base {
  @namespace(schema)
  class AmpStoryClass extends CreativeWorkMixin(Resource) implements Partial<AmpStory> {
  }
  return AmpStoryClass
}

class AmpStoryImpl extends AmpStoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AmpStory>) {
    super(arg, init)
    this.types.add(schema.AmpStory)
  }

  static readonly __mixins: Mixin[] = [AmpStoryMixin, CreativeWorkMixin];
}
AmpStoryMixin.appliesTo = schema.AmpStory
AmpStoryMixin.Class = AmpStoryImpl

export const fromPointer = createFactory<AmpStory>([CreativeWorkMixin, AmpStoryMixin], { types: [schema.AmpStory] });
