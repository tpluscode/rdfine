import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';

export interface Thing<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  additionalType: RDF.NamedNode | undefined;
  alternateName: string | undefined;
  description: string | undefined;
  disambiguatingDescription: string | undefined;
  identifier: Schema.PropertyValue<SiblingNode<ID>> | undefined;
  identifierLiteral: string | undefined;
  image: Schema.ImageObject<SiblingNode<ID>> | undefined;
  mainEntityOfPage: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  name: string | undefined;
  potentialAction: Schema.Action<SiblingNode<ID>> | undefined;
  sameAs: RDF.NamedNode | undefined;
  subjectOf: Schema.CreativeWork<SiblingNode<ID>> | Schema.Event<SiblingNode<ID>> | undefined;
  url: RDF.NamedNode | undefined;
}

export function ThingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ThingClass extends Resource implements Thing {
    @property()
    additionalType: RDF.NamedNode | undefined;
    @property.literal()
    alternateName: string | undefined;
    @property.literal()
    description: string | undefined;
    @property.literal()
    disambiguatingDescription: string | undefined;
    @property.resource()
    identifier: Schema.PropertyValue | undefined;
    @property.literal({ path: schema.identifier })
    identifierLiteral: string | undefined;
    @property.resource()
    image: Schema.ImageObject | undefined;
    @property.resource()
    mainEntityOfPage: Schema.CreativeWork | undefined;
    @property.literal()
    name: string | undefined;
    @property.resource()
    potentialAction: Schema.Action | undefined;
    @property()
    sameAs: RDF.NamedNode | undefined;
    @property.resource()
    subjectOf: Schema.CreativeWork | Schema.Event | undefined;
    @property()
    url: RDF.NamedNode | undefined;
  }
  return ThingClass
}

class ThingImpl extends ThingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Thing>) {
    super(arg, init)
    this.types.add(schema.Thing)
  }

  static readonly __mixins: Mixin[] = [ThingMixin];
}
ThingMixin.appliesTo = schema.Thing
ThingMixin.Class = ThingImpl
