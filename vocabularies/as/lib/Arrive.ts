import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { IntransitiveActivityMixin } from './IntransitiveActivity.js';

export interface Arrive<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.IntransitiveActivity<D>, RdfResource<D> {
}

export function ArriveMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Arrive> & RdfResourceCore> & Base {
  @namespace(as)
  class ArriveClass extends IntransitiveActivityMixin(Resource) implements Partial<Arrive> {
  }
  return ArriveClass
}

class ArriveImpl extends ArriveMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Arrive>) {
    super(arg, init)
    this.types.add(as.Arrive)
  }

  static readonly __mixins: Mixin[] = [ArriveMixin, IntransitiveActivityMixin];
}
ArriveMixin.appliesTo = as.Arrive
ArriveMixin.Class = ArriveImpl

export const fromPointer = createFactory<Arrive>([IntransitiveActivityMixin, ArriveMixin], { types: [as.Arrive] });
