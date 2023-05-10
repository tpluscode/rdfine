import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface RightsAssignment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, rdfine.RdfResource<D> {
}

export function RightsAssignmentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RightsAssignment> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class RightsAssignmentClass extends ActivityMixin(Resource) implements Partial<RightsAssignment> {
  }
  return RightsAssignmentClass
}

class RightsAssignmentImpl extends RightsAssignmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RightsAssignment>) {
    super(arg, init)
    this.types.add(prov.RightsAssignment)
  }

  static readonly __mixins: Mixin[] = [RightsAssignmentMixin, ActivityMixin];
}
RightsAssignmentMixin.appliesTo = prov.RightsAssignment
RightsAssignmentMixin.Class = RightsAssignmentImpl

export const fromPointer = createFactory<RightsAssignment>([ActivityMixin, RightsAssignmentMixin], { types: [prov.RightsAssignment] });
