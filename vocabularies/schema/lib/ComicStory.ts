import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface ComicStory<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  artist: Schema.Person<D> | undefined;
  colorist: Schema.Person<D> | undefined;
  inker: Schema.Person<D> | undefined;
  letterer: Schema.Person<D> | undefined;
  penciler: Schema.Person<D> | undefined;
}

export function ComicStoryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ComicStory> & RdfResourceCore> & Base {
  @namespace(schema)
  class ComicStoryClass extends CreativeWorkMixin(Resource) implements Partial<ComicStory> {
    @property.resource()
    artist: Schema.Person | undefined;
    @property.resource()
    colorist: Schema.Person | undefined;
    @property.resource()
    inker: Schema.Person | undefined;
    @property.resource()
    letterer: Schema.Person | undefined;
    @property.resource()
    penciler: Schema.Person | undefined;
  }
  return ComicStoryClass
}

class ComicStoryImpl extends ComicStoryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComicStory>) {
    super(arg, init)
    this.types.add(schema.ComicStory)
  }

  static readonly __mixins: Mixin[] = [ComicStoryMixin, CreativeWorkMixin];
}
ComicStoryMixin.appliesTo = schema.ComicStory
ComicStoryMixin.Class = ComicStoryImpl

export const fromPointer = createFactory<ComicStory>([CreativeWorkMixin, ComicStoryMixin], { types: [schema.ComicStory] });
