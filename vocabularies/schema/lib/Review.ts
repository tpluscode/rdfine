import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Review<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  associatedClaimReview: Schema.Review<D> | undefined;
  associatedMediaReview: Schema.Review<D> | undefined;
  associatedReview: Schema.Review<D> | undefined;
  itemReviewed: Schema.Thing<D> | undefined;
  negativeNotes: Schema.ItemList<D> | Schema.ListItem<D> | Schema.WebContent<D> | undefined;
  negativeNotesLiteral: string | undefined;
  positiveNotes: Schema.ItemList<D> | Schema.ListItem<D> | Schema.WebContent<D> | undefined;
  positiveNotesLiteral: string | undefined;
  reviewAspect: string | undefined;
  reviewBody: string | undefined;
  reviewRating: Schema.Rating<D> | undefined;
}

export function ReviewMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Review> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReviewClass extends CreativeWorkMixin(Resource) implements Partial<Review> {
    @property.resource()
    associatedClaimReview: Schema.Review | undefined;
    @property.resource()
    associatedMediaReview: Schema.Review | undefined;
    @property.resource()
    associatedReview: Schema.Review | undefined;
    @property.resource()
    itemReviewed: Schema.Thing | undefined;
    @property.resource()
    negativeNotes: Schema.ItemList | Schema.ListItem | Schema.WebContent | undefined;
    @property.literal({ path: schema.negativeNotes })
    negativeNotesLiteral: string | undefined;
    @property.resource()
    positiveNotes: Schema.ItemList | Schema.ListItem | Schema.WebContent | undefined;
    @property.literal({ path: schema.positiveNotes })
    positiveNotesLiteral: string | undefined;
    @property.literal()
    reviewAspect: string | undefined;
    @property.literal()
    reviewBody: string | undefined;
    @property.resource()
    reviewRating: Schema.Rating | undefined;
  }
  return ReviewClass
}

class ReviewImpl extends ReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Review>) {
    super(arg, init)
    this.types.add(schema.Review)
  }

  static readonly __mixins: Mixin[] = [ReviewMixin, CreativeWorkMixin];
}
ReviewMixin.appliesTo = schema.Review
ReviewMixin.Class = ReviewImpl

export const fromPointer = createFactory<Review>([CreativeWorkMixin, ReviewMixin], { types: [schema.Review] });
