import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface IntransitiveActivity<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function IntransitiveActivityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<IntransitiveActivity> & RdfResourceCore> & Base {
  @namespace(as)
  class IntransitiveActivityClass extends ActivityMixin(Resource) implements Partial<IntransitiveActivity> {
  }
  return IntransitiveActivityClass
}

class IntransitiveActivityImpl extends IntransitiveActivityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IntransitiveActivity>) {
    super(arg, init)
    this.types.add(as.IntransitiveActivity)
  }

  static readonly __mixins: Mixin[] = [IntransitiveActivityMixin, ActivityMixin];
}
IntransitiveActivityMixin.appliesTo = as.IntransitiveActivity
IntransitiveActivityMixin.Class = IntransitiveActivityImpl

export const fromPointer = createFactory<IntransitiveActivity>([ActivityMixin, IntransitiveActivityMixin], { types: [as.IntransitiveActivity] });
