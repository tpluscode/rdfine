import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { FamilyRelationMixin } from './FamilyRelation.js';

export interface SpouseRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.FamilyRelation<D>, rdfine.RdfResource<D> {
  spouseRelationConnects: Rico.Person<D> | undefined;
}

export function SpouseRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SpouseRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class SpouseRelationClass extends FamilyRelationMixin(Resource) implements Partial<SpouseRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    spouseRelationConnects: Rico.Person | undefined;
  }
  return SpouseRelationClass
}

class SpouseRelationImpl extends SpouseRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SpouseRelation>) {
    super(arg, init)
    this.types.add(rico.SpouseRelation)
  }

  static readonly __mixins: Mixin[] = [SpouseRelationMixin, FamilyRelationMixin];
}
SpouseRelationMixin.appliesTo = rico.SpouseRelation
SpouseRelationMixin.Class = SpouseRelationImpl

export const fromPointer = createFactory<SpouseRelation>([FamilyRelationMixin, SpouseRelationMixin], { types: [rico.SpouseRelation] });
