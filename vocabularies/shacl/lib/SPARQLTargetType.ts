import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable';
import { TargetTypeMixin } from './TargetType';

export interface SPARQLTargetType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLAskExecutable<D>, Sh.SPARQLSelectExecutable<D>, Sh.TargetType<D>, RdfResource<D> {
}

export function SPARQLTargetTypeMixin<Base extends Constructor>(Resource: Base): Constructor<SPARQLTargetType> & Base {
  @namespace(sh)
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
