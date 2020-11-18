import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIntangibleMixin } from './MedicalIntangible';

export interface DrugStrength<ID extends ResourceNode = ResourceNode> extends Schema.MedicalIntangible<ID>, RdfResource<ID> {
  activeIngredient: string | undefined;
  availableIn: Schema.AdministrativeArea<SiblingNode<ID>> | undefined;
  maximumIntake: Schema.MaximumDoseSchedule<SiblingNode<ID>> | undefined;
  strengthUnit: string | undefined;
  strengthValue: number | undefined;
}

export function DrugStrengthMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DrugStrengthClass extends MedicalIntangibleMixin(Resource) implements DrugStrength {
    @property.literal()
    activeIngredient: string | undefined;
    @property.resource()
    availableIn: Schema.AdministrativeArea | undefined;
    @property.resource()
    maximumIntake: Schema.MaximumDoseSchedule | undefined;
    @property.literal()
    strengthUnit: string | undefined;
    @property.literal({ type: Number })
    strengthValue: number | undefined;
  }
  return DrugStrengthClass
}

class DrugStrengthImpl extends DrugStrengthMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrugStrength>) {
    super(arg, init)
    this.types.add(schema.DrugStrength)
  }

  static readonly __mixins: Mixin[] = [DrugStrengthMixin, MedicalIntangibleMixin];
}
DrugStrengthMixin.appliesTo = schema.DrugStrength
DrugStrengthMixin.Class = DrugStrengthImpl
