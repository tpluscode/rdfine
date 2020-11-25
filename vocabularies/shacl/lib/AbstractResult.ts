import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface AbstractResult<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  detail: Sh.AbstractResult<SiblingNode<ID>> | undefined;
  focusNode: RDF.Term | undefined;
  resultMessage: string | undefined;
  resultPath: Rdfs.Resource<SiblingNode<ID>> | undefined;
  resultSeverity: Sh.Severity<SiblingNode<ID>> | undefined;
  sourceConstraint: RDF.Term | undefined;
  sourceConstraintComponent: Sh.ConstraintComponent<SiblingNode<ID>> | undefined;
  sourceShape: Sh.Shape<SiblingNode<ID>> | undefined;
  value: RDF.Term | undefined;
}

export function AbstractResultMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class AbstractResultClass extends RdfsResourceMixin(Resource) implements AbstractResult {
    @property.resource({ as: [AbstractResultMixin] })
    detail: Sh.AbstractResult | undefined;
    @property()
    focusNode: RDF.Term | undefined;
    @property.literal()
    resultMessage: string | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    resultPath: Rdfs.Resource | undefined;
    @property.resource({ implicitTypes: [sh.Severity] })
    resultSeverity: Sh.Severity | undefined;
    @property()
    sourceConstraint: RDF.Term | undefined;
    @property.resource({ implicitTypes: [sh.ConstraintComponent] })
    sourceConstraintComponent: Sh.ConstraintComponent | undefined;
    @property.resource({ implicitTypes: [sh.Shape] })
    sourceShape: Sh.Shape | undefined;
    @property()
    value: RDF.Term | undefined;
  }
  return AbstractResultClass
}

class AbstractResultImpl extends AbstractResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AbstractResult>) {
    super(arg, init)
    this.types.add(sh.AbstractResult)
  }

  static readonly __mixins: Mixin[] = [AbstractResultMixin, RdfsResourceMixin];
}
AbstractResultMixin.appliesTo = sh.AbstractResult
AbstractResultMixin.Class = AbstractResultImpl
