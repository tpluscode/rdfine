import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOccupationalProgramMixin } from './EducationalOccupationalProgram.js';

export interface WorkBasedProgram<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOccupationalProgram<D>, rdfine.RdfResource<D> {
  occupationalCategory: Schema.CategoryCode<D> | undefined;
  occupationalCategoryLiteral: string | undefined;
  trainingSalary: Schema.MonetaryAmountDistribution<D> | undefined;
}

export function WorkBasedProgramMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WorkBasedProgram & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WorkBasedProgramClass extends EducationalOccupationalProgramMixin(Resource) {
    @rdfine.property.resource()
    occupationalCategory: Schema.CategoryCode | undefined;
    @rdfine.property.literal({ path: schema.occupationalCategory })
    occupationalCategoryLiteral: string | undefined;
    @rdfine.property.resource()
    trainingSalary: Schema.MonetaryAmountDistribution | undefined;
  }
  return WorkBasedProgramClass as any
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

export const fromPointer = createFactory<WorkBasedProgram>([EducationalOccupationalProgramMixin, WorkBasedProgramMixin], { types: [schema.WorkBasedProgram] });
