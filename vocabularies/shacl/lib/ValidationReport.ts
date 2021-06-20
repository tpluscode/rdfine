import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface ValidationReport<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  conforms: boolean | undefined;
  result: Array<Sh.ValidationResult<D>>;
  shapesGraphWellFormed: boolean | undefined;
}

export function ValidationReportMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ValidationReport> & RdfResourceCore> & Base {
  @namespace(sh)
  class ValidationReportClass extends RdfsResourceMixin(Resource) implements Partial<ValidationReport> {
    @property.literal({ type: Boolean })
    conforms: boolean | undefined;
    @property.resource({ values: 'array', implicitTypes: [sh.ValidationResult] })
    result!: Array<Sh.ValidationResult>;
    @property.literal({ type: Boolean })
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
