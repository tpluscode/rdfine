import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface ServiceChannel extends Schema.Intangible, RdfResource {
  availableLanguage: Schema.Language;
  availableLanguageLiteral: string;
  processingTime: Schema.Duration;
  providesService: Schema.Service;
  serviceLocation: Schema.Place;
  servicePhone: Schema.ContactPoint;
  servicePostalAddress: Schema.PostalAddress;
  serviceSmsNumber: Schema.ContactPoint;
  serviceUrl: RDF.NamedNode;
}

export function ServiceChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ServiceChannelClass extends IntangibleMixin(Resource) implements ServiceChannel {
    @property.resource()
    availableLanguage!: Schema.Language;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral!: string;
    @property.resource()
    processingTime!: Schema.Duration;
    @property.resource()
    providesService!: Schema.Service;
    @property.resource()
    serviceLocation!: Schema.Place;
    @property.resource()
    servicePhone!: Schema.ContactPoint;
    @property.resource()
    servicePostalAddress!: Schema.PostalAddress;
    @property.resource()
    serviceSmsNumber!: Schema.ContactPoint;
    @property()
    serviceUrl!: RDF.NamedNode;
  }
  return ServiceChannelClass
}

class ServiceChannelImpl extends ServiceChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ServiceChannel>) {
    super(arg, init)
    this.types.add(schema.ServiceChannel)
  }

  static readonly __mixins: Mixin[] = [ServiceChannelMixin, IntangibleMixin];
}
ServiceChannelMixin.appliesTo = schema.ServiceChannel
ServiceChannelMixin.Class = ServiceChannelImpl
