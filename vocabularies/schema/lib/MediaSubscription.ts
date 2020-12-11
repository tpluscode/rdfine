import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface MediaSubscription<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  authenticator: Schema.Organization<D> | undefined;
  expectsAcceptanceOf: Schema.Offer<D> | undefined;
}

export function MediaSubscriptionMixin<Base extends Constructor>(Resource: Base): Constructor<MediaSubscription> & Base {
  @namespace(schema)
  class MediaSubscriptionClass extends IntangibleMixin(Resource) implements Partial<MediaSubscription> {
    @property.resource()
    authenticator: Schema.Organization | undefined;
    @property.resource()
    expectsAcceptanceOf: Schema.Offer | undefined;
  }
  return MediaSubscriptionClass
}

class MediaSubscriptionImpl extends MediaSubscriptionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaSubscription>) {
    super(arg, init)
    this.types.add(schema.MediaSubscription)
  }

  static readonly __mixins: Mixin[] = [MediaSubscriptionMixin, IntangibleMixin];
}
MediaSubscriptionMixin.appliesTo = schema.MediaSubscription
MediaSubscriptionMixin.Class = MediaSubscriptionImpl
