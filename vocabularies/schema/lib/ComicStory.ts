import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface ComicStory<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  artist: Schema.Person<SiblingNode<ID>> | undefined;
  colorist: Schema.Person<SiblingNode<ID>> | undefined;
  inker: Schema.Person<SiblingNode<ID>> | undefined;
  letterer: Schema.Person<SiblingNode<ID>> | undefined;
  penciler: Schema.Person<SiblingNode<ID>> | undefined;
}

export function ComicStoryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComicStoryClass extends CreativeWorkMixin(Resource) implements ComicStory {
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
