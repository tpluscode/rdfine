import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { MultiFunctionMixin } from './MultiFunction.js';
import { SPARQLSelectExecutableMixin as ShaclSPARQLSelectExecutableMixin } from '@rdfine/shacl/lib/SPARQLSelectExecutable.js';

export interface SPARQLMultiFunction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.MultiFunction<D>, Shacl.SPARQLSelectExecutable<D>, RdfResource<D> {
}

export function SPARQLMultiFunctionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLMultiFunction> & RdfResourceCore> & Base {
  @namespace(dash)
  class SPARQLMultiFunctionClass extends ShaclSPARQLSelectExecutableMixin(MultiFunctionMixin(Resource)) implements Partial<SPARQLMultiFunction> {
  }
  return SPARQLMultiFunctionClass
}

class SPARQLMultiFunctionImpl extends SPARQLMultiFunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLMultiFunction>) {
    super(arg, init)
    this.types.add(dash.SPARQLMultiFunction)
  }

  static readonly __mixins: Mixin[] = [SPARQLMultiFunctionMixin, MultiFunctionMixin, ShaclSPARQLSelectExecutableMixin];
}
SPARQLMultiFunctionMixin.appliesTo = dash.SPARQLMultiFunction
SPARQLMultiFunctionMixin.Class = SPARQLMultiFunctionImpl

export const fromPointer = createFactory<SPARQLMultiFunction>([ShaclSPARQLSelectExecutableMixin, MultiFunctionMixin, SPARQLMultiFunctionMixin], { types: [dash.SPARQLMultiFunction] });
