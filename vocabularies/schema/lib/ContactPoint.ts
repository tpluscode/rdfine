import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface ContactPoint<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  areaServed: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  areaServedLiteral: string | undefined;
  availableLanguage: Schema.Language<D> | undefined;
  availableLanguageLiteral: string | undefined;
  contactOption: Schema.ContactPointOption | undefined;
  contactType: string | undefined;
  email: string | undefined;
  faxNumber: string | undefined;
  hoursAvailable: Schema.OpeningHoursSpecification<D> | undefined;
  productSupported: Schema.Product<D> | undefined;
  productSupportedLiteral: string | undefined;
  serviceArea: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  telephone: string | undefined;
}

export function ContactPointMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ContactPoint & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ContactPointClass extends StructuredValueMixin(Resource) {
    @rdfine.property.resource()
    areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @rdfine.property.literal({ path: schema.areaServed })
    areaServedLiteral: string | undefined;
    @rdfine.property.resource()
    availableLanguage: Schema.Language | undefined;
    @rdfine.property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral: string | undefined;
    @rdfine.property()
    contactOption: Schema.ContactPointOption | undefined;
    @rdfine.property.literal()
    contactType: string | undefined;
    @rdfine.property.literal()
    email: string | undefined;
    @rdfine.property.literal()
    faxNumber: string | undefined;
    @rdfine.property.resource()
    hoursAvailable: Schema.OpeningHoursSpecification | undefined;
    @rdfine.property.resource()
    productSupported: Schema.Product | undefined;
    @rdfine.property.literal({ path: schema.productSupported })
    productSupportedLiteral: string | undefined;
    @rdfine.property.resource()
    serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @rdfine.property.literal()
    telephone: string | undefined;
  }
  return ContactPointClass as any
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

export const fromPointer = createFactory<ContactPoint>([StructuredValueMixin, ContactPointMixin], { types: [schema.ContactPoint] });
