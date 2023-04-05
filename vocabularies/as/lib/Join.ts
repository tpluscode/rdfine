import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Join<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function JoinMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Join> & RdfResourceCore> & Base {
  @namespace(as)
  class JoinClass extends ActivityMixin(Resource) implements Partial<Join> {
  }
  return JoinClass
}

class JoinImpl extends JoinMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Join>) {
    super(arg, init)
    this.types.add(as.Join)
  }

  static readonly __mixins: Mixin[] = [JoinMixin, ActivityMixin];
}
JoinMixin.appliesTo = as.Join
JoinMixin.Class = JoinImpl

export const fromPointer = createFactory<Join>([ActivityMixin, JoinMixin], { types: [as.Join] });
