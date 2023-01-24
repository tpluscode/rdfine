import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { FamilyRelationMixin } from './FamilyRelation';

export interface SpouseRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.FamilyRelation<D>, RdfResource<D> {
  spouseRelationConnects: Rico.Person<D> | undefined;
}

export function SpouseRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SpouseRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class SpouseRelationClass extends FamilyRelationMixin(Resource) implements Partial<SpouseRelation> {
    @property.resource({ implicitTypes: [rico.Person] })
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
