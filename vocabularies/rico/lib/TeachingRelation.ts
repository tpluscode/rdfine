import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { KnowingRelationMixin } from './KnowingRelation.js';

export interface TeachingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.KnowingRelation<D>, RdfResource<D> {
  teachingRelationHasSource: Rico.Person<D> | undefined;
  teachingRelationHasTarget: Rico.Person<D> | undefined;
}

export function TeachingRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TeachingRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class TeachingRelationClass extends KnowingRelationMixin(Resource) implements Partial<TeachingRelation> {
    @property.resource({ implicitTypes: [rico.Person] })
    teachingRelationHasSource: Rico.Person | undefined;
    @property.resource({ implicitTypes: [rico.Person] })
    teachingRelationHasTarget: Rico.Person | undefined;
  }
  return TeachingRelationClass
}

class TeachingRelationImpl extends TeachingRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TeachingRelation>) {
    super(arg, init)
    this.types.add(rico.TeachingRelation)
  }

  static readonly __mixins: Mixin[] = [TeachingRelationMixin, KnowingRelationMixin];
}
TeachingRelationMixin.appliesTo = rico.TeachingRelation
TeachingRelationMixin.Class = TeachingRelationImpl

export const fromPointer = createFactory<TeachingRelation>([KnowingRelationMixin, TeachingRelationMixin], { types: [rico.TeachingRelation] });
