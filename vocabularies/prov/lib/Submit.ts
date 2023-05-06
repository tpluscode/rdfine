import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Submit<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, RdfResource<D> {
}

export function SubmitMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Submit> & RdfResourceCore> & Base {
  @namespace(prov)
  class SubmitClass extends ActivityMixin(Resource) implements Partial<Submit> {
  }
  return SubmitClass
}

class SubmitImpl extends SubmitMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Submit>) {
    super(arg, init)
    this.types.add(prov.Submit)
  }

  static readonly __mixins: Mixin[] = [SubmitMixin, ActivityMixin];
}
SubmitMixin.appliesTo = prov.Submit
SubmitMixin.Class = SubmitImpl

export const fromPointer = createFactory<Submit>([ActivityMixin, SubmitMixin], { types: [prov.Submit] });
