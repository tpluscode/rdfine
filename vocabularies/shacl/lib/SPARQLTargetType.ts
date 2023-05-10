import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable.js';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable.js';
import { TargetTypeMixin } from './TargetType.js';

export interface SPARQLTargetType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLAskExecutable<D>, Sh.SPARQLSelectExecutable<D>, Sh.TargetType<D>, rdfine.RdfResource<D> {
}

export function SPARQLTargetTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SPARQLTargetType> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class SPARQLTargetTypeClass extends TargetTypeMixin(SPARQLSelectExecutableMixin(SPARQLAskExecutableMixin(Resource))) implements Partial<SPARQLTargetType> {
  }
  return SPARQLTargetTypeClass
}

class SPARQLTargetTypeImpl extends SPARQLTargetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLTargetType>) {
    super(arg, init)
    this.types.add(sh.SPARQLTargetType)
  }

  static readonly __mixins: Mixin[] = [SPARQLTargetTypeMixin, SPARQLAskExecutableMixin, SPARQLSelectExecutableMixin, TargetTypeMixin];
}
SPARQLTargetTypeMixin.appliesTo = sh.SPARQLTargetType
SPARQLTargetTypeMixin.Class = SPARQLTargetTypeImpl

export const fromPointer = createFactory<SPARQLTargetType>([TargetTypeMixin, SPARQLSelectExecutableMixin, SPARQLAskExecutableMixin, SPARQLTargetTypeMixin], { types: [sh.SPARQLTargetType] });
