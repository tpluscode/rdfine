import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';

export interface ResultAnnotation extends Rdfs.Resource, RdfResource {
  annotationProperty: Rdf.Property;
  annotationValue: RDF.Term;
  annotationVarName: string;
}

export function ResultAnnotationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ResultAnnotationClass extends RdfsResourceMixin(Resource) implements ResultAnnotation {
    @property.resource({ as: [RdfPropertyMixin] })
    annotationProperty!: Rdf.Property;
    @property()
    annotationValue!: RDF.Term;
    @property.literal()
    annotationVarName!: string;
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
