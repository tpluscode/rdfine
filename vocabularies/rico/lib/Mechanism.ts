import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentMixin } from './Agent.js';

export interface Mechanism<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Agent<D>, RdfResource<D> {
  technicalCharacteristics: RDF.Literal | undefined;
}

export function MechanismMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Mechanism> & RdfResourceCore> & Base {
  @namespace(rico)
  class MechanismClass extends AgentMixin(Resource) implements Partial<Mechanism> {
    @property()
    technicalCharacteristics: RDF.Literal | undefined;
  }
  return MechanismClass
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
