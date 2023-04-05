import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface Substance<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  activeIngredient: string | undefined;
  maximumIntake: Schema.MaximumDoseSchedule<D> | undefined;
}

export function SubstanceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Substance> & RdfResourceCore> & Base {
  @namespace(schema)
  class SubstanceClass extends MedicalEntityMixin(Resource) implements Partial<Substance> {
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

export const fromPointer = createFactory<Substance>([MedicalEntityMixin, SubstanceMixin], { types: [schema.Substance] });
