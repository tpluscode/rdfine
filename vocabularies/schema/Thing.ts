import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';

export interface Thing extends RdfResource {
  additionalType: string;
  alternateName: string;
  description: string;
  disambiguatingDescription: string;
  identifier: Schema.PropertyValue;
  identifierLiteral: string | string;
  image: Schema.ImageObject;
  imageLiteral: string;
  mainEntityOfPage: Schema.CreativeWork;
  mainEntityOfPageLiteral: string;
  name: string;
  potentialAction: Schema.Action;
  sameAs: string;
  subjectOf: Schema.CreativeWork | Schema.Event;
  url: string;
}

export default function ThingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ThingClass extends Resource implements Thing {
    @property.literal()
    additionalType!: string;
    @property.literal()
    alternateName!: string;
    @property.literal()
    description!: string;
    @property.literal()
    disambiguatingDescription!: string;
    @property.resource()
    identifier!: Schema.PropertyValue;
    @property.literal({ path: schema.identifier })
    identifierLiteral!: string | string;
    @property.resource()
    image!: Schema.ImageObject;
    @property.literal({ path: schema.image })
    imageLiteral!: string;
    @property.resource()
    mainEntityOfPage!: Schema.CreativeWork;
    @property.literal({ path: schema.mainEntityOfPage })
    mainEntityOfPageLiteral!: string;
    @property.literal()
    name!: string;
    @property.resource()
    potentialAction!: Schema.Action;
    @property.literal()
    sameAs!: string;
    @property.resource()
    subjectOf!: Schema.CreativeWork | Schema.Event;
    @property.literal()
    url!: string;
  }
  return ThingClass
}

class ThingImpl extends ThingMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Thing)
  }
}
ThingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Thing)
ThingMixin.Class = ThingImpl
