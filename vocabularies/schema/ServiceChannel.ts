import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ServiceChannel extends Schema.Intangible, RdfResource {
  availableLanguage: Schema.Language;
  availableLanguageLiteral: string;
  processingTime: Schema.Duration;
  providesService: Schema.Service;
  serviceLocation: Schema.Place;
  servicePhone: Schema.ContactPoint;
  servicePostalAddress: Schema.PostalAddress;
  serviceSmsNumber: Schema.ContactPoint;
  serviceUrl: string;
}

export default function ServiceChannelMixin<Base extends Constructor>(Resource: Base) {
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
    @property.literal()
    serviceUrl!: string;
  }
  return ServiceChannelClass
}

class ServiceChannelImpl extends ServiceChannelMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ServiceChannel)
  }
}
ServiceChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ServiceChannel)
ServiceChannelMixin.Class = ServiceChannelImpl
