import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalIntangibleMixin } from './MedicalIntangible.js';

export interface DrugStrength<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, rdfine.RdfResource<D> {
  activeIngredient: string | undefined;
  availableIn: Schema.AdministrativeArea<D> | undefined;
  maximumIntake: Schema.MaximumDoseSchedule<D> | undefined;
  strengthUnit: string | undefined;
  strengthValue: number | undefined;
}

export function DrugStrengthMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DrugStrength & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DrugStrengthClass extends MedicalIntangibleMixin(Resource) {
    @rdfine.property.literal()
    activeIngredient: string | undefined;
    @rdfine.property.resource()
    availableIn: Schema.AdministrativeArea | undefined;
    @rdfine.property.resource()
    maximumIntake: Schema.MaximumDoseSchedule | undefined;
    @rdfine.property.literal()
    strengthUnit: string | undefined;
    @rdfine.property.literal({ type: Number })
    strengthValue: number | undefined;
  }
  return DrugStrengthClass as any
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

export const fromPointer = createFactory<DrugStrength>([MedicalIntangibleMixin, DrugStrengthMixin], { types: [schema.DrugStrength] });
