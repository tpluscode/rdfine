import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { EntityInfluenceMixin } from './EntityInfluence';
import { InstantaneousEventMixin } from './InstantaneousEvent';

export interface Start<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.EntityInfluence<D>, Prov.InstantaneousEvent<D>, RdfResource<D> {
  hadActivity: Prov.Activity<D> | undefined;
}

export function StartMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Start> & RdfResourceCore> & Base {
  @namespace(prov)
  class StartClass extends InstantaneousEventMixin(EntityInfluenceMixin(Resource)) implements Partial<Start> {
    @property.resource({ implicitTypes: [prov.Activity] })
    hadActivity: Prov.Activity | undefined;
  }
  return StartClass
}

class StartImpl extends StartMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Start>) {
    super(arg, init)
    this.types.add(prov.Start)
  }

  static readonly __mixins: Mixin[] = [StartMixin, EntityInfluenceMixin, InstantaneousEventMixin];
}
StartMixin.appliesTo = prov.Start
StartMixin.Class = StartImpl

export const fromPointer = createFactory<Start>([InstantaneousEventMixin, EntityInfluenceMixin, StartMixin], { types: [prov.Start] });
