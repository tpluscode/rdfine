import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Rdf from '@rdfine/rdf';

export interface ResultAnnotation extends Rdfs.Resource, RdfResource {
  annotationProperty: Rdf.Property | undefined;
  annotationValue: RDF.Term | undefined;
  annotationVarName: string | undefined;
}

export function ResultAnnotationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ResultAnnotationClass extends Rdfs.ResourceMixin(Resource) implements ResultAnnotation {
    @property.resource({ as: [Rdf.PropertyMixin] })
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

  static readonly __mixins: Mixin[] = [ResultAnnotationMixin, Rdfs.ResourceMixin];
}
ResultAnnotationMixin.appliesTo = sh.ResultAnnotation
ResultAnnotationMixin.Class = ResultAnnotationImpl
