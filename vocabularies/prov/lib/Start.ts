import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { EntityInfluenceMixin } from './EntityInfluence.js';
import { InstantaneousEventMixin } from './InstantaneousEvent.js';

export interface Start<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.EntityInfluence<D>, Prov.InstantaneousEvent<D>, rdfine.RdfResource<D> {
  hadActivity: Prov.Activity<D> | undefined;
}

export function StartMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Start & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class StartClass extends InstantaneousEventMixin(EntityInfluenceMixin(Resource)) {
    @rdfine.property.resource({ implicitTypes: [prov.Activity] })
    hadActivity: Prov.Activity | undefined;
  }
  return StartClass as any
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
