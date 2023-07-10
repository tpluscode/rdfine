import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Brand<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  aggregateRating: Schema.AggregateRating<D> | undefined;
  logo: Schema.ImageObject<D> | undefined;
  review: Schema.Review<D> | undefined;
  slogan: string | undefined;
}

export function BrandMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Brand & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BrandClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @rdfine.property.resource()
    logo: Schema.ImageObject | undefined;
    @rdfine.property.resource()
    review: Schema.Review | undefined;
    @rdfine.property.literal()
    slogan: string | undefined;
  }
  return BrandClass as any
}

class BrandImpl extends BrandMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Brand>) {
    super(arg, init)
    this.types.add(schema.Brand)
  }

  static readonly __mixins: Mixin[] = [BrandMixin, IntangibleMixin];
}
BrandMixin.appliesTo = schema.Brand
BrandMixin.Class = BrandImpl

export const fromPointer = createFactory<Brand>([IntangibleMixin, BrandMixin], { types: [schema.Brand] });
