import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { EntityInfluenceMixin } from './EntityInfluence';

export interface Derivation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.EntityInfluence<D>, RdfResource<D> {
  hadActivity: Prov.Activity<D> | undefined;
  hadGeneration: Prov.Generation<D> | undefined;
  hadUsage: Prov.Usage<D> | undefined;
}

export function DerivationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Derivation> & RdfResourceCore> & Base {
  @namespace(prov)
  class DerivationClass extends EntityInfluenceMixin(Resource) implements Partial<Derivation> {
    @property.resource({ implicitTypes: [prov.Activity] })
    hadActivity: Prov.Activity | undefined;
    @property.resource({ implicitTypes: [prov.Generation] })
    hadGeneration: Prov.Generation | undefined;
    @property.resource({ implicitTypes: [prov.Usage] })
    hadUsage: Prov.Usage | undefined;
  }
  return DerivationClass
}

class DerivationImpl extends DerivationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Derivation>) {
    super(arg, init)
    this.types.add(prov.Derivation)
  }

  static readonly __mixins: Mixin[] = [DerivationMixin, EntityInfluenceMixin];
}
DerivationMixin.appliesTo = prov.Derivation
DerivationMixin.Class = DerivationImpl

export const fromPointer = createFactory<Derivation>([EntityInfluenceMixin, DerivationMixin], { types: [prov.Derivation] });
