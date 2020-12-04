import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { SPARQLExecutableMixin } from './SPARQLExecutable';

export interface SPARQLAskExecutable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLExecutable<D>, RdfResource<D> {
  ask: string | undefined;
}

export function SPARQLAskExecutableMixin<Base extends Constructor>(Resource: Base): Constructor<SPARQLAskExecutable> & Base {
  @namespace(sh)
  class SPARQLAskExecutableClass extends SPARQLExecutableMixin(Resource) implements SPARQLAskExecutable {
    @property.literal()
    ask: string | undefined;
  }
  return SPARQLAskExecutableClass
}

class SPARQLAskExecutableImpl extends SPARQLAskExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLAskExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLAskExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLAskExecutableMixin, SPARQLExecutableMixin];
}
SPARQLAskExecutableMixin.appliesTo = sh.SPARQLAskExecutable
SPARQLAskExecutableMixin.Class = SPARQLAskExecutableImpl
