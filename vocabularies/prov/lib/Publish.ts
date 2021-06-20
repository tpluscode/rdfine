import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityMixin } from './Activity';

export interface Publish<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, RdfResource<D> {
}

export function PublishMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Publish> & RdfResourceCore> & Base {
  @namespace(prov)
  class PublishClass extends ActivityMixin(Resource) implements Partial<Publish> {
  }
  return PublishClass
}

class PublishImpl extends PublishMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Publish>) {
    super(arg, init)
    this.types.add(prov.Publish)
  }

  static readonly __mixins: Mixin[] = [PublishMixin, ActivityMixin];
}
PublishMixin.appliesTo = prov.Publish
PublishMixin.Class = PublishImpl

export const fromPointer = createFactory<Publish>([ActivityMixin, PublishMixin], { types: [prov.Publish] });
