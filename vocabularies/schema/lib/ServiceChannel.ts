import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface ServiceChannel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
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

export function ServiceChannelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ServiceChannel & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ServiceChannelClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    availableLanguage: Schema.Language | undefined;
    @rdfine.property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral: string | undefined;
    @rdfine.property.resource()
    processingTime: Schema.Duration | undefined;
    @rdfine.property.resource()
    providesService: Schema.Service | undefined;
    @rdfine.property.resource()
    serviceLocation: Schema.Place | undefined;
    @rdfine.property.resource()
    servicePhone: Schema.ContactPoint | undefined;
    @rdfine.property.resource()
    servicePostalAddress: Schema.PostalAddress | undefined;
    @rdfine.property.resource()
    serviceSmsNumber: Schema.ContactPoint | undefined;
    @rdfine.property()
    serviceUrl: RDF.NamedNode | undefined;
  }
  return ServiceChannelClass as any
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
