import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Chapter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
}

export function ChapterMixin<Base extends Constructor>(Resource: Base): Constructor<Chapter> & Base {
  @namespace(schema)
  class ChapterClass extends CreativeWorkMixin(Resource) implements Partial<Chapter> {
    @property.literal()
    pageEnd: number | string | undefined;
    @property.literal()
    pageStart: number | string | undefined;
    @property.literal()
    pagination: string | undefined;
  }
  return ChapterClass
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
