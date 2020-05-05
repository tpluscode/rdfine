import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface ContactPoint extends Schema.StructuredValue, RdfResource {
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  areaServedLiteral: string;
  availableLanguage: Schema.Language;
  availableLanguageLiteral: string;
  contactOption: Schema.ContactPointOption;
  contactType: string;
  email: string;
  faxNumber: string;
  hoursAvailable: Schema.OpeningHoursSpecification;
  productSupported: Schema.Product;
  productSupportedLiteral: string;
  serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  telephone: string;
}

export function ContactPointMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ContactPointClass extends StructuredValueMixin(Resource) implements ContactPoint {
    @property.resource()
    areaServed!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral!: string;
    @property.resource()
    availableLanguage!: Schema.Language;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral!: string;
    @property()
    contactOption!: Schema.ContactPointOption;
    @property.literal()
    contactType!: string;
    @property.literal()
    email!: string;
    @property.literal()
    faxNumber!: string;
    @property.resource()
    hoursAvailable!: Schema.OpeningHoursSpecification;
    @property.resource()
    productSupported!: Schema.Product;
    @property.literal({ path: schema.productSupported })
    productSupportedLiteral!: string;
    @property.resource()
    serviceArea!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.literal()
    telephone!: string;
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
