import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { DescendanceRelationMixin } from './DescendanceRelation.js';

export interface ChildRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.DescendanceRelation<D>, RdfResource<D> {
  childRelationHasSource: Rico.Person<D> | undefined;
  childRelationHasTarget: Rico.Person<D> | undefined;
}

export function ChildRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ChildRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class ChildRelationClass extends DescendanceRelationMixin(Resource) implements Partial<ChildRelation> {
    @property.resource({ implicitTypes: [rico.Person] })
    childRelationHasSource: Rico.Person | undefined;
    @property.resource({ implicitTypes: [rico.Person] })
    childRelationHasTarget: Rico.Person | undefined;
  }
  return ChildRelationClass
}

class ChildRelationImpl extends ChildRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChildRelation>) {
    super(arg, init)
    this.types.add(rico.ChildRelation)
  }

  static readonly __mixins: Mixin[] = [ChildRelationMixin, DescendanceRelationMixin];
}
ChildRelationMixin.appliesTo = rico.ChildRelation
ChildRelationMixin.Class = ChildRelationImpl

export const fromPointer = createFactory<ChildRelation>([DescendanceRelationMixin, ChildRelationMixin], { types: [rico.ChildRelation] });
