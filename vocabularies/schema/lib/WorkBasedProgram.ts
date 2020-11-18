import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOccupationalProgramMixin } from './EducationalOccupationalProgram';

export interface WorkBasedProgram<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOccupationalProgram<D>, RdfResource<D> {
  occupationalCategory: Schema.CategoryCode<D> | undefined;
  occupationalCategoryLiteral: string | undefined;
  trainingSalary: Schema.MonetaryAmountDistribution<D> | undefined;
}

export function WorkBasedProgramMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WorkBasedProgramClass extends EducationalOccupationalProgramMixin(Resource) implements WorkBasedProgram {
    @property.resource()
    occupationalCategory: Schema.CategoryCode | undefined;
    @property.literal({ path: schema.occupationalCategory })
    occupationalCategoryLiteral: string | undefined;
    @property.resource()
    trainingSalary: Schema.MonetaryAmountDistribution | undefined;
  }
  return WorkBasedProgramClass
}

class WorkBasedProgramImpl extends WorkBasedProgramMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WorkBasedProgram>) {
    super(arg, init)
    this.types.add(schema.WorkBasedProgram)
  }

  static readonly __mixins: Mixin[] = [WorkBasedProgramMixin, EducationalOccupationalProgramMixin];
}
WorkBasedProgramMixin.appliesTo = schema.WorkBasedProgram
WorkBasedProgramMixin.Class = WorkBasedProgramImpl
