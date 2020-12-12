import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { FunctionMixin } from './Function';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';

export interface SPARQLFunction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Function<D>, Sh.SPARQLAskExecutable<D>, Sh.SPARQLSelectExecutable<D>, RdfResource<D> {
}

export function SPARQLFunctionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLFunction> & RdfResourceCore> & Base {
  @namespace(sh)
  class SPARQLFunctionClass extends SPARQLSelectExecutableMixin(SPARQLAskExecutableMixin(FunctionMixin(Resource))) implements Partial<SPARQLFunction> {
  }
  return SPARQLFunctionClass
}

class SPARQLFunctionImpl extends SPARQLFunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLFunction>) {
    super(arg, init)
    this.types.add(sh.SPARQLFunction)
  }

  static readonly __mixins: Mixin[] = [SPARQLFunctionMixin, FunctionMixin, SPARQLAskExecutableMixin, SPARQLSelectExecutableMixin];
}
SPARQLFunctionMixin.appliesTo = sh.SPARQLFunction
SPARQLFunctionMixin.Class = SPARQLFunctionImpl
