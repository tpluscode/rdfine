import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentTemporalRelationMixin } from './AgentTemporalRelation.js';
import { FamilyRelationMixin } from './FamilyRelation.js';

export interface DescendanceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentTemporalRelation<D>, Rico.FamilyRelation<D>, RdfResource<D> {
  descendanceRelationHasSource: Rico.Person<D> | undefined;
  descendanceRelationHasTarget: Rico.Person<D> | undefined;
}

export function DescendanceRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DescendanceRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class DescendanceRelationClass extends FamilyRelationMixin(AgentTemporalRelationMixin(Resource)) implements Partial<DescendanceRelation> {
    @property.resource({ implicitTypes: [rico.Person] })
    descendanceRelationHasSource: Rico.Person | undefined;
    @property.resource({ implicitTypes: [rico.Person] })
    descendanceRelationHasTarget: Rico.Person | undefined;
  }
  return DescendanceRelationClass
}

class DescendanceRelationImpl extends DescendanceRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DescendanceRelation>) {
    super(arg, init)
    this.types.add(rico.DescendanceRelation)
  }

  static readonly __mixins: Mixin[] = [DescendanceRelationMixin, AgentTemporalRelationMixin, FamilyRelationMixin];
}
DescendanceRelationMixin.appliesTo = rico.DescendanceRelation
DescendanceRelationMixin.Class = DescendanceRelationImpl

export const fromPointer = createFactory<DescendanceRelation>([FamilyRelationMixin, AgentTemporalRelationMixin, DescendanceRelationMixin], { types: [rico.DescendanceRelation] });
