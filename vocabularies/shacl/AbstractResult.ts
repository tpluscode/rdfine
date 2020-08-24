import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

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
  class AbstractResultClass extends Rdfs.ResourceMixin(Resource) implements AbstractResult {
    @property.resource({ as: [AbstractResultMixin] })
    detail!: Sh.AbstractResult;
    @property()
    focusNode!: RDF.Term;
    @property()
    resultMessage!: RDF.Term;
    @property.resource({ as: [Rdfs.ResourceMixin] })
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

  static readonly __mixins: Mixin[] = [AbstractResultMixin, Rdfs.ResourceMixin];
}
AbstractResultMixin.appliesTo = sh.AbstractResult
AbstractResultMixin.Class = AbstractResultImpl
