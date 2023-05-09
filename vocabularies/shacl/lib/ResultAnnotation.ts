import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface ResultAnnotation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  annotationProperty: Rdf.Property<D> | undefined;
  annotationValue: RDF.Term | undefined;
  annotationVarName: string | undefined;
}

export function ResultAnnotationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ResultAnnotation> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class ResultAnnotationClass extends RdfsResourceMixin(Resource) implements Partial<ResultAnnotation> {
    @rdfine.property.resource({ as: [RdfPropertyMixin] })
    annotationProperty: Rdf.Property | undefined;
    @rdfine.property()
    annotationValue: RDF.Term | undefined;
    @rdfine.property.literal()
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

export const fromPointer = createFactory<ResultAnnotation>([RdfsResourceMixin, ResultAnnotationMixin], { types: [sh.ResultAnnotation] });
