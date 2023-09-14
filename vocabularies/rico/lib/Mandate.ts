import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RuleMixin } from './Rule.js';

export interface Mandate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Rule<D>, rdfine.RdfResource<D> {
  authorizes: Rico.Agent<D> | undefined;
  mandateIsSourceOfMandateRelation: Rico.MandateRelation<D> | undefined;
}

export function MandateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Mandate & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class MandateClass extends RuleMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    authorizes: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.MandateRelation] })
    mandateIsSourceOfMandateRelation: Rico.MandateRelation | undefined;
  }
  return MandateClass as any
}
MandateMixin.appliesTo = rico.Mandate
MandateMixin.createFactory = (env: RdfineEnvironment) => createFactory<Mandate>([RuleMixin, MandateMixin], { types: [rico.Mandate] }, env)
