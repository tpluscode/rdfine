import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ContactPointMixin } from './ContactPoint.js';

export interface PostalAddress<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ContactPoint<D>, rdfine.RdfResource<D> {
  addressCountry: Schema.Country<D> | undefined;
  addressCountryLiteral: string | undefined;
  addressLocality: string | undefined;
  addressRegion: string | undefined;
  postalCode: string | undefined;
  postOfficeBoxNumber: string | undefined;
  streetAddress: string | undefined;
}

export function PostalAddressMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PostalAddress> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PostalAddressClass extends ContactPointMixin(Resource) implements Partial<PostalAddress> {
    @rdfine.property.resource()
    addressCountry: Schema.Country | undefined;
    @rdfine.property.literal({ path: schema.addressCountry })
    addressCountryLiteral: string | undefined;
    @rdfine.property.literal()
    addressLocality: string | undefined;
    @rdfine.property.literal()
    addressRegion: string | undefined;
    @rdfine.property.literal()
    postalCode: string | undefined;
    @rdfine.property.literal()
    postOfficeBoxNumber: string | undefined;
    @rdfine.property.literal()
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

export const fromPointer = createFactory<PostalAddress>([ContactPointMixin, PostalAddressMixin], { types: [schema.PostalAddress] });
