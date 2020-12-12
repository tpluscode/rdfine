import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { ParameterizableMixin as ShaclParameterizableMixin } from '@rdfine/shacl/lib/Parameterizable';
import { SPARQLSelectExecutableMixin as ShaclSPARQLSelectExecutableMixin } from '@rdfine/shacl/lib/SPARQLSelectExecutable';

export interface SPARQLSelectTemplate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.Parameterizable<D>, Shacl.SPARQLSelectExecutable<D>, RdfResource<D> {
}

export function SPARQLSelectTemplateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLSelectTemplate> & RdfResourceCore> & Base {
  @namespace(dash)
  class SPARQLSelectTemplateClass extends ShaclSPARQLSelectExecutableMixin(ShaclParameterizableMixin(Resource)) implements Partial<SPARQLSelectTemplate> {
  }
  return SPARQLSelectTemplateClass
}

class SPARQLSelectTemplateImpl extends SPARQLSelectTemplateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLSelectTemplate>) {
    super(arg, init)
    this.types.add(dash.SPARQLSelectTemplate)
  }

  static readonly __mixins: Mixin[] = [SPARQLSelectTemplateMixin, ShaclParameterizableMixin, ShaclSPARQLSelectExecutableMixin];
}
SPARQLSelectTemplateMixin.appliesTo = dash.SPARQLSelectTemplate
SPARQLSelectTemplateMixin.Class = SPARQLSelectTemplateImpl

export const fromPointer = createFactory<SPARQLSelectTemplate>([ShaclSPARQLSelectExecutableMixin, ShaclParameterizableMixin, SPARQLSelectTemplateMixin], { types: [dash.SPARQLSelectTemplate] });
