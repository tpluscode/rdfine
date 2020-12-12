import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface ServiceChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  availableLanguage: Schema.Language<D> | undefined;
  availableLanguageLiteral: string | undefined;
  processingTime: Schema.Duration<D> | undefined;
  providesService: Schema.Service<D> | undefined;
  serviceLocation: Schema.Place<D> | undefined;
  servicePhone: Schema.ContactPoint<D> | undefined;
  servicePostalAddress: Schema.PostalAddress<D> | undefined;
  serviceSmsNumber: Schema.ContactPoint<D> | undefined;
  serviceUrl: RDF.NamedNode | undefined;
}

export function ServiceChannelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ServiceChannel> & RdfResourceCore> & Base {
  @namespace(schema)
  class ServiceChannelClass extends IntangibleMixin(Resource) implements Partial<ServiceChannel> {
    @property.resource()
    availableLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral: string | undefined;
    @property.resource()
    processingTime: Schema.Duration | undefined;
    @property.resource()
    providesService: Schema.Service | undefined;
    @property.resource()
    serviceLocation: Schema.Place | undefined;
    @property.resource()
    servicePhone: Schema.ContactPoint | undefined;
    @property.resource()
    servicePostalAddress: Schema.PostalAddress | undefined;
    @property.resource()
    serviceSmsNumber: Schema.ContactPoint | undefined;
    @property()
    serviceUrl: RDF.NamedNode | undefined;
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

export const fromPointer = createFactory<ServiceChannel>([IntangibleMixin, ServiceChannelMixin], { types: [schema.ServiceChannel] });
