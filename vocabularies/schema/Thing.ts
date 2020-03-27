import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';

export interface Thing extends RdfResource {
  additionalType: rdf.NamedNode;
  alternateName: string;
  description: string;
  disambiguatingDescription: string;
  identifier: Schema.PropertyValue;
  identifierLiteral: string;
  image: Schema.ImageObject;
  mainEntityOfPage: Schema.CreativeWork;
  name: string;
  potentialAction: Schema.Action;
  sameAs: rdf.NamedNode;
  subjectOf: Schema.CreativeWork | Schema.Event;
  url: rdf.NamedNode;
}

export default function ThingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ThingClass extends Resource implements Thing {
    @property()
    additionalType!: rdf.NamedNode;
    @property.literal()
    alternateName!: string;
    @property.literal()
    description!: string;
    @property.literal()
    disambiguatingDescription!: string;
    @property.resource()
    identifier!: Schema.PropertyValue;
    @property.literal({ path: schema.identifier })
    identifierLiteral!: string;
    @property.resource()
    image!: Schema.ImageObject;
    @property.resource()
    mainEntityOfPage!: Schema.CreativeWork;
    @property.literal()
    name!: string;
    @property.resource()
    potentialAction!: Schema.Action;
    @property()
    sameAs!: rdf.NamedNode;
    @property.resource()
    subjectOf!: Schema.CreativeWork | Schema.Event;
    @property()
    url!: rdf.NamedNode;
  }
  return ThingClass
}

class ThingImpl extends ThingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Thing>) {
    super(arg, init)
    this.types.add(schema.Thing)
  }
}
ThingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Thing)
ThingMixin.Class = ThingImpl
