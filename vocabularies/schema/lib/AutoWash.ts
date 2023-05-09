import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface AutoWash<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

export function AutoWashMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AutoWash> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AutoWashClass extends AutomotiveBusinessMixin(Resource) implements Partial<AutoWash> {
  }
  return AutoWashClass
}

class AutoWashImpl extends AutoWashMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoWash>) {
    super(arg, init)
    this.types.add(schema.AutoWash)
  }

  static readonly __mixins: Mixin[] = [AutoWashMixin, AutomotiveBusinessMixin];
}
AutoWashMixin.appliesTo = schema.AutoWash
AutoWashMixin.Class = AutoWashImpl

export const fromPointer = createFactory<AutoWash>([AutomotiveBusinessMixin, AutoWashMixin], { types: [schema.AutoWash] });
