import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';

export interface Thing extends RdfResource {
  additionalType: RDF.NamedNode;
  alternateName: string;
  description: string;
  disambiguatingDescription: string;
  identifier: Schema.PropertyValue;
  identifierLiteral: string;
  image: Schema.ImageObject;
  mainEntityOfPage: Schema.CreativeWork;
  name: string;
  potentialAction: Schema.Action;
  sameAs: RDF.NamedNode;
  subjectOf: Schema.CreativeWork | Schema.Event;
  url: RDF.NamedNode;
}

export default function ThingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ThingClass extends Resource implements Thing {
    @property()
    additionalType!: RDF.NamedNode;
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
    sameAs!: RDF.NamedNode;
    @property.resource()
    subjectOf!: Schema.CreativeWork | Schema.Event;
    @property()
    url!: RDF.NamedNode;
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
