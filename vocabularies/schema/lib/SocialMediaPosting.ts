import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ArticleMixin } from './Article';

export interface SocialMediaPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, RdfResource<D> {
  sharedContent: Schema.CreativeWork<D> | undefined;
}

export function SocialMediaPostingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SocialMediaPosting> & RdfResourceCore> & Base {
  @namespace(schema)
  class SocialMediaPostingClass extends ArticleMixin(Resource) implements Partial<SocialMediaPosting> {
    @property.resource()
    sharedContent: Schema.CreativeWork | undefined;
  }
  return SocialMediaPostingClass
}

class SocialMediaPostingImpl extends SocialMediaPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SocialMediaPosting>) {
    super(arg, init)
    this.types.add(schema.SocialMediaPosting)
  }

  static readonly __mixins: Mixin[] = [SocialMediaPostingMixin, ArticleMixin];
}
SocialMediaPostingMixin.appliesTo = schema.SocialMediaPosting
SocialMediaPostingMixin.Class = SocialMediaPostingImpl

export const fromPointer = createFactory<SocialMediaPosting>([ArticleMixin, SocialMediaPostingMixin], { types: [schema.SocialMediaPosting] });
