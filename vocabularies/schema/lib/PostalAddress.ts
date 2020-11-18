import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ContactPointMixin } from './ContactPoint';

export interface PostalAddress<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ContactPoint<D>, RdfResource<D> {
  addressCountry: Schema.Country<D> | undefined;
  addressCountryLiteral: string | undefined;
  addressLocality: string | undefined;
  addressRegion: string | undefined;
  postalCode: string | undefined;
  postOfficeBoxNumber: string | undefined;
  streetAddress: string | undefined;
}

export function PostalAddressMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PostalAddressClass extends ContactPointMixin(Resource) implements PostalAddress {
    @property.resource()
    addressCountry: Schema.Country | undefined;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral: string | undefined;
    @property.literal()
    addressLocality: string | undefined;
    @property.literal()
    addressRegion: string | undefined;
    @property.literal()
    postalCode: string | undefined;
    @property.literal()
    postOfficeBoxNumber: string | undefined;
    @property.literal()
    streetAddress: string | undefined;
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
