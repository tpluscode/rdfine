import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialServiceMixin } from './FinancialService.js';

export interface AutomatedTeller<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, RdfResource<D> {
}

export function AutomatedTellerMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AutomatedTeller> & RdfResourceCore> & Base {
  @namespace(schema)
  class AutomatedTellerClass extends FinancialServiceMixin(Resource) implements Partial<AutomatedTeller> {
  }
  return AutomatedTellerClass
}

class AutomatedTellerImpl extends AutomatedTellerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutomatedTeller>) {
    super(arg, init)
    this.types.add(schema.AutomatedTeller)
  }

  static readonly __mixins: Mixin[] = [AutomatedTellerMixin, FinancialServiceMixin];
}
AutomatedTellerMixin.appliesTo = schema.AutomatedTeller
AutomatedTellerMixin.Class = AutomatedTellerImpl

export const fromPointer = createFactory<AutomatedTeller>([FinancialServiceMixin, AutomatedTellerMixin], { types: [schema.AutomatedTeller] });
