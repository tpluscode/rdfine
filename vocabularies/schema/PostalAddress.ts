import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ContactPointMixin } from './ContactPoint';

export interface PostalAddress extends Schema.ContactPoint, RdfResource {
  addressCountry: Schema.Country;
  addressCountryLiteral: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  postOfficeBoxNumber: string;
  streetAddress: string;
}

export function PostalAddressMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<PostalAddress>) {
    super(arg, init)
    this.types.add(schema.PostalAddress)
  }

  static readonly __mixins: Mixin[] = [PostalAddressMixin, ContactPointMixin];
}
PostalAddressMixin.appliesTo = schema.PostalAddress
PostalAddressMixin.Class = PostalAddressImpl
