import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLExecutableMixin } from './SPARQLExecutable.js';

export interface SPARQLSelectExecutable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLExecutable<D>, RdfResource<D> {
  select: string | undefined;
}

export function SPARQLSelectExecutableMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLSelectExecutable> & RdfResourceCore> & Base {
  @namespace(sh)
  class SPARQLSelectExecutableClass extends SPARQLExecutableMixin(Resource) implements Partial<SPARQLSelectExecutable> {
    @property.literal()
    select: string | undefined;
  }
  return SPARQLSelectExecutableClass
}

class SPARQLSelectExecutableImpl extends SPARQLSelectExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLSelectExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLSelectExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLSelectExecutableMixin, SPARQLExecutableMixin];
}
SPARQLSelectExecutableMixin.appliesTo = sh.SPARQLSelectExecutable
SPARQLSelectExecutableMixin.Class = SPARQLSelectExecutableImpl

export const fromPointer = createFactory<SPARQLSelectExecutable>([SPARQLExecutableMixin, SPARQLSelectExecutableMixin], { types: [sh.SPARQLSelectExecutable] });
