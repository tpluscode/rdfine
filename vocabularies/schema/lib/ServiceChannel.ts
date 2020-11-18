import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface ServiceChannel<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  availableLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  availableLanguageLiteral: string | undefined;
  processingTime: Schema.Duration<SiblingNode<ID>> | undefined;
  providesService: Schema.Service<SiblingNode<ID>> | undefined;
  serviceLocation: Schema.Place<SiblingNode<ID>> | undefined;
  servicePhone: Schema.ContactPoint<SiblingNode<ID>> | undefined;
  servicePostalAddress: Schema.PostalAddress<SiblingNode<ID>> | undefined;
  serviceSmsNumber: Schema.ContactPoint<SiblingNode<ID>> | undefined;
  serviceUrl: RDF.NamedNode | undefined;
}

export function ServiceChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ServiceChannelClass extends IntangibleMixin(Resource) implements ServiceChannel {
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
