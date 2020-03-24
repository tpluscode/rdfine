import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ContactPointMixin from './ContactPoint';

export interface PostalAddress extends Schema.ContactPoint, RdfResource {
  addressCountry: Schema.Country;
  addressCountryLiteral: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  postOfficeBoxNumber: string;
  streetAddress: string;
}

export default function PostalAddressMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PostalAddressClass extends ContactPointMixin(Resource) implements PostalAddress {
    @property.resource()
    addressCountry!: Schema.Country;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral!: string;
    @property.literal()
    addressLocality!: string;
    @property.literal()
    addressRegion!: string;
    @property.literal()
    postalCode!: string;
    @property.literal()
    postOfficeBoxNumber!: string;
    @property.literal()
    streetAddress!: string;
  }
  return PostalAddressClass
}

class PostalAddressImpl extends PostalAddressMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PostalAddress>) {
    super(arg)
    this.types.add(schema.PostalAddress)
    initializeProperties(this, init)
  }
}
PostalAddressMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PostalAddress)
PostalAddressMixin.Class = PostalAddressImpl
