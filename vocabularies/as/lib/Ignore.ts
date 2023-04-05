import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Ignore<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function IgnoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Ignore> & RdfResourceCore> & Base {
  @namespace(as)
  class IgnoreClass extends ActivityMixin(Resource) implements Partial<Ignore> {
  }
  return IgnoreClass
}

class IgnoreImpl extends IgnoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Ignore>) {
    super(arg, init)
    this.types.add(as.Ignore)
  }

  static readonly __mixins: Mixin[] = [IgnoreMixin, ActivityMixin];
}
IgnoreMixin.appliesTo = as.Ignore
IgnoreMixin.Class = IgnoreImpl

export const fromPointer = createFactory<Ignore>([ActivityMixin, IgnoreMixin], { types: [as.Ignore] });
