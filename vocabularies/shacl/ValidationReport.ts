import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface ValidationReport extends Rdfs.Resource, RdfResource {
  conforms: boolean;
  result: Sh.ValidationResult;
  shapesGraphWellFormed: boolean;
}

export function ValidationReportMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ValidationReportClass extends RdfsResourceMixin(Resource) implements ValidationReport {
    @property.literal({ type: Boolean })
    conforms!: boolean;
    @property.resource({ implicitTypes: [sh.ValidationResult] })
    result!: Sh.ValidationResult;
    @property.literal({ type: Boolean })
    shapesGraphWellFormed!: boolean;
  }
  return ValidationReportClass
}

class ValidationReportImpl extends ValidationReportMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ValidationReport>) {
    super(arg, init)
    this.types.add(sh.ValidationReport)
  }
}
ValidationReportMixin.shouldApply = (r: RdfResource) => r.types.has(sh.ValidationReport)
ValidationReportMixin.Class = ValidationReportImpl
