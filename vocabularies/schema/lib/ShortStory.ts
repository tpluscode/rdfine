import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface ShortStory<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function ShortStoryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ShortStory & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ShortStoryClass extends CreativeWorkMixin(Resource) {
  }
  return ShortStoryClass as any
}

class ShortStoryImpl extends ShortStoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShortStory>) {
    super(arg, init)
    this.types.add(schema.ShortStory)
  }

  static readonly __mixins: Mixin[] = [ShortStoryMixin, CreativeWorkMixin];
}
ShortStoryMixin.appliesTo = schema.ShortStory
ShortStoryMixin.Class = ShortStoryImpl

export const fromPointer = createFactory<ShortStory>([CreativeWorkMixin, ShortStoryMixin], { types: [schema.ShortStory] });
