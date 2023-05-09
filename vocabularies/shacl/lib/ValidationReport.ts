import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface ValidationReport<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  conforms: boolean | undefined;
  result: Array<Sh.ValidationResult<D>>;
  shapesGraphWellFormed: boolean | undefined;
}

export function ValidationReportMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ValidationReport> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class ValidationReportClass extends RdfsResourceMixin(Resource) implements Partial<ValidationReport> {
    @rdfine.property.literal({ type: Boolean })
    conforms: boolean | undefined;
    @rdfine.property.resource({ values: 'array', implicitTypes: [sh.ValidationResult] })
    result!: Array<Sh.ValidationResult>;
    @rdfine.property.literal({ type: Boolean })
    shapesGraphWellFormed: boolean | undefined;
  }
  return ValidationReportClass
}

class ValidationReportImpl extends ValidationReportMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ValidationReport>) {
    super(arg, init)
    this.types.add(sh.ValidationReport)
  }

  static readonly __mixins: Mixin[] = [ValidationReportMixin, RdfsResourceMixin];
}
ValidationReportMixin.appliesTo = sh.ValidationReport
ValidationReportMixin.Class = ValidationReportImpl

export const fromPointer = createFactory<ValidationReport>([RdfsResourceMixin, ValidationReportMixin], { types: [sh.ValidationReport] });
