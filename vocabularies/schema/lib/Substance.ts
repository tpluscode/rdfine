import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface Substance<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  activeIngredient: string | undefined;
  maximumIntake: Schema.MaximumDoseSchedule<SiblingNode<ID>> | undefined;
}

export function SubstanceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SubstanceClass extends MedicalEntityMixin(Resource) implements Substance {
    @property.literal()
    activeIngredient: string | undefined;
    @property.resource()
    maximumIntake: Schema.MaximumDoseSchedule | undefined;
  }
  return SubstanceClass
}

class SubstanceImpl extends SubstanceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Substance>) {
    super(arg, init)
    this.types.add(schema.Substance)
  }

  static readonly __mixins: Mixin[] = [SubstanceMixin, MedicalEntityMixin];
}
SubstanceMixin.appliesTo = schema.Substance
SubstanceMixin.Class = SubstanceImpl
