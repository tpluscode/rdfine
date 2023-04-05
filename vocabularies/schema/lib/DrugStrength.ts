import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalIntangibleMixin } from './MedicalIntangible.js';

export interface DrugStrength<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, RdfResource<D> {
  activeIngredient: string | undefined;
  availableIn: Schema.AdministrativeArea<D> | undefined;
  maximumIntake: Schema.MaximumDoseSchedule<D> | undefined;
  strengthUnit: string | undefined;
  strengthValue: number | undefined;
}

export function DrugStrengthMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DrugStrength> & RdfResourceCore> & Base {
  @namespace(schema)
  class DrugStrengthClass extends MedicalIntangibleMixin(Resource) implements Partial<DrugStrength> {
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

export const fromPointer = createFactory<DrugStrength>([MedicalIntangibleMixin, DrugStrengthMixin], { types: [schema.DrugStrength] });
