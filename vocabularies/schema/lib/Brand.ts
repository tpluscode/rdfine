import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Brand<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  aggregateRating: Schema.AggregateRating<D> | undefined;
  logo: Schema.ImageObject<D> | undefined;
  review: Schema.Review<D> | undefined;
  slogan: string | undefined;
}

export function BrandMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Brand> & RdfResourceCore> & Base {
  @namespace(schema)
  class BrandClass extends IntangibleMixin(Resource) implements Partial<Brand> {
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.resource()
    logo: Schema.ImageObject | undefined;
    @property.resource()
    review: Schema.Review | undefined;
    @property.literal()
    slogan: string | undefined;
  }
  return BrandClass
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
