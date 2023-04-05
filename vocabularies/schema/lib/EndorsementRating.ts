import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RatingMixin } from './Rating.js';

export interface EndorsementRating<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Rating<D>, RdfResource<D> {
}

export function EndorsementRatingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EndorsementRating> & RdfResourceCore> & Base {
  @namespace(schema)
  class EndorsementRatingClass extends RatingMixin(Resource) implements Partial<EndorsementRating> {
  }
  return EndorsementRatingClass
}

class EndorsementRatingImpl extends EndorsementRatingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EndorsementRating>) {
    super(arg, init)
    this.types.add(schema.EndorsementRating)
  }

  static readonly __mixins: Mixin[] = [EndorsementRatingMixin, RatingMixin];
}
EndorsementRatingMixin.appliesTo = schema.EndorsementRating
EndorsementRatingMixin.Class = EndorsementRatingImpl

export const fromPointer = createFactory<EndorsementRating>([RatingMixin, EndorsementRatingMixin], { types: [schema.EndorsementRating] });
