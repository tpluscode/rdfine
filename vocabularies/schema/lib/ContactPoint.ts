import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface ContactPoint<ID extends ResourceNode = ResourceNode> extends Schema.StructuredValue<ID>, RdfResource<ID> {
  areaServed: Schema.AdministrativeArea<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  areaServedLiteral: string | undefined;
  availableLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  availableLanguageLiteral: string | undefined;
  contactOption: Schema.ContactPointOption | undefined;
  contactType: string | undefined;
  email: string | undefined;
  faxNumber: string | undefined;
  hoursAvailable: Schema.OpeningHoursSpecification<SiblingNode<ID>> | undefined;
  productSupported: Schema.Product<SiblingNode<ID>> | undefined;
  productSupportedLiteral: string | undefined;
  serviceArea: Schema.AdministrativeArea<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  telephone: string | undefined;
}

export function ContactPointMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ContactPointClass extends StructuredValueMixin(Resource) implements ContactPoint {
    @property.resource()
    areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral: string | undefined;
    @property.resource()
    availableLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral: string | undefined;
    @property()
    contactOption: Schema.ContactPointOption | undefined;
    @property.literal()
    contactType: string | undefined;
    @property.literal()
    email: string | undefined;
    @property.literal()
    faxNumber: string | undefined;
    @property.resource()
    hoursAvailable: Schema.OpeningHoursSpecification | undefined;
    @property.resource()
    productSupported: Schema.Product | undefined;
    @property.literal({ path: schema.productSupported })
    productSupportedLiteral: string | undefined;
    @property.resource()
    serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.literal()
    telephone: string | undefined;
  }
  return ContactPointClass
}

class ContactPointImpl extends ContactPointMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ContactPoint>) {
    super(arg, init)
    this.types.add(schema.ContactPoint)
  }

  static readonly __mixins: Mixin[] = [ContactPointMixin, StructuredValueMixin];
}
ContactPointMixin.appliesTo = schema.ContactPoint
ContactPointMixin.Class = ContactPointImpl
