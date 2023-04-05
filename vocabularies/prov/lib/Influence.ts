import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';

export interface Influence<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  hadActivity: Prov.Activity<D> | undefined;
  hadRole: Prov.Role<D> | undefined;
  influencer: RDF.NamedNode | undefined;
}

export function InfluenceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Influence> & RdfResourceCore> & Base {
  @namespace(prov)
  class InfluenceClass extends Resource implements Partial<Influence> {
    @property.resource({ implicitTypes: [prov.Activity] })
    hadActivity: Prov.Activity | undefined;
    @property.resource({ implicitTypes: [prov.Role] })
    hadRole: Prov.Role | undefined;
    @property()
    influencer: RDF.NamedNode | undefined;
  }
  return InfluenceClass
}

class InfluenceImpl extends InfluenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Influence>) {
    super(arg, init)
    this.types.add(prov.Influence)
  }

  static readonly __mixins: Mixin[] = [InfluenceMixin];
}
InfluenceMixin.appliesTo = prov.Influence
InfluenceMixin.Class = InfluenceImpl

export const fromPointer = createFactory<Influence>([InfluenceMixin], { types: [prov.Influence] });
