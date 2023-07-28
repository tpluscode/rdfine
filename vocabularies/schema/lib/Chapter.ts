import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Chapter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
}

export function ChapterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Chapter & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ChapterClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    pageEnd: number | string | undefined;
    @rdfine.property.literal()
    pageStart: number | string | undefined;
    @rdfine.property.literal()
    pagination: string | undefined;
  }
  return ChapterClass as any
}

class ChapterImpl extends ChapterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Chapter>) {
    super(arg, init)
    this.types.add(schema.Chapter)
  }

  static readonly __mixins: Mixin[] = [ChapterMixin, CreativeWorkMixin];
}
ChapterMixin.appliesTo = schema.Chapter
ChapterMixin.Class = ChapterImpl

export const fromPointer = createFactory<Chapter>([CreativeWorkMixin, ChapterMixin], { types: [schema.Chapter] });
