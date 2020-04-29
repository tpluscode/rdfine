import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface AbstractResult extends Rdfs.Resource, RdfResource {
  detail: Sh.AbstractResult;
  focusNode: RDF.Term;
  resultMessage: RDF.Term;
  resultPath: Rdfs.Resource;
  resultSeverity: Sh.Severity;
  sourceConstraint: RDF.Term;
  sourceConstraintComponent: Sh.ConstraintComponent;
  sourceShape: Sh.Shape;
  value: RDF.Term;
}

export function AbstractResultMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class AbstractResultClass extends RdfsResourceMixin(Resource) implements AbstractResult {
    @property.resource({ as: [AbstractResultMixin] })
    detail!: Sh.AbstractResult;
    @property()
    focusNode!: RDF.Term;
    @property()
    resultMessage!: RDF.Term;
    @property.resource({ as: [RdfsResourceMixin] })
    resultPath!: Rdfs.Resource;
    @property.resource({ implicitTypes: [sh.Severity] })
    resultSeverity!: Sh.Severity;
    @property()
    sourceConstraint!: RDF.Term;
    @property.resource({ implicitTypes: [sh.ConstraintComponent] })
    sourceConstraintComponent!: Sh.ConstraintComponent;
    @property.resource({ implicitTypes: [sh.Shape] })
    sourceShape!: Sh.Shape;
    @property()
    value!: RDF.Term;
  }
  return AbstractResultClass
}

class AbstractResultImpl extends AbstractResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AbstractResult>) {
    super(arg, init)
    this.types.add(sh.AbstractResult)
  }
}
AbstractResultMixin.shouldApply = (r: RdfResource) => r.types.has(sh.AbstractResult)
AbstractResultMixin.Class = AbstractResultImpl
