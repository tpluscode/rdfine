import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Mechanism<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Agent<D>, rdfine.RdfResource<D> {
  technicalCharacteristics: RDF.Literal | undefined;
}

export function MechanismMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Mechanism & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class MechanismClass extends AgentMixin(Resource) {
    @rdfine.property()
    technicalCharacteristics: RDF.Literal | undefined;
  }
  return MechanismClass as any
}

class MechanismImpl extends MechanismMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Mechanism>) {
    super(arg, init)
    this.types.add(rico.Mechanism)
  }

  static readonly __mixins: Mixin[] = [MechanismMixin, AgentMixin];
}
MechanismMixin.appliesTo = rico.Mechanism
MechanismMixin.Class = MechanismImpl

export const fromPointer = createFactory<Mechanism>([AgentMixin, MechanismMixin], { types: [rico.Mechanism] });
