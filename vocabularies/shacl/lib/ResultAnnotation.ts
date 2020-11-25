import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface ResultAnnotation<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  annotationProperty: Rdf.Property<SiblingNode<ID>> | undefined;
  annotationValue: RDF.Term | undefined;
  annotationVarName: string | undefined;
}

export function ResultAnnotationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ResultAnnotationClass extends RdfsResourceMixin(Resource) implements ResultAnnotation {
    @property.resource({ as: [RdfPropertyMixin] })
    annotationProperty: Rdf.Property | undefined;
    @property()
    annotationValue: RDF.Term | undefined;
    @property.literal()
    annotationVarName: string | undefined;
  }
  return ResultAnnotationClass
}

class ResultAnnotationImpl extends ResultAnnotationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ResultAnnotation>) {
    super(arg, init)
    this.types.add(sh.ResultAnnotation)
  }

  static readonly __mixins: Mixin[] = [ResultAnnotationMixin, RdfsResourceMixin];
}
ResultAnnotationMixin.appliesTo = sh.ResultAnnotation
ResultAnnotationMixin.Class = ResultAnnotationImpl
