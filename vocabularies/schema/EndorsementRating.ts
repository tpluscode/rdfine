import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { RatingMixin } from './Rating';

export interface EndorsementRating<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Rating<D>, RdfResource<D> {
}

export function EndorsementRatingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EndorsementRatingClass extends RatingMixin(Resource) implements EndorsementRating {
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
