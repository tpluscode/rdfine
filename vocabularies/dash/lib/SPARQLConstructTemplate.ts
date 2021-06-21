import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { ParameterizableMixin as ShaclParameterizableMixin } from '@rdfine/shacl/lib/Parameterizable';
import { SPARQLConstructExecutableMixin as ShaclSPARQLConstructExecutableMixin } from '@rdfine/shacl/lib/SPARQLConstructExecutable';

export interface SPARQLConstructTemplate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.Parameterizable<D>, Shacl.SPARQLConstructExecutable<D>, RdfResource<D> {
}

export function SPARQLConstructTemplateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLConstructTemplate> & RdfResourceCore> & Base {
  @namespace(dash)
  class SPARQLConstructTemplateClass extends ShaclSPARQLConstructExecutableMixin(ShaclParameterizableMixin(Resource)) implements Partial<SPARQLConstructTemplate> {
  }
  return SPARQLConstructTemplateClass
}

class SPARQLConstructTemplateImpl extends SPARQLConstructTemplateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLConstructTemplate>) {
    super(arg, init)
    this.types.add(dash.SPARQLConstructTemplate)
  }

  static readonly __mixins: Mixin[] = [SPARQLConstructTemplateMixin, ShaclParameterizableMixin, ShaclSPARQLConstructExecutableMixin];
}
SPARQLConstructTemplateMixin.appliesTo = dash.SPARQLConstructTemplate
SPARQLConstructTemplateMixin.Class = SPARQLConstructTemplateImpl

export const fromPointer = createFactory<SPARQLConstructTemplate>([ShaclSPARQLConstructExecutableMixin, ShaclParameterizableMixin, SPARQLConstructTemplateMixin], { types: [dash.SPARQLConstructTemplate] });
